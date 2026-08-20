import React, { useState, useEffect } from 'react';
import { modulesData } from './data/modulesData';
import { cheatSheetsData } from './data/cheatSheetsData';
import { useAuth } from './context/AuthContext';
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';
import { DashboardHome } from './components/dashboard/DashboardHome';
import { LessonView } from './components/lesson/LessonView';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { SearchModal } from './components/common/SearchModal';
import { CheatSheetsModal } from './components/cheat-sheet/CheatSheetsModal';
import { CertificateModal } from './components/certificate/CertificateModal';
import { AuthModal } from './components/auth/AuthModal';

export const App: React.FC = () => {
  const { isAdmin } = useAuth();
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
  const [isAdminView, setIsAdminView] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheatSheetsOpen, setIsCheatSheetsOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authInitialTab, setAuthInitialTab] = useState<'login' | 'register' | 'quick'>('quick');

  // Automatic scroll to top on page / lesson / admin view navigation
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const contentArea = document.querySelector('.app-content-area');
    if (contentArea) {
      contentArea.scrollTop = 0;
    }
  }, [currentLessonId, isAdminView]);

  // Keyboard shortcut Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const allLessons = modulesData.flatMap(m => m.lessons);
  const currentLesson = currentLessonId ? allLessons.find(l => l.id === currentLessonId) : null;
  const currentModule = currentLesson ? modulesData.find(m => m.id === currentLesson.moduleId) : null;

  const handleOpenAuth = (tab: 'login' | 'register' | 'quick' = 'quick') => {
    setAuthInitialTab(tab);
    setIsAuthOpen(true);
  };

  const handleNavigateHome = () => {
    setCurrentLessonId(null);
    setIsAdminView(false);
  };

  const handleOpenAdmin = () => {
    setCurrentLessonId(null);
    setIsAdminView(true);
  };

  const handleSelectLesson = (id: string) => {
    setCurrentLessonId(id);
    setIsAdminView(false);
  };

  return (
    <div className="app-layout">
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCheatSheets={() => setIsCheatSheetsOpen(true)}
        onOpenCertificate={() => setIsCertificateOpen(true)}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onNavigateHome={handleNavigateHome}
        onOpenAuth={handleOpenAuth}
        onOpenAdmin={handleOpenAdmin}
        isAdminView={isAdminView}
      />

      <div className="app-main-wrapper">
        <Sidebar
          modules={modulesData}
          currentLessonId={currentLessonId}
          onSelectLesson={handleSelectLesson}
          onNavigateHome={handleNavigateHome}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="app-content-area">
          {isAdminView && isAdmin ? (
            <AdminDashboard
              modules={modulesData}
              onNavigateHome={handleNavigateHome}
              onSelectLesson={handleSelectLesson}
            />
          ) : currentLesson && currentModule ? (
            <LessonView
              lesson={currentLesson}
              module={currentModule}
              allLessons={allLessons}
              onSelectLesson={handleSelectLesson}
              onNavigateHome={handleNavigateHome}
            />
          ) : (
            <DashboardHome
              modules={modulesData}
              onSelectLesson={handleSelectLesson}
              onOpenCheatSheets={() => setIsCheatSheetsOpen(true)}
              onOpenCertificate={() => setIsCertificateOpen(true)}
            />
          )}
        </main>
      </div>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        modules={modulesData}
        onSelectLesson={handleSelectLesson}
      />

      <CheatSheetsModal
        isOpen={isCheatSheetsOpen}
        onClose={() => setIsCheatSheetsOpen(false)}
        categories={cheatSheetsData}
      />

      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialTab={authInitialTab}
      />
    </div>
  );
};

export default App;
