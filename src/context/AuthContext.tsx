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
  isMentor: boolean;
  canReview: boolean;
  supabaseStatus: { connected: boolean; message: string };
  login: (email: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string) => Promise<{ success: boolean; error?: string }>;
  createUser: (data: { name: string; email: string; role: UserRole; mentorId?: string | null }) => Promise<{ success: boolean; profile?: Profile; error?: string }>;
  updateUserRole: (userId: string, newRole: UserRole) => Promise<boolean>;
  assignMentor: (internId: string, mentorId: string | null) => Promise<boolean>;
  deleteUser: (userId: string) => Promise<boolean>;
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

  const users: User[] = profiles.map(p => {
    const mentorProfile = p.mentor_id ? profiles.find(m => m.id === p.mentor_id) : null;
    return {
      id: p.id,
      email: p.email,
      name: p.full_name,
      role: p.role,
      mentorId: p.mentor_id || null,
      mentorName: mentorProfile?.full_name || null,
      registeredAt: p.created_at,
      lastActiveAt: p.updated_at || p.created_at,
      avatar: p.avatar_url || (p.role === 'admin' ? '👑' : p.role === 'mentor' ? '👨‍🏫' : '👨‍💻')
    };
  });

  useEffect(() => {
    const savedUserId = localStorage.getItem(CURRENT_USER_ID_KEY);
    
    // Explicitly logged out
    if (savedUserId === 'guest') {
      setUser(null);
      return;
    }

    // Explicitly saved user
    if (savedUserId) {
      const activeProfile = profiles.find(p => p.id === savedUserId);
      if (activeProfile) {
        const mentorProfile = activeProfile.mentor_id ? profiles.find(m => m.id === activeProfile.mentor_id) : null;
        setUser({
          id: activeProfile.id,
          email: activeProfile.email,
          name: activeProfile.full_name,
          role: activeProfile.role,
          mentorId: activeProfile.mentor_id || null,
          mentorName: mentorProfile?.full_name || null,
          registeredAt: activeProfile.created_at,
          lastActiveAt: new Date().toISOString(),
          avatar: activeProfile.avatar_url || (activeProfile.role === 'admin' ? '👑' : activeProfile.role === 'mentor' ? '👨‍🏫' : '👨‍💻')
        });
        return;
      }
    }

    // Default to first profile if not explicitly logged out
    if (profiles.length > 0) {
      const activeProfile = profiles[0] || DEFAULT_DEMO_PROFILES[0];
      setUser({
        id: activeProfile.id,
        email: activeProfile.email,
        name: activeProfile.full_name,
        role: activeProfile.role,
        mentorId: activeProfile.mentor_id || null,
        mentorName: null,
        registeredAt: activeProfile.created_at,
        lastActiveAt: new Date().toISOString(),
        avatar: activeProfile.avatar_url || (activeProfile.role === 'admin' ? '👑' : '👨‍💻')
      });
    }
  }, [profiles]);

  const quickLogin = async (profileId: string) => {
    const target = profiles.find(p => p.id === profileId) || DEFAULT_DEMO_PROFILES.find(p => p.id === profileId);
    if (target) {
      localStorage.setItem(CURRENT_USER_ID_KEY, target.id);
      const mentorProfile = target.mentor_id ? profiles.find(m => m.id === target.mentor_id) : null;
      setUser({
        id: target.id,
        email: target.email,
        name: target.full_name,
        role: target.role,
        mentorId: target.mentor_id || null,
        mentorName: mentorProfile?.full_name || null,
        registeredAt: target.created_at,
        lastActiveAt: new Date().toISOString(),
        avatar: target.avatar_url || (target.role === 'admin' ? '👑' : target.role === 'mentor' ? '👨‍🏫' : '👨‍💻')
      });
    }
  };

  const login = async (email: string): Promise<{ success: boolean; error?: string }> => {
    const cleanEmail = email.trim().toLowerCase();
    const existing = profiles.find(p => p.email.toLowerCase() === cleanEmail);
    if (existing) {
      await quickLogin(existing.id);
      return { success: true };
    }
    return { success: false, error: 'Пользователь с таким email не найден. Пройдите регистрацию.' };
  };

  const register = async (name: string, email: string): Promise<{ success: boolean; error?: string }> => {
    const cleanEmail = email.trim().toLowerCase();
    const existing = profiles.find(p => p.email.toLowerCase() === cleanEmail);
    if (existing) {
      return { success: false, error: 'Пользователь с таким email уже зарегистрирован. Воспользуйтесь входом.' };
    }

    const created = await profileService.createProfile({
      email: cleanEmail,
      full_name: name.trim(),
      role: 'intern',
      avatar_url: '👨‍💻'
    });

    await refreshProfiles();
    await quickLogin(created.id);
    return { success: true };
  };

  const createUser = async (data: {
    name: string;
    email: string;
    role: UserRole;
    mentorId?: string | null;
  }): Promise<{ success: boolean; profile?: Profile; error?: string }> => {
    const cleanEmail = data.email.trim().toLowerCase();
    const existing = profiles.find(p => p.email.toLowerCase() === cleanEmail);
    if (existing) {
      return { success: false, error: 'Пользователь с таким email уже существует!' };
    }

    const created = await profileService.createProfile({
      email: cleanEmail,
      full_name: data.name.trim(),
      role: data.role,
      mentor_id: data.mentorId || null,
      avatar_url: data.role === 'admin' ? '👑' : data.role === 'mentor' ? '👨‍🏫' : '👨‍💻'
    });

    await refreshProfiles();
    return { success: true, profile: created };
  };

  const updateUserRole = async (userId: string, newRole: UserRole): Promise<boolean> => {
    const avatar = newRole === 'admin' ? '👑' : newRole === 'mentor' ? '👨‍🏫' : '👨‍💻';
    const updated = await profileService.updateProfile(userId, { role: newRole, avatar_url: avatar });
    if (updated) {
      await refreshProfiles();
      return true;
    }
    return false;
  };

  const assignMentor = async (internId: string, mentorId: string | null): Promise<boolean> => {
    const updated = await profileService.updateProfile(internId, { mentor_id: mentorId });
    if (updated) {
      await refreshProfiles();
      return true;
    }
    return false;
  };

  const deleteUser = async (userId: string): Promise<boolean> => {
    const ok = await profileService.deleteProfile(userId);
    if (ok) {
      await refreshProfiles();
      if (user?.id === userId) {
        logout();
      }
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.setItem(CURRENT_USER_ID_KEY, 'guest');
    setUser(null);
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
  const isMentor = user?.role === 'mentor';
  const canReview = isAdmin || isMentor;

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        profiles,
        isAuthenticated,
        isAdmin,
        isMentor,
        canReview,
        supabaseStatus,
        login,
        register,
        createUser,
        updateUserRole,
        assignMentor,
        deleteUser,
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
