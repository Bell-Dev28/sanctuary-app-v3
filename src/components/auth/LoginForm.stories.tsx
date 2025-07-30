import LoginForm from './LoginForm';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LoginForm> = {
  title: 'Auth/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    onLogin: (email, password) => alert(`Logging in with ${email}:${password}`),
  },
};
