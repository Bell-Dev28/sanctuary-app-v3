'use client';

import * as Sheet from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SidePanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: ReactNode;
}

export function SidePanel({ open, onOpenChange, title, children }: SidePanelProps) {
  return (
    <Sheet.Root open={open} onOpenChange={onOpenChange}>
      <Sheet.Portal>
        <Sheet.Overlay className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm" />
        <Sheet.Content
          role="complementary"
          aria-label="Collaboration panel"
          className={cn(
            'fixed right-0 top-0 h-full w-[90vw] sm:w-[400px] z-50 bg-background shadow-lg',
            'animate-in slide-in-from-right fade-in'
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="text-lg font-semibold">{title}</h2>
            <Sheet.Close asChild>
              <button className="text-muted-foreground hover:text-foreground" aria-label="Close panel">
                <X className="w-5 h-5" />
              </button>
            </Sheet.Close>
          </div>
          <div className="p-4 overflow-y-auto h-full">{children}</div>
        </Sheet.Content>
      </Sheet.Portal>
    </Sheet.Root>
  );
}
