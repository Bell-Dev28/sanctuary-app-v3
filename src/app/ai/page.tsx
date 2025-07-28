'use client';

import { useEffect } from 'react';
import { useUser } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function AIStudio() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push('/login');
  }, [user, router]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">AI Studio</h1>
      <p>Use AI to interact with your topics here.</p>
    </div>
  );
}
