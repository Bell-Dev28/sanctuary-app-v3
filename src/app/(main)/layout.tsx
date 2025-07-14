import { SideNav } from "./home/_components/side-nav";
import { PageTransition } from "@/components/shared/PageTransition";

// No provider needed here anymore, as it's in the root layout.
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-background">
      <SideNav />
      <main className="flex-1 h-full overflow-y-auto">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
    </div>
  );
}