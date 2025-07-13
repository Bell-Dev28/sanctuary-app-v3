// src/app/not-found.tsx
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 – Page Not Found</h1>
      <Link href="/login" className="mt-4 text-blue-600 hover:underline">
        Go to Login
      </Link>
    </div>
  );
}
