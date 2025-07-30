import HomeWelcomeBanner from './HomeWelcomeBanner';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HomeWelcomeBanner> = {
  title: 'Home/HomeWelcomeBanner',
  component: HomeWelcomeBanner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HomeWelcomeBanner>;

export const Default: Story = {
  args: {
    username: 'Aaron',
  },
};
