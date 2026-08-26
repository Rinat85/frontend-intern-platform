import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useProgress } from '../../context/ProgressContext';
import { LogIn, LogOut, Shield, LayoutDashboard, ChevronDown, UserPlus } from 'lucide-react';

interface UserMenuProps {
  onOpenAuth: (tab?: 'login' | 'register') => void;
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
  const { user, isAuthenticated, isAdmin, canReview, logout } = useAuth();
  const { getOverallPercentage, completedLessonsCount, totalLessonsCount } = useProgress();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
        onClick={() => onOpenAuth('login')}
      >
        <LogIn size={16} />
        <span>Войти</span>
      </button>
    );
  }

  const progressPercent = getOverallPercentage();
  const roleLabel = user.role === 'admin' ? 'Администратор' : user.role === 'mentor' ? 'Ментор' : 'Стажёр';
  const mentorNames = user.mentorNames || [];

  return (
    <div className="user-menu-wrapper" ref={menuRef}>
      <button
        className={`user-menu-trigger ${isAdmin ? 'trigger-admin' : user.role === 'mentor' ? 'trigger-mentor' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title={user.name}
      >
        <span className="user-avatar-badge">{user.avatar || (isAdmin ? '👑' : user.role === 'mentor' ? '👨‍🏫' : '👨‍💻')}</span>
        <div className="user-trigger-info desktop-only">
          <span className="user-trigger-name">{user.name}</span>
          <span className={`user-role-tag ${isAdmin ? 'tag-admin' : user.role === 'mentor' ? 'tag-mentor' : 'tag-intern'}`}>
            {user.role === 'intern' ? `${progressPercent}%` : roleLabel}
          </span>
        </div>
        <ChevronDown size={14} className="user-chevron" />
      </button>

      {isOpen && (
        <div className="user-dropdown-menu">
          {/* Header */}
          <div className="user-dropdown-header">
            <div className="user-dropdown-avatar">{user.avatar || (isAdmin ? '👑' : user.role === 'mentor' ? '👨‍🏫' : '👨‍💻')}</div>
            <div className="user-dropdown-meta">
              <div className="user-dropdown-name">{user.name}</div>
              <div className="user-dropdown-email">{user.email}</div>
              <span className={`role-badge role-${user.role}`}>
                {roleLabel}
              </span>
              {user.role === 'intern' && mentorNames.length > 0 && (
                <div className="intern-mentor-sublabel">
                  {mentorNames.length === 1 ? 'Ментор: ' : 'Менторы: '}
                  <strong>{mentorNames.join(', ')}</strong>
                </div>
              )}
            </div>
          </div>

          {user.role === 'intern' && (
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
            {canReview && (
              <button
                className={`dropdown-item ${isAdminView ? 'active' : ''}`}
                onClick={() => {
                  onOpenAdmin();
                  setIsOpen(false);
                }}
              >
                <Shield size={16} />
                <span>{isAdmin ? 'Панель Администратора' : 'Панель Ментора (Code Review)'}</span>
              </button>
            )}

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

          {/* Register new intern & Logout */}
          <div className="user-dropdown-footer">
            <button
              className="dropdown-item"
              onClick={() => {
                onOpenAuth('register');
                setIsOpen(false);
              }}
            >
              <UserPlus size={16} />
              <span>Регистрация нового стажёра</span>
            </button>

            <button
              className="dropdown-item item-logout"
              onClick={async () => {
                await logout();
                onNavigateHome();
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
