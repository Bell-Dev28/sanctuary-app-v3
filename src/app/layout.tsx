// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/providers/ThemeProvider';

export const metadata = {
  title: 'Sanctuary App',
  description: 'Reflective journaling meets AI collaboration.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
