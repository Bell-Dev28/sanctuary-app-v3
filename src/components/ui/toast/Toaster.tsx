// components/ui/toaster.tsx
'use client';

import { Toaster as SonnerToaster } from 'sonner';

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      richColors
      toastOptions={{
        classNames: {
          toast: 'rounded-lg shadow-md border bg-background text-foreground',
          title: 'font-semibold',
          description: 'text-muted-foreground',
        },
      }}
    />
  );
}
