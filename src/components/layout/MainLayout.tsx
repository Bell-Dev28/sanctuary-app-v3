'use client';

import { ReactNode, useEffect, useState } from 'react';
import SideNav from '../navigation/SideNav';
import MobileNavToggle from '../ui/MobileNavToggle';
import ThemeToggle from '../ui/ThemeToggle';

export default function MainLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark';
    if (saved) document.documentElement.classList.toggle('dark', saved === 'dark');
    if (saved) setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="flex min-h-screen bg-background text-foreground transition-colors">
      <MobileNavToggle onClick={() => setSidebarOpen(!sidebarOpen)} />
      <SideNav isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 p-6 overflow-y-auto w-full relative">
        <div className="absolute top-4 right-6 z-30">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <div className="max-w-6xl mx-auto w-full">{children}</div>
      </main>
    </div>
  );
}
