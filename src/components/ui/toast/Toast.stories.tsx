import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/Button';
import { toast } from 'sonner';

const meta: Meta<typeof Button> = {
  title: 'UI/Toast',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const TriggerToast: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.success('Success!', {
          description: 'The operation completed successfully.',
        })
      }
    >
      Show Toast
    </Button>
  ),
};
export const ErrorToast: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.error('Error!', {
          description: 'An error occurred while processing your request.',
        })
      }
    >
      Show Error Toast
    </Button>
  ),
};