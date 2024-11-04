import { fireEvent, render, screen } from '@/test-utils';
import { Button } from './button';

describe('<Button/> ', () => {
  it('should render correctly', () => {
    const mockFunction = jest.fn();

    render(<Button onClick={mockFunction} label="irrelevant label" />);

    expect(screen.getByText('irrelevant label')).toBeInTheDocument();
    fireEvent.click(screen.getByText('irrelevant label'));
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
