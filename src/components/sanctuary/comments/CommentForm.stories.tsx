import CommentForm from './CommentForm';

const story = {
  title: 'Sanctuary/CommentForm',
  component: CommentForm,
};

export default story;

export const Default = () => <CommentForm onSubmit={() => {}} />;
