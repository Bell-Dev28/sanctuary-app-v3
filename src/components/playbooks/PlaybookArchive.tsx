'use client';

import PlaybookCard from './PlaybookCard';

const mockPlaybooks = [
  {
    journalTitle: 'The Relationship Log',
    entries: [
      {
        id: 'pb1',
        title: 'Fantasy Scene',
        content: 'In the land of dreams, they met under moonlight...',
        favoritedBy: { me: true, partner: false },
      },
      {
        id: 'pb2',
        title: 'Date Night Plan',
        content: 'Friday: stargazing & hot chocolate',
        favoritedBy: { me: false, partner: true },
      },
    ],
  },
];

export default function PlaybookArchive() {
  const handleFavorite = (playbookId: string, user: 'me' | 'partner') => {
    console.log(`Toggled favorite for ${user} on playbook ${playbookId}`);
    // You can later mutate Supabase or local state here
  };

  return (
    <div className="space-y-6">
      {mockPlaybooks.map((section) => (
        <div key={section.journalTitle}>
          <h2 className="text-xl font-semibold mb-4">{section.journalTitle}</h2>
          <div className="space-y-4">
            {section.entries.map((entry) => (
              <PlaybookCard
                key={entry.id}
                id={entry.id}
                title={entry.title}
                content={entry.content}
                favoritedBy={entry.favoritedBy}
                onFavorite={handleFavorite}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
