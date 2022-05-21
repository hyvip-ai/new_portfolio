import { createClient } from '@supabase/supabase-js';
import { create } from 'domain';

const supabase = create(
  process.env.NEXT_PUBLIC_BASE_URL,
  process.env.NEXT_PUBLIC_ANON_KEY
);

export default supabase;
