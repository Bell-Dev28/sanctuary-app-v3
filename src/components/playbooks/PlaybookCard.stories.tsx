import PlaybookCard from './PlaybookCard';

const story = {
  title: 'Playbooks/PlaybookCard',
  component: PlaybookCard,
};

export default story;

export const Default = () => <PlaybookCard title="AI Strategy" content={''} favoritedBy={{
  me: false,
  partner: false
}} onFavorite={function (): void {
  throw new Error('Function not implemented.');
} } />;
