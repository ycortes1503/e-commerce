import { render, screen } from '@/test-utils';
import { Typography } from './typography';

describe('<Typography/> ', () => {
  it('should render typography correctly', () => {
    const text = 'Irrelevant text';

    render(<Typography text={text} fontSize="16" />);

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(text)).toHaveStyle({ fontSize: '16px' });
  });
});
