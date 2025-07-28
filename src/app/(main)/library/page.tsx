import JournalBook from '@/components/sanctuary/JournalBook';

type Journal = {
  id: number;
  title: string | null;
};

export default async function LibraryPage() {
  const journals: Journal[] = []; // Replace with actual fetch logic

  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      {journals.map((j) => (
        <JournalBook key={j.id} id={j.id} title={j.title ?? ''} />
      ))}
    </div>
  );
}