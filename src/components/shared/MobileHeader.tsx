'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import UserDropdown from './user/UserDropdown';

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 shadow-sm bg-white border-b md:hidden">
      <button onClick={() => setOpen(!open)} className="text-gray-700">
        <Menu />
      </button>
      <span className="text-lg font-semibold text-blue-600">Sanctuary</span>
      <UserDropdown />
    </header>
  );
}
