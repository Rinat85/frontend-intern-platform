import React from 'react';
import { Module } from '../../types/curriculum';
import { useProgress } from '../../context/ProgressContext';
import { ProgressBar } from '../common/ProgressBar';
import { ArrowRight, Code, Palette, Zap, Award } from 'lucide-react';

interface ModuleCardProps {
  module: Module;
  onSelectModule: (moduleId: string) => void;
  onStartFirstUncompleted: (moduleId: string) => void;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  module,
  onSelectModule,
  onStartFirstUncompleted
}) => {
  const { isLessonCompleted } = useProgress();
  const completedCount = module.lessons.filter(l => isLessonCompleted(l.id)).length;
  const percentage = Math.round((completedCount / module.lessons.length) * 100);
  const isDone = completedCount === module.lessons.length;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code': return <Code size={28} />;
      case 'Palette': return <Palette size={28} />;
      case 'Zap': return <Zap size={28} />;
      case 'Award': return <Award size={28} />;
      default: return <Code size={28} />;
    }
  };

  return (
    <div className={`module-card ${isDone ? 'module-completed' : ''}`}>
      <div className="module-card-header" style={{ background: module.gradient }}>
        <div className="module-card-icon">{getIcon(module.iconName)}</div>
        <div className="module-card-badge">{module.levelsCount} уровней</div>
      </div>

      <div className="module-card-body">
        <h3 className="module-card-title">{module.title}</h3>
        <p className="module-card-subtitle">{module.subtitle}</p>
        <p className="module-card-desc">{module.description}</p>

        <div className="module-card-progress">
          <div className="module-card-progress-meta">
            <span>Прогресс модуля</span>
            <span className="font-bold">{completedCount}/{module.lessons.length} ({percentage}%)</span>
          </div>
          <ProgressBar value={percentage} height={8} />
        </div>

        <div className="module-card-actions">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => onSelectModule(module.id)}
          >
            Все темы
          </button>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onStartFirstUncompleted(module.id)}
          >
            <span>{isDone ? 'Повторить' : completedCount > 0 ? 'Продолжить' : 'Начать обучение'}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
