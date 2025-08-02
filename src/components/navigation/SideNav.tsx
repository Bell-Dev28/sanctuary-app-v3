'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

const navItems = [
  { href: '/library', label: 'Library' },
  { href: '/playbooks', label: 'Playbooks' },
  { href: '/assistant', label: 'AI Assistant' },
];

export default function SideNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();

  // Close nav on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <aside
      className={cn(
        'fixed z-50 md:relative md:translate-x-0 w-64 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-sm transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full border border-gray-300"
          />
          <span className="font-semibold text-sm">Marie</span>
        </div>
        <button
          className="md:hidden text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
          onClick={onClose}
          aria-label="Close Menu"
        >
          ✕
        </button>
      </div>

      <nav className="flex flex-col px-4 py-6 space-y-2">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'text-sm px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition',
              pathname === href ? 'bg-gray-200 dark:bg-gray-700 font-semibold' : 'text-gray-700 dark:text-gray-300'
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
