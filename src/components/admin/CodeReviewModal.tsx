import React, { useState, useEffect } from 'react';
import { TaskSubmission } from '../../types/database';
import { Module } from '../../types/curriculum';
import { CodeBlock } from '../lesson/CodeBlock';
import {
  X, CheckCircle2, AlertTriangle, Send, Play, RefreshCw,
  ExternalLink, Sparkles, User, FileCode, CheckSquare, MessageSquare
} from 'lucide-react';

interface CodeReviewModalProps {
  submission: TaskSubmission | null;
  modules: Module[];
  onClose: () => void;
  onReviewSubmit: (payload: {
    submissionId: string;
    feedback: string;
    grade: number;
    statusResult: 'approved' | 'rejected';
    lessonId: string;
    studentUserId: string;
  }) => Promise<boolean>;
}

export const CodeReviewModal: React.FC<CodeReviewModalProps> = ({
  submission,
  modules,
  onClose,
  onReviewSubmit
}) => {
  const [feedback, setFeedback] = useState('');
  const [grade, setGrade] = useState(100);
  const [activeTab, setActiveTab] = useState<'code' | 'preview' | 'solution'>('code');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewKey, setPreviewKey] = useState(0);

  useEffect(() => {
    if (submission?.code_reviews && submission.code_reviews.length > 0) {
      const latest = submission.code_reviews[submission.code_reviews.length - 1];
      setFeedback(latest.feedback_comment || '');
      setGrade(latest.grade || 100);
    } else {
      setFeedback('');
      setGrade(100);
    }
  }, [submission]);

  if (!submission) return null;

  // Find corresponding lesson and task
  const allLessons = modules.flatMap(m => m.lessons);
  const lesson = allLessons.find(l => l.id === submission.lesson_id);
  const task = lesson?.task;

  const handleAction = async (statusResult: 'approved' | 'rejected') => {
    if (!feedback.trim()) {
      alert('Пожалуйста, напишите комментарий / фидбек к выполненному заданию.');
      return;
    }

    setIsSubmitting(true);
    try {
      await onReviewSubmit({
        submissionId: submission.id,
        feedback,
        grade: statusResult === 'approved' ? grade : Math.min(grade, 60),
        statusResult,
        lessonId: submission.lesson_id,
        studentUserId: submission.user_id
      });
      onClose();
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const iframeSrcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { margin: 0; padding: 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #ffffff; color: #1e293b; }
          ${submission.css_code || ''}
        </style>
      </head>
      <body>
        ${submission.html_code || ''}
        <script>
          try {
            ${submission.js_code || ''}
          } catch (e) {
            console.error('Runtime error in student code:', e);
          }
        </script>
      </body>
    </html>
  `;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container code-review-modal" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-user">
            <div className="intern-avatar-lg">{submission.profiles?.avatar_url || '👨‍💻'}</div>
            <div>
              <div className="modal-breadcrumbs">
                <span>Code Review</span> • <span className="text-accent">{lesson?.title || submission.lesson_id}</span>
              </div>
              <h3 style={{ margin: '2px 0 0 0' }}>
                Решение: {submission.profiles?.full_name || 'Стажёр'}
              </h3>
              <p className="text-muted text-xs">
                {submission.profiles?.email} • Отправлено:{' '}
                {submission.submitted_at ? new Date(submission.submitted_at).toLocaleString() : 'Недавно'}
              </p>
            </div>
          </div>
          <button className="btn-icon" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body review-modal-grid">
          {/* Left Column: Code & Live Preview */}
          <div className="review-code-section">
            <div className="review-tabs-bar">
              <button
                className={`review-tab-btn ${activeTab === 'code' ? 'active' : ''}`}
                onClick={() => setActiveTab('code')}
              >
                <FileCode size={16} />
                <span>Код стажёра</span>
              </button>
              <button
                className={`review-tab-btn ${activeTab === 'preview' ? 'active' : ''}`}
                onClick={() => setActiveTab('preview')}
              >
                <Play size={16} />
                <span>Live Preview (Результат)</span>
              </button>
              <button
                className={`review-tab-btn ${activeTab === 'solution' ? 'active' : ''}`}
                onClick={() => setActiveTab('solution')}
              >
                <Sparkles size={16} />
                <span>Эталонное решение</span>
              </button>
            </div>

            <div className="review-tab-content">
              {activeTab === 'code' && (
                <div className="review-codes-list">
                  {submission.student_notes && (
                    <div className="student-notes-card">
                      <div className="notes-title">
                        <MessageSquare size={14} />
                        <span>Комментарий стажёра к заданию:</span>
                      </div>
                      <p>{submission.student_notes}</p>
                    </div>
                  )}

                  {submission.github_pr_url && (
                    <div className="pr-link-card">
                      <ExternalLink size={16} />
                      <a href={submission.github_pr_url} target="_blank" rel="noreferrer">
                        Ссылка на Pull Request: {submission.github_pr_url}
                      </a>
                    </div>
                  )}

                  {submission.html_code ? (
                    <CodeBlock code={submission.html_code} language="html" title="HTML код стажёра" />
                  ) : (
                    <div className="empty-code-notice">HTML код не предоставлен</div>
                  )}

                  {submission.css_code ? (
                    <CodeBlock code={submission.css_code} language="css" title="CSS код стажёра" />
                  ) : (
                    <div className="empty-code-notice">CSS код не предоставлен</div>
                  )}

                  {submission.js_code && (
                    <CodeBlock code={submission.js_code} language="javascript" title="JS код стажёра" />
                  )}
                </div>
              )}

              {activeTab === 'preview' && (
                <div className="review-preview-wrapper">
                  <div className="preview-toolbar">
                    <span className="preview-label">Live Sandbox Iframe:</span>
                    <button className="btn-icon-sm" onClick={() => setPreviewKey(k => k + 1)} title="Перезагрузить">
                      <RefreshCw size={14} />
                    </button>
                  </div>
                  <iframe
                    key={previewKey}
                    title="Student Preview"
                    className="review-iframe"
                    srcDoc={iframeSrcDoc}
                    sandbox="allow-scripts allow-modals"
                  />
                </div>
              )}

              {activeTab === 'solution' && task && (
                <div className="review-solution-view">
                  <div className="solution-explanation-box">
                    <Sparkles size={16} className="text-accent" />
                    <span>{task.solution.explanation}</span>
                  </div>
                  {task.solution.html && <CodeBlock code={task.solution.html} language="html" title="Эталонный HTML" />}
                  {task.solution.css && <CodeBlock code={task.solution.css} language="css" title="Эталонный CSS" />}
                  {task.solution.js && <CodeBlock code={task.solution.js} language="javascript" title="Эталонный JS" />}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Criteria & Mentor Feedback Form */}
          <div className="review-feedback-section">
            {task && (
              <div className="review-criteria-card">
                <h4>Критерии приемки задания:</h4>
                <ul className="criteria-check-list">
                  {task.criteria.map((crit, idx) => (
                    <li key={idx}>
                      <CheckSquare size={14} className="text-success" />
                      <span>{crit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="feedback-form-card">
              <h4>Оценка и фидбек ментора:</h4>

              <div className="form-group">
                <label>Оценка (0-100%):</label>
                <div className="grade-slider-row">
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={grade}
                    onChange={e => setGrade(Number(e.target.value))}
                    className="slider-control"
                  />
                  <span className="grade-value-badge">{grade}%</span>
                </div>
              </div>

              <div className="form-group">
                <label>Комментарии и замечания (Code Review Markdown):</label>
                <textarea
                  className="feedback-textarea"
                  rows={6}
                  placeholder="Отличная работа с flex-выравниванием! Обрати внимание на отступы в строке 14..."
                  value={feedback}
                  onChange={e => setFeedback(e.target.value)}
                />
              </div>

              <div className="review-action-buttons">
                <button
                  className="btn btn-success review-btn-approve"
                  disabled={isSubmitting}
                  onClick={() => handleAction('approved')}
                >
                  <CheckCircle2 size={18} />
                  <span>✅ Принять (Approve)</span>
                </button>

                <button
                  className="btn btn-secondary text-warning review-btn-reject"
                  disabled={isSubmitting}
                  onClick={() => handleAction('rejected')}
                >
                  <AlertTriangle size={18} />
                  <span>⚠️ На доработку (Request Changes)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
