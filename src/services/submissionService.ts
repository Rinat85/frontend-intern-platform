import { supabase } from './supabaseClient';
import { TaskSubmission, CodeReview, SubmissionStatus } from '../types/database';
import { notificationService } from './notificationService';

export const submissionService = {
  async submitTask(payload: {
    userId: string;
    lessonId: string;
    htmlCode: string;
    cssCode: string;
    jsCode: string;
    githubPrUrl?: string;
    studentNotes?: string;
    userName?: string;
  }): Promise<{ submission: TaskSubmission | null; error?: string }> {
    try {
      const { data, error } = await supabase
        .from('task_submissions')
        .upsert({
          user_id: payload.userId,
          lesson_id: payload.lessonId,
          html_code: payload.htmlCode || '',
          css_code: payload.cssCode || '',
          js_code: payload.jsCode || '',
          github_pr_url: payload.githubPrUrl || null,
          student_notes: payload.studentNotes || '',
          status: 'pending',
          submitted_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }, { onConflict: 'user_id,lesson_id' })
        .select('*, profiles:user_id(*)')
        .single();

      if (error) {
        console.warn('submitTask supabase error:', error.message);
        // Fallback object
        const mockSub: TaskSubmission = {
          id: 'sub_' + Date.now(),
          user_id: payload.userId,
          lesson_id: payload.lessonId,
          html_code: payload.htmlCode,
          css_code: payload.cssCode,
          js_code: payload.jsCode,
          github_pr_url: payload.githubPrUrl,
          student_notes: payload.studentNotes,
          status: 'pending',
          submitted_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        return { submission: mockSub };
      }

      // Notify admins of new submission
      await notificationService.notifyAdmins({
        title: 'Новое задание на проверку!',
        message: `Стажёр ${payload.userName || 'Студент'} отправил решение по уровню ${payload.lessonId}`,
        linkLessonId: payload.lessonId
      });

      return { submission: data as TaskSubmission };
    } catch (e: any) {
      return { submission: null, error: e?.message || 'Failed to submit task' };
    }
  },

  async getSubmissionForLesson(userId: string, lessonId: string): Promise<TaskSubmission | null> {
    try {
      const { data, error } = await supabase
        .from('task_submissions')
        .select('*, code_reviews(*, profiles:mentor_id(*))')
        .eq('user_id', userId)
        .eq('lesson_id', lessonId)
        .maybeSingle();

      if (error || !data) return null;
      return data as TaskSubmission;
    } catch {
      return null;
    }
  },

  async getUserSubmissions(userId: string): Promise<TaskSubmission[]> {
    try {
      const { data, error } = await supabase
        .from('task_submissions')
        .select('*, code_reviews(*, profiles:mentor_id(*))')
        .eq('user_id', userId)
        .order('submitted_at', { ascending: false });

      if (error || !data) return [];
      return data as TaskSubmission[];
    } catch {
      return [];
    }
  },

  async getAllSubmissions(statusFilter?: SubmissionStatus | 'all'): Promise<TaskSubmission[]> {
    try {
      let query = supabase
        .from('task_submissions')
        .select('*, profiles:user_id(*), code_reviews(*, profiles:mentor_id(*))')
        .order('submitted_at', { ascending: false });

      if (statusFilter && statusFilter !== 'all') {
        query = query.eq('status', statusFilter);
      }

      const { data, error } = await query;
      if (error || !data) return [];
      return data as TaskSubmission[];
    } catch {
      return [];
    }
  },

  async reviewSubmission(payload: {
    submissionId: string;
    mentorId: string;
    feedback: string;
    grade: number;
    statusResult: 'approved' | 'rejected';
    lessonId: string;
    studentUserId: string;
    mentorName?: string;
  }): Promise<boolean> {
    try {
      // 1. Create code review entry
      await supabase.from('code_reviews').insert({
        submission_id: payload.submissionId,
        mentor_id: payload.mentorId,
        feedback_comment: payload.feedback,
        grade: payload.grade,
        status_result: payload.statusResult,
        reviewed_at: new Date().toISOString()
      });

      // 2. Update task_submission status
      await supabase
        .from('task_submissions')
        .update({
          status: payload.statusResult,
          updated_at: new Date().toISOString()
        })
        .eq('id', payload.submissionId);

      // 3. If approved, mark user_progress as completed
      if (payload.statusResult === 'approved') {
        await supabase.from('user_progress').upsert({
          user_id: payload.studentUserId,
          lesson_id: payload.lessonId,
          is_completed: true,
          completed_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }, { onConflict: 'user_id,lesson_id' });
      }

      // 4. Send notification to student
      const isApproved = payload.statusResult === 'approved';
      await notificationService.createNotification({
        userId: payload.studentUserId,
        title: isApproved ? '🎉 Задание одобрено ментором!' : '⚠️ Задание требует доработки',
        message: `Ментор ${payload.mentorName || 'Преподаватель'} проверил ваше задание по уроку ${payload.lessonId}: "${payload.feedback.slice(0, 80)}..."`,
        type: isApproved ? 'review_approved' : 'review_rejected',
        linkLessonId: payload.lessonId
      });

      return true;
    } catch (e) {
      console.warn('reviewSubmission error:', e);
      return false;
    }
  }
};
