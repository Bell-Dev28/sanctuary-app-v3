import { ReactNode } from 'react';
import LayoutClient from '@/components/shared/LayoutClient';

export default function MainLayout({ children }: { children: ReactNode }) {
  return <LayoutClient>{children}</LayoutClient>;
}
