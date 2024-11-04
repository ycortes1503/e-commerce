import { Meta, StoryObj } from '@storybook/react/*';
import { mockProductInfo } from '@/common/mocks';
import { CartProvider } from '@/context';
import { CardProductInfo } from './card-product-info';

const meta = {
  title: 'Pods/Details/Cart Product Info',
  component: CardProductInfo,
  decorators: [
    (Story) => (
      <CartProvider>
        <Story />
      </CartProvider>
    ),
  ],
} satisfies Meta<typeof CardProductInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    productInfo: mockProductInfo,
    onSeeDetails: () => {},
    onAddToCart: () => {},
  },
};
