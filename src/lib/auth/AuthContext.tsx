'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/supabaseClient';
import { getEffectiveUser, setImpersonatedUser } from './getEffectiveUser';
import { User } from '@supabase/supabase-js';

type AuthContextType = {
  user: User | null;
  switchUser: (user: User | null) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  switchUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user ?? null);
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const switchUser = (overrideUser: User | null) => {
    setImpersonatedUser(overrideUser);
    setUser((prev) => (overrideUser ? overrideUser : prev));
  };

  return (
    <AuthContext.Provider value={{ user: getEffectiveUser(user), switchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUser = () => useContext(AuthContext);
