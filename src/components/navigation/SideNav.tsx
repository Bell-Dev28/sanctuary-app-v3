'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Book, Brain, PenLineIcon, LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { useUser } from '@/context/AuthContext';
import { createClient } from '@/utils/supabase/client';

const navItems = [
  { href: '/library', label: 'Library', icon: Book },
  { href: '/playbooks', label: 'Playbooks', icon: PenLineIcon },
  { href: '/assistant', label: 'AI Assistant', icon: Brain },
];

type SideNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SideNav({ isOpen, onClose }: SideNavProps) {
  const pathname = usePathname();
  const { user } = useUser();
  const supabase = createClient();

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={onClose} />
      )}

      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed top-0 left-0 z-50 w-64 h-full bg-white dark:bg-gray-900 shadow-lg p-4 flex flex-col"
      >
        <div className="flex items-center gap-3 mb-6">
          <Image
            src="/profile.jpg"
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full border"
          />
          <div className="text-sm font-semibold">{user?.email || 'Guest'}</div>
        </div>

        <nav className="space-y-2 flex-1">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition text-sm',
                pathname === href
                  ? 'bg-gray-200 dark:bg-gray-800 font-semibold'
                  : 'text-gray-700 dark:text-gray-300'
              )}
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          ))}
        </nav>

        <button
          onClick={logout}
          className="flex items-center gap-2 mt-auto text-sm text-red-600 hover:text-red-800"
        >
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </motion.aside>
    </>
  );
}