import React, { createContext, useContext, useEffect, useState } from 'react';
import { InternProgress } from '../types/curriculum';
import { useAuth } from './AuthContext';

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
  
  // Admin & Multi-user helpers
  getUserProgress: (userId: string) => InternProgress;
  getAllProgress: () => Record<string, InternProgress>;
  resetUserProgress: (userId: string) => void;
  simulateCompleteUserProgress: (userId: string) => void;
}

const MULTI_PROGRESS_STORAGE_KEY = 'frontend_intern_user_progress_map_v3';
export const TOTAL_PLATFORM_LESSONS = 48;

// All 48 lesson IDs across the platform for seed computations
const ALL_LESSON_IDS = [
  ...Array.from({ length: 11 }, (_, i) => `html-${i + 1}`),
  ...Array.from({ length: 21 }, (_, i) => `css-${i + 1}`),
  ...Array.from({ length: 14 }, (_, i) => `javascript-${i + 1}`),
  ...Array.from({ length: 2 }, (_, i) => `pro-${i + 1}`)
];

const makeEmptyProgress = (name: string): InternProgress => ({
  completedLessons: [],
  bookmarkedLessons: [],
  completedTasks: [],
  quizScores: {},
  sandboxSavedCode: {},
  internName: name,
  startDate: new Date().toISOString()
});

// Seed data for demo users
const INITIAL_PROGRESS_MAP: Record<string, InternProgress> = {
  // Maria Ivanova: 100% Certified Graduate
  usr_maria: {
    completedLessons: [...ALL_LESSON_IDS],
    bookmarkedLessons: ['html-6', 'css-12', 'javascript-9'],
    completedTasks: [...ALL_LESSON_IDS],
    quizScores: ALL_LESSON_IDS.reduce((acc, id) => {
      acc[id] = 100;
      return acc;
    }, {} as Record<string, number>),
    sandboxSavedCode: {
      'html-1': {
        html: '<div class="profile-card"><h3>Мария Иванова</h3><p>Frontend Graduate</p></div>',
        css: '.profile-card { padding: 20px; background: #ecfdf5; border-radius: 12px; }',
        js: 'console.log("Maria graduated with 100% score!");'
      }
    },
    internName: 'Мария Иванова',
    startDate: new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString()
  },

  // Alex Smirnov: Active Intern (~60% Progress)
  usr_alex: {
    completedLessons: [
      ...Array.from({ length: 11 }, (_, i) => `html-${i + 1}`),
      ...Array.from({ length: 17 }, (_, i) => `css-${i + 1}`)
    ],
    bookmarkedLessons: ['html-3', 'css-6', 'css-14'],
    completedTasks: [
      ...Array.from({ length: 11 }, (_, i) => `html-${i + 1}`),
      ...Array.from({ length: 15 }, (_, i) => `css-${i + 1}`)
    ],
    quizScores: {
      'html-1': 100, 'html-2': 100, 'html-3': 100, 'html-4': 100, 'html-5': 100,
      'html-6': 100, 'html-7': 100, 'html-8': 100, 'html-9': 100, 'html-10': 100, 'html-11': 100,
      'css-1': 100, 'css-2': 100, 'css-3': 100, 'css-4': 100, 'css-5': 100,
      'css-6': 100, 'css-7': 100, 'css-8': 100, 'css-9': 100, 'css-10': 100
    },
    sandboxSavedCode: {
      'css-1': {
        html: '<div class="alex-box">Мой первый CSS стиль</div>',
        css: '.alex-box { color: #6366f1; font-weight: bold; }',
        js: '// Alex test script'
      }
    },
    internName: 'Алексей Смирнов',
    startDate: new Date(Date.now() - 14 * 24 * 3600 * 1000).toISOString()
  },

  // Dmitry Kovalev: Beginner Intern (12% Progress)
  usr_dmitry: {
    completedLessons: ['html-1', 'html-2', 'html-3', 'html-4', 'html-5', 'html-6'],
    bookmarkedLessons: ['html-2'],
    completedTasks: ['html-1', 'html-2', 'html-3'],
    quizScores: {
      'html-1': 100,
      'html-2': 100,
      'html-3': 100
    },
    sandboxSavedCode: {},
    internName: 'Дмитрий Ковалев',
    startDate: new Date(Date.now() - 3 * 24 * 3600 * 1000).toISOString()
  },

  // Admin Progress (Default clean / observer)
  usr_admin: {
    completedLessons: [],
    bookmarkedLessons: [],
    completedTasks: [],
    quizScores: {},
    sandboxSavedCode: {},
    internName: 'Главный Ментор',
    startDate: new Date(Date.now() - 60 * 24 * 3600 * 1000).toISOString()
  }
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const currentUserId = user?.id || 'anonymous';
  const currentUserName = user?.name || 'Гость';

  const [progressMap, setProgressMap] = useState<Record<string, InternProgress>>(() => {
    try {
      const saved = localStorage.getItem(MULTI_PROGRESS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...INITIAL_PROGRESS_MAP, ...parsed };
      }
    } catch (e) {
      console.error('Failed to load progress map', e);
    }
    return INITIAL_PROGRESS_MAP;
  });

  // Save progressMap to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(MULTI_PROGRESS_STORAGE_KEY, JSON.stringify(progressMap));
    } catch (e) {
      console.error('Failed to persist progress map', e);
    }
  }, [progressMap]);

  // Ensure current user has a progress entry
  const progress: InternProgress =
    progressMap[currentUserId] || makeEmptyProgress(currentUserName);

  const updateCurrentProgress = (updater: (prev: InternProgress) => InternProgress) => {
    setProgressMap(prevMap => {
      const current = prevMap[currentUserId] || makeEmptyProgress(currentUserName);
      const updated = updater(current);
      return { ...prevMap, [currentUserId]: updated };
    });
  };

  const isLessonCompleted = (lessonId: string) => progress.completedLessons.includes(lessonId);

  const toggleLessonCompletion = (lessonId: string) => {
    updateCurrentProgress(prev => {
      const exists = prev.completedLessons.includes(lessonId);
      const updated = exists
        ? prev.completedLessons.filter(id => id !== lessonId)
        : [...prev.completedLessons, lessonId];
      return { ...prev, completedLessons: updated };
    });
  };

  const isLessonBookmarked = (lessonId: string) => progress.bookmarkedLessons.includes(lessonId);

  const toggleBookmark = (lessonId: string) => {
    updateCurrentProgress(prev => {
      const exists = prev.bookmarkedLessons.includes(lessonId);
      const updated = exists
        ? prev.bookmarkedLessons.filter(id => id !== lessonId)
        : [...prev.bookmarkedLessons, lessonId];
      return { ...prev, bookmarkedLessons: updated };
    });
  };

  const isTaskCompleted = (lessonId: string) => progress.completedTasks.includes(lessonId);

  const toggleTaskCompletion = (lessonId: string) => {
    updateCurrentProgress(prev => {
      const exists = prev.completedTasks.includes(lessonId);
      const updated = exists
        ? prev.completedTasks.filter(id => id !== lessonId)
        : [...prev.completedTasks, lessonId];
      return { ...prev, completedTasks: updated };
    });
  };

  const setQuizScore = (lessonId: string, scorePercent: number) => {
    updateCurrentProgress(prev => ({
      ...prev,
      quizScores: { ...prev.quizScores, [lessonId]: scorePercent }
    }));
  };

  const saveSandboxCode = (lessonId: string, code: { html: string; css: string; js: string }) => {
    updateCurrentProgress(prev => ({
      ...prev,
      sandboxSavedCode: { ...prev.sandboxSavedCode, [lessonId]: code }
    }));
  };

  const getSavedSandboxCode = (lessonId: string) => {
    return progress.sandboxSavedCode[lessonId] || null;
  };

  const setInternName = (name: string) => {
    updateCurrentProgress(prev => ({ ...prev, internName: name }));
  };

  const resetProgress = () => {
    if (window.confirm('Вы уверены, что хотите сбросить свой прогресс обучения?')) {
      updateCurrentProgress(() => makeEmptyProgress(currentUserName));
    }
  };

  // Multi-user & Admin methods
  const getUserProgress = (userId: string): InternProgress => {
    return progressMap[userId] || makeEmptyProgress('Пользователь');
  };

  const getAllProgress = () => progressMap;

  const resetUserProgress = (userId: string) => {
    setProgressMap(prev => ({
      ...prev,
      [userId]: makeEmptyProgress(prev[userId]?.internName || 'Студент')
    }));
  };

  const simulateCompleteUserProgress = (userId: string) => {
    const fullQuizScores = ALL_LESSON_IDS.reduce((acc, id) => {
      acc[id] = 100;
      return acc;
    }, {} as Record<string, number>);

    setProgressMap(prev => ({
      ...prev,
      [userId]: {
        completedLessons: [...ALL_LESSON_IDS],
        bookmarkedLessons: [],
        completedTasks: [...ALL_LESSON_IDS],
        quizScores: fullQuizScores,
        sandboxSavedCode: prev[userId]?.sandboxSavedCode || {},
        internName: prev[userId]?.internName || 'Студент',
        startDate: prev[userId]?.startDate || new Date().toISOString()
      }
    }));
  };

  const completedLessonsCount = progress.completedLessons.length;
  const totalLessonsCount = TOTAL_PLATFORM_LESSONS;
  const isFullyCompleted = completedLessonsCount >= totalLessonsCount;
  const getOverallPercentage = () => Math.round((completedLessonsCount / totalLessonsCount) * 100);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        internName: progress.internName || currentUserName,
        setInternName,
        bookmarkedLessons: progress.bookmarkedLessons,
        completedTasks: progress.completedTasks,
        quizScores: progress.quizScores,
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
        simulateCompleteUserProgress
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
