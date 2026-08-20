import React, { useState } from 'react';
import { Module } from '../../types/curriculum';
import { useProgress } from '../../context/ProgressContext';
import { useAuth } from '../../context/AuthContext';
import { useSubmissions } from '../../context/SubmissionContext';
import { TaskSubmission } from '../../types/database';
import { CodeReviewModal } from './CodeReviewModal';
import { ProgressBar } from '../common/ProgressBar';
import { TOTAL_PLATFORM_LESSONS } from '../../data/modulesData';
import {
  Users, Award, CheckCircle2, RotateCcw, Clock,
  ArrowRight, Eye, ShieldCheck, ChevronRight, X,
  Code2, Sparkles, Send, AlertTriangle, FileCode, CheckSquare
} from 'lucide-react';

interface AdminDashboardProps {
  modules: Module[];
  onNavigateHome: () => void;
  onSelectLesson: (lessonId: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  modules,
  onNavigateHome,
  onSelectLesson
}) => {
  const { profiles, quickLogin, supabaseStatus } = useAuth();
  const { getUserProgress, resetUserProgress, simulateCompleteUserProgress } = useProgress();
  const { allSubmissions, pendingCount, reviewSubmission } = useSubmissions();

  const [activeTab, setActiveTab] = useState<'interns' | 'queue'>('interns');
  const [selectedInternId, setSelectedInternId] = useState<string | null>(null);
  const [reviewingSubmission, setReviewingSubmission] = useState<TaskSubmission | null>(null);
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  const interns = profiles.filter(p => p.role !== 'admin');
  const selectedIntern = profiles.find(p => p.id === selectedInternId);
  const selectedProgress = selectedInternId ? getUserProgress(selectedInternId) : null;

  // Filtered submissions
  const filteredSubmissions = allSubmissions.filter(s => {
    if (statusFilter === 'all') return true;
    return s.status === statusFilter;
  });

  return (
    <div className="admin-dashboard-container">
      {/* Header Banner */}
      <div className="admin-header-card">
        <div className="admin-header-title-wrap">
          <ShieldCheck size={28} className="text-accent" />
          <div>
            <h1 className="admin-title">Панель управления стажировкой (LMS Admin)</h1>
            <p className="admin-subtitle">
              Управление стажерами, мониторинг успеваемости и Code Review практических заданий
            </p>
          </div>
        </div>

        <div className="admin-status-pill">
          <span className={`status-dot ${supabaseStatus.connected ? 'online' : 'offline'}`} />
          <span>{supabaseStatus.message}</span>
        </div>
      </div>

      {/* Admin Tabs */}
      <div className="admin-tabs-bar">
        <button
          className={`admin-tab-btn ${activeTab === 'interns' ? 'active' : ''}`}
          onClick={() => setActiveTab('interns')}
        >
          <Users size={16} />
          <span>Стажёры платформы ({interns.length})</span>
        </button>

        <button
          className={`admin-tab-btn ${activeTab === 'queue' ? 'active' : ''}`}
          onClick={() => setActiveTab('queue')}
        >
          <FileCode size={16} />
          <span>Очередь заданий на Code Review</span>
          {pendingCount > 0 && <span className="tab-counter-badge">{pendingCount}</span>}
        </button>
      </div>

      {/* Tab 1: Interns List */}
      {activeTab === 'interns' && (
        <div className="admin-interns-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Стажёр</th>
                <th>Роль</th>
                <th>Прогресс</th>
                <th>Уроков</th>
                <th>Статус</th>
                <th style={{ textAlign: 'right' }}>Действия</th>
              </tr>
            </thead>
            <tbody>
              {interns.map(intern => {
                const prog = getUserProgress(intern.id);
                const completedCount = prog.completedLessons?.length || 0;
                const percentage = Math.round((completedCount / TOTAL_PLATFORM_LESSONS) * 100);
                const isCertified = completedCount >= TOTAL_PLATFORM_LESSONS;

                return (
                  <tr key={intern.id} className="intern-row">
                    <td>
                      <div className="intern-cell-profile">
                        <span className="intern-avatar">{intern.avatar_url || '👨‍💻'}</span>
                        <div>
                          <div className="intern-name">{intern.full_name}</div>
                          <div className="intern-email">{intern.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="role-chip intern">Стажёр</span>
                    </td>
                    <td style={{ minWidth: '160px' }}>
                      <div className="progress-cell-wrap">
                        <ProgressBar value={percentage} height={6} />
                        <span className="progress-cell-pct">{percentage}%</span>
                      </div>
                    </td>
                    <td>
                      <span className="lessons-count-chip">
                        {completedCount} / {TOTAL_PLATFORM_LESSONS}
                      </span>
                    </td>
                    <td>
                      {isCertified ? (
                        <span className="status-badge status-certified">
                          <Award size={12} /> Сертифицирован
                        </span>
                      ) : percentage > 20 ? (
                        <span className="status-badge status-active">⚡️ Обучается</span>
                      ) : (
                        <span className="status-badge status-new">🌱 Новичок</span>
                      )}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div className="row-actions-group">
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => setSelectedInternId(intern.id)}
                          title="Подробная успеваемость"
                        >
                          <Eye size={14} />
                          <span>Детали</span>
                        </button>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => {
                            quickLogin(intern.id);
                            onNavigateHome();
                          }}
                          title="Войти в систему от имени этого стажёра"
                        >
                          <span>Войти как стажёр</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab 2: Code Review Queue */}
      {activeTab === 'queue' && (
        <div className="admin-queue-view">
          <div className="queue-filter-bar">
            <span className="filter-label">Фильтр по статусу:</span>
            <div className="filter-buttons-group">
              <button
                className={`filter-btn ${statusFilter === 'all' ? 'active' : ''}`}
                onClick={() => setStatusFilter('all')}
              >
                Все ({allSubmissions.length})
              </button>
              <button
                className={`filter-btn ${statusFilter === 'pending' ? 'active' : ''}`}
                onClick={() => setStatusFilter('pending')}
              >
                Ожидают проверки ({allSubmissions.filter(s => s.status === 'pending').length})
              </button>
              <button
                className={`filter-btn ${statusFilter === 'approved' ? 'active' : ''}`}
                onClick={() => setStatusFilter('approved')}
              >
                Одобренные ({allSubmissions.filter(s => s.status === 'approved').length})
              </button>
              <button
                className={`filter-btn ${statusFilter === 'rejected' ? 'active' : ''}`}
                onClick={() => setStatusFilter('rejected')}
              >
                На доработке ({allSubmissions.filter(s => s.status === 'rejected').length})
              </button>
            </div>
          </div>

          <div className="admin-interns-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Стажёр</th>
                  <th>Урок / Задание</th>
                  <th>Статус</th>
                  <th>Дата отправки</th>
                  <th style={{ textAlign: 'right' }}>Code Review</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubmissions.length === 0 ? (
                  <tr>
                    <td colSpan={5} style={{ textAlign: 'center', padding: '36px' }}>
                      <CheckCircle2 size={32} className="text-success" style={{ margin: '0 auto 8px' }} />
                      <p className="text-muted">Нет заданий в данной категории</p>
                    </td>
                  </tr>
                ) : (
                  filteredSubmissions.map(sub => {
                    const allL = modules.flatMap(m => m.lessons);
                    const curLesson = allL.find(l => l.id === sub.lesson_id);

                    return (
                      <tr key={sub.id} className="submission-row">
                        <td>
                          <div className="intern-cell-profile">
                            <span className="intern-avatar">{sub.profiles?.avatar_url || '👨‍💻'}</span>
                            <div>
                              <div className="intern-name">{sub.profiles?.full_name || 'Стажёр'}</div>
                              <div className="intern-email">{sub.profiles?.email}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="queue-lesson-info">
                            <span className="queue-lesson-title">{curLesson?.title || sub.lesson_id}</span>
                            <span className="queue-lesson-id font-mono text-xs">{sub.lesson_id}</span>
                          </div>
                        </td>
                        <td>
                          {sub.status === 'pending' && (
                            <span className="status-badge status-new">⏳ Ожидает проверки</span>
                          )}
                          {sub.status === 'approved' && (
                            <span className="status-badge status-certified">✅ Одобрено</span>
                          )}
                          {sub.status === 'rejected' && (
                            <span className="status-badge status-warning">⚠️ На доработке</span>
                          )}
                        </td>
                        <td>
                          <span className="text-muted text-xs">
                            {sub.submitted_at ? new Date(sub.submitted_at).toLocaleString() : 'Недавно'}
                          </span>
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => setReviewingSubmission(sub)}
                          >
                            <FileCode size={14} />
                            <span>Провести Code Review</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Intern Details Drawer */}
      {selectedIntern && selectedProgress && (
        <div className="modal-backdrop" onClick={() => setSelectedInternId(null)}>
          <div className="modal-container intern-details-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-user">
                <div className="intern-avatar-lg">{selectedIntern.avatar_url || '👨‍💻'}</div>
                <div>
                  <h3 style={{ margin: 0 }}>Успеваемость: {selectedIntern.full_name}</h3>
                  <p className="text-muted text-xs">{selectedIntern.email} • ID: {selectedIntern.id}</p>
                </div>
              </div>
              <button className="btn-icon" onClick={() => setSelectedInternId(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body intern-details-body">
              <div className="intern-detail-kpi-card">
                <div className="kpi-row">
                  <div>
                    <span className="text-muted text-sm">Общий прогресс:</span>
                    <h2 style={{ margin: '4px 0', color: 'var(--accent-primary)' }}>
                      {Math.round(((selectedProgress.completedLessons?.length || 0) / TOTAL_PLATFORM_LESSONS) * 100)}%
                    </h2>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="text-muted text-sm">Уроков пройдено:</span>
                    <h4 style={{ margin: '4px 0' }}>
                      {selectedProgress.completedLessons?.length || 0} из {TOTAL_PLATFORM_LESSONS}
                    </h4>
                  </div>
                </div>
                <ProgressBar
                  value={Math.round(((selectedProgress.completedLessons?.length || 0) / TOTAL_PLATFORM_LESSONS) * 100)}
                  height={8}
                />
              </div>

              <div className="admin-actions-bar">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => simulateCompleteUserProgress(selectedIntern.id)}
                >
                  <Award size={16} />
                  <span>Симулировать 100% завершение (Сертификат)</span>
                </button>
                <button
                  className="btn btn-secondary btn-sm text-danger"
                  onClick={() => {
                    if (window.confirm(`Сбросить весь прогресс стажёра ${selectedIntern.full_name}?`)) {
                      resetUserProgress(selectedIntern.id);
                    }
                  }}
                >
                  <RotateCcw size={16} />
                  <span>Сбросить прогресс</span>
                </button>
              </div>

              <h4 style={{ marginTop: '20px', marginBottom: '12px' }}>Прогресс по модулям:</h4>
              <div className="detail-modules-list">
                {modules.map(mod => {
                  const modLessons = mod.lessons;
                  const doneInMod = modLessons.filter(l => selectedProgress.completedLessons?.includes(l.id));
                  const modPct = Math.round((doneInMod.length / modLessons.length) * 100);

                  return (
                    <div key={mod.id} className="detail-module-card">
                      <div className="detail-mod-header">
                        <div className="font-bold">{mod.title}</div>
                        <div className="text-sm text-muted">{doneInMod.length} / {modLessons.length} ({modPct}%)</div>
                      </div>
                      <ProgressBar value={modPct} height={5} />
                      <div className="lessons-chips-grid">
                        {modLessons.map(l => {
                          const isDone = selectedProgress.completedLessons?.includes(l.id);
                          const score = selectedProgress.quizScores?.[l.id];

                          return (
                            <div
                              key={l.id}
                              className={`lesson-chip ${isDone ? 'done' : 'pending'}`}
                              onClick={() => {
                                onSelectLesson(l.id);
                                setSelectedInternId(null);
                              }}
                              title={`Урок: ${l.title} (Кликните для перехода)`}
                            >
                              <span className="chip-lvl">L{l.level}</span>
                              <span className="chip-title">{l.title}</span>
                              {score !== undefined && (
                                <span className="chip-score">{score}%</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Code Review Modal */}
      {reviewingSubmission && (
        <CodeReviewModal
          submission={reviewingSubmission}
          modules={modules}
          onClose={() => setReviewingSubmission(null)}
          onReviewSubmit={reviewSubmission}
        />
      )}
    </div>
  );
};
