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
    mentor_id: null,
    created_at: new Date(Date.now() - 60 * 24 * 3600 * 1000).toISOString(),
    updated_at: new Date().toISOString()
  }
];

export const profileService = {
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
        // Seed default admin profile if table is empty
        for (const p of DEFAULT_DEMO_PROFILES) {
          await supabase.from('profiles').insert(p).select();
        }
        return DEFAULT_DEMO_PROFILES;
      }

      return data as Profile[];
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
      return data as Profile;
    } catch {
      return DEFAULT_DEMO_PROFILES.find(p => p.id === id) || null;
    }
  },

  async createProfile(payload: {
    email: string;
    full_name: string;
    role?: UserRole;
    avatar_url?: string;
    mentor_id?: string | null;
    github_username?: string | null;
  }): Promise<Profile> {
    const defaultAvatar = payload.role === 'admin' ? '👑' : payload.role === 'mentor' ? '👨‍🏫' : '👨‍💻';
    const newProfile: Partial<Profile> = {
      email: payload.email.trim().toLowerCase(),
      full_name: payload.full_name.trim(),
      role: payload.role || 'intern',
      avatar_url: payload.avatar_url || defaultAvatar,
      github_username: payload.github_username || null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    try {
      const { data, error } = await supabase
        .from('profiles')
        .insert(newProfile)
        .select()
        .single();

      if (!error && data) {
        return data as Profile;
      }
      if (error) {
        console.warn('createProfile error:', error.message);
      }
    } catch (e) {
      console.warn('createProfile remote exception:', e);
    }

    return {
      id: 'u_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      ...newProfile
    } as Profile;
  },

  async updateProfile(id: string, updates: Partial<Profile>): Promise<Profile | null> {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (!error && data) {
        return data as Profile;
      }
    } catch (e) {
      console.warn('updateProfile error:', e);
    }
    return null;
  },

  async deleteProfile(id: string): Promise<boolean> {
    try {
      // Delete user's progress and submissions first
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
