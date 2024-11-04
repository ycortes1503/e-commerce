import { mockProduct } from '@/common/mocks';
import { Card } from './card';
import { fireEvent, render, screen } from '@/test-utils';
import { CURRENCY } from '@/common/constants';

describe('<Card />', () => {
  const mockFunction = jest.fn();

  test('should render card correctly', () => {
    render(<Card product={mockProduct[0]} onClick={mockFunction} />);

    const { name, brand, basePrice } = mockProduct[0];

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(brand)).toBeInTheDocument();
    expect(screen.getByText(`${basePrice} ${CURRENCY}`)).toBeInTheDocument();

    const img = screen.getByRole('img');
    fireEvent.click(img);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
