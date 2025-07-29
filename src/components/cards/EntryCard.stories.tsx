import React from 'react';
import EntryCard from './EntryCard';

export default {
  title: 'cards/EntryCard',
  component: EntryCard,
};

export const Default = () => <EntryCard entry={{
  id: '',
  content: '',
  created_at: '',
  author: ''
}} />;
