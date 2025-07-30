'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/library', label: 'Shared Library' },
  { href: '/studio', label: 'Private AI Studio' },
  { href: '/playbooks', label: 'Playbooks' },
  { href: '/assistant', label: 'Your AI Assistant' },
  { href: '/profile', label: 'Profile' },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r shadow-sm hidden md:block">
      <div className="p-4 border-b flex items-center gap-3">
        <img src="/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
        <span className="font-medium text-gray-700">Marie</span>
      </div>
      <nav className="flex flex-col px-4 py-6 space-y-2">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'text-sm px-3 py-2 rounded hover:bg-gray-100 transition',
              pathname.startsWith(href) ? 'bg-gray-200 font-semibold' : 'text-gray-600'
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
