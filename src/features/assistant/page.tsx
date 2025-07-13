// src/features/assistant/page.tsx
'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { SidebarHistory } from '@/components/ui/sidebarhistory';
import StudioClient from '@/components/StudioClient';

export default function StudioPage() {
  const { user } = useAuth();
  const router = useRouter();
  const params = useParams();

  // Could be string | string[] | undefined
  const raw = params.journalTitle;
  // Normalize to string or empty
  const topicId = Array.isArray(raw) ? raw[0] : raw ?? '';

  // 1) Redirect if not signed in
  useEffect(() => {
    if (!user) {
      router.replace('/login');
    }
  }, [user, router]);

  // 2) Redirect if no topic in the URL
  useEffect(() => {
    if (!raw) {
      router.replace('/');
    }
  }, [raw, router]);

  // Now it's safe to bail out of rendering
  if (!user || !raw) {
    return null;
  }

  return (
    <div className="flex h-full">
      <aside className="w-64 border-r">
        <SidebarHistory topicId={topicId} />
      </aside>
      <main className="flex-1 flex flex-col">
        <header className="p-4 border-b">
          <h1 className="text-xl font-semibold">Studio: {topicId}</h1>
        </header>
        <div className="flex-1">
          <StudioClient topicId={topicId} />
        </div>
      </main>
    </div>
  );
}
