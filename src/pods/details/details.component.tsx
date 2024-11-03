import { ReactComponent as BackArrowSVG } from '@/assets/images/svg/back-arrow.svg';
import * as styles from './details.module.scss';
import { CartItemModel, ProductInfo } from '@/core';
import { IconButton, Typography } from '@/common/components';
import { CardProductInfo } from './components';

export interface DetailsComponentProps {
  productInfo: ProductInfo;
  onAddToCart: (cartItem: CartItemModel) => void;
  onGoHome: () => void;
  onSeeDetails: (productId: string) => void;
}

export const DetailsComponent = ({ productInfo, onAddToCart, onGoHome, onSeeDetails }: DetailsComponentProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__back}>
        <IconButton onClick={onGoHome}>
          <BackArrowSVG />
          <Typography text="BACK" />
        </IconButton>
      </div>
      <CardProductInfo productInfo={productInfo} onAddToCart={onAddToCart} onSeeDetails={onSeeDetails} />
    </div>
  );
};
