import { cn } from '@/lib/utils';
import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'w-full border px-3 py-2 rounded text-sm bg-white dark:bg-gray-800',
        className
      )}
      {...props}
    />
  );
});

Input.displayName = 'Input';
export default Input;
