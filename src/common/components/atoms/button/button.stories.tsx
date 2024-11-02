import { Meta, StoryObj } from '@storybook/react/*';
import { Button } from './button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { label: 'Button' },
};

export const Secondary: Story = {
  args: { label: 'Button', variant: 'secondary' },
};

export const Tertiary: Story = {
  args: { label: 'Button', variant: 'tertiary' },
};
