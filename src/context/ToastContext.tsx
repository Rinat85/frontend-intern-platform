import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X, ShieldAlert } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastItem {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
}

export interface ConfirmOptions {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  isDestructive?: boolean;
  onConfirm: () => void | Promise<void>;
}

interface ToastContextType {
  toast: {
    success: (message: string, title?: string, duration?: number) => void;
    error: (message: string, title?: string, duration?: number) => void;
    warning: (message: string, title?: string, duration?: number) => void;
    info: (message: string, title?: string, duration?: number) => void;
  };
  confirm: (options: ConfirmOptions) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [confirmModal, setConfirmModal] = useState<ConfirmOptions | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);

  const addToast = useCallback((type: ToastType, message: string, title?: string, duration = 4500) => {
    const id = 't_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 4);
    const newToast: ToastItem = { id, type, title, message, duration };

    setToasts(prev => [...prev, newToast]);

    if (duration > 0) {
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const toast = {
    success: (msg: string, title?: string, duration?: number) => addToast('success', msg, title, duration),
    error: (msg: string, title?: string, duration?: number) => addToast('error', msg, title, duration),
    warning: (msg: string, title?: string, duration?: number) => addToast('warning', msg, title, duration),
    info: (msg: string, title?: string, duration?: number) => addToast('info', msg, title, duration)
  };

  const confirm = useCallback((options: ConfirmOptions) => {
    setConfirmModal(options);
  }, []);

  const handleConfirmAction = async () => {
    if (!confirmModal) return;
    setIsConfirming(true);
    try {
      await confirmModal.onConfirm();
    } finally {
      setIsConfirming(false);
      setConfirmModal(null);
    }
  };

  return (
    <ToastContext.Provider value={{ toast, confirm }}>
      {children}

      {/* Toast Notification Container */}
      <div className="toast-container" aria-live="polite">
        {toasts.map(t => {
          const IconComponent =
            t.type === 'success' ? CheckCircle2 :
            t.type === 'error' ? AlertCircle :
            t.type === 'warning' ? AlertTriangle : Info;

          return (
            <div key={t.id} className={`toast-card toast-${t.type}`}>
              <div className="toast-icon-wrap">
                <IconComponent size={20} className={`toast-icon text-${t.type}`} />
              </div>
              <div className="toast-content">
                {t.title && <div className="toast-title">{t.title}</div>}
                <div className="toast-message">{t.message}</div>
              </div>
              <button
                className="toast-close-btn"
                onClick={() => removeToast(t.id)}
                aria-label="Закрыть уведомление"
              >
                <X size={15} />
              </button>
              {t.duration && t.duration > 0 && (
                <div
                  className="toast-progress-bar"
                  style={{ animationDuration: `${t.duration}ms` }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Modern Cyber Confirm Modal */}
      {confirmModal && (
        <div className="modal-backdrop toast-confirm-backdrop" onClick={() => setConfirmModal(null)}>
          <div className="modal-container toast-confirm-modal" onClick={e => e.stopPropagation()}>
            <div className="confirm-modal-header">
              <div className={`confirm-icon-badge ${confirmModal.isDestructive ? 'destructive' : 'normal'}`}>
                {confirmModal.isDestructive ? (
                  <ShieldAlert size={24} className="text-danger" />
                ) : (
                  <AlertTriangle size={24} className="text-warning" />
                )}
              </div>
              <div>
                <h3 className="confirm-title">{confirmModal.title}</h3>
                <p className="confirm-message">{confirmModal.message}</p>
              </div>
            </div>

            <div className="confirm-actions-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setConfirmModal(null)}
                disabled={isConfirming}
              >
                {confirmModal.cancelText || 'Отмена'}
              </button>
              <button
                type="button"
                className={`btn ${confirmModal.isDestructive ? 'btn-danger-custom' : 'btn-primary'}`}
                onClick={handleConfirmAction}
                disabled={isConfirming}
              >
                {isConfirming ? 'Выполняется...' : (confirmModal.confirmText || 'Подтвердить')}
              </button>
            </div>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};
