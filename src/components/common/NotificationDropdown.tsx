import React, { useRef, useEffect } from 'react';
import { useNotifications } from '../../context/NotificationContext';
import { Bell, CheckCheck, CheckCircle2, AlertTriangle, Send, Info, X } from 'lucide-react';

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLesson: (lessonId: string) => void;
}

export const NotificationDropdown: React.FC<NotificationDropdownProps> = ({
  isOpen,
  onClose,
  onSelectLesson
}) => {
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getIcon = (type: string) => {
    switch (type) {
      case 'review_approved':
        return <CheckCircle2 size={16} className="text-success" />;
      case 'review_rejected':
        return <AlertTriangle size={16} className="text-warning" />;
      case 'new_submission':
        return <Send size={16} className="text-accent" />;
      default:
        return <Info size={16} className="text-info" />;
    }
  };

  return (
    <div className="notifications-dropdown" ref={dropdownRef}>
      <div className="notifications-header">
        <div className="notifications-title">
          <Bell size={16} />
          <span>Уведомления</span>
          {unreadCount > 0 && <span className="notif-badge">{unreadCount}</span>}
        </div>
        <div className="notifications-header-actions">
          {unreadCount > 0 && (
            <button className="btn-text-sm" onClick={markAllAsRead} title="Прочитать все">
              <CheckCheck size={14} />
              <span>Все прочитаны</span>
            </button>
          )}
          <button className="btn-icon-sm" onClick={onClose}>
            <X size={14} />
          </button>
        </div>
      </div>

      <div className="notifications-list">
        {notifications.length === 0 ? (
          <div className="notifications-empty">
            <Bell size={24} className="text-muted" />
            <p>Нет новых уведомлений</p>
          </div>
        ) : (
          notifications.map(n => (
            <div
              key={n.id}
              className={`notification-item ${!n.is_read ? 'unread' : ''}`}
              onClick={() => {
                markAsRead(n.id);
                if (n.link_lesson_id) {
                  onSelectLesson(n.link_lesson_id);
                  onClose();
                }
              }}
            >
              <div className="notif-icon-wrap">{getIcon(n.type)}</div>
              <div className="notif-content">
                <div className="notif-item-title">{n.title}</div>
                <div className="notif-item-message">{n.message}</div>
                <div className="notif-item-time">
                  {new Date(n.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} •{' '}
                  {new Date(n.created_at).toLocaleDateString()}
                </div>
              </div>
              {!n.is_read && <span className="unread-dot" />}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
