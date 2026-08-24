export type UserRole = 'intern' | 'mentor' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  mentorId?: string | null;
  mentorName?: string | null;
  registeredAt: string;
  lastActiveAt: string;
  avatar?: string;
}

export interface AdminStats {
  totalInterns: number;
  totalMentors: number;
  averageProgress: number;
  certifiedCount: number;
  averageQuizScore: number;
  activeLastWeekCount: number;
}
