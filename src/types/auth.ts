export type UserRole = 'intern' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  registeredAt: string;
  lastActiveAt: string;
  avatar?: string;
}

export interface AdminStats {
  totalInterns: number;
  averageProgress: number;
  certifiedCount: number;
  averageQuizScore: number;
  activeLastWeekCount: number;
}
