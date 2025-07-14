import { AuthProvider } from "@/context/AuthContext";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex items-center justify-center h-full bg-background">
        {children}
      </div>
    </AuthProvider>
  );
}