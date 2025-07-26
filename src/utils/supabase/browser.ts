// src/utils/supabase/browser.ts
'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/types/supabase';

/**
 * Call this inside any "use client" component to get a Supabase client
 * wired up to the browser’s cookies/localStorage for auth.
 */
export function createBrowserSupabaseClient() {
  return createClientComponentClient<Database>();
}
