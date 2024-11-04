import { fireEvent, render, screen } from '@/test-utils';
import { IconButton } from './icon-button';

describe('<IconButton/> ', () => {
  it('should render correctly', () => {
    const mockFunction = jest.fn();

    render(<IconButton onClick={mockFunction}>irrelevant children</IconButton>);

    expect(screen.getByText('irrelevant children')).toBeInTheDocument();
    fireEvent.click(screen.getByText('irrelevant children'));
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
