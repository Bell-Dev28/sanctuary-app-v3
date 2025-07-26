// src/middleware.ts
import { createMiddlewareClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { Database } from '@/types/supabase';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient<Database>({ req, res });
  await supabase.auth.getSession(); // refresh tokens if needed

  return res;
}

// You can restrict paths if needed
export const config = {
  matcher: ['/dashboard/:path*', '/journal/:path*'], // adjust based on protected routes
};
