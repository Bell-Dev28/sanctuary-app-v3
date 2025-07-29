import type { Meta, StoryObj } from '@storybook/react';
import ChatInterface from './ChatInterface';

const meta: Meta<typeof ChatInterface> = {
  title: 'Studio/Chat/Interface',
  component: ChatInterface,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChatInterface>;

export const Default: Story = {
  args: {
    topicId: 'test-topic',
  },
};
export const WithMessages: Story = {
  args: {
    topicId: 'test-topic',
    messages: [
      { id: '1', text: 'Hello!', sender: 'user' },
      { id: '2', text: 'Hi there!', sender: 'bot' },
    ],
  },
};