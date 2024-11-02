import { Meta, StoryObj } from '@storybook/react/*';
import { Card } from './card';
import { mockProduct } from '@/common/mocks';

const meta = {
  title: 'Molecules/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { product: mockProduct[0] },
};
