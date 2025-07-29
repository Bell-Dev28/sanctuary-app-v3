import React from 'react';
import PlaybookCard from './PlaybookCard';

export default {
  title: 'playbooks/PlaybookCard',
  component: PlaybookCard,
};

export const Default = () => <PlaybookCard title={''} content={''} favoritedBy={{
  me: false,
  partner: false
}} onFavorite={function (): void {
  throw new Error('Function not implemented.');
} } />;
