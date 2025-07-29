import TagFilterBar from './TagFilterBar';

export default {
  title: 'Playbooks/TagFilterBar',
  component: TagFilterBar,
};

export const Default = {
  args: {
    tags: ['Spiritual', 'Relationship', 'Healing'],
    selectedTag: 'Spiritual',
    onSelectTag: (tag: string) => alert(`Selected tag: ${tag}`),
  },
};
