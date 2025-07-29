import type { Meta, StoryObj } from '@storybook/react';
import ChatInput from './ChatInput';

const meta: Meta<typeof ChatInput> = {
  title: 'Studio/Chat/Input',
  component: ChatInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChatInput>;

export const Default: Story = {
  args: {
    onSend: (message: string) => console.log('Sent:', message),
  },
};
