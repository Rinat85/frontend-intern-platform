import React, { useState } from 'react';
import { PracticalTask } from '../../types/curriculum';
import { useProgress } from '../../context/ProgressContext';
import { CodeBlock } from './CodeBlock';
import { CheckCircle2, HelpCircle, Eye, EyeOff, Target, Sparkles, CheckSquare, Square } from 'lucide-react';
import { formatInlineCode } from '../../utils/formatText';

interface TaskSectionProps {
  lessonId: string;
  task: PracticalTask;
  onCompletedChange?: () => void;
}

export const TaskSection: React.FC<TaskSectionProps> = ({ lessonId, task, onCompletedChange }) => {
  const { isTaskCompleted, toggleTaskCompletion } = useProgress();
  const isDone = isTaskCompleted(lessonId);
  const [checkedCriteria, setCheckedCriteria] = useState<Record<number, boolean>>({});
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);

  const toggleCriteria = (index: number) => {
    setCheckedCriteria(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleMarkComplete = () => {
    toggleTaskCompletion(lessonId);
    if (onCompletedChange) onCompletedChange();
  };

  return (
    <div className="task-container">
      <div className="task-header-card">
        <div className="task-header-title-wrap">
          <Target size={24} className="text-accent" />
          <div>
            <h2 className="task-title">{task.title}</h2>
            <p className="task-scenario">{formatInlineCode(task.scenario)}</p>
          </div>
        </div>
        <button
          className={`btn ${isDone ? 'btn-success' : 'btn-primary'}`}
          onClick={handleMarkComplete}
        >
          <CheckCircle2 size={18} />
          <span>{isDone ? 'Задание выполнено!' : 'Отметить как выполненное'}</span>
        </button>
      </div>

      <div className="task-criteria-card">
        <h3>Критерии приемки (Acceptance Criteria):</h3>
        <div className="criteria-list">
          {task.criteria.map((crit, idx) => {
            const isChecked = checkedCriteria[idx] || isDone;
            return (
              <div
                key={idx}
                className={`criteria-item ${isChecked ? 'checked' : ''}`}
                onClick={() => toggleCriteria(idx)}
              >
                {isChecked ? (
                  <CheckSquare size={18} className="text-success" />
                ) : (
                  <Square size={18} className="text-muted" />
                )}
                <span>{formatInlineCode(crit)}</span>
              </div>
            );
          })}
        </div>
      </div>

      {task.hints && task.hints.length > 0 && (
        <div className="task-hints-card">
          <div className="hints-toggle-btn" onClick={() => setShowHints(!showHints)}>
            <HelpCircle size={18} className="text-warning" />
            <span>{showHints ? 'Скрыть подсказки' : 'Показать подсказки к заданию'}</span>
          </div>
          {showHints && (
            <ul className="hints-list">
              {task.hints.map((hint, idx) => (
                <li key={idx}>{formatInlineCode(hint)}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="task-solution-card">
        <div className="solution-toggle-btn" onClick={() => setShowSolution(!showSolution)}>
          {showSolution ? <EyeOff size={18} /> : <Eye size={18} />}
          <span>{showSolution ? 'Скрыть эталонное решение' : 'Посмотреть эталонное решение'}</span>
        </div>

        {showSolution && (
          <div className="solution-content">
            <div className="solution-explanation">
              <Sparkles size={16} className="text-accent" />
              <p>{formatInlineCode(task.solution.explanation)}</p>
            </div>
            {task.solution.html && (
              <div className="solution-code">
                <CodeBlock code={task.solution.html} language="html" title="Решение HTML" />
              </div>
            )}
            {task.solution.css && (
              <div className="solution-code">
                <CodeBlock code={task.solution.css} language="css" title="Решение CSS" />
              </div>
            )}
            {task.solution.js && (
              <div className="solution-code">
                <CodeBlock code={task.solution.js} language="javascript" title="Решение JS" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
