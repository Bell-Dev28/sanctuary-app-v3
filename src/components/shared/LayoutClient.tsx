'use client';

import { ReactNode } from 'react';
import Header from './Header';
import SideNav from './SideNav';

export default function LayoutClient({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-1 overflow-y-auto">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
