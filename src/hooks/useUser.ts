
import { useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';

export function useUser() {
  const [supabase] = useState(() =>
    createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON!
    )
  );
  return supabase;
}
