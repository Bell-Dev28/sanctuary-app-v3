// src/lib/supabase/server.ts

import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';

export const getSupabaseServer = () =>
  createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON!,
    {
      cookies: cookies(), // ✅ still correct
    }
  );

  export const getUser = async () => {
  const supabase = getSupabaseServer();
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return user;
};