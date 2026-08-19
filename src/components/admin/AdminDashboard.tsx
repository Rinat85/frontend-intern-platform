import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useProgress, TOTAL_PLATFORM_LESSONS } from '../../context/ProgressContext';
import { User } from '../../types/auth';
import { Module } from '../../types/curriculum';
import {
  Users, Award, Target, TrendingUp, Clock, Search, Filter,
  CheckCircle2, ArrowRight, Eye, RotateCcw, Sparkles,
  Download, ChevronRight, X, Code2, BookOpen, AlertCircle
} from 'lucide-react';
import { ProgressBar } from '../common/ProgressBar';

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
  const { users, quickLogin, deleteUser } = useAuth();
  const {
    getAllProgress,
    resetUserProgress,
    simulateCompleteUserProgress
  } = useProgress();

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'certified' | 'in_progress' | 'beginner'>('all');
  const [selectedInternId, setSelectedInternId] = useState<string | null>(null);

  const allProgress = getAllProgress();
  const interns = users.filter(u => u.role === 'intern');

  // Compute analytics
  const totalInterns = interns.length;
  let totalPctSum = 0;
  let certifiedCount = 0;
  let totalScoresSum = 0;
  let totalScoresCount = 0;
  let activeLastWeekCount = 0;

  const now = Date.now();
  const sevenDaysMs = 7 * 24 * 3600 * 1000;

  interns.forEach(intern => {
    const p = allProgress[intern.id] || {
      completedLessons: [],
      completedTasks: [],
      quizScores: {}
    };
    const completedCount = p.completedLessons?.length || 0;
    const pct = Math.round((completedCount / TOTAL_PLATFORM_LESSONS) * 100);
    totalPctSum += pct;

    if (completedCount >= TOTAL_PLATFORM_LESSONS) {
      certifiedCount++;
    }

    const scores = Object.values(p.quizScores || {});
    if (scores.length > 0) {
      const sum = scores.reduce((a, b) => a + b, 0);
      totalScoresSum += sum;
      totalScoresCount += scores.length;
    }

    const lastActive = new Date(intern.lastActiveAt).getTime();
    if (now - lastActive < sevenDaysMs) {
      activeLastWeekCount++;
    }
  });

  const averageProgress = totalInterns > 0 ? Math.round(totalPctSum / totalInterns) : 0;
  const averageQuizScore = totalScoresCount > 0 ? Math.round(totalScoresSum / totalScoresCount) : 0;

  // Filter interns
  const filteredInterns = interns.filter(intern => {
    const matchesSearch =
      intern.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      intern.email.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    const p = allProgress[intern.id] || { completedLessons: [] };
    const completedCount = p.completedLessons?.length || 0;
    const pct = Math.round((completedCount / TOTAL_PLATFORM_LESSONS) * 100);

    if (statusFilter === 'certified') return completedCount >= TOTAL_PLATFORM_LESSONS;
    if (statusFilter === 'in_progress') return pct > 0 && pct < 100;
    if (statusFilter === 'beginner') return pct === 0;
    return true;
  });

  // Selected intern for details drawer
  const selectedIntern = selectedInternId ? users.find(u => u.id === selectedInternId) : null;
  const selectedProgress = selectedInternId ? allProgress[selectedInternId] : null;

  const handleExportSummary = () => {
    const data = interns.map(u => {
      const p = allProgress[u.id] || { completedLessons: [], quizScores: {} };
      const pct = Math.round(((p.completedLessons?.length || 0) / TOTAL_PLATFORM_LESSONS) * 100);
      return {
        id: u.id,
        name: u.name,
        email: u.email,
        progressPercent: pct,
        completedLessonsCount: p.completedLessons?.length || 0,
        registeredAt: u.registeredAt,
        lastActiveAt: u.lastActiveAt
      };
    });

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `frontend_interns_report_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="admin-dashboard-container">
      {/* Top Banner */}
      <div className="admin-header-banner">
        <div className="admin-banner-left">
          <div className="admin-badge-icon">
            <Sparkles size={24} />
          </div>
          <div>
            <div className="admin-tag">Панель управления Ментора</div>
            <h1 className="admin-title">Мониторинг успеваемости стажёров</h1>
            <p className="admin-subtitle">
              Отслеживайте личный прогресс каждого ученика, пройденные тесты, решения задач и готовность к выдаче сертификата.
            </p>
          </div>
        </div>

        <div className="admin-banner-right">
          <button className="btn btn-secondary btn-sm" onClick={handleExportSummary}>
            <Download size={16} />
            <span>Экспорт отчета</span>
          </button>
          <button className="btn btn-primary btn-sm" onClick={onNavigateHome}>
            <BookOpen size={16} />
            <span>К учебным материалам</span>
          </button>
        </div>
      </div>

      {/* Analytics KPI Widgets */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="stat-icon-wrap" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#6366f1' }}>
            <Users size={22} />
          </div>
          <div className="stat-details">
            <div className="stat-value">{totalInterns}</div>
            <div className="stat-label">Всего стажёров</div>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="stat-icon-wrap" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
            <TrendingUp size={22} />
          </div>
          <div className="stat-details">
            <div className="stat-value">{averageProgress}%</div>
            <div className="stat-label">Средний прогресс</div>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="stat-icon-wrap" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>
            <Award size={22} />
          </div>
          <div className="stat-details">
            <div className="stat-value">{certifiedCount}</div>
            <div className="stat-label">Выдано сертификатов (100%)</div>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="stat-icon-wrap" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899' }}>
            <Target size={22} />
          </div>
          <div className="stat-details">
            <div className="stat-value">{averageQuizScore > 0 ? `${averageQuizScore}%` : '—'}</div>
            <div className="stat-label">Средний балл квизов</div>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="stat-icon-wrap" style={{ background: 'rgba(14, 165, 233, 0.15)', color: '#0ea5e9' }}>
            <Clock size={22} />
          </div>
          <div className="stat-details">
            <div className="stat-value">{activeLastWeekCount}</div>
            <div className="stat-label">Активны за неделю</div>
          </div>
        </div>
      </div>

      {/* Interns Filter & Search */}
      <div className="admin-controls-card">
        <div className="admin-search-wrap">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="admin-search-input"
            placeholder="Поиск по имени или email стажёра..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
              <X size={16} />
            </button>
          )}
        </div>

        <div className="admin-filter-tabs">
          <button
            className={`filter-tab-btn ${statusFilter === 'all' ? 'active' : ''}`}
            onClick={() => setStatusFilter('all')}
          >
            Все ({interns.length})
          </button>
          <button
            className={`filter-tab-btn ${statusFilter === 'certified' ? 'active' : ''}`}
            onClick={() => setStatusFilter('certified')}
          >
            🏆 Выпускники ({certifiedCount})
          </button>
          <button
            className={`filter-tab-btn ${statusFilter === 'in_progress' ? 'active' : ''}`}
            onClick={() => setStatusFilter('in_progress')}
          >
            ⚡️ В процессе ({interns.length - certifiedCount})
          </button>
          <button
            className={`filter-tab-btn ${statusFilter === 'beginner' ? 'active' : ''}`}
            onClick={() => setStatusFilter('beginner')}
          >
            🌱 Новички (0%)
          </button>
        </div>
      </div>

      {/* Interns Table / Cards */}
      <div className="admin-interns-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Стажёр</th>
              <th>Общий прогресс</th>
              <th>Модули (HTML / CSS / JS / PRO)</th>
              <th>Средний квиз</th>
              <th>Статус</th>
              <th style={{ textAlign: 'right' }}>Действия</th>
            </tr>
          </thead>
          <tbody>
            {filteredInterns.length === 0 ? (
              <tr>
                <td colSpan={6} className="table-empty-cell">
                  <AlertCircle size={24} />
                  <span>Стажёры по заданному фильтру не найдены</span>
                </td>
              </tr>
            ) : (
              filteredInterns.map(intern => {
                const p = allProgress[intern.id] || {
                  completedLessons: [],
                  completedTasks: [],
                  quizScores: {}
                };
                const completedCount = p.completedLessons?.length || 0;
                const pct = Math.round((completedCount / TOTAL_PLATFORM_LESSONS) * 100);
                const isCertified = completedCount >= TOTAL_PLATFORM_LESSONS;

                // Module breakdown
                const htmlDone = p.completedLessons?.filter(id => id.startsWith('html-')).length || 0;
                const cssDone = p.completedLessons?.filter(id => id.startsWith('css-')).length || 0;
                const jsDone = p.completedLessons?.filter(id => id.startsWith('javascript-')).length || 0;
                const proDone = p.completedLessons?.filter(id => id.startsWith('pro-')).length || 0;

                // Average quiz
                const scores = Object.values(p.quizScores || {});
                const avgQuiz = scores.length > 0
                  ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
                  : null;

                return (
                  <tr key={intern.id} className="intern-row">
                    <td>
                      <div className="intern-user-cell">
                        <div className="intern-avatar">{intern.avatar || '👨‍💻'}</div>
                        <div>
                          <div className="intern-name">{intern.name}</div>
                          <div className="intern-email">{intern.email}</div>
                          <div className="intern-date text-xs text-muted">
                            Регистрация: {new Date(intern.registeredAt).toLocaleDateString('ru-RU')}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="table-progress-cell">
                        <div className="progress-top-info">
                          <span className="font-bold">{pct}%</span>
                          <span className="text-muted text-xs">{completedCount} / {TOTAL_PLATFORM_LESSONS}</span>
                        </div>
                        <ProgressBar value={pct} height={6} />
                      </div>
                    </td>

                    <td>
                      <div className="module-badges-list">
                        <span className={`mod-pill ${htmlDone === 11 ? 'done' : ''}`} title={`HTML: ${htmlDone}/11`}>
                          HTML {htmlDone}/11
                        </span>
                        <span className={`mod-pill ${cssDone === 21 ? 'done' : ''}`} title={`CSS: ${cssDone}/21`}>
                          CSS {cssDone}/21
                        </span>
                        <span className={`mod-pill ${jsDone === 14 ? 'done' : ''}`} title={`JS: ${jsDone}/14`}>
                          JS {jsDone}/14
                        </span>
                        <span className={`mod-pill ${proDone === 2 ? 'done' : ''}`} title={`PRO: ${proDone}/2`}>
                          PRO {proDone}/2
                        </span>
                      </div>
                    </td>

                    <td>
                      <div className="quiz-score-cell">
                        {avgQuiz !== null ? (
                          <span className="score-badge font-bold">
                            {avgQuiz}% <span className="text-xs text-muted">({scores.length} тестов)</span>
                          </span>
                        ) : (
                          <span className="text-muted text-xs">Не сдавал</span>
                        )}
                      </div>
                    </td>

                    <td>
                      {isCertified ? (
                        <span className="status-badge status-certified">
                          🏆 Выпускник
                        </span>
                      ) : pct > 0 ? (
                        <span className="status-badge status-progress">
                          ⚡️ Обучается
                        </span>
                      ) : (
                        <span className="status-badge status-new">
                          🌱 Новичок
                        </span>
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
                          title="Войти в интерфейс от имени этого стажёра"
                        >
                          <span>Войти как ученик</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Detailed Intern Drawer / Modal */}
      {selectedIntern && selectedProgress && (
        <div className="modal-backdrop" onClick={() => setSelectedInternId(null)}>
          <div className="modal-container intern-details-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-user">
                <div className="intern-avatar-lg">{selectedIntern.avatar || '👨‍💻'}</div>
                <div>
                  <h3 style={{ margin: 0 }}>Успеваемость: {selectedIntern.name}</h3>
                  <p className="text-muted text-xs">{selectedIntern.email} • ID: {selectedIntern.id}</p>
                </div>
              </div>
              <button className="btn-icon" onClick={() => setSelectedInternId(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body intern-details-body">
              {/* Progress Bar Summary */}
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

              {/* Fast-track Admin Actions */}
              <div className="admin-actions-bar">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => simulateCompleteUserProgress(selectedIntern.id)}
                >
                  <Award size={16} />
                  <span>Симулировать 100% завершение (Выдать сертификат)</span>
                </button>
                <button
                  className="btn btn-secondary btn-sm text-danger"
                  onClick={() => {
                    if (window.confirm(`Сбросить весь прогресс стажёра ${selectedIntern.name}?`)) {
                      resetUserProgress(selectedIntern.id);
                    }
                  }}
                >
                  <RotateCcw size={16} />
                  <span>Сбросить прогресс</span>
                </button>
              </div>

              {/* Module-by-Module Breakdown */}
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

              {/* Saved Sandbox Code Viewer if any */}
              {selectedProgress.sandboxSavedCode && Object.keys(selectedProgress.sandboxSavedCode).length > 0 && (
                <div style={{ marginTop: '24px' }}>
                  <h4 style={{ marginBottom: '12px' }}>Сохраненный код в песочницах:</h4>
                  <div className="sandbox-saved-list">
                    {Object.entries(selectedProgress.sandboxSavedCode).map(([lessonId, code]) => (
                      <div key={lessonId} className="sandbox-code-preview">
                        <div className="sandbox-preview-head">
                          <Code2 size={16} />
                          <span>Урок: {lessonId}</span>
                        </div>
                        <pre className="code-pre">
                          {code.html ? `<!-- HTML -->\n${code.html}\n\n` : ''}
                          {code.css ? `/* CSS */\n${code.css}\n\n` : ''}
                          {code.js ? `// JS\n${code.js}` : ''}
                        </pre>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
