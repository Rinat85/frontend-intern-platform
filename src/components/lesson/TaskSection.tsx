import React, { useState, useEffect } from 'react';
import { PracticalTask } from '../../types/curriculum';
import { useProgress } from '../../context/ProgressContext';
import { useSubmissions } from '../../context/SubmissionContext';
import { useAuth } from '../../context/AuthContext';
import { CodeBlock } from './CodeBlock';
import {
  CheckCircle2, HelpCircle, Eye, EyeOff, Target, Sparkles,
  CheckSquare, Square, Send, Clock, AlertTriangle, FileCode,
  Download, MessageSquare, ExternalLink, Award
} from 'lucide-react';
import { formatInlineCode } from '../../utils/formatText';

interface TaskSectionProps {
  lessonId: string;
  task: PracticalTask;
  onCompletedChange?: () => void;
}

export const TaskSection: React.FC<TaskSectionProps> = ({ lessonId, task, onCompletedChange }) => {
  const { user } = useAuth();
  const { isTaskCompleted, toggleTaskCompletion, getSavedSandboxCode } = useProgress();
  const { currentLessonSubmission, loadLessonSubmission, submitTask } = useSubmissions();

  const isDone = isTaskCompleted(lessonId);
  const [checkedCriteria, setCheckedCriteria] = useState<Record<number, boolean>>({});
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);

  // Student submission form state
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [githubPrUrl, setGithubPrUrl] = useState('');
  const [studentNotes, setStudentNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccessMsg, setSubmitSuccessMsg] = useState(false);

  // Load existing submission on mount or lessonId change
  useEffect(() => {
    loadLessonSubmission(lessonId).then(sub => {
      if (sub) {
        setHtmlCode(sub.html_code || '');
        setCssCode(sub.css_code || '');
        setJsCode(sub.js_code || '');
        setGithubPrUrl(sub.github_pr_url || '');
        setStudentNotes(sub.student_notes || '');
      } else {
        // Autofill from saved sandbox code if available
        const saved = getSavedSandboxCode(lessonId);
        if (saved) {
          setHtmlCode(saved.html || '');
          setCssCode(saved.css || '');
          setJsCode(saved.js || '');
        }
      }
    });
  }, [lessonId]);

  const toggleCriteria = (index: number) => {
    setCheckedCriteria(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleImportFromSandbox = () => {
    const saved = getSavedSandboxCode(lessonId);
    if (saved) {
      setHtmlCode(saved.html || '');
      setCssCode(saved.css || '');
      setJsCode(saved.js || '');
    } else {
      alert('В песочнице этого урока пока нет сохраненного кода.');
    }
  };

  const handleSubmitForReview = async () => {
    if (!htmlCode.trim() && !cssCode.trim() && !jsCode.trim() && !githubPrUrl.trim()) {
      alert('Пожалуйста, введите код вашего решения или вставьте ссылку на GitHub PR.');
      return;
    }

    setIsSubmitting(true);
    const res = await submitTask({
      lessonId,
      htmlCode,
      cssCode,
      jsCode,
      githubPrUrl,
      studentNotes
    });
    setIsSubmitting(false);

    if (res.success) {
      setSubmitSuccessMsg(true);
      setTimeout(() => setSubmitSuccessMsg(false), 4000);
      if (onCompletedChange) onCompletedChange();
    } else {
      alert(res.error || 'Ошибка отправки решения');
    }
  };

  const handleQuickMarkComplete = () => {
    toggleTaskCompletion(lessonId);
    if (onCompletedChange) onCompletedChange();
  };

  const latestReview = currentLessonSubmission?.code_reviews?.[currentLessonSubmission.code_reviews.length - 1];

  return (
    <div className="task-container">
      {/* Header & Goal */}
      <div className="task-header-card">
        <div className="task-header-title-wrap">
          <Target size={24} className="text-accent" />
          <div>
            <h2 className="task-title">{task.title}</h2>
            <p className="task-scenario">{formatInlineCode(task.scenario)}</p>
          </div>
        </div>
        <button
          className={`btn ${isDone ? 'btn-success' : 'btn-secondary'}`}
          onClick={handleQuickMarkComplete}
          title="Быстрая отметка"
        >
          <CheckCircle2 size={18} />
          <span>{isDone ? 'Задание отмечено' : 'Самопроверка'}</span>
        </button>
      </div>

      {/* Acceptance Criteria */}
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

      {/* Mentorship Status Card */}
      {currentLessonSubmission && (
        <div className={`submission-status-card status-${currentLessonSubmission.status}`}>
          <div className="sub-status-header">
            {currentLessonSubmission.status === 'pending' && (
              <>
                <Clock size={20} className="text-warning spin-slow" />
                <div>
                  <h4>⏳ Задание отправлено на проверку</h4>
                  <p>Ментор получил ваше решение и проверяет его. Результат появится здесь и в уведомлениях.</p>
                </div>
              </>
            )}
            {currentLessonSubmission.status === 'approved' && (
              <>
                <Award size={22} className="text-success" />
                <div>
                  <h4>✅ Задание успешно принято ментором!</h4>
                  <p>Отличная работа! Уровень зачтён в общий прогресс платформы.</p>
                </div>
              </>
            )}
            {currentLessonSubmission.status === 'rejected' && (
              <>
                <AlertTriangle size={22} className="text-warning" />
                <div>
                  <h4>⚠️ Ментор запросил доработку решения</h4>
                  <p>Ознакомьтесь с замечаниями ниже, внесите правки в код и отправьте повторно.</p>
                </div>
              </>
            )}
          </div>

          {latestReview && (
            <div className="mentor-feedback-box">
              <div className="mentor-feedback-head">
                <span className="mentor-title">💬 Комментарий ментора:</span>
                {latestReview.grade !== null && (
                  <span className="mentor-grade">Оценка: {latestReview.grade}%</span>
                )}
              </div>
              <p className="mentor-comment-text">{latestReview.feedback_comment}</p>
            </div>
          )}
        </div>
      )}

      {/* Submission Form Editor */}
      <div className="task-submission-editor-card">
        <div className="submission-editor-header">
          <div className="editor-title-wrap">
            <FileCode size={20} className="text-accent" />
            <div>
              <h3>Форма отправки задания на проверку ментору</h3>
              <p className="text-muted text-xs">Вставьте код решения или импортируйте его из Live-песочницы</p>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={handleImportFromSandbox}
            title="Загрузить сохраненный код из вкладки 2. Песочница"
          >
            <Download size={14} />
            <span>Импорт из песочницы</span>
          </button>
        </div>

        <div className="submission-inputs-grid">
          <div className="sub-input-col">
            <label className="sub-label">HTML код:</label>
            <textarea
              className="sub-textarea font-mono"
              rows={5}
              placeholder="<div class='my-component'>...</div>"
              value={htmlCode}
              onChange={e => setHtmlCode(e.target.value)}
            />
          </div>

          <div className="sub-input-col">
            <label className="sub-label">CSS стили:</label>
            <textarea
              className="sub-textarea font-mono"
              rows={5}
              placeholder=".my-component { display: flex; ... }"
              value={cssCode}
              onChange={e => setCssCode(e.target.value)}
            />
          </div>

          <div className="sub-input-col">
            <label className="sub-label">JavaScript (если требуется):</label>
            <textarea
              className="sub-textarea font-mono"
              rows={3}
              placeholder="// console.log('Hello');"
              value={jsCode}
              onChange={e => setJsCode(e.target.value)}
            />
          </div>
        </div>

        <div className="submission-extra-row">
          <div className="sub-input-col">
            <label className="sub-label">
              <ExternalLink size={12} /> Ссылка на Pull Request (GitHub / GitLab):
            </label>
            <input
              type="url"
              className="sub-input-field"
              placeholder="https://github.com/my-org/repo/pull/1"
              value={githubPrUrl}
              onChange={e => setGithubPrUrl(e.target.value)}
            />
          </div>

          <div className="sub-input-col">
            <label className="sub-label">
              <MessageSquare size={12} /> Ваши вопросы или пояснения ментору:
            </label>
            <input
              type="text"
              className="sub-input-field"
              placeholder="Возник вопрос по специфичности селекторов..."
              value={studentNotes}
              onChange={e => setStudentNotes(e.target.value)}
            />
          </div>
        </div>

        <div className="submission-footer-actions">
          {submitSuccessMsg && (
            <div className="submit-success-toast">
              <CheckCircle2 size={16} />
              <span>Решение успешно отправлено ментору на проверку! 🚀</span>
            </div>
          )}

          <button
            className="btn btn-primary submit-mentor-btn"
            onClick={handleSubmitForReview}
            disabled={isSubmitting}
          >
            <Send size={16} />
            <span>
              {isSubmitting
                ? 'Отправка...'
                : currentLessonSubmission
                ? 'Отправить обновленное решение ментору 🚀'
                : 'Отправить на проверку ментору 🚀'}
            </span>
          </button>
        </div>
      </div>

      {/* Hints Accordion */}
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

      {/* Reference Solution Accordion */}
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
