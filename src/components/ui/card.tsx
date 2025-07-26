import { cn } from '@/lib/utils';

export function Card({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn('rounded border p-4 shadow-sm bg-white dark:bg-gray-900', className)}>
      {children}
    </div>
  );
}
