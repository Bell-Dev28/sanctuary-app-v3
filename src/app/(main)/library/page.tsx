import MainLayout from '@/components/layout/MainLayout';
import JournalBookCard from '@/components/sanctuary/JournalBookCard';

const mockBooks = [
  { id: 1, title: 'The Relationship Log' },
  { id: 2, title: 'Faith Journal' },
];

export default function LibraryPage() {
  return (
    <MainLayout>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockBooks.map(book => (
          <JournalBookCard key={book.id} id={book.id} title={book.title} />
        ))}
      </div>
    </MainLayout>
  );
}
