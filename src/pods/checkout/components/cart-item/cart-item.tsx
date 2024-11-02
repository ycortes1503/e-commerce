import { CartItemModel } from '@/core/models';
import * as styles from './cart-item.module.scss';
import { Typography, Button } from '../../../../common/components/atoms';
import { CURRENCY } from '@/common/constants';
import { useCartContext } from '@/context';

export interface CartItemProps {
  cartItem: CartItemModel;
}

export const CartItem = ({ cartItem }: CartItemProps) => {
  const { removeFromCart } = useCartContext();

  const { id, name, colorOption, storageOption } = cartItem;
  const { name: colorName, imageUrl } = colorOption;
  const { capacity, price } = storageOption;

  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={`Image of ${name}`} />
      <div className={styles.container__content}>
        <div className={styles.info}>
          <div className={styles['top']}>
            <Typography text={cartItem.name} />
            <Typography text={`${capacity} | ${colorName}`} />
          </div>
          <Typography text={`${price} ${CURRENCY}`} />
        </div>
        <Button
          className={styles['remove-button']}
          label="Remove"
          variant="tertiary"
          onClick={() => removeFromCart(cartItem)}
        />
      </div>
    </div>
  );
};
