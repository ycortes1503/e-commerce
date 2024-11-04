import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { CartProvider } from './context';
import { MemoryRouter as Router } from 'react-router-dom';
const WrapperProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartProvider>
      <Router>{children}</Router>
    </CartProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: WrapperProviders, ...options });

export { customRender as render };

import { MemoryRouter } from 'react-router-dom';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
};

export { renderWithRouter };

export * from '@testing-library/react';
