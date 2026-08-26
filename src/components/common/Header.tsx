import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNotifications } from '../../context/NotificationContext';
import { UserMenu } from './UserMenu';
import { NotificationDropdown } from './NotificationDropdown';
import {
  Menu, Search, BookOpen, Award, Shield, Bell
} from 'lucide-react';
import { OctoLogoIcon } from './OctoLogo';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenCheatSheets: () => void;
  onOpenCertificate: () => void;
  onToggleSidebar: () => void;
  onNavigateHome: () => void;
  onOpenAuth: (tab?: 'login' | 'register') => void;
  onOpenAdmin: () => void;
  isAdminView: boolean;
  onSelectLesson?: (lessonId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenCheatSheets,
  onOpenCertificate,
  onToggleSidebar,
  onNavigateHome,
  onOpenAuth,
  onOpenAdmin,
  isAdminView,
  onSelectLesson = () => {}
}) => {
  const { user, isAdmin, isMentor, canReview, supabaseStatus } = useAuth();
  const { unreadCount } = useNotifications();
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <button
          className="btn-icon mobile-menu-btn"
          onClick={onToggleSidebar}
          title="Открыть боковое меню"
        >
          <Menu size={20} />
        </button>

        <div className="header-logo" onClick={onNavigateHome} title="На главную страницу">
          <div className="logo-icon-wrap">
            <OctoLogoIcon size={20} />
          </div>
          <div className="logo-text-wrap">
            <span className="logo-title">OCTO INTERN</span>
            <span className="logo-subtitle">Frontend LMS Platform</span>
          </div>
        </div>
      </div>

      <div className="header-center">
        <button className="header-search-btn" onClick={onOpenSearch}>
          <Search size={16} />
          <span className="search-placeholder">Поиск по 70 урокам, темам и коду...</span>
          <span className="kbd-shortcut">Ctrl+K</span>
        </button>
      </div>

      <div className="header-right">
        {/* Supabase Status Indicator */}
        <div
          className={`supabase-header-pill ${supabaseStatus.connected ? 'connected' : 'offline'}`}
          title={supabaseStatus.message}
        >
          <span className="db-dot" />
          <span className="db-text">{supabaseStatus.connected ? 'Supabase DB' : 'Offline Mode'}</span>
        </div>

        {/* Notifications Bell */}
        <div style={{ position: 'relative' }}>
          <button
            className={`btn-icon notif-bell-btn ${unreadCount > 0 ? 'has-unread' : ''}`}
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            title="Уведомления"
          >
            <Bell size={18} />
            {unreadCount > 0 && (
              <span className="bell-badge-count">{unreadCount > 9 ? '9+' : unreadCount}</span>
            )}
          </button>

          <NotificationDropdown
            isOpen={isNotifOpen}
            onClose={() => setIsNotifOpen(false)}
            onSelectLesson={onSelectLesson}
          />
        </div>

        {/* Cheatsheets button */}
        <button
          className="btn btn-secondary header-action-btn"
          onClick={onOpenCheatSheets}
          title="Шпаргалки и справочники"
        >
          <BookOpen size={16} />
          <span className="btn-text">Шпаргалки</span>
        </button>

        {/* Certificate button */}
        <button
          className="btn btn-secondary header-action-btn"
          onClick={onOpenCertificate}
          title="Сертификат об окончании"
        >
          <Award size={16} />
          <span className="btn-text">Сертификат</span>
        </button>

        {/* Admin / Mentor Dashboard toggle */}
        {canReview && (
          <button
            className={`btn ${isAdminView ? 'btn-primary' : 'btn-secondary'} header-action-btn`}
            onClick={isAdminView ? onNavigateHome : onOpenAdmin}
            title={isAdmin ? 'Панель администратора' : 'Панель ментора'}
          >
            <Shield size={16} />
            <span className="btn-text">{isAdminView ? 'Обучение' : (isAdmin ? 'Админка' : 'Панель Ментора')}</span>
          </button>
        )}

        {/* User Account Menu */}
        <UserMenu
          onOpenAuth={onOpenAuth}
          onOpenAdmin={onOpenAdmin}
          onNavigateHome={onNavigateHome}
          isAdminView={isAdminView}
        />
      </div>
    </header>
  );
};
