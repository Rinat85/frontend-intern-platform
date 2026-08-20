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
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_profiles_email ON profiles(email);
CREATE INDEX idx_profiles_role ON profiles(role);

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

CREATE INDEX idx_user_progress_user ON user_progress(user_id);
CREATE INDEX idx_user_progress_lesson ON user_progress(lesson_id);

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

CREATE INDEX idx_submissions_user ON task_submissions(user_id);
CREATE INDEX idx_submissions_lesson ON task_submissions(lesson_id);
CREATE INDEX idx_submissions_status ON task_submissions(status);

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

CREATE INDEX idx_reviews_submission ON code_reviews(submission_id);
CREATE INDEX idx_reviews_mentor ON code_reviews(mentor_id);

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

CREATE INDEX idx_notifications_user ON notifications(user_id);
CREATE INDEX idx_notifications_unread ON notifications(user_id, is_read) WHERE is_read = false;

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

CREATE INDEX idx_sandbox_user ON sandbox_snippets(user_id);

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

CREATE TRIGGER tr_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_user_progress_updated_at BEFORE UPDATE ON user_progress FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_task_submissions_updated_at BEFORE UPDATE ON task_submissions FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_sandbox_snippets_updated_at BEFORE UPDATE ON sandbox_snippets FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ───────────────────────────────────────────────────────────────
-- ROW LEVEL SECURITY (RLS)
-- Policies allow anon key full access for the training platform
-- ───────────────────────────────────────────────────────────────
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE task_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE code_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE sandbox_snippets ENABLE ROW LEVEL SECURITY;

-- Permissive policies for anon role (training platform, no auth required)
CREATE POLICY "Allow all for anon" ON profiles FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for anon" ON user_progress FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for anon" ON task_submissions FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for anon" ON code_reviews FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for anon" ON notifications FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all for anon" ON sandbox_snippets FOR ALL USING (true) WITH CHECK (true);

-- ───────────────────────────────────────────────────────────────
-- SEED DATA: Demo Users
-- ───────────────────────────────────────────────────────────────
INSERT INTO profiles (id, email, full_name, role, created_at) VALUES
  ('a0000000-0000-0000-0000-000000000001', 'admin@rocketgate.com', 'Главный Ментор', 'admin', now() - interval '60 days'),
  ('a0000000-0000-0000-0000-000000000002', 'maria@rocketgate.com', 'Мария Иванова', 'intern', now() - interval '30 days'),
  ('a0000000-0000-0000-0000-000000000003', 'alex@rocketgate.com', 'Алексей Смирнов', 'intern', now() - interval '14 days'),
  ('a0000000-0000-0000-0000-000000000004', 'dmitry@rocketgate.com', 'Дмитрий Ковалев', 'intern', now() - interval '3 days')
ON CONFLICT (id) DO NOTHING;

-- Seed progress for Maria (advanced intern)
INSERT INTO user_progress (user_id, lesson_id, is_completed, quiz_score, completed_at) VALUES
  ('a0000000-0000-0000-0000-000000000002', 'html-1', true, 100, now() - interval '29 days'),
  ('a0000000-0000-0000-0000-000000000002', 'html-2', true, 100, now() - interval '28 days'),
  ('a0000000-0000-0000-0000-000000000002', 'html-3', true, 100, now() - interval '27 days'),
  ('a0000000-0000-0000-0000-000000000002', 'html-4', true, 100, now() - interval '26 days'),
  ('a0000000-0000-0000-0000-000000000002', 'html-5', true, 100, now() - interval '25 days'),
  ('a0000000-0000-0000-0000-000000000002', 'html-6', true, 100, now() - interval '24 days'),
  ('a0000000-0000-0000-0000-000000000002', 'html-7', true, 100, now() - interval '23 days'),
  ('a0000000-0000-0000-0000-000000000002', 'html-8', true, 100, now() - interval '22 days'),
  ('a0000000-0000-0000-0000-000000000002', 'html-9', true, 100, now() - interval '21 days'),
  ('a0000000-0000-0000-0000-000000000002', 'html-10', true, 100, now() - interval '20 days'),
  ('a0000000-0000-0000-0000-000000000002', 'html-11', true, 100, now() - interval '19 days'),
  ('a0000000-0000-0000-0000-000000000002', 'css-1', true, 100, now() - interval '18 days'),
  ('a0000000-0000-0000-0000-000000000002', 'css-2', true, 100, now() - interval '17 days'),
  ('a0000000-0000-0000-0000-000000000002', 'css-3', true, 100, now() - interval '16 days'),
  ('a0000000-0000-0000-0000-000000000002', 'css-4', true, 100, now() - interval '15 days'),
  ('a0000000-0000-0000-0000-000000000002', 'css-5', true, 100, now() - interval '14 days'),
  ('a0000000-0000-0000-0000-000000000002', 'javascript-1', true, 100, now() - interval '13 days'),
  ('a0000000-0000-0000-0000-000000000002', 'javascript-2', true, 100, now() - interval '12 days'),
  ('a0000000-0000-0000-0000-000000000002', 'javascript-3', true, 80, now() - interval '11 days'),
  ('a0000000-0000-0000-0000-000000000002', 'javascript-4', true, 80, now() - interval '10 days'),
  ('a0000000-0000-0000-0000-000000000002', 'pro-1', true, 100, now() - interval '9 days'),
  ('a0000000-0000-0000-0000-000000000002', 'pro-2', true, 100, now() - interval '8 days')
ON CONFLICT (user_id, lesson_id) DO NOTHING;

-- Seed progress for Alex (mid-level intern)
INSERT INTO user_progress (user_id, lesson_id, is_completed, quiz_score, completed_at) VALUES
  ('a0000000-0000-0000-0000-000000000003', 'html-1', true, 100, now() - interval '13 days'),
  ('a0000000-0000-0000-0000-000000000003', 'html-2', true, 100, now() - interval '12 days'),
  ('a0000000-0000-0000-0000-000000000003', 'html-3', true, 100, now() - interval '11 days'),
  ('a0000000-0000-0000-0000-000000000003', 'html-4', true, 100, now() - interval '10 days'),
  ('a0000000-0000-0000-0000-000000000003', 'html-5', true, 80, now() - interval '9 days'),
  ('a0000000-0000-0000-0000-000000000003', 'css-1', true, 100, now() - interval '8 days'),
  ('a0000000-0000-0000-0000-000000000003', 'css-2', true, 100, now() - interval '7 days'),
  ('a0000000-0000-0000-0000-000000000003', 'css-3', true, 80, now() - interval '6 days')
ON CONFLICT (user_id, lesson_id) DO NOTHING;

-- Seed progress for Dmitry (beginner intern)
INSERT INTO user_progress (user_id, lesson_id, is_completed, quiz_score, completed_at) VALUES
  ('a0000000-0000-0000-0000-000000000004', 'html-1', true, 100, now() - interval '2 days'),
  ('a0000000-0000-0000-0000-000000000004', 'html-2', true, 80, now() - interval '1 day')
ON CONFLICT (user_id, lesson_id) DO NOTHING;

-- Seed bookmarks
INSERT INTO user_progress (user_id, lesson_id, is_bookmarked) VALUES
  ('a0000000-0000-0000-0000-000000000002', 'css-14', true),
  ('a0000000-0000-0000-0000-000000000002', 'javascript-7', true),
  ('a0000000-0000-0000-0000-000000000003', 'html-3', true),
  ('a0000000-0000-0000-0000-000000000003', 'css-6', true)
ON CONFLICT (user_id, lesson_id) DO UPDATE SET is_bookmarked = true;

-- Seed a sample task submission (Maria submitted css-5)
INSERT INTO task_submissions (id, user_id, lesson_id, css_code, student_notes, status, submitted_at) VALUES
  ('b0000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000002', 'css-5',
   '.positioned-box { position: absolute; top: 50px; left: 100px; }',
   'Выполнила задание по позиционированию.',
   'pending', now() - interval '2 days')
ON CONFLICT (id) DO NOTHING;

-- Seed a welcome notification
INSERT INTO notifications (user_id, title, message, type) VALUES
  ('a0000000-0000-0000-0000-000000000002', 'Добро пожаловать!', 'Вы зарегистрированы на платформе стажировки. Удачного обучения!', 'system'),
  ('a0000000-0000-0000-0000-000000000003', 'Добро пожаловать!', 'Вы зарегистрированы на платформе стажировки. Удачного обучения!', 'system'),
  ('a0000000-0000-0000-0000-000000000004', 'Добро пожаловать!', 'Вы зарегистрированы на платформе стажировки. Удачного обучения!', 'system')
ON CONFLICT DO NOTHING;
