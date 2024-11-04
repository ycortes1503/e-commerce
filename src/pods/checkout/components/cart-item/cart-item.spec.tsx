import { mockedCartItem } from '@/common/mocks';
import { render, screen } from '@/test-utils';
import { CartItem } from './cart-item';
import { CURRENCY } from '@/common/constants';

describe('<CartItem />', () => {
  const cartItem = mockedCartItem;

  it('should render correctly', () => {
    render(<CartItem cartItem={cartItem} />);

    expect(screen.getByText(cartItem.name)).toBeInTheDocument();
    expect(screen.getByText(`${cartItem.storageOption.capacity} | ${cartItem.colorOption.name}`)).toBeInTheDocument();
    expect(screen.getByText(`${cartItem.storageOption.price} ${CURRENCY}`)).toBeInTheDocument();

    const removeButton = screen.getByRole('button', { name: 'Remove' });
    expect(removeButton).toBeInTheDocument();
  });
});
