import { supabase } from './supabaseClient';
import { UserProgressItem } from '../types/database';

export interface UserProgressSummary {
  completedLessons: string[];
  bookmarkedLessons: string[];
  completedTasks: string[];
  quizScores: Record<string, number>;
  sandboxSavedCode: Record<string, { html: string; css: string; js: string }>;
  internName: string;
  startDate: string;
}

export const progressService = {
  async fetchUserProgress(userId: string): Promise<UserProgressSummary> {
    const summary: UserProgressSummary = {
      completedLessons: [],
      bookmarkedLessons: [],
      completedTasks: [],
      quizScores: {},
      sandboxSavedCode: {},
      internName: 'Студент',
      startDate: new Date().toISOString()
    };

    try {
      // 1. Fetch user progress items
      const { data: progressRows, error: pError } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId);

      if (!pError && progressRows) {
        progressRows.forEach((row: UserProgressItem) => {
          if (row.is_completed && !summary.completedLessons.includes(row.lesson_id)) {
            summary.completedLessons.push(row.lesson_id);
          }
          if (row.is_bookmarked && !summary.bookmarkedLessons.includes(row.lesson_id)) {
            summary.bookmarkedLessons.push(row.lesson_id);
          }
          if (row.quiz_score !== null && row.quiz_score !== undefined) {
            summary.quizScores[row.lesson_id] = row.quiz_score;
          }
        });
      }

      // 2. Fetch completed task submissions
      const { data: submissionRows, error: sError } = await supabase
        .from('task_submissions')
        .select('lesson_id, status')
        .eq('user_id', userId)
        .eq('status', 'approved');

      if (!sError && submissionRows) {
        submissionRows.forEach((sub: any) => {
          if (!summary.completedTasks.includes(sub.lesson_id)) {
            summary.completedTasks.push(sub.lesson_id);
          }
        });
      }

      // 3. Fetch sandbox snippets
      const { data: snippetRows, error: snError } = await supabase
        .from('sandbox_snippets')
        .select('*')
        .eq('user_id', userId);

      if (!snError && snippetRows) {
        snippetRows.forEach((s: any) => {
          summary.sandboxSavedCode[s.lesson_id] = {
            html: s.html_code || '',
            css: s.css_code || '',
            js: s.js_code || ''
          };
        });
      }
    } catch (err) {
      console.warn('fetchUserProgress failed:', err);
    }

    return summary;
  },

  async toggleLessonCompletion(userId: string, lessonId: string, isCompleted: boolean): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: userId,
          lesson_id: lessonId,
          is_completed: isCompleted,
          completed_at: isCompleted ? new Date().toISOString() : null,
          updated_at: new Date().toISOString()
        }, { onConflict: 'user_id,lesson_id' });

      return !error;
    } catch (e) {
      console.warn('toggleLessonCompletion error:', e);
      return false;
    }
  },

  async toggleBookmark(userId: string, lessonId: string, isBookmarked: boolean): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: userId,
          lesson_id: lessonId,
          is_bookmarked: isBookmarked,
          updated_at: new Date().toISOString()
        }, { onConflict: 'user_id,lesson_id' });

      return !error;
    } catch (e) {
      console.warn('toggleBookmark error:', e);
      return false;
    }
  },

  async saveQuizScore(userId: string, lessonId: string, score: number): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: userId,
          lesson_id: lessonId,
          quiz_score: score,
          is_completed: true,
          completed_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }, { onConflict: 'user_id,lesson_id' });

      return !error;
    } catch (e) {
      console.warn('saveQuizScore error:', e);
      return false;
    }
  },

  async saveSandboxCode(userId: string, lessonId: string, code: { html: string; css: string; js: string }): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('sandbox_snippets')
        .upsert({
          user_id: userId,
          lesson_id: lessonId,
          html_code: code.html,
          css_code: code.css,
          js_code: code.js,
          updated_at: new Date().toISOString()
        }, { onConflict: 'user_id,lesson_id' });

      return !error;
    } catch (e) {
      console.warn('saveSandboxCode error:', e);
      return false;
    }
  },

  async resetUserProgress(userId: string): Promise<boolean> {
    try {
      await supabase.from('user_progress').delete().eq('user_id', userId);
      await supabase.from('sandbox_snippets').delete().eq('user_id', userId);
      return true;
    } catch (e) {
      console.warn('resetUserProgress error:', e);
      return false;
    }
  }
};
