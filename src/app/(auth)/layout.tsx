import { AuthProvider } from "@/context/AuthContext";
// The import path is now corrected to point to the correct location
import "../globals.css";

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