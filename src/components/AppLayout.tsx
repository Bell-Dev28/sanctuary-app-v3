// src/components/AppLayout.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import {
  Menu,
  BookOpen,
  Bot,
  DraftingCompass,
  User as UserIcon,
  LogOut,
} from 'lucide-react';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { signOut } = useAuth();
  const router = useRouter();

  const navItems = [
    { label: 'Library',   href: '/journal/the-unspoken',  icon: BookOpen },
    { label: 'Studio',    href: '/studio/the-unspoken',  icon: Bot },
    { label: 'Playbooks', href: '/playbooks',           icon: DraftingCompass },
    { label: 'Profile',   href: '/profile',             icon: UserIcon },
  ];

  const handleSignOut = async () => {
    await signOut();
    router.replace('/login');
  };

  return (
    <Sheet>
      {/* Mobile menu trigger */}
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>

      {/* Mobile menu content */}
      <SheetContent side="left" className="p-0 w-64">
        <nav className="space-y-1 p-4">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center p-2 hover:bg-gray-100 rounded"
            >
              <Icon className="mr-3" />
              {label}
            </Link>
          ))}
          <button
            onClick={handleSignOut}
            className="flex items-center p-2 text-red-600 hover:bg-gray-100 rounded w-full"
          >
            <LogOut className="mr-3" />
            Sign Out
          </button>
        </nav>
        <SheetClose asChild>
          <Button variant="ghost" className="absolute top-4 right-4">
            Close
          </Button>
        </SheetClose>
      </SheetContent>

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:border-r">
        <nav className="space-y-1 p-4">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center p-2 hover:bg-gray-100 rounded"
            >
              <Icon className="mr-3" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="p-4">
          <button
            onClick={handleSignOut}
            className="flex items-center p-2 text-red-600 hover:bg-gray-100 rounded w-full"
          >
            <LogOut className="mr-3" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </Sheet>
  );
}
