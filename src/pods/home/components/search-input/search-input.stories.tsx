import { Meta, StoryObj } from '@storybook/react/*';
import { SearchInput } from './search-input';
import { fn } from '@storybook/test';

const meta = {
  title: 'Atoms/Search Input',
  component: SearchInput,
  args: { onSearch: fn() },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search for a smartphone...',
  },
};
