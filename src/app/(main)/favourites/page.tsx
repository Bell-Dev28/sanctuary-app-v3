'use client';

import FavoriteCard from '@/components/favourites/FavoriteCard';

export default function FavouritesPage() {
  const mockFavorites = [
    { title: 'Couples Retreat Plan', isFavorited: true },
    { title: 'Healing Conflict Log', isFavorited: false },
  ];

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Favorites</h1>
      <div className="space-y-2">
        {mockFavorites.map((item, i) => (
          <FavoriteCard
            key={i}
            title={item.title}
            isFavorited={item.isFavorited}
            onToggle={() => {
              console.log(`Toggled: ${item.title}`);
            }}
          />
        ))}
      </div>
    </main>
  );
}
