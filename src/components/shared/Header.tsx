'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';
import SideNav from '@/components/navigation/SideNav';
import { ThemeToggle } from './user/ThemeToggle';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="w-full p-4 flex justify-between items-center border-b bg-white dark:bg-gray-900">
        <button
          className="text-gray-600 dark:text-gray-200"
          onClick={() => setDrawerOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="font-semibold text-lg">Sanctuary</h1>
        <ThemeToggle />
      </header>
      <SideNav isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}