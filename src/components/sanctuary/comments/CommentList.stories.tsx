import CommentList from './CommentList';

const story = {
  title: 'Sanctuary/CommentList',
  component: CommentList,
};

export default story;

export const Default = () => <CommentList comments={[]} />;
