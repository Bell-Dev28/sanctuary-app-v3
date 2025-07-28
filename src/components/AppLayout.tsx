import { ReactNode } from 'react';
import LayoutClient from './shared/LayoutClient';

export default function AppLayout({ children }: { children: ReactNode }) {
  return <LayoutClient>{children}</LayoutClient>;
}
