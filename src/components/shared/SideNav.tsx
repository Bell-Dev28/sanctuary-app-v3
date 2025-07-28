'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/library', label: 'Library' },
  { href: '/playbooks', label: 'Playbooks' },
  { href: '/ai', label: 'AI Assistant' },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block bg-gray-50 w-64 h-full shadow-sm p-4 space-y-4">
      {navLinks.map(({ href, label }) => (
        <Link key={href} href={href}>
          <span
            className={`block px-3 py-2 rounded ${
              pathname === href ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
