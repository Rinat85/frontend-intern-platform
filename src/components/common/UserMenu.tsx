import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useProgress } from '../../context/ProgressContext';
import { LogIn, LogOut, Shield, LayoutDashboard, Users, ChevronDown, Check } from 'lucide-react';

interface UserMenuProps {
  onOpenAuth: (tab?: 'login' | 'register' | 'quick') => void;
  onOpenAdmin: () => void;
  onNavigateHome: () => void;
  isAdminView: boolean;
}

export const UserMenu: React.FC<UserMenuProps> = ({
  onOpenAuth,
  onOpenAdmin,
  onNavigateHome,
  isAdminView
}) => {
  const { user, users, isAuthenticated, isAdmin, logout, quickLogin } = useAuth();
  const { getOverallPercentage, completedLessonsCount, totalLessonsCount } = useProgress();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isAuthenticated || !user) {
    return (
      <button
        className="btn btn-primary btn-sm user-auth-btn"
        onClick={() => onOpenAuth('quick')}
      >
        <LogIn size={16} />
        <span>Войти</span>
      </button>
    );
  }

  const progressPercent = getOverallPercentage();

  return (
    <div className="user-menu-wrapper" ref={menuRef}>
      <button
        className={`user-menu-trigger ${isAdmin ? 'trigger-admin' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title={user.name}
      >
        <span className="user-avatar-badge">{user.avatar || (isAdmin ? '👑' : '👨‍💻')}</span>
        <div className="user-trigger-info desktop-only">
          <span className="user-trigger-name">{user.name}</span>
          <span className={`user-role-tag ${isAdmin ? 'tag-admin' : 'tag-intern'}`}>
            {isAdmin ? 'Ментор' : `${progressPercent}%`}
          </span>
        </div>
        <ChevronDown size={14} className="user-chevron" />
      </button>

      {isOpen && (
        <div className="user-dropdown-menu">
          {/* Header */}
          <div className="user-dropdown-header">
            <div className="user-dropdown-avatar">{user.avatar || (isAdmin ? '👑' : '👨‍💻')}</div>
            <div className="user-dropdown-meta">
              <div className="user-dropdown-name">{user.name}</div>
              <div className="user-dropdown-email">{user.email}</div>
              <span className={`role-badge ${isAdmin ? 'role-admin' : 'role-intern'}`}>
                {isAdmin ? 'Администратор / Ментор' : 'Стажёр Академии'}
              </span>
            </div>
          </div>

          {!isAdmin && (
            <div className="user-dropdown-progress">
              <div className="dropdown-progress-label">
                <span>Прогресс обучения:</span>
                <strong>{completedLessonsCount} / {totalLessonsCount} ({progressPercent}%)</strong>
              </div>
              <div className="dropdown-progress-track">
                <div className="dropdown-progress-fill" style={{ width: `${progressPercent}%` }}></div>
              </div>
            </div>
          )}

          <div className="user-dropdown-divider" />

          {/* Navigation Links */}
          <div className="user-dropdown-actions">
            {isAdmin ? (
              <button
                className={`dropdown-item ${isAdminView ? 'active' : ''}`}
                onClick={() => {
                  onOpenAdmin();
                  setIsOpen(false);
                }}
              >
                <Shield size={16} />
                <span>Панель Ментора (Админка)</span>
              </button>
            ) : null}

            <button
              className={`dropdown-item ${!isAdminView ? 'active' : ''}`}
              onClick={() => {
                onNavigateHome();
                setIsOpen(false);
              }}
            >
              <LayoutDashboard size={16} />
              <span>Обучающая платформа</span>
            </button>
          </div>

          <div className="user-dropdown-divider" />

          {/* Quick Switch Section */}
          <div className="dropdown-section-title">Быстрое переключение:</div>
          <div className="quick-switch-list">
            {users.map(u => (
              <button
                key={u.id}
                className={`quick-switch-item ${u.id === user.id ? 'active' : ''}`}
                onClick={() => {
                  quickLogin(u.id);
                  setIsOpen(false);
                }}
              >
                <span className="quick-switch-avatar">{u.avatar || '👤'}</span>
                <span className="quick-switch-name">{u.name}</span>
                <span className="quick-switch-role">({u.role === 'admin' ? 'Админ' : 'Стажёр'})</span>
                {u.id === user.id && <Check size={14} className="active-check" />}
              </button>
            ))}
          </div>

          <div className="user-dropdown-divider" />

          {/* Switch / Add account & Logout */}
          <div className="user-dropdown-footer">
            <button
              className="dropdown-item"
              onClick={() => {
                onOpenAuth('register');
                setIsOpen(false);
              }}
            >
              <Users size={16} />
              <span>Создать новый аккаунт</span>
            </button>

            <button
              className="dropdown-item item-logout"
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
            >
              <LogOut size={16} />
              <span>Выйти из аккаунта</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
