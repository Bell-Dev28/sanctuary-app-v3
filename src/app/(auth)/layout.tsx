import { AuthProvider } from "@/providers/auth-provider";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Wrap the auth pages with the provider
    <AuthProvider>
      <div className="flex items-center justify-center h-full bg-secondary">
        {children}
      </div>
    </AuthProvider>
  );
}