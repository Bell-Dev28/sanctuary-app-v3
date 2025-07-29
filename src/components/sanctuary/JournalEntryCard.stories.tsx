import JournalEntryCard from './JournalEntryCard';

export default {
  title: 'Sanctuary/JournalEntryCard',
  component: JournalEntryCard,
};

export const Example = {
  args: {
    entry: {
      id: 1,
      content: 'This is a journal entry',
      created_at: new Date().toISOString(),
      author: 'John Doe',
      comments: [],
    },
  },
};
