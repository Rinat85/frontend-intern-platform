import { supabase } from './supabaseClient';
import { Profile, UserRole } from '../types/database';

export const DEFAULT_DEMO_PROFILES: Profile[] = [
  {
    id: 'a0000000-0000-0000-0000-000000000001',
    email: 'admin@rocketgate.com',
    full_name: 'Главный Ментор',
    role: 'admin',
    avatar_url: '👑',
    github_username: 'rocket-lead',
    created_at: new Date(Date.now() - 60 * 24 * 3600 * 1000).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'a0000000-0000-0000-0000-000000000002',
    email: 'maria@rocketgate.com',
    full_name: 'Мария Иванова',
    role: 'intern',
    avatar_url: '👩‍💻',
    github_username: 'maria-frontend',
    created_at: new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'a0000000-0000-0000-0000-000000000003',
    email: 'alex@rocketgate.com',
    full_name: 'Алексей Смирнов',
    role: 'intern',
    avatar_url: '🚀',
    github_username: 'alex-smirnov-dev',
    created_at: new Date(Date.now() - 14 * 24 * 3600 * 1000).toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'a0000000-0000-0000-0000-000000000004',
    email: 'dmitry@rocketgate.com',
    full_name: 'Дмитрий Ковалев',
    role: 'intern',
    avatar_url: '⚡️',
    github_username: 'dmitry-k',
    created_at: new Date(Date.now() - 3 * 24 * 3600 * 1000).toISOString(),
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
        // Seed default profiles if table is empty
        for (const p of DEFAULT_DEMO_PROFILES) {
          await supabase.from('profiles').insert(p).select();
        }
        return DEFAULT_DEMO_PROFILES;
      }

      return data as Profile[];
    } catch (err) {
      console.warn('getProfiles error, using default demo list:', err);
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

  async createProfile(profile: Partial<Profile> & { email: string; full_name: string }): Promise<Profile> {
    const newProfile: Profile = {
      id: profile.id || ('u_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5)),
      email: profile.email,
      full_name: profile.full_name,
      role: (profile.role as UserRole) || 'intern',
      avatar_url: profile.avatar_url || '👨‍💻',
      github_username: profile.github_username || null,
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
    } catch (e) {
      console.warn('createProfile remote error:', e);
    }
    return newProfile;
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
  }
};
