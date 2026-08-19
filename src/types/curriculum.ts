export type ModuleId = 'html' | 'css' | 'javascript' | 'pro';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface CodeExample {
  language: 'html' | 'css' | 'javascript' | 'typescript' | 'bash';
  code: string;
  title?: string;
  explanation?: string;
}

export interface TheorySection {
  title: string;
  content: string;
  codeExample?: CodeExample;
}

export interface CommonMistake {
  bad: string;
  good: string;
  reason: string;
}

export interface LessonTheory {
  overview: string;
  sections: TheorySection[];
  seniorTips: string[];
  commonMistakes?: CommonMistake[];
  keyTakeaways: string[];
}

export interface SandboxData {
  initialHtml: string;
  initialCss: string;
  initialJs: string;
  instructions: string;
}

export interface PracticalTask {
  title: string;
  scenario: string;
  criteria: string[];
  starterCode: {
    html?: string;
    css?: string;
    js?: string;
  };
  hints: string[];
  solution: {
    html?: string;
    css?: string;
    js?: string;
    explanation: string;
  };
}

export interface QuizQuestion {
  id: string;
  question: string;
  codeSnippet?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  moduleId: ModuleId;
  level: number;
  title: string;
  subtitle: string;
  description: string;
  estimatedMinutes: number;
  difficulty: Difficulty;
  tags: string[];
  theory: LessonTheory;
  sandbox: SandboxData;
  task: PracticalTask;
  quiz: {
    questions: QuizQuestion[];
  };
}

export interface Module {
  id: ModuleId;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accentColor: string;
  gradient: string;
  levelsCount: number;
  lessons: Lesson[];
}

export interface CheatSheetItem {
  name: string;
  syntax: string;
  description: string;
  example?: string;
}

export interface CheatSheetCategory {
  id: string;
  title: string;
  icon: string;
  items: CheatSheetItem[];
}

export interface InternProgress {
  completedLessons: string[];
  bookmarkedLessons: string[];
  completedTasks: string[];
  quizScores: Record<string, number>;
  sandboxSavedCode: Record<string, { html: string; css: string; js: string }>;
  internName: string;
  startDate: string;
}
