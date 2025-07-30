'use client';

import { ReactNode } from 'react';
import SideNav from '@/components/navigation/SideNav';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideNav />
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
