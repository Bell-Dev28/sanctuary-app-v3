import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

export const EmptyState = ({ icon: Icon, title, description, buttonText, buttonLink }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-secondary rounded-lg">
      <div className="mb-4">
        <Icon className="h-16 w-16 text-muted-foreground/50" />
      </div>
      <h2 className="text-2xl font-serif font-semibold tracking-tight">
        {title}
      </h2>
      <p className="mt-2 text-muted-foreground">
        {description}
      </p>
      {buttonText && buttonLink && (
        <Button asChild className="mt-6">
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      )}
    </div>
  );
};