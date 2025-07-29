import React from 'react';
import JournalEntryCard from './JournalEntryCard';

export default {
  title: 'sanctuary/JournalEntryCard',
  component: JournalEntryCard,
};

export const Default = () => <JournalEntryCard entry={{
  id: 0,
  content: '',
  created_at: '',
  author: '',
  comments: []
}} />;
