import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { UserRole } from '../../types/auth';
import { X, Mail, Lock, User as UserIcon, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'login' | 'register' | 'quick';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'quick'
}) => {
  const { users, login, register, quickLogin } = useAuth();
  const [activeTab, setActiveTab] = useState<'login' | 'register' | 'quick'>(initialTab);

  // Form states
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('intern');
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      const res = await login(email, role);
      if (res.success) {
        setSuccessMsg('Вход успешно выполнен!');
        setTimeout(() => {
          setSuccessMsg(null);
          onClose();
        }, 500);
      } else {
        setError(res.error || 'Ошибка входа');
      }
    } catch (err: any) {
      setError(err?.message || 'Ошибка входа');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      const res = await register(name, email, role);
      if (res.success) {
        setSuccessMsg('Регистрация завершена! Добро пожаловать.');
        setTimeout(() => {
          setSuccessMsg(null);
          onClose();
        }, 500);
      } else {
        setError(res.error || 'Ошибка регистрации');
      }
    } catch (err: any) {
      setError(err?.message || 'Ошибка регистрации');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickSelect = (userId: string) => {
    quickLogin(userId);
    setSuccessMsg('Вход выполнен!');
    setTimeout(() => {
      setSuccessMsg(null);
      onClose();
    }, 400);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container auth-modal" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-title">
            <Sparkles size={20} className="text-accent" />
            <div>
              <h3 style={{ margin: 0 }}>Вход и регистрация</h3>
              <p className="text-muted text-xs">RocketGate Frontend Intern Platform</p>
            </div>
          </div>
          <button className="btn-icon" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="auth-tabs">
          <button
            className={`auth-tab-btn ${activeTab === 'quick' ? 'active' : ''}`}
            onClick={() => { setActiveTab('quick'); setError(null); }}
          >
            ⚡️ Быстрый демо-вход
          </button>
          <button
            className={`auth-tab-btn ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => { setActiveTab('login'); setError(null); }}
          >
            Вход
          </button>
          <button
            className={`auth-tab-btn ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => { setActiveTab('register'); setError(null); }}
          >
            Регистрация
          </button>
        </div>

        <div className="modal-body auth-modal-body">
          {error && <div className="auth-alert auth-alert-error">{error}</div>}
          {successMsg && <div className="auth-alert auth-alert-success"><CheckCircle2 size={16} /> {successMsg}</div>}

          {/* Quick Demo Accounts Tab */}
          {activeTab === 'quick' && (
            <div className="quick-accounts-list">
              <p className="text-sm text-muted" style={{ marginBottom: '14px' }}>
                Выберите готовый аккаунт для моментального входа и тестирования платформы:
              </p>
              {users.map(u => (
                <div
                  key={u.id}
                  className="quick-user-card"
                  onClick={() => handleQuickSelect(u.id)}
                >
                  <div className="quick-user-avatar">{u.avatar || '👤'}</div>
                  <div className="quick-user-info">
                    <div className="quick-user-name">
                      {u.name}
                      <span className={`role-badge ${u.role === 'admin' ? 'role-admin' : 'role-intern'}`}>
                        {u.role === 'admin' ? 'Администратор' : 'Стажёр'}
                      </span>
                    </div>
                    <div className="quick-user-email">{u.email}</div>
                  </div>
                  <button className="btn btn-secondary btn-sm quick-select-btn">
                    Войти <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Login Form */}
          {activeTab === 'login' && (
            <form onSubmit={handleLoginSubmit} className="auth-form">
              <div className="form-group">
                <label className="form-label">Email адрес</label>
                <div className="input-with-icon">
                  <Mail size={16} className="field-icon" />
                  <input
                    type="email"
                    required
                    placeholder="alex@intern.io"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Пароль</label>
                <div className="input-with-icon">
                  <Lock size={16} className="field-icon" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block auth-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Вход...' : 'Войти в аккаунт'}
              </button>

              <div className="auth-footer-note">
                Нет аккаунта?{' '}
                <button
                  type="button"
                  className="link-btn"
                  onClick={() => { setActiveTab('register'); setError(null); }}
                >
                  Зарегистрироваться
                </button>
              </div>
            </form>
          )}

          {/* Register Form */}
          {activeTab === 'register' && (
            <form onSubmit={handleRegisterSubmit} className="auth-form">
              <div className="form-group">
                <label className="form-label">Ваше имя (ФИО для сертификата)</label>
                <div className="input-with-icon">
                  <UserIcon size={16} className="field-icon" />
                  <input
                    type="text"
                    required
                    placeholder="Алексей Смирнов"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email адрес</label>
                <div className="input-with-icon">
                  <Mail size={16} className="field-icon" />
                  <input
                    type="email"
                    required
                    placeholder="intern@academy.io"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Пароль</label>
                <div className="input-with-icon">
                  <Lock size={16} className="field-icon" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Тип аккаунта / Роль</label>
                <div className="role-selector-grid">
                  <div
                    className={`role-option-card ${role === 'intern' ? 'selected' : ''}`}
                    onClick={() => setRole('intern')}
                  >
                    <div className="role-option-icon">👨‍💻</div>
                    <div className="role-option-title">Стажёр</div>
                    <div className="role-option-desc">Изучение 67 уровней, решение задач, личный прогресс и сертификат</div>
                  </div>

                  <div
                    className={`role-option-card ${role === 'admin' ? 'selected' : ''}`}
                    onClick={() => setRole('admin')}
                  >
                    <div className="role-option-icon">👑</div>
                    <div className="role-option-title">Ментор / Админ</div>
                    <div className="role-option-desc">Доступ к панели управления, Code Review и проверка решений стажеров</div>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block auth-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Регистрация...' : 'Создать аккаунт'}
              </button>

              <div className="auth-footer-note">
                Уже есть аккаунт?{' '}
                <button
                  type="button"
                  className="link-btn"
                  onClick={() => { setActiveTab('login'); setError(null); }}
                >
                  Войти
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
