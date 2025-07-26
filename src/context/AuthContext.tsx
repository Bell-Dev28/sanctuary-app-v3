'use client';

import { createContext, useContext, useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

type SupabaseContextType = {
  supabase: SupabaseClient<Database>;
};

const AuthContext = createContext<SupabaseContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() =>
    createBrowserClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON!
    )
  );

  return (
    <AuthContext.Provider value={{ supabase }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useSupabase() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useSupabase must be used within AuthProvider');
  return context;
}
