'use client';

import { ReactNode } from 'react';
import Header from './Header';

export default function LayoutClient({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  );
}
