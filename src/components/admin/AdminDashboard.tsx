import React, { useState } from 'react';
import { Module } from '../../types/curriculum';
import { useProgress } from '../../context/ProgressContext';
import { useAuth } from '../../context/AuthContext';
import { useSubmissions } from '../../context/SubmissionContext';
import { useToast } from '../../context/ToastContext';
import { TaskSubmission, UserRole, Profile } from '../../types/database';
import { CodeReviewModal } from './CodeReviewModal';
import { ProgressBar } from '../common/ProgressBar';
import { TOTAL_PLATFORM_LESSONS } from '../../data/modulesData';
import {
  Users, Award, CheckCircle2, RotateCcw, Clock,
  ArrowRight, Eye, ShieldCheck, ChevronRight, X,
  Code2, Sparkles, Send, AlertTriangle, FileCode, CheckSquare,
  UserPlus, UserCog, UserCheck, Shield, Trash2, Edit3, Mail, Lock,
  Check, Filter
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
  const {
    profiles,
    user: currentUser,
    isAdmin,
    isMentor,
    assignedInterns,
    quickLogin,
    createUser,
    updateUserRole,
    assignMentors,
    deleteUser,
    supabaseStatus
  } = useAuth();

  const { getUserProgress, resetUserProgress, simulateCompleteUserProgress } = useProgress();
  const { allSubmissions, pendingCount, reviewSubmission } = useSubmissions();
  const { toast, confirm } = useToast();

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
  const [selectedMentorIds, setSelectedMentorIds] = useState<string[]>([]);
  const [addUserError, setAddUserError] = useState<string | null>(null);
  const [isAddingUser, setIsAddingUser] = useState(false);

  // Edit User Form state
  const [editRole, setEditRole] = useState<UserRole>('intern');
  const [editMentorIds, setEditMentorIds] = useState<string[]>([]);
  const [isSavingEdit, setIsSavingEdit] = useState(false);

  // List of all available mentors & admins
  const mentorsList = profiles.filter(p => p.role === 'mentor' || p.role === 'admin');

  // Visible users based on role:
  // Admin: can see all users (or filtered by role)
  // Mentor: can ONLY see their assigned interns
  const visibleUsers = isAdmin
    ? profiles.filter(p => (roleFilter === 'all' ? true : p.role === roleFilter))
    : assignedInterns;

  // Visible submissions based on role:
  // Admin: can see all submissions
  // Mentor: can ONLY see submissions of their assigned interns
  const visibleSubmissions = allSubmissions.filter(s => {
    if (statusFilter !== 'all' && s.status !== statusFilter) return false;
    if (isAdmin) return true;
    if (isMentor && currentUser?.id) {
      const studentProfile = profiles.find(p => p.id === s.user_id);
      return studentProfile?.mentor_ids?.includes(currentUser.id);
    }
    return false;
  });

  const selectedIntern = profiles.find(p => p.id === selectedInternId);
  const selectedProgress = selectedInternId ? getUserProgress(selectedInternId) : null;

  const handleOpenAddUser = () => {
    setNewUserName('');
    setNewUserEmail('');
    setNewUserRole('intern');
    setSelectedMentorIds([]);
    setAddUserError(null);
    setIsAddUserOpen(true);
  };

  const toggleAddMentorSelection = (mentorId: string) => {
    setSelectedMentorIds(prev =>
      prev.includes(mentorId) ? prev.filter(id => id !== mentorId) : [...prev, mentorId]
    );
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
        mentorIds: newUserRole === 'intern' ? selectedMentorIds : []
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
    setEditMentorIds(p.mentor_ids || []);
  };

  const toggleEditMentorSelection = (mentorId: string) => {
    setEditMentorIds(prev =>
      prev.includes(mentorId) ? prev.filter(id => id !== mentorId) : [...prev, mentorId]
    );
  };

  const handleSaveEditUser = async () => {
    if (!editingProfile) return;
    setIsSavingEdit(true);
    try {
      if (editRole !== editingProfile.role) {
        await updateUserRole(editingProfile.id, editRole);
      }
      if (editRole === 'intern') {
        await assignMentors(editingProfile.id, editMentorIds);
      }
      setEditingProfile(null);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSavingEdit(false);
    }
  };

  const handleDeleteUserClick = (userId: string, userName: string) => {
    confirm({
      title: 'Удаление пользователя',
      message: `Вы действительно хотите удалить пользователя "${userName}" и все связанные с ним данные и прогресс?`,
      confirmText: 'Да, удалить',
      cancelText: 'Отмена',
      isDestructive: true,
      onConfirm: async () => {
        const ok = await deleteUser(userId);
        if (ok) {
          toast.success(`Пользователь "${userName}" успешно удален`, 'Удаление');
          if (editingProfile?.id === userId) {
            setEditingProfile(null);
          }
        } else {
          toast.error('Не удалось удалить пользователя', 'Ошибка');
        }
      }
    });
  };

  return (
    <div className="admin-dashboard-container">
      {/* Header Banner */}
      <div className="admin-header-card">
        <div className="admin-header-title-wrap">
          <ShieldCheck size={28} className="text-accent" />
          <div>
            <h1 className="admin-title">
              {isAdmin ? 'Панель Администратора (LMS Management)' : 'Панель Ментора (LMS Workspace)'}
            </h1>
            <p className="admin-subtitle">
              {isAdmin
                ? 'Полный контроль пользователей, назначение менторов, мониторинг успеваемости и проверка заданий'
                : `Просмотр успеваемости ваших подопечных стажёров (${assignedInterns.length}) и Code Review заданий`}
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

      {/* Admin / Mentor Tabs */}
      <div className="admin-tabs-bar">
        <button
          className={`admin-tab-btn ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          <Users size={16} />
          <span>
            {isAdmin ? `Пользователи и роли (${profiles.length})` : `Мои стажёры (${assignedInterns.length})`}
          </span>
        </button>

        <button
          className={`admin-tab-btn ${activeTab === 'queue' ? 'active' : ''}`}
          onClick={() => setActiveTab('queue')}
        >
          <FileCode size={16} />
          <span>Очередь заданий на Code Review</span>
          {visibleSubmissions.filter(s => s.status === 'pending').length > 0 && (
            <span className="tab-counter-badge">
              {visibleSubmissions.filter(s => s.status === 'pending').length}
            </span>
          )}
        </button>
      </div>

      {/* Tab 1: Users / Interns Management */}
      {activeTab === 'users' && (
        <div className="admin-queue-view">
          {/* Admin Role Filters */}
          {isAdmin && (
            <div className="queue-filter-bar">
              <span className="filter-label">Фильтр ролей:</span>
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
          )}

          {/* Users Table */}
          <div className="admin-interns-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Пользователь</th>
                  <th>Роль</th>
                  <th>Назначенные менторы</th>
                  <th>Прогресс обучения</th>
                  <th style={{ textAlign: 'right' }}>Управление</th>
                </tr>
              </thead>
              <tbody>
                {visibleUsers.length === 0 ? (
                  <tr>
                    <td colSpan={5} style={{ textAlign: 'center', padding: '36px' }}>
                      <Users size={32} className="text-muted" style={{ margin: '0 auto 8px' }} />
                      <p className="text-muted">
                        {isMentor
                          ? 'У вас пока нет прикреплённых стажёров. Администратор может назначить вам подопечных.'
                          : 'Нет пользователей в выбранной категории.'}
                      </p>
                    </td>
                  </tr>
                ) : (
                  visibleUsers.map(profile => {
                    const isIntern = profile.role === 'intern';
                    const prog = isIntern ? getUserProgress(profile.id) : null;
                    const completedCount = prog?.completedLessons?.length || 0;
                    const percentage = Math.round((completedCount / TOTAL_PLATFORM_LESSONS) * 100);
                    const mentorIds = profile.mentor_ids || [];
                    const assignedMentorsList = profiles.filter(m => mentorIds.includes(m.id));

                    return (
                      <tr key={profile.id} className="intern-row">
                        <td>
                          <div className="intern-cell-profile">
                            <span className="intern-avatar">
                              {profile.avatar_url || (profile.role === 'admin' ? '👑' : profile.role === 'mentor' ? '👨‍🏫' : '👨‍💻')}
                            </span>
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
                            assignedMentorsList.length > 0 ? (
                              <div className="mentors-chips-wrap">
                                {assignedMentorsList.map(m => (
                                  <span key={m.id} className="mentor-assigned-badge" title={m.email}>
                                    👨‍🏫 {m.full_name}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <span className="text-muted text-xs">Не назначены</span>
                            )
                          ) : (
                            <span className="text-muted text-xs">—</span>
                          )}
                        </td>

                        <td style={{ minWidth: '160px' }}>
                          {isIntern ? (
                            <div className="progress-cell-wrap">
                              <ProgressBar value={percentage} height={6} />
                              <span className="progress-cell-pct">
                                {percentage}% ({completedCount}/{TOTAL_PLATFORM_LESSONS})
                              </span>
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
                                title="Редактировать роль и менторов"
                              >
                                <UserCog size={14} />
                                <span>Роль/Менторы</span>
                              </button>
                            )}

                            {isAdmin && (
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
                            )}
                          </div>
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

      {/* Tab 2: Code Review Queue */}
      {activeTab === 'queue' && (
        <div className="admin-queue-view">
          <div className="queue-filter-bar">
            <span className="filter-label">Фильтр статуса:</span>
            <div className="filter-buttons-group">
              <button
                className={`filter-btn ${statusFilter === 'all' ? 'active' : ''}`}
                onClick={() => setStatusFilter('all')}
              >
                Все ({visibleSubmissions.length})
              </button>
              <button
                className={`filter-btn ${statusFilter === 'pending' ? 'active' : ''}`}
                onClick={() => setStatusFilter('pending')}
              >
                Ожидают проверки ({visibleSubmissions.filter(s => s.status === 'pending').length})
              </button>
              <button
                className={`filter-btn ${statusFilter === 'approved' ? 'active' : ''}`}
                onClick={() => setStatusFilter('approved')}
              >
                Одобренные ({visibleSubmissions.filter(s => s.status === 'approved').length})
              </button>
              <button
                className={`filter-btn ${statusFilter === 'rejected' ? 'active' : ''}`}
                onClick={() => setStatusFilter('rejected')}
              >
                На доработке ({visibleSubmissions.filter(s => s.status === 'rejected').length})
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
                {visibleSubmissions.length === 0 ? (
                  <tr>
                    <td colSpan={5} style={{ textAlign: 'center', padding: '36px' }}>
                      <CheckCircle2 size={32} className="text-success" style={{ margin: '0 auto 8px' }} />
                      <p className="text-muted">Нет заданий на проверку в данной категории</p>
                    </td>
                  </tr>
                ) : (
                  visibleSubmissions.map(sub => {
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

      {/* Modal: Add User (Admin Only) */}
      {isAddUserOpen && isAdmin && (
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
                  <label className="form-label">Прикрепить менторов (выберите одного или нескольких):</label>
                  <div className="mentors-checkbox-list">
                    {mentorsList.map(m => {
                      const isSelected = selectedMentorIds.includes(m.id);
                      return (
                        <div
                          key={m.id}
                          className={`mentor-checkbox-item ${isSelected ? 'checked' : ''}`}
                          onClick={() => toggleAddMentorSelection(m.id)}
                        >
                          <div className="checkbox-box">{isSelected && <Check size={14} />}</div>
                          <div className="mentor-check-info">
                            <span className="mentor-check-name">{m.full_name}</span>
                            <span className="text-xs text-muted">({m.role === 'admin' ? 'Админ' : 'Ментор'})</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
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

      {/* Modal: Edit User Role & Mentors (Admin Only) */}
      {editingProfile && isAdmin && (
        <div className="modal-backdrop" onClick={() => setEditingProfile(null)}>
          <div className="modal-container user-manage-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-title">
                <UserCog size={20} className="text-accent" />
                <div>
                  <h3 style={{ margin: 0 }}>Настройки: {editingProfile.full_name}</h3>
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
                  <label className="form-label">Прикреплённые менторы (множественный выбор):</label>
                  <div className="mentors-checkbox-list">
                    {mentorsList
                      .filter(m => m.id !== editingProfile.id)
                      .map(m => {
                        const isSelected = editMentorIds.includes(m.id);
                        return (
                          <div
                            key={m.id}
                            className={`mentor-checkbox-item ${isSelected ? 'checked' : ''}`}
                            onClick={() => toggleEditMentorSelection(m.id)}
                          >
                            <div className="checkbox-box">{isSelected && <Check size={14} />}</div>
                            <div className="mentor-check-info">
                              <span className="mentor-check-name">{m.full_name}</span>
                              <span className="text-xs text-muted">({m.role === 'admin' ? 'Админ' : 'Ментор'})</span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
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

              {isAdmin && (
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
                      confirm({
                        title: 'Сброс прогресса стажёра',
                        message: `Сбросить весь прогресс стажёра ${selectedIntern.full_name}? Все пройденные уроки и квизы будут обнулены.`,
                        confirmText: 'Сбросить прогресс',
                        cancelText: 'Отмена',
                        isDestructive: true,
                        onConfirm: () => {
                          resetUserProgress(selectedIntern.id);
                          toast.info(`Прогресс стажёра ${selectedIntern.full_name} сброшен`, 'Сброс прогресса');
                        }
                      })
                    }}
                  >
                    <RotateCcw size={16} />
                    <span>Сбросить прогресс</span>
                  </button>
                </div>
              )}

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
