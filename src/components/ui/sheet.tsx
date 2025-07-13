// src/components/ui/sheet.tsx
import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog'; // Using dialog as sheet
import { cn } from '@/lib/utils';

export const Sheet = SheetPrimitive.Root;
export const SheetTrigger = SheetPrimitive.Trigger;

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & { side?: 'left' | 'right' }
>(({ className, side = 'right', ...props }, ref) => (
  <SheetPrimitive.Portal>
    <SheetPrimitive.Overlay className="fixed inset-0 bg-black/50" />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        'fixed top-0 bottom-0 w-64 bg-white p-4',
        side === 'left' ? 'left-0' : 'right-0',
        className
      )}
      {...props}
    />
  </SheetPrimitive.Portal>
));
SheetContent.displayName = 'SheetContent';

export const SheetClose = SheetPrimitive.Close;
