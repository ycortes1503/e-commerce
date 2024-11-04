import { CURRENCY } from '@/common/constants';
import { CardProductInfo } from './card-product-info';
import { mockProductInfo } from '@/common/mocks';
import { render, screen, fireEvent } from '@/test-utils';

describe('<CardProductInfo/> ', () => {
  const onAddToCart = jest.fn();
  const onSeeDetails = jest.fn();
  const productInfo = mockProductInfo;

  it('should render correctly', () => {
    render(<CardProductInfo productInfo={mockProductInfo} onAddToCart={onAddToCart} onSeeDetails={onSeeDetails} />);

    expect(screen.getAllByText(productInfo.name)).toHaveLength(2);
    expect(screen.getByText(`From ${productInfo.basePrice} ${CURRENCY}`)).toBeInTheDocument();
    expect(screen.getByText(productInfo.specs.screen)).toBeInTheDocument();
    expect(screen.getByText(productInfo.specs.processor)).toBeInTheDocument();
    expect(screen.getByText(productInfo.specs.mainCamera)).toBeInTheDocument();
    expect(screen.getByText(productInfo.specs.selfieCamera)).toBeInTheDocument();
    expect(screen.getByText(productInfo.specs.battery)).toBeInTheDocument();
    expect(screen.getByText(productInfo.specs.os)).toBeInTheDocument();
    expect(screen.getByText(productInfo.specs.screenRefreshRate)).toBeInTheDocument();
    expect(screen.getByText(/specifications/i)).toBeInTheDocument();
    expect(screen.getByText(/similar items/i)).toBeInTheDocument();
  });

  it('should call onAddToCart', () => {
    render(<CardProductInfo productInfo={mockProductInfo} onAddToCart={onAddToCart} onSeeDetails={onSeeDetails} />);

    const addToCartButton = screen.getByRole('button', { name: /add to cart/i });

    expect(addToCartButton).toBeDisabled();

    const storageBox = screen.getByTestId('storage-option-0');
    fireEvent.click(storageBox);

    expect(addToCartButton).not.toBeDisabled();
    fireEvent.click(addToCartButton);
    expect(onAddToCart).toHaveBeenCalled();
  });
});
