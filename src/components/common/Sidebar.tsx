import React, { useState } from 'react';
import { Module } from '../../types/curriculum';
import { useProgress } from '../../context/ProgressContext';
import { CheckCircle2, Bookmark, ChevronDown, ChevronRight, Home, Code, Palette, Zap, Award } from 'lucide-react';

interface SidebarProps {
  modules: Module[];
  currentLessonId: string | null;
  onSelectLesson: (lessonId: string) => void;
  onNavigateHome: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  modules,
  currentLessonId,
  onSelectLesson,
  onNavigateHome,
  isOpen,
  onClose
}) => {
  const { isLessonCompleted, isLessonBookmarked, toggleBookmark } = useProgress();
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    html: true,
    css: true,
    javascript: true,
    pro: true
  });

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => ({ ...prev, [moduleId]: !prev[moduleId] }));
  };

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code size={18} />;
      case 'Palette': return <Palette size={18} />;
      case 'Zap': return <Zap size={18} />;
      case 'Award': return <Award size={18} />;
      default: return <Code size={18} />;
    }
  };

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-home-btn" onClick={() => { onNavigateHome(); onClose(); }}>
          <Home size={18} />
          <span>Главная панель обучения</span>
        </div>

        <div className="sidebar-nav">
          {modules.map(module => {
            const isExpanded = expandedModules[module.id];
            const completedInMod = module.lessons.filter(l => isLessonCompleted(l.id)).length;
            const progressMod = Math.round((completedInMod / module.lessons.length) * 100);

            return (
              <div key={module.id} className="sidebar-module">
                <div
                  className="sidebar-module-header"
                  onClick={() => toggleModule(module.id)}
                  style={{ borderLeftColor: module.accentColor }}
                >
                  <div className="sidebar-module-icon" style={{ color: module.accentColor }}>
                    {getModuleIcon(module.iconName)}
                  </div>
                  <div className="sidebar-module-info">
                    <div className="sidebar-module-title">{module.title}</div>
                    <div className="sidebar-module-meta">
                      {completedInMod}/{module.lessons.length} уровней ({progressMod}%)
                    </div>
                  </div>
                  <div className="sidebar-module-chevron">
                    {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </div>
                </div>

                {isExpanded && (
                  <div className="sidebar-lessons-list">
                    {module.lessons.map(lesson => {
                      const isActive = currentLessonId === lesson.id;
                      const isCompleted = isLessonCompleted(lesson.id);
                      const isBookmarked = isLessonBookmarked(lesson.id);

                      return (
                        <div
                          key={lesson.id}
                          className={`sidebar-lesson-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                          onClick={() => {
                            onSelectLesson(lesson.id);
                            onClose();
                          }}
                        >
                          <div className="sidebar-lesson-status">
                            {isCompleted ? (
                              <CheckCircle2 size={16} className="text-success" />
                            ) : (
                              <span className="sidebar-lesson-number">{lesson.level}</span>
                            )}
                          </div>
                          <div className="sidebar-lesson-title-wrap">
                            <span className="sidebar-lesson-title">
                              Уровень {lesson.level}: {lesson.title}
                            </span>
                            <span className="sidebar-lesson-duration">{lesson.estimatedMinutes} мин</span>
                          </div>
                          <button
                            className={`sidebar-bookmark-btn ${isBookmarked ? 'active' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleBookmark(lesson.id);
                            }}
                            title={isBookmarked ? 'Удалить из закладок' : 'Добавить в закладки'}
                          >
                            <Bookmark size={14} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
};
