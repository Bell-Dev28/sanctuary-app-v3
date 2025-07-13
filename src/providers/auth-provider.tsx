"use client";

import React, { createContext, useContext, ReactNode } from 'react';

// Define a placeholder user type
interface User {
  name: string;
}

// Define the context shape
interface AuthContextType {
  user: User | null;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create the Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // For the build process, we can provide a mock user.
  // In your real app, this would be fetched from your auth service.
  const value = { user: { name: "Test User" } };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Create the custom hook that your pages will use
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};