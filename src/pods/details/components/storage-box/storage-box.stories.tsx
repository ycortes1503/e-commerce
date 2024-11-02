import { Meta, StoryObj } from '@storybook/react/*';
import { StorageBox } from './storage-box';

const meta = {
  title: 'Molecules/Storage Box',
  component: StorageBox,
} satisfies Meta<typeof StorageBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'Storage value',
  },
};
