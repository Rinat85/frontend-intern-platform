import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  X, Mail, Lock, User as UserIcon, Sparkles, CheckCircle2,
  ArrowRight, ShieldAlert, KeyRound, CheckCheck, Send, Eye, EyeOff
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'login' | 'register';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'login'
}) => {
  const { login, register } = useAuth();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(initialTab);

  // Form states
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [emailConfirmationSent, setEmailConfirmationSent] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setEmailConfirmationSent(null);
    setIsSubmitting(true);

    try {
      const res = await login(email, password);
      if (res.success) {
        setSuccessMsg('Вход успешно выполнен!');
        setTimeout(() => {
          setSuccessMsg(null);
          onClose();
        }, 400);
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
    setEmailConfirmationSent(null);

    // Password validation
    if (password.length < 6) {
      setError('Пароль должен содержать не менее 6 символов.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Введённые пароли не совпадают. Пожалуйста, проверьте правильность.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await register(name, email, password);
      if (res.success) {
        if (res.requiresEmailConfirmation) {
          setEmailConfirmationSent(email);
        } else {
          setSuccessMsg('Регистрация завершена! Добро пожаловать на стажировку.');
          setTimeout(() => {
            setSuccessMsg(null);
            onClose();
          }, 500);
        }
      } else {
        setError(res.error || 'Ошибка регистрации');
      }
    } catch (err: any) {
      setError(err?.message || 'Ошибка регистрации');
    } finally {
      setIsSubmitting(false);
    }
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
            className={`auth-tab-btn ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => { setActiveTab('login'); setError(null); setEmailConfirmationSent(null); }}
          >
            Вход в аккаунт
          </button>
          <button
            className={`auth-tab-btn ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => { setActiveTab('register'); setError(null); setEmailConfirmationSent(null); }}
          >
            Регистрация стажёра
          </button>
          
        </div>

        <div className="modal-body auth-modal-body">
          {error && (
            <div className="auth-alert auth-alert-error">
              <ShieldAlert size={16} />
              <span>{error}</span>
            </div>
          )}
          {successMsg && (
            <div className="auth-alert auth-alert-success">
              <CheckCircle2 size={16} />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Email confirmation required card */}
          {emailConfirmationSent && (
            <div className="email-confirmation-card">
              <div className="email-conf-icon">
                <Send size={28} className="text-accent" />
              </div>
              <h4 style={{ margin: '8px 0' }}>Подтвердите ваш адрес электронной почты</h4>
              <p className="text-sm text-muted" style={{ margin: '8px 0 16px' }}>
                Мы отправили письмо со ссылкой для активации на <strong>{emailConfirmationSent}</strong>.
                Пожалуйста, проверьте ваш почтовый ящик (включая папку «Спам») и перейдите по ссылке в письме.
              </p>
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => {
                  setEmailConfirmationSent(null);
                  setActiveTab('login');
                }}
              >
                Я подтвердил почту — Перейти ко входу
              </button>
            </div>
          )}

          {/* Login Form */}
          {activeTab === 'login' && !emailConfirmationSent && (
            <form onSubmit={handleLoginSubmit} className="auth-form">
              <div className="form-group">
                <label className="form-label">Email адрес или логин:</label>
                <div className="input-with-icon">
                  <Mail size={16} className="field-icon" />
                  <input
                    type="text"
                    required
                    placeholder="student@intern.io или admin@rocketgate.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Пароль:</label>
                <div className="input-with-icon">
                  <Lock size={16} className="field-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Введите ваш пароль"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="form-input"
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block auth-submit-btn" disabled={isSubmitting}>
                <KeyRound size={16} />
                <span>{isSubmitting ? 'Проверка...' : 'Войти в аккаунт'}</span>
              </button>

              <div className="auth-footer-note">
                Впервые на платформе?{' '}
                <button
                  type="button"
                  className="link-btn"
                  onClick={() => { setActiveTab('register'); setError(null); }}
                >
                  Зарегистрироваться как стажёр
                </button>
              </div>
            </form>
          )}

          {/* Register Form with Password Confirmation */}
          {activeTab === 'register' && !emailConfirmationSent && (
            <form onSubmit={handleRegisterSubmit} className="auth-form">
              <div className="form-group">
                <label className="form-label">ФИО стажёра (для выдачи сертификата):</label>
                <div className="input-with-icon">
                  <UserIcon size={16} className="field-icon" />
                  <input
                    type="text"
                    required
                    placeholder="Иван Петров"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email адрес для подтверждения:</label>
                <div className="input-with-icon">
                  <Mail size={16} className="field-icon" />
                  <input
                    type="email"
                    required
                    placeholder="ivan@intern.io"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Придумайте пароль (минимум 6 символов):</label>
                <div className="input-with-icon">
                  <Lock size={16} className="field-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={6}
                    placeholder="••••••••"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="form-input"
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Подтвердите пароль:</label>
                <div className="input-with-icon">
                  <CheckCheck size={16} className="field-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={6}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    className={`form-input ${confirmPassword && confirmPassword !== password ? 'input-error' : ''}`}
                  />
                </div>
                {confirmPassword && confirmPassword !== password && (
                  <span className="text-xs text-danger" style={{ display: 'block', marginTop: '4px' }}>
                    ⚠️ Пароли не совпадают
                  </span>
                )}
              </div>

              <div className="auth-role-notice-card">
                <div className="role-badge role-intern">Роль: Стажёр</div>
                <p className="text-xs text-muted" style={{ margin: '4px 0 0 0' }}>
                  После отправки формы вам придёт ссылка на подтверждение почты. Вы получите доступ ко всем 70 уровням, проверке ментором и получению сертификата.
                </p>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block auth-submit-btn"
                disabled={isSubmitting || (confirmPassword !== '' && password !== confirmPassword)}
              >
                {isSubmitting ? 'Создание аккаунта...' : 'Зарегистрироваться на стажировку 🚀'}
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
