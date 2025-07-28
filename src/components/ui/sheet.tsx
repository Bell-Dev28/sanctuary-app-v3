'use client';

import { ReactNode } from 'react';

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Sheet({ isOpen, onClose, children }: SheetProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30">
      <div className="bg-white w-96 h-full shadow-xl p-6">
        <button onClick={onClose} className="text-sm text-blue-600 mb-4">Close</button>
        {children}
      </div>
    </div>
  );
}
