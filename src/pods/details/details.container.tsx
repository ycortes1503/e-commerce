import { useNavigate, useParams } from 'react-router-dom';
import { DetailsComponent } from './details.component';
import { useDetails } from './details.hook';
import { CartItemModel, ROUTES } from '@/core';
import { useCartContext } from '@/context';

export const DetailsContainer = () => {
  const { id: productId } = useParams();
  const { product } = useDetails(productId);
  const { addToCart } = useCartContext();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(ROUTES.HOME);
  };

  const handleSeeDetails = (productId: string) => {
    const path = `${ROUTES.DETAILS}/${productId}`;
    window.open(path, '_blank', 'noopener,noreferrer');
  };

  const handleAddToCart = (cartItem: CartItemModel) => {
    addToCart(cartItem);
    navigate(ROUTES.CHECKOUT);
  };

  return (
    <DetailsComponent
      productInfo={product}
      onGoHome={handleGoHome}
      onAddToCart={handleAddToCart}
      onSeeDetails={handleSeeDetails}
    />
  );
};
