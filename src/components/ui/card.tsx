// src/components/ui/card.tsx
import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * A simple Card container.
 */
export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('rounded-lg border bg-white p-4 shadow-sm', className)}
      {...props}
    />
  );
}

/**
 * Card title (uses an <h3> by default).
 */
export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('mb-2 text-lg font-medium leading-none', className)}
      {...props}
    />
  );
}

/**
 * Card content wrapper.
 */
export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('text-sm text-gray-600', className)} {...props} />
  );
}
