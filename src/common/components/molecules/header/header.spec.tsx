import { render, renderWithRouter, screen, waitFor } from '@/test-utils';
import { Header } from './header';

describe('<Header />', () => {
  test('should render header correctly', () => {
    renderWithRouter(<Header />);

    const mockedTotalItems = 3;

    expect(screen.getByText(mockedTotalItems)).toBeInTheDocument();
  });
});
