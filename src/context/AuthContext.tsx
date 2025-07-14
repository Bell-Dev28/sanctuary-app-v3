"use client";

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Session, User, AuthResponse, AuthError } from '@supabase/supabase-js'; // Import AuthError

// Define the shape of the context value
interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signInWithEmail: (email: string, password: string) => Promise<AuthResponse>;
  signOut: () => Promise<{ error: AuthError | null }>; // Corrected the return type
}

// Create the context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create the Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Define the actual functions with correct types
  const signInWithEmail = (email: string, password: string) => supabase.auth.signInWithPassword({ email, password });
  const signOut = () => supabase.auth.signOut();

  const value = {
    session,
    user,
    loading,
    signInWithEmail,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Create the custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};