export type UserRole = 'intern' | 'mentor' | 'admin';

export type SubmissionStatus = 'draft' | 'pending' | 'in_review' | 'approved' | 'rejected';

export type NotificationType = 'review_approved' | 'review_rejected' | 'new_submission' | 'system';

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  avatar_url?: string | null;
  github_username?: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserProgressItem {
  id?: string;
  user_id: string;
  lesson_id: string;
  is_completed: boolean;
  is_bookmarked: boolean;
  quiz_score: number | null;
  completed_at?: string | null;
  updated_at?: string;
}

export interface TaskSubmission {
  id: string;
  user_id: string;
  lesson_id: string;
  html_code: string;
  css_code: string;
  js_code: string;
  github_pr_url?: string | null;
  student_notes?: string | null;
  status: SubmissionStatus;
  submitted_at: string | null;
  updated_at: string;
  profiles?: Profile;
  code_reviews?: CodeReview[];
}

export interface CodeReview {
  id: string;
  submission_id: string;
  mentor_id: string;
  feedback_comment: string;
  grade: number | null;
  status_result: 'approved' | 'rejected';
  reviewed_at: string;
  profiles?: Profile;
}

export interface AppNotification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: NotificationType;
  link_lesson_id?: string | null;
  is_read: boolean;
  created_at: string;
}

export interface SandboxSnippet {
  id?: string;
  user_id: string;
  lesson_id: string;
  html_code: string;
  css_code: string;
  js_code: string;
  updated_at?: string;
}
