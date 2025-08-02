import { notFound } from 'next/navigation';
import StudioLayout from '@/components/studio/StudioLayout';

type Props = {
  params: { topicId: string };
};

export default function Page({ params }: Props) {
  const conversationId = params.topicId;

  if (!conversationId) notFound();

  return <StudioLayout conversationId={conversationId} />;
}
