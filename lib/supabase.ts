import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Debug: 환경 변수 확인 (개발 모드에서만 실행)
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    console.log('Supabase URL:', supabaseUrl);
    console.log('Supabase Anon Key exists:', !!supabaseAnonKey);
    console.log('Supabase Anon Key length:', supabaseAnonKey.length);
    console.log('Supabase Service Role Key exists:', !!supabaseServiceRoleKey);
}

// Public client for regular operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Service role client for admin operations like pre-registration
export const supabaseAdmin = supabase;

// Type for pre-registration data
export interface PreRegistration {
    id?: string;
    email: string;
    created_at?: string;
}
