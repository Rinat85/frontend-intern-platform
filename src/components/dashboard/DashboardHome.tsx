import React from 'react';
import { Module } from '../../types/curriculum';
import { StatsOverview } from './StatsOverview';
import { ModuleCard } from './ModuleCard';
import { useProgress } from '../../context/ProgressContext';
import { Bookmark, Sparkles, CheckCircle2 } from 'lucide-react';

interface DashboardHomeProps {
  modules: Module[];
  onSelectLesson: (lessonId: string) => void;
  onOpenCheatSheets: () => void;
  onOpenCertificate: () => void;
}

export const DashboardHome: React.FC<DashboardHomeProps> = ({
  modules,
  onSelectLesson,
  onOpenCheatSheets,
  onOpenCertificate
}) => {
  const { bookmarkedLessons, isLessonCompleted, isFullyCompleted } = useProgress();

  const handleStartModule = (moduleId: string) => {
    const mod = modules.find(m => m.id === moduleId);
    if (!mod) return;
    const firstUncompleted = mod.lessons.find(l => !isLessonCompleted(l.id));
    if (firstUncompleted) {
      onSelectLesson(firstUncompleted.id);
    } else if (mod.lessons.length > 0) {
      onSelectLesson(mod.lessons[0].id);
    }
  };

  const bookmarkedLessonObjects = modules
    .flatMap(m => m.lessons)
    .filter(l => bookmarkedLessons.includes(l.id));

  return (
    <div className="dashboard-container">
      <StatsOverview />

      {isFullyCompleted && (
        <div className="certificate-banner">
          <div className="certificate-banner-content">
            <Sparkles size={28} className="text-warning" />
            <div>
              <h3>Поздравляем! Вы прошли всю программу обучения!</h3>
              <p>Все 48 уровней успешно завершены. Вы готовы получить персональный сертификат фронтенд-разработчика.</p>
            </div>
          </div>
          <button className="btn btn-primary" onClick={onOpenCertificate}>
            Открыть сертификат
          </button>
        </div>
      )}

      {bookmarkedLessonObjects.length > 0 && (
        <div className="bookmarks-section">
          <div className="section-header">
            <Bookmark size={20} className="text-accent" />
            <h2>Сохраненные уроки ({bookmarkedLessonObjects.length})</h2>
          </div>
          <div className="bookmarks-grid">
            {bookmarkedLessonObjects.map(lesson => (
              <div
                key={lesson.id}
                className="bookmark-card"
                onClick={() => onSelectLesson(lesson.id)}
              >
                <div className="bookmark-card-header">
                  <span className="badge badge-primary">{lesson.moduleId.toUpperCase()} • Уровень {lesson.level}</span>
                  {isLessonCompleted(lesson.id) && <CheckCircle2 size={16} className="text-success" />}
                </div>
                <h4 className="bookmark-card-title">{lesson.title}</h4>
                <p className="bookmark-card-sub">{lesson.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="modules-section">
        <div className="section-header">
          <Sparkles size={20} className="text-accent" />
          <h2>Учебные модули программы</h2>
        </div>
        <div className="modules-grid">
          {modules.map(module => (
            <ModuleCard
              key={module.id}
              module={module}
              onSelectModule={() => handleStartModule(module.id)}
              onStartFirstUncompleted={handleStartModule}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
