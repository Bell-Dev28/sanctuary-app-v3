import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { AuthProvider } from '@/context/AuthContext'; // ✅ add this

export const metadata = {
  title: 'Sanctuary App',
  description: 'Reflective journaling meets AI collaboration.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider> {/* ✅ wrap everything inside here */}
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
