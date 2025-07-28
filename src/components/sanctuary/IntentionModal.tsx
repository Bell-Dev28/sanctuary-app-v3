'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

export default function IntentionModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Set Intention</Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Set Your Intention</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-600 mb-4">
            Write something that guides your thoughts today.
          </p>
          <textarea
            className="w-full p-2 border rounded min-h-[100px]"
            placeholder="My intention today is..."
          />
          <div className="flex justify-end mt-4">
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
