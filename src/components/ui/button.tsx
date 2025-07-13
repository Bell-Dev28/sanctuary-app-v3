// src/components/ui/button.tsx
import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'ghost';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition',
        {
          // primary
          'bg-blue-600 text-white hover:bg-blue-700': variant === 'default',
          // destructive
          'bg-red-600 text-white hover:bg-red-700': variant === 'destructive',
          // ghost (icon-only / transparent)
          'bg-transparent text-gray-700 hover:bg-gray-100 p-2': variant === 'ghost',
        },
        className
      )}
      {...props}
    />
  )
);
Button.displayName = 'Button';
