import FavoriteCard from './FavoriteCard';

const story = {
  title: 'Favourites/FavoriteCard',
  component: FavoriteCard,
};

export default story;

export const Default = () => <FavoriteCard title="Sample Favorite" isFavorited={true} onToggle={() => {}} />;
