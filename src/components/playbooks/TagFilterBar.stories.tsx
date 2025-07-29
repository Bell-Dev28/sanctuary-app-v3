import React from 'react';
import TagFilterBar from './TagFilterBar';

export default {
  title: 'playbooks/TagFilterBar',
  component: TagFilterBar,
};

export const Default = () => <TagFilterBar tags={[]} activeTag={null} />;
