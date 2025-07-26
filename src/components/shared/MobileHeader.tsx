'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navItems = [
  { name: 'Shared Library', href: '/' },
  { name: 'Private AI Studio', href: '/studio' },
  { name: 'Playbooks', href: '/playbooks' },
  { name: 'Your AI Assistant', href: '/assistant' },
  { name: 'Profile', href: '/profile' },
];

export function MobileHeader({ avatarUrl }: { avatarUrl?: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="md:hidden px-4 py-3 flex items-center justify-between border-b border-border bg-background sticky top-0 z-50"
      role="banner"
    >
      <button
        className="text-muted-foreground"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      <Link href="/" className="text-lg font-bold">
        Sanctuary
      </Link>

      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt="User avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      ) : (
        <div className="w-8 h-8 rounded-full bg-muted" />
      )}

      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <Dialog.Panel
          className="fixed inset-y-0 left-0 w-72 bg-background p-6 shadow-lg z-50 animate-in slide-in-from-left"
          aria-label="Main mobile menu"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              className="text-muted-foreground"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-4" role="navigation">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium ${
                  pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                } hover:text-foreground`}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
