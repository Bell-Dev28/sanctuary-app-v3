import { notFound } from 'next/navigation';
import StudioLayout from '@/components/studio/StudioLayout';

type Props = {
  params: { journalId: string };
};

export default function StudioPage({ params }: Props) {
  const { journalId } = params;

  if (!journalId) notFound();

  return <StudioLayout journalId={journalId} />;
}
