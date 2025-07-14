// src/app/(main)/layout.tsx
import PageTransition from "@/components/shared/PageTransition";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
