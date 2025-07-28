import { cn } from '@/lib/utils';

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('inline-block rounded-full bg-blue-100 text-blue-800 px-3 py-1 text-xs font-medium', className)}>{children}</span>
  );
}
