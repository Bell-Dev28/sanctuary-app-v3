import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css"; // This is the crucial import that was missing

// Font setup from our initial implementation
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Sanctuary",
  description: "A private digital space for connection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}