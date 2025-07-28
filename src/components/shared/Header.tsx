'use client';

import Link from 'next/link';
import { ThemeToggle } from './user/ThemeToggle';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
      <Link href="/" className="text-xl font-bold">Sanctuary</Link>
      <ThemeToggle />
    </header>
  );
}