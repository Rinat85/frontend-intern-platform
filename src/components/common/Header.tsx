import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useProgress } from '../../context/ProgressContext';
import { useAuth } from '../../context/AuthContext';
import { Sun, Moon, Search, BookOpen, Award, Menu, Sparkles, Shield } from 'lucide-react';
import { ProgressBar } from './ProgressBar';
import { UserMenu } from './UserMenu';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenCheatSheets: () => void;
  onOpenCertificate: () => void;
  onToggleSidebar: () => void;
  onNavigateHome: () => void;
  onOpenAuth: (tab?: 'login' | 'register' | 'quick') => void;
  onOpenAdmin: () => void;
  isAdminView: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenCheatSheets,
  onOpenCertificate,
  onToggleSidebar,
  onNavigateHome,
  onOpenAuth,
  onOpenAdmin,
  isAdminView
}) => {
  const { theme, toggleTheme } = useTheme();
  const { isAdmin } = useAuth();
  const { getOverallPercentage, completedLessonsCount, totalLessonsCount, isFullyCompleted } = useProgress();
  const progressPercent = getOverallPercentage();

  return (
    <header className="header">
      <div className="header-left">
        <button
          className="btn-icon mobile-menu-btn"
          onClick={onToggleSidebar}
          aria-label="Навигация"
        >
          <Menu size={20} />
        </button>
        <div className="header-logo" onClick={onNavigateHome} style={{ cursor: 'pointer' }}>
          <div className="logo-icon">
            <Sparkles size={20} color="#ffffff" />
          </div>
          <div className="logo-text">
            <span className="logo-title">Frontend Intern</span>
            <span className="logo-badge">ACADEMY</span>
          </div>
        </div>
      </div>

      <div className="header-center">
        {isAdmin ? (
          <div className="admin-status-pill" onClick={onOpenAdmin}>
            <Shield size={14} />
            <span>Режим Администратора / Ментора</span>
          </div>
        ) : (
          <div className="header-progress-compact" title={`Пройдено ${completedLessonsCount} из ${totalLessonsCount} уроков`}>
            <div className="header-progress-info">
              <span className="text-muted text-xs">Личный прогресс</span>
              <span className="text-xs font-bold text-accent">{progressPercent}%</span>
            </div>
            <ProgressBar value={progressPercent} height={6} className="header-progress-bar" />
          </div>
        )}
      </div>

      <div className="header-right">
        {isAdmin && (
          <button
            className={`btn btn-sm ${isAdminView ? 'btn-primary' : 'btn-secondary'} admin-toggle-nav-btn`}
            onClick={onOpenAdmin}
            title="Панель аналитики Ментора"
          >
            <Shield size={15} />
            <span className="desktop-only">Панель Ментора</span>
          </button>
        )}

        <button
          className="header-search-btn"
          onClick={onOpenSearch}
          title="Поиск по урокам (Ctrl + K)"
        >
          <Search size={16} />
          <span className="search-placeholder">Поиск...</span>
          <kbd className="kbd-shortcut">Ctrl K</kbd>
        </button>

        <button
          className="btn btn-secondary btn-sm"
          onClick={onOpenCheatSheets}
          title="Шпаргалки"
        >
          <BookOpen size={16} />
          <span className="desktop-only">Шпаргалки</span>
        </button>

        <button
          className={`btn btn-sm ${isFullyCompleted ? 'btn-primary pulse' : 'btn-secondary'}`}
          onClick={onOpenCertificate}
          title="Сертификат окончания"
        >
          <Award size={16} />
          <span className="desktop-only">Сертификат</span>
        </button>

        <button
          className="btn-icon theme-toggle-btn"
          onClick={toggleTheme}
          title={theme === 'dark' ? 'Включить светлую тему' : 'Включить темную тему'}
          aria-label="Смена темы"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

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
