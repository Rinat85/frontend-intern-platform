import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types/auth';

interface AuthContextType {
  user: User | null;
  users: User[];
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password?: string) => { success: boolean; error?: string };
  register: (email: string, name: string, password?: string, role?: UserRole) => { success: boolean; error?: string };
  logout: () => void;
  quickLogin: (userId: string) => void;
  updateUser: (userId: string, updates: Partial<User>) => void;
  deleteUser: (userId: string) => void;
}

const USERS_STORAGE_KEY = 'frontend_intern_users_v3';
const CURRENT_USER_KEY = 'frontend_intern_current_user_v3';

export const INITIAL_DEMO_USERS: User[] = [
  {
    id: 'usr_admin',
    email: 'admin@academy.io',
    name: 'Главный Ментор',
    role: 'admin',
    registeredAt: new Date(Date.now() - 60 * 24 * 3600 * 1000).toISOString(),
    lastActiveAt: new Date().toISOString(),
    avatar: '👑'
  },
  {
    id: 'usr_alex',
    email: 'alex@intern.io',
    name: 'Алексей Смирнов',
    role: 'intern',
    registeredAt: new Date(Date.now() - 14 * 24 * 3600 * 1000).toISOString(),
    lastActiveAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString(),
    avatar: '👨‍💻'
  },
  {
    id: 'usr_maria',
    email: 'maria@intern.io',
    name: 'Мария Иванова',
    role: 'intern',
    registeredAt: new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString(),
    lastActiveAt: new Date(Date.now() - 12 * 3600 * 1000).toISOString(),
    avatar: '👩‍💻'
  },
  {
    id: 'usr_dmitry',
    email: 'dmitry@intern.io',
    name: 'Дмитрий Ковалев',
    role: 'intern',
    registeredAt: new Date(Date.now() - 3 * 24 * 3600 * 1000).toISOString(),
    lastActiveAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
    avatar: '🧑‍💻'
  }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(() => {
    try {
      const saved = localStorage.getItem(USERS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to load users from localStorage', e);
    }
    return INITIAL_DEMO_USERS;
  });

  const [currentUserId, setCurrentUserId] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem(CURRENT_USER_KEY);
      if (saved) return saved;
    } catch (e) {
      console.error('Failed to load current user ID', e);
    }
    return 'usr_alex'; // Default to Alex Smirnov (Intern)
  });

  // Save users list
  useEffect(() => {
    try {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    } catch (e) {
      console.error('Failed to persist users', e);
    }
  }, [users]);

  // Save current user ID and update lastActiveAt
  useEffect(() => {
    try {
      if (currentUserId) {
        localStorage.setItem(CURRENT_USER_KEY, currentUserId);
        setUsers(prev =>
          prev.map(u => (u.id === currentUserId ? { ...u, lastActiveAt: new Date().toISOString() } : u))
        );
      } else {
        localStorage.removeItem(CURRENT_USER_KEY);
      }
    } catch (e) {
      console.error('Failed to persist current user ID', e);
    }
  }, [currentUserId]);

  const user = users.find(u => u.id === currentUserId) || null;
  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';

  const login = (email: string, _password?: string) => {
    const cleanEmail = email.trim().toLowerCase();
    const found = users.find(u => u.email.toLowerCase() === cleanEmail);
    if (!found) {
      return { success: false, error: 'Пользователь с таким email не найден. Проверьте адрес или зарегистрируйтесь.' };
    }
    setCurrentUserId(found.id);
    return { success: true };
  };

  const register = (email: string, name: string, _password?: string, role: UserRole = 'intern') => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();

    if (!cleanEmail || !cleanName) {
      return { success: false, error: 'Пожалуйста, заполните имя и email.' };
    }

    if (users.some(u => u.email.toLowerCase() === cleanEmail)) {
      return { success: false, error: 'Пользователь с таким email уже зарегистрирован. Пожалуйста, выполните вход.' };
    }

    const newUser: User = {
      id: `usr_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      email: cleanEmail,
      name: cleanName,
      role: role,
      registeredAt: new Date().toISOString(),
      lastActiveAt: new Date().toISOString(),
      avatar: role === 'admin' ? '👑' : '🎓'
    };

    setUsers(prev => [newUser, ...prev]);
    setCurrentUserId(newUser.id);
    return { success: true };
  };

  const logout = () => {
    setCurrentUserId(null);
  };

  const quickLogin = (userId: string) => {
    const found = users.find(u => u.id === userId);
    if (found) {
      setCurrentUserId(found.id);
    }
  };

  const updateUser = (userId: string, updates: Partial<User>) => {
    setUsers(prev => prev.map(u => (u.id === userId ? { ...u, ...updates } : u)));
  };

  const deleteUser = (userId: string) => {
    setUsers(prev => prev.filter(u => u.id !== userId));
    if (currentUserId === userId) {
      setCurrentUserId(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        isAuthenticated,
        isAdmin,
        login,
        register,
        logout,
        quickLogin,
        updateUser,
        deleteUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
