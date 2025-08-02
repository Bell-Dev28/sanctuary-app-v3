'use client';

import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }: { theme: 'light' | 'dark'; toggleTheme: () => void }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow text-gray-800 dark:text-gray-200 hover:scale-105 transition"
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}