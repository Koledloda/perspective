// Supabase client initialization
// Put your VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY into a .env file (see .env.example)

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? ''

if (!supabaseUrl || !supabaseAnonKey) {
  // Lightweight runtime warning so dev knows to configure env vars
  // In production you may want to throw or handle this differently
  // eslint-disable-next-line no-console
  console.warn('Supabase: missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
