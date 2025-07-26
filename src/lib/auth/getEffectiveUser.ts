// src/lib/auth/getEffectiveUser.ts
import { User } from '@supabase/supabase-js';

let impersonatedUser: User | null = null;

export const getEffectiveUser = (realUser: User | null): User | null => {
  return impersonatedUser || realUser;
};

export const setImpersonatedUser = (user: User | null) => {
  impersonatedUser = user;
};
