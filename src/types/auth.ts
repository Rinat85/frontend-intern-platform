export type UserRole = 'intern' | 'mentor' | 'admin';

export interface UserMentorInfo {
  id: string;
  name: string;
  email: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  mentorIds?: string[];
  mentorNames?: string[];
  mentors?: UserMentorInfo[];
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
