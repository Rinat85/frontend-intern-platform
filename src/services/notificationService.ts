import { supabase } from './supabaseClient';
import { AppNotification, NotificationType } from '../types/database';

export const notificationService = {
  async getUserNotifications(userId: string): Promise<AppNotification[]> {
    try {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(20);

      if (error || !data) return [];
      return data as AppNotification[];
    } catch {
      return [];
    }
  },

  async markAsRead(notificationId: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('notifications')
        .update({ is_read: true })
        .eq('id', notificationId);

      return !error;
    } catch {
      return false;
    }
  },

  async markAllAsRead(userId: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('notifications')
        .update({ is_read: true })
        .eq('user_id', userId);

      return !error;
    } catch {
      return false;
    }
  },

  async createNotification(payload: {
    userId: string;
    title: string;
    message: string;
    type: NotificationType;
    linkLessonId?: string;
  }): Promise<boolean> {
    try {
      const { error } = await supabase.from('notifications').insert({
        user_id: payload.userId,
        title: payload.title,
        message: payload.message,
        type: payload.type,
        link_lesson_id: payload.linkLessonId || null,
        is_read: false,
        created_at: new Date().toISOString()
      });

      return !error;
    } catch {
      return false;
    }
  },

  async notifyAdmins(payload: {
    title: string;
    message: string;
    linkLessonId?: string;
  }): Promise<void> {
    try {
      // Find all admin profiles
      const { data: admins } = await supabase
        .from('profiles')
        .select('id')
        .eq('role', 'admin');

      if (admins && admins.length > 0) {
        for (const admin of admins) {
          await this.createNotification({
            userId: admin.id,
            title: payload.title,
            message: payload.message,
            type: 'new_submission',
            linkLessonId: payload.linkLessonId
          });
        }
      }
    } catch (e) {
      console.warn('notifyAdmins failed:', e);
    }
  }
};
