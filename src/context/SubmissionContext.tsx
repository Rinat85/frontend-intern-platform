import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { TaskSubmission, SubmissionStatus } from '../types/database';
import { submissionService } from '../services/submissionService';
import { useAuth } from './AuthContext';

interface SubmissionContextType {
  userSubmissions: TaskSubmission[];
  allSubmissions: TaskSubmission[];
  pendingCount: number;
  isLoading: boolean;
  currentLessonSubmission: TaskSubmission | null;
  loadLessonSubmission: (lessonId: string) => Promise<TaskSubmission | null>;
  submitTask: (payload: {
    lessonId: string;
    htmlCode: string;
    cssCode: string;
    jsCode: string;
    githubPrUrl?: string;
    studentNotes?: string;
  }) => Promise<{ success: boolean; submission?: TaskSubmission; error?: string }>;
  fetchAllSubmissions: (status?: SubmissionStatus | 'all') => Promise<void>;
  reviewSubmission: (payload: {
    submissionId: string;
    feedback: string;
    grade: number;
    statusResult: 'approved' | 'rejected';
    lessonId: string;
    studentUserId: string;
  }) => Promise<boolean>;
}

const SubmissionContext = createContext<SubmissionContextType | undefined>(undefined);

export const SubmissionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isAdmin } = useAuth();
  const [userSubmissions, setUserSubmissions] = useState<TaskSubmission[]>([]);
  const [allSubmissions, setAllSubmissions] = useState<TaskSubmission[]>([]);
  const [currentLessonSubmission, setCurrentLessonSubmission] = useState<TaskSubmission | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserSubmissions = useCallback(async () => {
    if (!user?.id) return;
    try {
      const list = await submissionService.getUserSubmissions(user.id);
      setUserSubmissions(list);
    } catch (e) {
      console.warn('fetchUserSubmissions error:', e);
    }
  }, [user?.id]);

  const fetchAllSubmissions = useCallback(async (status?: SubmissionStatus | 'all') => {
    setIsLoading(true);
    try {
      const list = await submissionService.getAllSubmissions(status);
      setAllSubmissions(list);
    } catch (e) {
      console.warn('fetchAllSubmissions error:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadLessonSubmission = async (lessonId: string): Promise<TaskSubmission | null> => {
    if (!user?.id) return null;
    const sub = await submissionService.getSubmissionForLesson(user.id, lessonId);
    setCurrentLessonSubmission(sub);
    return sub;
  };

  useEffect(() => {
    fetchUserSubmissions();
    if (isAdmin) {
      fetchAllSubmissions();
    }
  }, [fetchUserSubmissions, fetchAllSubmissions, isAdmin]);

  const submitTask = async (payload: {
    lessonId: string;
    htmlCode: string;
    cssCode: string;
    jsCode: string;
    githubPrUrl?: string;
    studentNotes?: string;
  }) => {
    if (!user?.id) {
      return { success: false, error: 'User not authenticated' };
    }

    const res = await submissionService.submitTask({
      userId: user.id,
      userName: user.name,
      ...payload
    });

    if (res.submission) {
      setCurrentLessonSubmission(res.submission);
      setUserSubmissions(prev => {
        const filtered = prev.filter(s => s.lesson_id !== payload.lessonId);
        return [res.submission!, ...filtered];
      });
      return { success: true, submission: res.submission };
    }
    return { success: false, error: res.error || 'Ошибка отправки задания' };
  };

  const reviewSubmission = async (payload: {
    submissionId: string;
    feedback: string;
    grade: number;
    statusResult: 'approved' | 'rejected';
    lessonId: string;
    studentUserId: string;
  }) => {
    if (!user?.id) return false;

    const ok = await submissionService.reviewSubmission({
      ...payload,
      mentorId: user.id,
      mentorName: user.name
    });

    if (ok) {
      // Refresh admin submissions list
      fetchAllSubmissions();
    }
    return ok;
  };

  const pendingCount = allSubmissions.filter(s => s.status === 'pending' || s.status === 'in_review').length;

  return (
    <SubmissionContext.Provider
      value={{
        userSubmissions,
        allSubmissions,
        pendingCount,
        isLoading,
        currentLessonSubmission,
        loadLessonSubmission,
        submitTask,
        fetchAllSubmissions,
        reviewSubmission
      }}
    >
      {children}
    </SubmissionContext.Provider>
  );
};

export const useSubmissions = () => {
  const context = useContext(SubmissionContext);
  if (!context) {
    throw new Error('useSubmissions must be used within SubmissionProvider');
  }
  return context;
};
