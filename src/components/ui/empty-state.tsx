interface EmptyStateProps {
  title?: string;
  subtitle?: string;
}

export default function EmptyState({ title = 'Nothing here yet', subtitle = '' }: EmptyStateProps) {
  return (
    <div className="text-center text-gray-500 py-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      {subtitle && <p className="text-sm mt-1">{subtitle}</p>}
    </div>
  );
}
