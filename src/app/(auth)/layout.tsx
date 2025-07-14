// No provider needed here anymore, as it's in the root layout.
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      {children}
    </div>
  );
}