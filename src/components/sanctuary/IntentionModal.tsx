'use client';

import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/Dialog';

type Props = {
  open: boolean;
  onClose: () => void;
  journalId: number;
};

export default function IntentionModal({ open, onClose, journalId }: Props) {
  const router = useRouter();

  const handleNavigate = (type: 'explore' | 'view') => {
    const path = type === 'explore' ? `/studio/${journalId}` : `/journal/${journalId}`;
    router.push(path);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(val) => !val && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>What would you like to do?</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <button
            onClick={() => handleNavigate('explore')}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Explore with AI
          </button>
          <button
            onClick={() => handleNavigate('view')}
            className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            View Journal
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
