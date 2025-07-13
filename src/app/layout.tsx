// src/app/layout.tsx
import './globals.css';
import { Metadata } from 'next';
import AppLayout from '@/components/AppLayout';
import { AuthProvider } from '@/context/AuthContext';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Sanctuary',
  description: 'Your private AI-powered journaling sanctuary',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body>
        <AuthProvider>
          <AppLayout>{children}</AppLayout>
          <Toaster richColors position="bottom-right" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', () => {
                    navigator.serviceWorker.register('/sw.js');
                  });
                }
              `,
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
