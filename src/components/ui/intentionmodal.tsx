// src/components/ui/IntentionModal.tsx
'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface IntentionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewJournal: () => void;
  onExploreAI: () => void;
}

export const IntentionModal: React.FC<IntentionModalProps> = ({
  isOpen,
  onClose,
  onViewJournal,
  onExploreAI,
}) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Select an action</DialogTitle>
      </DialogHeader>
      <DialogFooter className="space-x-4">
        <Button onClick={onViewJournal}>View Our Journal</Button>
        <Button variant="destructive" onClick={onExploreAI}>
          Explore with AI
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
