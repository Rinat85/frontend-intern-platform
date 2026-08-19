import React from 'react';
import { useProgress } from '../../context/ProgressContext';
import { BookCheck, Award, Zap, Flame, Clock } from 'lucide-react';
import { ProgressBar } from '../common/ProgressBar';

export const StatsOverview: React.FC = () => {
  const { completedLessonsCount, totalLessonsCount, getOverallPercentage, internName } = useProgress();
  const percentage = getOverallPercentage();

  return (
    <div className="stats-container">
      <div className="stats-hero">
        <div className="stats-hero-content">
          <div className="stats-hero-badge">
            <Flame size={16} className="text-warning" />
            <span>Индивидуальный трек стажера</span>
          </div>
          <h1 className="stats-hero-title">Добро пожаловать, {internName || 'Стажер'}!</h1>
          <p className="stats-hero-subtitle">
            Ваша комплексная программа обучения фронтенд-разработке от фундаментального HTML до продвинутого JavaScript и индустриальных стандартов.
          </p>
          <div className="stats-hero-progress-wrap">
            <div className="stats-hero-progress-header">
              <span>Общий прогресс обучения</span>
              <span className="stats-hero-percentage">{percentage}%</span>
            </div>
            <ProgressBar value={percentage} height={10} className="stats-hero-bar" />
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrap stat-icon-blue">
            <BookCheck size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">{completedLessonsCount} / {totalLessonsCount}</div>
            <div className="stat-label">Уроков пройдено</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrap stat-icon-amber">
            <Zap size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">4 Модуля</div>
            <div className="stat-label">HTML, CSS, JS, Pro</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrap stat-icon-emerald">
            <Award size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">{totalLessonsCount - completedLessonsCount}</div>
            <div className="stat-label">Осталось уровней</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrap stat-icon-purple">
            <Clock size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">~20 часов</div>
            <div className="stat-label">Общее время практики</div>
          </div>
        </div>
      </div>
    </div>
  );
};
