import React from 'react';

interface ProgressBarProps {
  value: number;
  height?: number;
  showLabel?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  height = 8,
  showLabel = false,
  className = ''
}) => {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className={`progress-bar-container ${className}`}>
      {showLabel && (
        <div className="progress-bar-label">
          <span>Прогресс</span>
          <span>{Math.round(clamped)}%</span>
        </div>
      )}
      <div className="progress-bar-track" style={{ height }}>
        <div className="progress-bar-fill" style={{ width: `${clamped}%` }} />
      </div>
    </div>
  );
};
