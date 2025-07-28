interface MemoryCardProps {
  title: string;
  content: string;
  timestamp: string;
}

export default function MemoryCard({ title, content, timestamp }: MemoryCardProps) {
  return (
    <div className="p-4 border rounded shadow-sm mb-2">
      <h3 className="text-md font-semibold">{title}</h3>
      <p className="text-sm">{content}</p>
      <span className="text-xs text-gray-500">{new Date(timestamp).toLocaleString()}</span>
    </div>
  );
}
