import { SideNav } from "./home/_components/side-nav";
import { AuthProvider } from "@/providers/auth-provider";
import { PageTransition } from "@/components/shared/PageTransition";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex h-full bg-background">
        <SideNav />
        <main className="flex-1 h-full overflow-y-auto p-4 md:p-8">
           <PageTransition>
              {children}
           </PageTransition>
        </main>
      </div>
    </AuthProvider>
  );
}