import { fireEvent, render, screen } from '@/test-utils';
import { ColorPicker } from './color-picker';
import { ColorOption } from '@/core';

describe('<ColorPicker />', () => {
  const colorOptions: ColorOption[] = [
    { name: 'red', hexCode: '#ff0000', imageUrl: 'irrelevant imageUrl' },
    { name: 'blue', hexCode: '#0000ff', imageUrl: 'irrelevant imageUrl' },
  ];

  const mockFunction = jest.fn();

  it('should render correctly', () => {
    const { container } = render(<ColorPicker colorOptions={colorOptions} onSelect={mockFunction} />);

    expect(container).toMatchSnapshot();
  });

  it('should call onSelect when a color option is selected', () => {
    render(<ColorPicker colorOptions={colorOptions} onSelect={mockFunction} />);

    const colorOption = screen.getByTestId('color-option-0');
    fireEvent.click(colorOption);

    expect(mockFunction).toHaveBeenCalledWith(colorOptions[0]);
  });
});
