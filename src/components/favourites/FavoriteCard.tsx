interface FavoriteCardProps {
  title: string;
  isFavorited: boolean;
  onToggle: () => void;
}

export default function FavoriteCard({ title, isFavorited, onToggle }: FavoriteCardProps) {
  return (
    <div className="border p-4 rounded flex justify-between items-center">
      <h3 className="font-semibold">{title}</h3>
      <button onClick={onToggle}>
        {isFavorited ? '💖' : '🤍'}
      </button>
    </div>
  );
}
