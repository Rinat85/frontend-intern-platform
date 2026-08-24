import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { progressService, UserProgressSummary } from '../services/progressService';
import { ALL_LESSON_IDS, TOTAL_PLATFORM_LESSONS } from '../data/modulesData';

interface InternProgress {
  completedLessons: string[];
  bookmarkedLessons: string[];
  completedTasks: string[];
  quizScores: Record<string, number>;
  sandboxSavedCode: Record<string, { html: string; css: string; js: string }>;
  internName: string;
  startDate: string;
}

interface ProgressContextType {
  progress: InternProgress;
  internName: string;
  setInternName: (name: string) => void;
  bookmarkedLessons: string[];
  completedTasks: string[];
  quizScores: Record<string, number>;
  completedLessonsCount: number;
  totalLessonsCount: number;
  isFullyCompleted: boolean;
  getOverallPercentage: () => number;
  isLessonCompleted: (lessonId: string) => boolean;
  toggleLessonCompletion: (lessonId: string) => void;
  toggleLessonComplete: (lessonId: string) => void;
  isLessonBookmarked: (lessonId: string) => boolean;
  toggleBookmark: (lessonId: string) => void;
  isTaskCompleted: (lessonId: string) => boolean;
  toggleTaskCompletion: (lessonId: string) => void;
  toggleTaskComplete: (lessonId: string) => void;
  setQuizScore: (lessonId: string, scorePercent: number) => void;
  saveQuizScore: (lessonId: string, scorePercent: number) => void;
  saveSandboxCode: (lessonId: string, code: { html: string; css: string; js: string }) => void;
  getSavedSandboxCode: (lessonId: string) => { html: string; css: string; js: string } | null;
  getSandboxSavedCode: (lessonId: string) => { html: string; css: string; js: string } | null;
  resetProgress: () => void;
  getUserProgress: (userId: string) => InternProgress;
  getAllProgress: () => Record<string, InternProgress>;
  resetUserProgress: (userId: string) => void;
  simulateCompleteUserProgress: (userId: string) => void;
  reloadProgress: () => Promise<void>;
}

const emptyProgress = (name: string): InternProgress => ({
  completedLessons: [],
  bookmarkedLessons: [],
  completedTasks: [],
  quizScores: {},
  sandboxSavedCode: {},
  internName: name,
  startDate: new Date().toISOString()
});

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const currentUserId = user?.id || 'anonymous';
  const currentUserName = user?.name || 'Студент';

  const [currentProgress, setCurrentProgress] = useState<InternProgress>(emptyProgress(currentUserName));
  const [allProgressCache, setAllProgressCache] = useState<Record<string, InternProgress>>({});

  const reloadProgress = useCallback(async () => {
    if (!user?.id) {
      setCurrentProgress(emptyProgress('Гость'));
      return;
    }
    try {
      const summary = await progressService.fetchUserProgress(user.id);
      const prog: InternProgress = {
        ...summary,
        internName: user.name || summary.internName
      };
      setCurrentProgress(prog);
      setAllProgressCache(prev => ({ ...prev, [user.id]: prog }));
    } catch (e) {
      console.warn('reloadProgress error:', e);
    }
  }, [user?.id, user?.name]);

  useEffect(() => {
    reloadProgress();
  }, [reloadProgress]);

  const isLessonCompleted = (lessonId: string) => currentProgress.completedLessons.includes(lessonId);

  const toggleLessonCompletion = (lessonId: string) => {
    const exists = currentProgress.completedLessons.includes(lessonId);
    const nextCompleted = !exists;
    
    setCurrentProgress(prev => {
      const updated = exists
        ? prev.completedLessons.filter(id => id !== lessonId)
        : [...prev.completedLessons, lessonId];
      return { ...prev, completedLessons: updated };
    });

    if (user?.id) {
      progressService.toggleLessonCompletion(user.id, lessonId, nextCompleted);
    }
  };

  const isLessonBookmarked = (lessonId: string) => currentProgress.bookmarkedLessons.includes(lessonId);

  const toggleBookmark = (lessonId: string) => {
    const exists = currentProgress.bookmarkedLessons.includes(lessonId);
    const nextBookmark = !exists;

    setCurrentProgress(prev => {
      const updated = exists
        ? prev.bookmarkedLessons.filter(id => id !== lessonId)
        : [...prev.bookmarkedLessons, lessonId];
      return { ...prev, bookmarkedLessons: updated };
    });

    if (user?.id) {
      progressService.toggleBookmark(user.id, lessonId, nextBookmark);
    }
  };

  const isTaskCompleted = (lessonId: string) => currentProgress.completedTasks.includes(lessonId);

  const toggleTaskCompletion = (lessonId: string) => {
    const exists = currentProgress.completedTasks.includes(lessonId);
    setCurrentProgress(prev => {
      const updated = exists
        ? prev.completedTasks.filter(id => id !== lessonId)
        : [...prev.completedTasks, lessonId];
      return { ...prev, completedTasks: updated };
    });

    if (user?.id) {
      progressService.toggleLessonCompletion(user.id, lessonId, !exists);
    }
  };

  const setQuizScore = (lessonId: string, scorePercent: number) => {
    setCurrentProgress(prev => ({
      ...prev,
      completedLessons: prev.completedLessons.includes(lessonId) ? prev.completedLessons : [...prev.completedLessons, lessonId],
      quizScores: { ...prev.quizScores, [lessonId]: scorePercent }
    }));

    if (user?.id) {
      progressService.saveQuizScore(user.id, lessonId, scorePercent);
    }
  };

  const saveSandboxCode = (lessonId: string, code: { html: string; css: string; js: string }) => {
    setCurrentProgress(prev => ({
      ...prev,
      sandboxSavedCode: { ...prev.sandboxSavedCode, [lessonId]: code }
    }));

    if (user?.id) {
      progressService.saveSandboxCode(user.id, lessonId, code);
    }
  };

  const getSavedSandboxCode = (lessonId: string) => {
    return currentProgress.sandboxSavedCode[lessonId] || null;
  };

  const setInternName = (name: string) => {
    setCurrentProgress(prev => ({ ...prev, internName: name }));
  };

  const resetProgress = () => {
    if (window.confirm('Вы уверены, что хотите сбросить свой прогресс обучения?')) {
      setCurrentProgress(emptyProgress(currentUserName));
      if (user?.id) {
        progressService.resetUserProgress(user.id);
      }
    }
  };

  const getUserProgress = (userId: string): InternProgress => {
    return allProgressCache[userId] || emptyProgress('Студент');
  };

  const getAllProgress = () => allProgressCache;

  const resetUserProgress = (userId: string) => {
    setAllProgressCache(prev => ({
      ...prev,
      [userId]: emptyProgress('Студент')
    }));
    progressService.resetUserProgress(userId);
  };

  const simulateCompleteUserProgress = (userId: string) => {
    const fullQuizScores = ALL_LESSON_IDS.reduce((acc, id) => {
      acc[id] = 100;
      return acc;
    }, {} as Record<string, number>);

    const completedProg: InternProgress = {
      completedLessons: [...ALL_LESSON_IDS],
      bookmarkedLessons: [],
      completedTasks: [...ALL_LESSON_IDS],
      quizScores: fullQuizScores,
      sandboxSavedCode: currentProgress.sandboxSavedCode || {},
      internName: user?.name || 'Студент',
      startDate: new Date().toISOString()
    };

    setCurrentProgress(completedProg);
    setAllProgressCache(prev => ({ ...prev, [userId]: completedProg }));

    // Sync all to Supabase
    if (userId) {
      ALL_LESSON_IDS.forEach(id => {
        progressService.saveQuizScore(userId, id, 100);
      });
    }
  };

  const completedLessonsCount = currentProgress.completedLessons.length;
  const totalLessonsCount = TOTAL_PLATFORM_LESSONS;
  const isFullyCompleted = completedLessonsCount >= totalLessonsCount;
  const getOverallPercentage = () => Math.round((completedLessonsCount / totalLessonsCount) * 100);

  return (
    <ProgressContext.Provider
      value={{
        progress: currentProgress,
        internName: currentProgress.internName || currentUserName,
        setInternName,
        bookmarkedLessons: currentProgress.bookmarkedLessons,
        completedTasks: currentProgress.completedTasks,
        quizScores: currentProgress.quizScores,
        completedLessonsCount,
        totalLessonsCount,
        isFullyCompleted,
        getOverallPercentage,
        isLessonCompleted,
        toggleLessonCompletion,
        toggleLessonComplete: toggleLessonCompletion,
        isLessonBookmarked,
        toggleBookmark,
        isTaskCompleted,
        toggleTaskCompletion,
        toggleTaskComplete: toggleTaskCompletion,
        setQuizScore,
        saveQuizScore: setQuizScore,
        saveSandboxCode,
        getSavedSandboxCode,
        getSandboxSavedCode: getSavedSandboxCode,
        resetProgress,
        getUserProgress,
        getAllProgress,
        resetUserProgress,
        simulateCompleteUserProgress,
        reloadProgress
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
};
