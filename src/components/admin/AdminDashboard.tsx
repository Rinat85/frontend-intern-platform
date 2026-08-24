import React, { useState } from 'react';
import { Module } from '../../types/curriculum';
import { useProgress } from '../../context/ProgressContext';
import { useAuth } from '../../context/AuthContext';
import { useSubmissions } from '../../context/SubmissionContext';
import { TaskSubmission, UserRole, Profile } from '../../types/database';
import { CodeReviewModal } from './CodeReviewModal';
import { ProgressBar } from '../common/ProgressBar';
import { TOTAL_PLATFORM_LESSONS } from '../../data/modulesData';
import {
  Users, Award, CheckCircle2, RotateCcw, Clock,
  ArrowRight, Eye, ShieldCheck, ChevronRight, X,
  Code2, Sparkles, Send, AlertTriangle, FileCode, CheckSquare,
  UserPlus, UserCog, UserCheck, Shield, Trash2, Edit3, Mail, Lock
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
  const { profiles, user: currentUser, isAdmin, quickLogin, createUser, updateUserRole, assignMentor, deleteUser, supabaseStatus } = useAuth();
  const { getUserProgress, resetUserProgress, simulateCompleteUserProgress } = useProgress();
  const { allSubmissions, pendingCount, reviewSubmission } = useSubmissions();

  const [activeTab, setActiveTab] = useState<'users' | 'queue'>('users');
  const [roleFilter, setRoleFilter] = useState<'all' | 'intern' | 'mentor' | 'admin'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  // Modals state
  const [selectedInternId, setSelectedInternId] = useState<string | null>(null);
  const [reviewingSubmission, setReviewingSubmission] = useState<TaskSubmission | null>(null);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [editingProfile, setEditingProfile] = useState<Profile | null>(null);

  // Add User Form state
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState<UserRole>('intern');
  const [newUserMentorId, setNewUserMentorId] = useState<string>('');
  const [addUserError, setAddUserError] = useState<string | null>(null);
  const [isAddingUser, setIsAddingUser] = useState(false);

  // Edit User Form state
  const [editRole, setEditRole] = useState<UserRole>('intern');
  const [editMentorId, setEditMentorId] = useState<string>('');
  const [isSavingEdit, setIsSavingEdit] = useState(false);

  const mentorsList = profiles.filter(p => p.role === 'mentor' || p.role === 'admin');

  // Filtered users
  const filteredUsers = profiles.filter(p => {
    if (roleFilter === 'all') return true;
    return p.role === roleFilter;
  });

  // Filtered submissions
  const filteredSubmissions = allSubmissions.filter(s => {
    if (statusFilter === 'all') return true;
    return s.status === statusFilter;
  });

  const selectedIntern = profiles.find(p => p.id === selectedInternId);
  const selectedProgress = selectedInternId ? getUserProgress(selectedInternId) : null;

  const handleOpenAddUser = () => {
    setNewUserName('');
    setNewUserEmail('');
    setNewUserRole('intern');
    setNewUserMentorId(mentorsList[0]?.id || '');
    setAddUserError(null);
    setIsAddUserOpen(true);
  };

  const handleAddUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddUserError(null);
    setIsAddingUser(true);
    try {
      const res = await createUser({
        name: newUserName,
        email: newUserEmail,
        role: newUserRole,
        mentorId: newUserRole === 'intern' ? (newUserMentorId || null) : null
      });

      if (res.success) {
        setIsAddUserOpen(false);
      } else {
        setAddUserError(res.error || 'Ошибка при создании пользователя');
      }
    } catch (err: any) {
      setAddUserError(err?.message || 'Ошибка создания');
    } finally {
      setIsAddingUser(false);
    }
  };

  const handleOpenEditUser = (p: Profile) => {
    setEditingProfile(p);
    setEditRole(p.role);
    setEditMentorId(p.mentor_id || '');
  };

  const handleSaveEditUser = async () => {
    if (!editingProfile) return;
    setIsSavingEdit(true);
    try {
      if (editRole !== editingProfile.role) {
        await updateUserRole(editingProfile.id, editRole);
      }
      if (editRole === 'intern') {
        await assignMentor(editingProfile.id, editMentorId || null);
      }
      setEditingProfile(null);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSavingEdit(false);
    }
  };

  const handleDeleteUserClick = async (userId: string, userName: string) => {
    if (window.confirm(`Вы действительно хотите удалить пользователя "${userName}" и все его данные?`)) {
      await deleteUser(userId);
      if (editingProfile?.id === userId) {
        setEditingProfile(null);
      }
    }
  };

  return (
    <div className="admin-dashboard-container">
      {/* Header Banner */}
      <div className="admin-header-card">
        <div className="admin-header-title-wrap">
          <ShieldCheck size={28} className="text-accent" />
          <div>
            <h1 className="admin-title">Панель управления стажировкой (LMS)</h1>
            <p className="admin-subtitle">
              Управление пользователями, назначение менторов, мониторинг успеваемости и Code Review
            </p>
          </div>
        </div>

        <div className="admin-header-actions-group">
          {isAdmin && (
            <button className="btn btn-primary btn-sm" onClick={handleOpenAddUser}>
              <UserPlus size={16} />
              <span>Добавить пользователя</span>
            </button>
          )}

          <div className="admin-status-pill">
            <span className={`status-dot ${supabaseStatus.connected ? 'online' : 'offline'}`} />
            <span>{supabaseStatus.message}</span>
          </div>
        </div>
      </div>

      {/* Admin Tabs */}
      <div className="admin-tabs-bar">
        <button
          className={`admin-tab-btn ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          <Users size={16} />
          <span>Пользователи и роли ({profiles.length})</span>
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

      {/* Tab 1: Users Management */}
      {activeTab === 'users' && (
        <div className="admin-queue-view">
          {/* Filter Bar */}
          <div className="queue-filter-bar">
            <span className="filter-label">Роль:</span>
            <div className="filter-buttons-group">
              <button
                className={`filter-btn ${roleFilter === 'all' ? 'active' : ''}`}
                onClick={() => setRoleFilter('all')}
              >
                Все ({profiles.length})
              </button>
              <button
                className={`filter-btn ${roleFilter === 'intern' ? 'active' : ''}`}
                onClick={() => setRoleFilter('intern')}
              >
                Стажёры ({profiles.filter(p => p.role === 'intern').length})
              </button>
              <button
                className={`filter-btn ${roleFilter === 'mentor' ? 'active' : ''}`}
                onClick={() => setRoleFilter('mentor')}
              >
                Менторы ({profiles.filter(p => p.role === 'mentor').length})
              </button>
              <button
                className={`filter-btn ${roleFilter === 'admin' ? 'active' : ''}`}
                onClick={() => setRoleFilter('admin')}
              >
                Администраторы ({profiles.filter(p => p.role === 'admin').length})
              </button>
            </div>
          </div>

          {/* Users Table */}
          <div className="admin-interns-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Пользователь</th>
                  <th>Роль</th>
                  <th>Назначенный ментор</th>
                  <th>Прогресс обучения</th>
                  <th style={{ textAlign: 'right' }}>Управление</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map(profile => {
                  const isIntern = profile.role === 'intern';
                  const prog = isIntern ? getUserProgress(profile.id) : null;
                  const completedCount = prog?.completedLessons?.length || 0;
                  const percentage = Math.round((completedCount / TOTAL_PLATFORM_LESSONS) * 100);
                  const isCertified = completedCount >= TOTAL_PLATFORM_LESSONS;
                  const mentor = profile.mentor_id ? profiles.find(m => m.id === profile.mentor_id) : null;

                  return (
                    <tr key={profile.id} className="intern-row">
                      <td>
                        <div className="intern-cell-profile">
                          <span className="intern-avatar">{profile.avatar_url || (profile.role === 'admin' ? '👑' : profile.role === 'mentor' ? '👨‍🏫' : '👨‍💻')}</span>
                          <div>
                            <div className="intern-name">{profile.full_name}</div>
                            <div className="intern-email">{profile.email}</div>
                          </div>
                        </div>
                      </td>

                      <td>
                        <span className={`role-chip ${profile.role}`}>
                          {profile.role === 'admin' ? '👑 Администратор' : profile.role === 'mentor' ? '👨‍🏫 Ментор' : '👨‍💻 Стажёр'}
                        </span>
                      </td>

                      <td>
                        {isIntern ? (
                          mentor ? (
                            <span className="mentor-assigned-badge" title={`Ментор: ${mentor.full_name}`}>
                              👨‍🏫 {mentor.full_name}
                            </span>
                          ) : (
                            <span className="text-muted text-xs">Не назначен</span>
                          )
                        ) : (
                          <span className="text-muted text-xs">—</span>
                        )}
                      </td>

                      <td style={{ minWidth: '160px' }}>
                        {isIntern ? (
                          <div className="progress-cell-wrap">
                            <ProgressBar value={percentage} height={6} />
                            <span className="progress-cell-pct">{percentage}% ({completedCount}/{TOTAL_PLATFORM_LESSONS})</span>
                          </div>
                        ) : (
                          <span className="text-muted text-xs">Преподавательский состав</span>
                        )}
                      </td>

                      <td style={{ textAlign: 'right' }}>
                        <div className="row-actions-group">
                          {isIntern && (
                            <button
                              className="btn btn-secondary btn-sm"
                              onClick={() => setSelectedInternId(profile.id)}
                              title="Успеваемость стажёра"
                            >
                              <Eye size={14} />
                              <span>Успеваемость</span>
                            </button>
                          )}

                          {isAdmin && (
                            <button
                              className="btn btn-secondary btn-sm"
                              onClick={() => handleOpenEditUser(profile)}
                              title="Редактировать роль и ментора"
                            >
                              <UserCog size={14} />
                              <span>Роль/Ментор</span>
                            </button>
                          )}

                          <button
                            className="btn btn-secondary btn-sm"
                            onClick={() => {
                              quickLogin(profile.id);
                              onNavigateHome();
                            }}
                            title="Войти в интерфейс под этим пользователем"
                          >
                            <span>Войти</span>
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

      {/* Modal: Add User */}
      {isAddUserOpen && (
        <div className="modal-backdrop" onClick={() => setIsAddUserOpen(false)}>
          <div className="modal-container user-manage-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-title">
                <UserPlus size={20} className="text-accent" />
                <h3 style={{ margin: 0 }}>Добавить нового пользователя</h3>
              </div>
              <button className="btn-icon" onClick={() => setIsAddUserOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAddUserSubmit} className="modal-body">
              {addUserError && <div className="auth-alert auth-alert-error">{addUserError}</div>}

              <div className="form-group">
                <label className="form-label">ФИО пользователя:</label>
                <input
                  type="text"
                  required
                  placeholder="Алексей Смирнов"
                  value={newUserName}
                  onChange={e => setNewUserName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email адрес:</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={newUserEmail}
                  onChange={e => setNewUserEmail(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Роль в системе:</label>
                <div className="role-selector-grid">
                  <div
                    className={`role-option-card ${newUserRole === 'intern' ? 'selected' : ''}`}
                    onClick={() => setNewUserRole('intern')}
                  >
                    <div className="role-option-icon">👨‍💻</div>
                    <div className="role-option-title">Стажёр</div>
                  </div>
                  <div
                    className={`role-option-card ${newUserRole === 'mentor' ? 'selected' : ''}`}
                    onClick={() => setNewUserRole('mentor')}
                  >
                    <div className="role-option-icon">👨‍🏫</div>
                    <div className="role-option-title">Ментор</div>
                  </div>
                  <div
                    className={`role-option-card ${newUserRole === 'admin' ? 'selected' : ''}`}
                    onClick={() => setNewUserRole('admin')}
                  >
                    <div className="role-option-icon">👑</div>
                    <div className="role-option-title">Администратор</div>
                  </div>
                </div>
              </div>

              {newUserRole === 'intern' && mentorsList.length > 0 && (
                <div className="form-group">
                  <label className="form-label">Назначить ментора:</label>
                  <select
                    className="form-input"
                    value={newUserMentorId}
                    onChange={e => setNewUserMentorId(e.target.value)}
                  >
                    <option value="">Без ментора (назначить позже)</option>
                    {mentorsList.map(m => (
                      <option key={m.id} value={m.id}>
                        {m.full_name} ({m.role === 'admin' ? 'Администратор' : 'Ментор'})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="modal-actions-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setIsAddUserOpen(false)}>
                  Отмена
                </button>
                <button type="submit" className="btn btn-primary" disabled={isAddingUser}>
                  {isAddingUser ? 'Создание...' : 'Создать пользователя'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Edit User Role & Mentor */}
      {editingProfile && (
        <div className="modal-backdrop" onClick={() => setEditingProfile(null)}>
          <div className="modal-container user-manage-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-title">
                <UserCog size={20} className="text-accent" />
                <div>
                  <h3 style={{ margin: 0 }}>Настройки пользователя: {editingProfile.full_name}</h3>
                  <p className="text-muted text-xs">{editingProfile.email}</p>
                </div>
              </div>
              <button className="btn-icon" onClick={() => setEditingProfile(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">Роль пользователя:</label>
                <div className="role-selector-grid">
                  <div
                    className={`role-option-card ${editRole === 'intern' ? 'selected' : ''}`}
                    onClick={() => setEditRole('intern')}
                  >
                    <div className="role-option-icon">👨‍💻</div>
                    <div className="role-option-title">Стажёр</div>
                  </div>
                  <div
                    className={`role-option-card ${editRole === 'mentor' ? 'selected' : ''}`}
                    onClick={() => setEditRole('mentor')}
                  >
                    <div className="role-option-icon">👨‍🏫</div>
                    <div className="role-option-title">Ментор</div>
                  </div>
                  <div
                    className={`role-option-card ${editRole === 'admin' ? 'selected' : ''}`}
                    onClick={() => setEditRole('admin')}
                  >
                    <div className="role-option-icon">👑</div>
                    <div className="role-option-title">Администратор</div>
                  </div>
                </div>
              </div>

              {editRole === 'intern' && (
                <div className="form-group">
                  <label className="form-label">Назначенный ментор:</label>
                  <select
                    className="form-input"
                    value={editMentorId}
                    onChange={e => setEditMentorId(e.target.value)}
                  >
                    <option value="">Не назначен</option>
                    {mentorsList
                      .filter(m => m.id !== editingProfile.id)
                      .map(m => (
                        <option key={m.id} value={m.id}>
                          {m.full_name} ({m.role === 'admin' ? 'Администратор' : 'Ментор'})
                        </option>
                      ))}
                  </select>
                </div>
              )}

              <div className="danger-zone-box">
                <div className="danger-zone-title">
                  <AlertTriangle size={16} className="text-danger" />
                  <span>Опасные действия</span>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm text-danger"
                  onClick={() => handleDeleteUserClick(editingProfile.id, editingProfile.full_name)}
                >
                  <Trash2 size={14} />
                  <span>Удалить пользователя из системы</span>
                </button>
              </div>

              <div className="modal-actions-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setEditingProfile(null)}>
                  Отмена
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSaveEditUser} disabled={isSavingEdit}>
                  {isSavingEdit ? 'Сохранение...' : 'Сохранить изменения'}
                </button>
              </div>
            </div>
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
