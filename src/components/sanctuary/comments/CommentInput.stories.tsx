import CommentInput from './CommentInput';

export default {
  title: 'Sanctuary/CommentInput',
  component: CommentInput,
};

export const Default = {
  args: {
    onSubmit: (val: string) => alert(`Submitted: ${val}`),
  },
};
