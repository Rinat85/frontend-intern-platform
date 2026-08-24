import { supabase } from './supabaseClient';
import { Profile, UserRole } from '../types/database';

export const DEFAULT_DEMO_PROFILES: Profile[] = [
  {
    id: 'a0000000-0000-0000-0000-000000000001',
    email: 'admin@rocketgate.com',
    full_name: 'Главный Ментор (Admin)',
    role: 'admin',
    avatar_url: '👑',
    github_username: 'rocket-lead',
    mentor_ids: [],
    created_at: new Date(Date.now() - 60 * 24 * 3600 * 1000).toISOString(),
    updated_at: new Date().toISOString()
  }
];

const MENTORS_MAP_STORAGE_KEY = 'frontend_intern_mentors_map';

export const profileService = {
  // Local storage cache for intern-to-mentors mapping
  getStoredMentorMap(): Record<string, string[]> {
    try {
      return JSON.parse(localStorage.getItem(MENTORS_MAP_STORAGE_KEY) || '{}');
    } catch {
      return {};
    }
  },

  setStoredMentorMap(map: Record<string, string[]>): void {
    try {
      localStorage.setItem(MENTORS_MAP_STORAGE_KEY, JSON.stringify(map));
    } catch {}
  },

  async getProfiles(): Promise<Profile[]> {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.warn('Supabase getProfiles fallback:', error.message);
        return DEFAULT_DEMO_PROFILES;
      }

      if (!data || data.length === 0) {
        return DEFAULT_DEMO_PROFILES;
      }

      const mentorMap = this.getStoredMentorMap();
      const profilesList: Profile[] = data.map((p: any) => {
        const storedMentors = mentorMap[p.id] || [];
        const mentorIds = Array.isArray(p.mentor_ids) ? p.mentor_ids : (p.mentor_id ? [p.mentor_id] : storedMentors);
        return {
          ...p,
          mentor_ids: mentorIds
        };
      });

      // Attach resolved mentor objects
      profilesList.forEach(profile => {
        if (profile.mentor_ids && profile.mentor_ids.length > 0) {
          profile.mentors = profilesList.filter(m => profile.mentor_ids?.includes(m.id));
        } else {
          profile.mentors = [];
        }
      });

      return profilesList;
    } catch (err) {
      console.warn('getProfiles error, using default admin:', err);
      return DEFAULT_DEMO_PROFILES;
    }
  },

  async getProfileById(id: string): Promise<Profile | null> {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', id)
        .single();

      if (error || !data) {
        return DEFAULT_DEMO_PROFILES.find(p => p.id === id) || null;
      }

      const mentorMap = this.getStoredMentorMap();
      const mentorIds = Array.isArray(data.mentor_ids) ? data.mentor_ids : (data.mentor_id ? [data.mentor_id] : (mentorMap[id] || []));
      return {
        ...data,
        mentor_ids: mentorIds
      } as Profile;
    } catch {
      return DEFAULT_DEMO_PROFILES.find(p => p.id === id) || null;
    }
  },

  async createProfile(payload: {
    id?: string;
    email: string;
    full_name: string;
    role?: UserRole;
    avatar_url?: string;
    mentor_ids?: string[];
    github_username?: string | null;
  }): Promise<Profile> {
    const defaultAvatar = payload.role === 'admin' ? '👑' : payload.role === 'mentor' ? '👨‍🏫' : '👨‍💻';
    const profileId = payload.id || ('u_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5));
    
    const newProfile: Profile = {
      id: profileId,
      email: payload.email.trim().toLowerCase(),
      full_name: payload.full_name.trim(),
      role: payload.role || 'intern',
      avatar_url: payload.avatar_url || defaultAvatar,
      github_username: payload.github_username || null,
      mentor_ids: payload.mentor_ids || [],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    // Save to local mentor map
    if (payload.mentor_ids && payload.mentor_ids.length > 0) {
      const map = this.getStoredMentorMap();
      map[profileId] = payload.mentor_ids;
      this.setStoredMentorMap(map);
    }

    try {
      const { data, error } = await supabase
        .from('profiles')
        .upsert({
          id: newProfile.id,
          email: newProfile.email,
          full_name: newProfile.full_name,
          role: newProfile.role,
          avatar_url: newProfile.avatar_url,
          github_username: newProfile.github_username,
          updated_at: new Date().toISOString()
        })
        .select()
        .single();

      if (!error && data) {
        return {
          ...data,
          mentor_ids: payload.mentor_ids || []
        } as Profile;
      }
    } catch (e) {
      console.warn('createProfile remote exception:', e);
    }

    return newProfile;
  },

  async updateProfile(id: string, updates: Partial<Profile>): Promise<Profile | null> {
    try {
      if (updates.mentor_ids !== undefined) {
        const map = this.getStoredMentorMap();
        map[id] = updates.mentor_ids;
        this.setStoredMentorMap(map);
      }

      const { mentor_ids, mentors, ...dbUpdates } = updates;

      const { data, error } = await supabase
        .from('profiles')
        .update({ ...dbUpdates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (!error && data) {
        return {
          ...data,
          mentor_ids: updates.mentor_ids || this.getStoredMentorMap()[id] || []
        } as Profile;
      }
    } catch (e) {
      console.warn('updateProfile error:', e);
    }
    return null;
  },

  async assignMentors(internId: string, mentorIds: string[]): Promise<boolean> {
    try {
      const map = this.getStoredMentorMap();
      map[internId] = mentorIds;
      this.setStoredMentorMap(map);

      // Attempt remote update if column exists
      await supabase
        .from('profiles')
        .update({ updated_at: new Date().toISOString() })
        .eq('id', internId);

      return true;
    } catch (e) {
      console.warn('assignMentors error:', e);
      return false;
    }
  },

  async deleteProfile(id: string): Promise<boolean> {
    try {
      const map = this.getStoredMentorMap();
      delete map[id];
      this.setStoredMentorMap(map);

      await supabase.from('user_progress').delete().eq('user_id', id);
      await supabase.from('task_submissions').delete().eq('user_id', id);
      await supabase.from('notifications').delete().eq('user_id', id);
      await supabase.from('sandbox_snippets').delete().eq('user_id', id);
      const { error } = await supabase.from('profiles').delete().eq('id', id);
      return !error;
    } catch (e) {
      console.warn('deleteProfile error:', e);
      return false;
    }
  }
};
