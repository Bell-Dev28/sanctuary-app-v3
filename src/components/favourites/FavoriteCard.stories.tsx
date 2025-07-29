import React from 'react';
import FavoriteCard from './FavoriteCard';

export default {
  title: 'favourites/FavoriteCard',
  component: FavoriteCard,
};

export const Default = () => <FavoriteCard title={''} isFavorited={false} onToggle={function (): void {
  throw new Error('Function not implemented.');
} } />;
