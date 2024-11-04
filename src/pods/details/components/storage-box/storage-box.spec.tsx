import { render, screen, fireEvent } from '@/test-utils';
import { StorageBox } from './storage-box';

describe('first', () => {
  const mockFunction = jest.fn();
  const storageOptions = [
    { capacity: '64GB', price: 100 },
    { capacity: '128GB', price: 200 },
  ];

  it('should render correctly', () => {
    const { container } = render(<StorageBox storageOptions={storageOptions} onSelect={mockFunction} />);

    expect(container).toMatchSnapshot();
  });

  it('should call onSelect when a storage option is selected', () => {
    render(<StorageBox storageOptions={storageOptions} onSelect={mockFunction} />);

    const storageBox = screen.getByTestId('storage-option-1');
    fireEvent.click(storageBox);
    expect(mockFunction).toHaveBeenCalledWith(storageOptions[1]);
  });
});
