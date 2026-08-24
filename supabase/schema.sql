-- ═══════════════════════════════════════════════════════════════
-- Frontend Intern Platform — Supabase PostgreSQL Schema
-- Full DDL: Tables, Indexes, RLS Policies, Triggers, Seed Data
-- ═══════════════════════════════════════════════════════════════

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ───────────────────────────────────────────────────────────────
-- 1. PROFILES (Users: interns, mentors, admins)
-- ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL DEFAULT '',
  role TEXT NOT NULL DEFAULT 'intern' CHECK (role IN ('intern', 'mentor', 'admin')),
  avatar_url TEXT,
  github_username TEXT,
  mentor_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Ensure mentor_id column exists if table was created previously
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS mentor_id UUID REFERENCES profiles(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS idx_profiles_email ON profiles(email);
CREATE INDEX IF NOT EXISTS idx_profiles_role ON profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_mentor ON profiles(mentor_id);

-- ───────────────────────────────────────────────────────────────
-- 2. USER PROGRESS (Lesson completion, bookmarks, quiz scores)
-- ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL,
  is_completed BOOLEAN NOT NULL DEFAULT false,
  is_bookmarked BOOLEAN NOT NULL DEFAULT false,
  quiz_score INTEGER CHECK (quiz_score >= 0 AND quiz_score <= 100),
  completed_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, lesson_id)
);

CREATE INDEX IF NOT EXISTS idx_user_progress_user ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_lesson ON user_progress(lesson_id);

-- ───────────────────────────────────────────────────────────────
-- 3. TASK SUBMISSIONS (Intern code submissions for review)
-- ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS task_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL,
  html_code TEXT DEFAULT '',
  css_code TEXT DEFAULT '',
  js_code TEXT DEFAULT '',
  github_pr_url TEXT,
  student_notes TEXT DEFAULT '',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'pending', 'in_review', 'approved', 'rejected')),
  submitted_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_submissions_user ON task_submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_submissions_lesson ON task_submissions(lesson_id);
CREATE INDEX IF NOT EXISTS idx_submissions_status ON task_submissions(status);

-- ───────────────────────────────────────────────────────────────
-- 4. CODE REVIEWS (Mentor feedback on submissions)
-- ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS code_reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  submission_id UUID NOT NULL REFERENCES task_submissions(id) ON DELETE CASCADE,
  mentor_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  feedback_comment TEXT NOT NULL DEFAULT '',
  grade INTEGER CHECK (grade >= 0 AND grade <= 100),
  status_result TEXT NOT NULL CHECK (status_result IN ('approved', 'rejected')),
  reviewed_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_reviews_submission ON code_reviews(submission_id);
CREATE INDEX IF NOT EXISTS idx_reviews_mentor ON code_reviews(mentor_id);

-- ───────────────────────────────────────────────────────────────
-- 5. NOTIFICATIONS
-- ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL DEFAULT '',
  type TEXT NOT NULL DEFAULT 'system' CHECK (type IN ('review_approved', 'review_rejected', 'new_submission', 'system')),
  link_lesson_id TEXT,
  is_read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_notifications_user ON notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_unread ON notifications(user_id, is_read) WHERE is_read = false;

-- ───────────────────────────────────────────────────────────────
-- 6. SANDBOX SNIPPETS (Saved sandbox code per user per lesson)
-- ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS sandbox_snippets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL,
  html_code TEXT DEFAULT '',
  css_code TEXT DEFAULT '',
  js_code TEXT DEFAULT '',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, lesson_id)
);

CREATE INDEX IF NOT EXISTS idx_sandbox_user ON sandbox_snippets(user_id);

-- ───────────────────────────────────────────────────────────────
-- AUTO-UPDATE updated_at TRIGGER
-- ───────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS tr_profiles_updated_at ON profiles;
CREATE TRIGGER tr_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS tr_user_progress_updated_at ON user_progress;
CREATE TRIGGER tr_user_progress_updated_at BEFORE UPDATE ON user_progress FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS tr_task_submissions_updated_at ON task_submissions;
CREATE TRIGGER tr_task_submissions_updated_at BEFORE UPDATE ON task_submissions FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS tr_sandbox_snippets_updated_at ON sandbox_snippets;
CREATE TRIGGER tr_sandbox_snippets_updated_at BEFORE UPDATE ON sandbox_snippets FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ───────────────────────────────────────────────────────────────
-- ROW LEVEL SECURITY (RLS)
-- ───────────────────────────────────────────────────────────────
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE task_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE code_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE sandbox_snippets ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow all for anon" ON profiles;
CREATE POLICY "Allow all for anon" ON profiles FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all for anon" ON user_progress;
CREATE POLICY "Allow all for anon" ON user_progress FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all for anon" ON task_submissions;
CREATE POLICY "Allow all for anon" ON task_submissions FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all for anon" ON code_reviews;
CREATE POLICY "Allow all for anon" ON code_reviews FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all for anon" ON notifications;
CREATE POLICY "Allow all for anon" ON notifications FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all for anon" ON sandbox_snippets;
CREATE POLICY "Allow all for anon" ON sandbox_snippets FOR ALL USING (true) WITH CHECK (true);

-- ───────────────────────────────────────────────────────────────
-- SEED DATA: Single Administrator Account
-- ───────────────────────────────────────────────────────────────
INSERT INTO profiles (id, email, full_name, role, avatar_url, created_at) VALUES
  ('a0000000-0000-0000-0000-000000000001', 'admin@rocketgate.com', 'Главный Ментор (Admin)', 'admin', '👑', now() - interval '60 days')
ON CONFLICT (email) DO UPDATE SET full_name = 'Главный Ментор (Admin)', role = 'admin', avatar_url = '👑';
