// src/app/layout.tsx
import "@/app/globals.css";
import LayoutClient from "./layoutclient";

export const metadata = {
  title: "Sanctuary App",
  description: "A deeply personal and collaborative journaling experience",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
