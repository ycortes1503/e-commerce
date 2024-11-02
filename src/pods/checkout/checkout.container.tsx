import { useNavigate } from 'react-router-dom';
import { CheckoutComponent } from './checkout.component';
import { ROUTES } from '@/core';

export const CheckoutContainer = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(ROUTES.HOME);
  };

  return <CheckoutComponent onGoHome={handleGoHome} />;
};
