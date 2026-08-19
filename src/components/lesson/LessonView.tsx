import React, { useState } from 'react';
import { Lesson, Module } from '../../types/curriculum';
import { useProgress } from '../../context/ProgressContext';
import { TheorySection } from './TheorySection';
import { LiveSandbox } from './LiveSandbox';
import { TaskSection } from './TaskSection';
import { QuizSection } from './QuizSection';
import { Badge } from '../common/Badge';
import {
  BookOpen, Code, CheckSquare, HelpCircle, CheckCircle2,
  Bookmark, ChevronLeft, ChevronRight, Clock
} from 'lucide-react';

interface LessonViewProps {
  lesson: Lesson;
  module: Module;
  allLessons: Lesson[];
  onSelectLesson: (lessonId: string) => void;
  onNavigateHome: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  module,
  allLessons,
  onSelectLesson,
  onNavigateHome
}) => {
  const { isLessonCompleted, toggleLessonCompletion, isLessonBookmarked, toggleBookmark } = useProgress();
  const [activeTab, setActiveTab] = useState<'theory' | 'sandbox' | 'task' | 'quiz'>('theory');

  const currentIndex = allLessons.findIndex(l => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;
  const isCompleted = isLessonCompleted(lesson.id);
  const isBookmarked = isLessonBookmarked(lesson.id);

  return (
    <div className="lesson-view-container">
      <div className="lesson-header">
        <div className="lesson-header-breadcrumbs">
          <button className="breadcrumb-btn" onClick={onNavigateHome}>Главная</button>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-module" style={{ color: module.accentColor }}>{module.title}</span>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">Уровень {lesson.level}</span>
        </div>

        <div className="lesson-header-main">
          <div className="lesson-title-area">
            <div className="lesson-badges">
              <Badge variant="primary">{module.title}</Badge>
              <Badge variant="difficulty">Уровень {lesson.level}</Badge>
              <span className="lesson-duration">
                <Clock size={14} />
                <span>{lesson.estimatedMinutes} мин</span>
              </span>
            </div>
            <h1 className="lesson-main-title">{lesson.title}</h1>
            <p className="lesson-main-subtitle">{lesson.subtitle}</p>
          </div>

          <div className="lesson-header-actions">
            <button
              className={`btn-icon ${isBookmarked ? 'active text-warning' : ''}`}
              onClick={() => toggleBookmark(lesson.id)}
              title={isBookmarked ? 'Удалить из закладок' : 'Сохранить в закладки'}
            >
              <Bookmark size={18} />
            </button>
            <button
              className={`btn ${isCompleted ? 'btn-success' : 'btn-primary'}`}
              onClick={() => toggleLessonCompletion(lesson.id)}
            >
              <CheckCircle2 size={18} />
              <span>{isCompleted ? 'Уровень пройден' : 'Завершить уровень'}</span>
            </button>
          </div>
        </div>

        <div className="lesson-nav-tabs">
          <button
            className={`lesson-nav-tab ${activeTab === 'theory' ? 'active' : ''}`}
            onClick={() => setActiveTab('theory')}
          >
            <BookOpen size={16} />
            <span>1. Теория</span>
          </button>
          <button
            className={`lesson-nav-tab ${activeTab === 'sandbox' ? 'active' : ''}`}
            onClick={() => setActiveTab('sandbox')}
          >
            <Code size={16} />
            <span>2. Песочница (Live Editor)</span>
          </button>
          <button
            className={`lesson-nav-tab ${activeTab === 'task' ? 'active' : ''}`}
            onClick={() => setActiveTab('task')}
          >
            <CheckSquare size={16} />
            <span>3. Практическое задание</span>
          </button>
          <button
            className={`lesson-nav-tab ${activeTab === 'quiz' ? 'active' : ''}`}
            onClick={() => setActiveTab('quiz')}
          >
            <HelpCircle size={16} />
            <span>4. Тест ({lesson.quiz.questions.length})</span>
          </button>
        </div>
      </div>

      <div className="lesson-content-body">
        {activeTab === 'theory' && <TheorySection theory={lesson.theory} />}
        {activeTab === 'sandbox' && <LiveSandbox lessonId={lesson.id} sandboxData={lesson.sandbox} />}
        {activeTab === 'task' && <TaskSection lessonId={lesson.id} task={lesson.task} />}
        {activeTab === 'quiz' && <QuizSection lessonId={lesson.id} questions={lesson.quiz.questions} />}
      </div>

      <div className="lesson-footer-pagination">
        {prevLesson ? (
          <button
            className="btn btn-secondary pagination-btn"
            onClick={() => onSelectLesson(prevLesson.id)}
          >
            <ChevronLeft size={18} />
            <div className="pagination-text">
              <span className="pagination-label">Предыдущий уровень</span>
              <span className="pagination-title">{prevLesson.title}</span>
            </div>
          </button>
        ) : (
          <div />
        )}

        {nextLesson && (
          <button
            className="btn btn-primary pagination-btn"
            onClick={() => onSelectLesson(nextLesson.id)}
          >
            <div className="pagination-text align-right">
              <span className="pagination-label">Следующий уровень</span>
              <span className="pagination-title">{nextLesson.title}</span>
            </div>
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
};
