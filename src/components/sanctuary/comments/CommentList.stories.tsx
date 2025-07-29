import React from 'react';
import CommentList from './CommentList';

export default {
  title: 'sanctuary/comments/CommentList',
  component: CommentList,
};

export const Default = () => <CommentList comments={[]} />;
