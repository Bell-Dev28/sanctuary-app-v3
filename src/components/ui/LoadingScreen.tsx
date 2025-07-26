// components/ui/loading-screen.tsx
export function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-muted-foreground border-opacity-50"></div>
    </div>
  );
}
