import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://dhccdmddzmqxhmguodwr.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoY2NkbWRkem1xeGhtZ3VvZHdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcyMjE3MDEsImV4cCI6MjEwMjc5NzcwMX0.5c1EgN5Ye4nr8FDH5YEUGYJRYlu_vvRrsnyzoEiMia0';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
});

// Health check to verify database tables connectivity
export const checkSupabaseConnection = async (): Promise<{ connected: boolean; message: string }> => {
  if (!isSupabaseConfigured) {
    return { connected: false, message: 'Supabase credentials not configured' };
  }

  try {
    const { error } = await supabase.from('profiles').select('id').limit(1);
    if (error) {
      if (error.code === 'PGRST205' || error.message.includes('not find the table')) {
        return {
          connected: false,
          message: 'Подключение к Supabase есть, но таблицы еще не созданы (выполните SQL из supabase/schema.sql в SQL Editor)'
        };
      }
      return { connected: false, message: error.message };
    }
    return { connected: true, message: 'Подключено к Supabase Cloud PostgreSQL 🟢' };
  } catch (err: any) {
    return { connected: false, message: err?.message || 'Network error' };
  }
};
