import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, UserMentorInfo } from '../types/auth';
import { Profile } from '../types/database';
import { profileService, DEFAULT_DEMO_PROFILES } from '../services/profileService';
import { supabase, checkSupabaseConnection } from '../services/supabaseClient';

interface AuthContextType {
  user: User | null;
  users: User[];
  profiles: Profile[];
  isAuthenticated: boolean;
  isAdmin: boolean;
  isMentor: boolean;
  isIntern: boolean;
  canReview: boolean;
  supabaseStatus: { connected: boolean; message: string };
  assignedInterns: Profile[];
  login: (email: string, password?: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, password?: string) => Promise<{ success: boolean; requiresEmailConfirmation?: boolean; error?: string }>;
  createUser: (data: { name: string; email: string; role: UserRole; mentorIds?: string[]; password?: string }) => Promise<{ success: boolean; profile?: Profile; error?: string }>;
  updateUserRole: (userId: string, newRole: UserRole) => Promise<boolean>;
  assignMentors: (internId: string, mentorIds: string[]) => Promise<boolean>;
  deleteUser: (userId: string) => Promise<boolean>;
  quickLogin: (profileId: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
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

  const mapProfileToUser = (p: Profile, allProfiles: Profile[]): User => {
    const mentorIds = p.mentor_ids || [];
    const mentorProfiles = allProfiles.filter(m => mentorIds.includes(m.id));
    const mentorNames = mentorProfiles.map(m => m.full_name);
    const mentors: UserMentorInfo[] = mentorProfiles.map(m => ({ id: m.id, name: m.full_name, email: m.email }));

    return {
      id: p.id,
      email: p.email,
      name: p.full_name,
      role: p.role,
      mentorIds,
      mentorNames,
      mentors,
      registeredAt: p.created_at,
      lastActiveAt: p.updated_at || p.created_at,
      avatar: p.avatar_url || (p.role === 'admin' ? '👑' : p.role === 'mentor' ? '👨‍🏫' : '👨‍💻')
    };
  };

  const users: User[] = profiles.map(p => mapProfileToUser(p, profiles));

  // Sync Supabase Auth session & onAuthStateChange
  useEffect(() => {
    // 1. Check existing Supabase Auth session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        const authUser = session.user;
        const matchingProfile = profiles.find(p => p.id === authUser.id || p.email.toLowerCase() === authUser.email?.toLowerCase());
        
        if (matchingProfile) {
          localStorage.setItem(CURRENT_USER_ID_KEY, matchingProfile.id);
          setUser(mapProfileToUser(matchingProfile, profiles));
        } else if (authUser.email) {
          // Auto-create profile if missing
          profileService.createProfile({
            id: authUser.id,
            email: authUser.email,
            full_name: authUser.user_metadata?.full_name || authUser.email.split('@')[0],
            role: 'intern',
            avatar_url: '👨‍💻'
          }).then(created => {
            refreshProfiles();
            setUser(mapProfileToUser(created, profiles));
          });
        }
      } else {
        // Fallback to saved local user if in dev/offline mode
        const savedUserId = localStorage.getItem(CURRENT_USER_ID_KEY);
        if (savedUserId && savedUserId !== 'guest') {
          const activeProfile = profiles.find(p => p.id === savedUserId);
          if (activeProfile) {
            setUser(mapProfileToUser(activeProfile, profiles));
          }
        }
      }
    });

    // 2. Listen to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        const authUser = session.user;
        const currentList = await profileService.getProfiles();
        setProfiles(currentList);
        
        let matchingProfile = currentList.find(p => p.id === authUser.id || p.email.toLowerCase() === authUser.email?.toLowerCase());
        if (!matchingProfile && authUser.email) {
          matchingProfile = await profileService.createProfile({
            id: authUser.id,
            email: authUser.email,
            full_name: authUser.user_metadata?.full_name || authUser.email.split('@')[0],
            role: 'intern',
            avatar_url: '👨‍💻'
          });
        }

        if (matchingProfile) {
          localStorage.setItem(CURRENT_USER_ID_KEY, matchingProfile.id);
          setUser(mapProfileToUser(matchingProfile, currentList));
        }
      } else if (event === 'SIGNED_OUT') {
        localStorage.setItem(CURRENT_USER_ID_KEY, 'guest');
        setUser(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [profiles.length]);

  const quickLogin = async (profileId: string): Promise<{ success: boolean; error?: string }> => {
    const target = profiles.find(p => p.id === profileId) || DEFAULT_DEMO_PROFILES.find(p => p.id === profileId);
    if (!target) {
      return { success: false, error: 'Пользователь не найден' };
    }

    localStorage.setItem(CURRENT_USER_ID_KEY, target.id);
    setUser(mapProfileToUser(target, profiles));
    return { success: true };
  };

  const login = async (email: string, passwordInput?: string): Promise<{ success: boolean; error?: string }> => {
    const cleanEmail = email.trim().toLowerCase();
    const targetEmail = cleanEmail === 'admin' ? 'admin@rocketgate.com' : cleanEmail;
    
    // 1. Try Supabase Auth sign-in if password provided
    if (passwordInput) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: targetEmail,
          password: passwordInput
        });

        if (!error && data.user) {
          const matchingProfile = profiles.find(p => p.id === data.user.id || p.email.toLowerCase() === targetEmail);
          if (matchingProfile) {
            localStorage.setItem(CURRENT_USER_ID_KEY, matchingProfile.id);
            setUser(mapProfileToUser(matchingProfile, profiles));
            return { success: true };
          }
        }

        if (error) {
          if (error.message.includes('Email not confirmed')) {
            return {
              success: false,
              error: 'Почта не подтверждена. Пожалуйста, перейдите по ссылке подтверждения в отправленном письме.'
            };
          }
          if (error.message.includes('Invalid login credentials')) {
            // Check if fallback admin/dev login works
            const envAdminPass = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';
            if (targetEmail === 'admin@rocketgate.com' && (passwordInput === envAdminPass || passwordInput === 'admin')) {
              const adminProfile = profiles.find(p => p.role === 'admin') || DEFAULT_DEMO_PROFILES[0];
              localStorage.setItem(CURRENT_USER_ID_KEY, adminProfile.id);
              setUser(mapProfileToUser(adminProfile, profiles));
              return { success: true };
            }
            return { success: false, error: 'Неверный email или пароль.' };
          }
        }
      } catch (e: any) {
        console.warn('Supabase auth signIn error:', e);
      }
    }

    // Fallback for demo admin / existing profiles
    const existing = profiles.find(p => p.email.toLowerCase() === targetEmail);
    if (existing) {
      if (existing.role === 'admin' && passwordInput && (passwordInput === 'admin' || passwordInput === 'admin123')) {
        localStorage.setItem(CURRENT_USER_ID_KEY, existing.id);
        setUser(mapProfileToUser(existing, profiles));
        return { success: true };
      }
      return { success: false, error: 'Неверный пароль. Введите пароль от вашей учётной записи.' };
    }

    return { success: false, error: 'Пользователь с таким email не найден. Пройдите регистрацию.' };
  };

  const register = async (name: string, email: string, passwordInput?: string): Promise<{
    success: boolean;
    requiresEmailConfirmation?: boolean;
    error?: string;
  }> => {
    const cleanEmail = email.trim().toLowerCase();
    
    if (!passwordInput || passwordInput.length < 6) {
      return { success: false, error: 'Пароль должен содержать не менее 6 символов.' };
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: cleanEmail,
        password: passwordInput,
        options: {
          data: {
            full_name: name.trim()
          },
          emailRedirectTo: window.location.origin
        }
      });

      if (error) {
        if (error.message.includes('User already registered')) {
          return { success: false, error: 'Пользователь с таким email уже зарегистрирован. Выполните вход.' };
        }
        return { success: false, error: error.message };
      }

      // Check if email confirmation is required
      const isConfirmed = Boolean(data.session && data.user);
      const userId = data.user?.id || ('u_' + Date.now().toString(36));

      const created = await profileService.createProfile({
        id: userId,
        email: cleanEmail,
        full_name: name.trim(),
        role: 'intern',
        avatar_url: '👨‍💻',
        mentor_ids: []
      });

      await refreshProfiles();

      if (isConfirmed) {
        localStorage.setItem(CURRENT_USER_ID_KEY, created.id);
        setUser(mapProfileToUser(created, profiles));
        return { success: true, requiresEmailConfirmation: false };
      } else {
        return { success: true, requiresEmailConfirmation: true };
      }
    } catch (e: any) {
      return { success: false, error: e?.message || 'Ошибка регистрации' };
    }
  };

  const createUser = async (data: {
    name: string;
    email: string;
    role: UserRole;
    mentorIds?: string[];
    password?: string;
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
      mentor_ids: data.mentorIds || [],
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

  const assignMentors = async (internId: string, mentorIds: string[]): Promise<boolean> => {
    const ok = await profileService.assignMentors(internId, mentorIds);
    if (ok) {
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
        await logout();
      }
      return true;
    }
    return false;
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
    } catch {}
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

  const isAuthenticated = Boolean(user);
  const isAdmin = user?.role === 'admin';
  const isMentor = user?.role === 'mentor';
  const isIntern = user?.role === 'intern';
  const canReview = isAdmin || isMentor;

  // Assigned interns calculation:
  // For Admins: all intern profiles
  // For Mentors: only interns where intern.mentor_ids includes this mentor's ID
  const assignedInterns = profiles.filter(p => {
    if (p.role !== 'intern') return false;
    if (isAdmin) return true;
    if (isMentor && user?.id) {
      return p.mentor_ids?.includes(user.id);
    }
    return false;
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        profiles,
        isAuthenticated,
        isAdmin,
        isMentor,
        isIntern,
        canReview,
        supabaseStatus,
        assignedInterns,
        login,
        register,
        createUser,
        updateUserRole,
        assignMentors,
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
