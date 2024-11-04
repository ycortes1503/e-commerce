import { Meta, StoryObj } from '@storybook/react/*';
import { CartItem } from './cart-item';
import { mockedCartItem } from '@/common/mocks';
import { CartProvider } from '@/context';

const meta = {
  title: 'Pods/Checkout/Cart Item',
  component: CartItem,
  decorators: [
    (Story) => (
      <div style={{ width: '200px' }}>
        <CartProvider>
          <Story />
        </CartProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof CartItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    cartItem: mockedCartItem,
  },
};
