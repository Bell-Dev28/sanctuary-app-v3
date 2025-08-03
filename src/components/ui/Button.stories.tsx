import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = { args: { children: 'Default Button' } };
export const Outline: Story = { args: { variant: 'outline', children: 'Outline Button' } };
export const Ghost: Story = { args: { variant: 'ghost', children: 'Ghost Button' } };
export const Link: Story = { args: { variant: 'link', children: 'Link Button' } };
