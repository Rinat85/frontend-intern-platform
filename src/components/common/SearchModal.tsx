import React, { useState, useEffect, useRef } from 'react';
import { Module, Lesson } from '../../types/curriculum';
import { Search, X, BookOpen, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  modules: Module[];
  onSelectLesson: (lessonId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  modules,
  onSelectLesson
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { isLessonCompleted } = useProgress();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const allLessons: { lesson: Lesson; moduleName: string; accentColor: string }[] = [];
  modules.forEach(m => {
    m.lessons.forEach(l => {
      allLessons.push({ lesson: l, moduleName: m.title, accentColor: m.accentColor });
    });
  });

  const filtered = query.trim() === ''
    ? []
    : allLessons.filter(item => {
        const q = query.toLowerCase();
        return (
          item.lesson.title.toLowerCase().includes(q) ||
          item.lesson.subtitle.toLowerCase().includes(q) ||
          item.lesson.description.toLowerCase().includes(q) ||
          item.lesson.tags.some(t => t.toLowerCase().includes(q))
        );
      });

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-modal-header">
          <Search size={20} className="text-muted" />
          <input
            ref={inputRef}
            type="text"
            className="search-modal-input"
            placeholder="Поиск по всем 48 уровням, тегам и темам..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="btn-icon" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="search-modal-body">
          {query.trim() === '' ? (
            <div className="search-empty-state">
              <BookOpen size={32} className="text-muted" />
              <p>Начните вводить тему (например: Flexbox, Grid, DOM, Fetch, Тэги, Семантика)</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="search-empty-state">
              <p>Ничего не найдено по запросу "{query}"</p>
            </div>
          ) : (
            <div className="search-results-list">
              {filtered.map(({ lesson, moduleName, accentColor }) => {
                const isCompleted = isLessonCompleted(lesson.id);
                return (
                  <div
                    key={lesson.id}
                    className="search-result-item"
                    onClick={() => {
                      onSelectLesson(lesson.id);
                      onClose();
                    }}
                  >
                    <div className="search-result-left">
                      <span
                        className="search-result-badge"
                        style={{ background: `${accentColor}20`, color: accentColor }}
                      >
                        {moduleName} • Уровень {lesson.level}
                      </span>
                      <h4 className="search-result-title">
                        {lesson.title}
                        {isCompleted && <CheckCircle2 size={14} className="text-success inline-icon" />}
                      </h4>
                      <p className="search-result-desc">{lesson.subtitle}</p>
                    </div>
                    <ChevronRight size={18} className="text-muted" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
