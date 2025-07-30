// src/components/sanctuary/JournalBook.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import JournalBook from './JournalBook';

const meta: Meta<typeof JournalBook> = {
  title: 'Sanctuary/JournalBook',
  component: JournalBook,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof JournalBook>;

export const Default: Story = {
  args: {
    id: 1,
    title: 'My Reflective Journal',
  },
};
