import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types/auth';
import { Profile } from '../types/database';
import { profileService, DEFAULT_DEMO_PROFILES } from '../services/profileService';
import { checkSupabaseConnection } from '../services/supabaseClient';

interface AuthContextType {
  user: User | null;
  users: User[];
  profiles: Profile[];
  isAuthenticated: boolean;
  isAdmin: boolean;
  supabaseStatus: { connected: boolean; message: string };
  login: (email: string, role?: UserRole) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, role?: UserRole, avatar?: string) => Promise<{ success: boolean; error?: string }>;
  quickLogin: (profileId: string) => Promise<void>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  refreshProfiles: () => Promise<void>;
}

const CURRENT_USER_ID_KEY = 'frontend_intern_active_user_id';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profiles, setProfiles] = useState<Profile[]>(DEFAULT_DEMO_PROFILES);
  const [user, setUser] = useState<User | null>(null);
  const [supabaseStatus, setSupabaseStatus] = useState<{ connected: boolean; message: string }>({
    connected: false,
    message: 'Проверка подключения к Supabase...'
  });

  useEffect(() => {
    checkSupabaseConnection().then(status => {
      setSupabaseStatus(status);
    });
  }, []);

  const refreshProfiles = async () => {
    const list = await profileService.getProfiles();
    setProfiles(list);
  };

  useEffect(() => {
    refreshProfiles();
  }, []);

  const users: User[] = profiles.map(p => ({
    id: p.id,
    email: p.email,
    name: p.full_name,
    role: p.role === 'admin' ? 'admin' : 'intern',
    registeredAt: p.created_at,
    lastActiveAt: p.updated_at || p.created_at,
    avatar: p.avatar_url || (p.role === 'admin' ? '👑' : '👨‍💻')
  }));

  useEffect(() => {
    const savedUserId = localStorage.getItem(CURRENT_USER_ID_KEY);
    const activeProfile = profiles.find(p => p.id === savedUserId) || profiles[2] || DEFAULT_DEMO_PROFILES[2];
    
    if (activeProfile) {
      setUser({
        id: activeProfile.id,
        email: activeProfile.email,
        name: activeProfile.full_name,
        role: activeProfile.role === 'admin' ? 'admin' : 'intern',
        registeredAt: activeProfile.created_at,
        lastActiveAt: new Date().toISOString(),
        avatar: activeProfile.avatar_url || '🚀'
      });
    }
  }, [profiles]);

  const quickLogin = async (profileId: string) => {
    const target = profiles.find(p => p.id === profileId) || DEFAULT_DEMO_PROFILES.find(p => p.id === profileId);
    if (target) {
      localStorage.setItem(CURRENT_USER_ID_KEY, target.id);
      setUser({
        id: target.id,
        email: target.email,
        name: target.full_name,
        role: target.role === 'admin' ? 'admin' : 'intern',
        registeredAt: target.created_at,
        lastActiveAt: new Date().toISOString(),
        avatar: target.avatar_url || (target.role === 'admin' ? '👑' : '👨‍💻')
      });
    }
  };

  const login = async (email: string, role: UserRole = 'intern'): Promise<{ success: boolean; error?: string }> => {
    const existing = profiles.find(p => p.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      await quickLogin(existing.id);
      return { success: true };
    }

    const namePart = email.split('@')[0];
    const created = await profileService.createProfile({
      email,
      full_name: namePart.charAt(0).toUpperCase() + namePart.slice(1),
      role
    });
    await refreshProfiles();
    await quickLogin(created.id);
    return { success: true };
  };

  const register = async (name: string, email: string, role: UserRole = 'intern', avatar?: string): Promise<{ success: boolean; error?: string }> => {
    const created = await profileService.createProfile({
      email,
      full_name: name,
      role,
      avatar_url: avatar || (role === 'admin' ? '👑' : '👨‍💻')
    });
    await refreshProfiles();
    await quickLogin(created.id);
    return { success: true };
  };

  const logout = () => {
    quickLogin(DEFAULT_DEMO_PROFILES[2].id);
  };

  const updateUser = (updates: Partial<User>) => {
    if (!user) return;
    const updated = { ...user, ...updates };
    setUser(updated);
    if (updates.name || updates.avatar) {
      profileService.updateProfile(user.id, {
        full_name: updates.name,
        avatar_url: updates.avatar
      });
    }
  };

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        profiles,
        isAuthenticated,
        isAdmin,
        supabaseStatus,
        login,
        register,
        quickLogin,
        logout,
        updateUser,
        refreshProfiles
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
