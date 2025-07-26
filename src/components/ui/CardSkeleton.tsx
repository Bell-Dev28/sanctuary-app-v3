export function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border bg-card p-4 shadow-sm space-y-4">
      <div className="h-4 w-1/2 bg-muted rounded" />
      <div className="h-3 w-full bg-muted rounded" />
      <div className="h-3 w-3/4 bg-muted rounded" />
    </div>
  );
}
