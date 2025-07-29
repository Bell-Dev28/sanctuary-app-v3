import CommentForm from './CommentForm';

export default {
  title: 'Sanctuary/CommentForm',
  component: CommentForm,
};

export const Default = () => (
  <CommentForm
    onSubmit={(text) => console.log(text)}
  />
);
