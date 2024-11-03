import { Typography, Button } from '@/common/components';
import { useCartContext } from '@/context';
import * as styles from './checkout.module.scss';
import { CURRENCY } from '@/common/constants';
import { CartItem } from './components';

const LITERALS = {
  cart: 'CART',
  continueShopping: 'CONTINUE SHOPPING',
  pay: 'PAY',
  total: 'TOTAL',
};

export interface CheckoutComponentProps {
  onGoHome: () => void;
}

export const CheckoutComponent = ({ onGoHome }: CheckoutComponentProps) => {
  const { products, totalItems, totalPrice } = useCartContext();
  const isCartEmpty = products.length === 0;

  return (
    <div className={styles.container}>
      <Typography className={styles.container__title} fontSize="24" text={`${LITERALS.cart} (${totalItems})`} />
      <div className={styles.container__items}>
        {products.map((product, index) => {
          const key = `${index}-${product.id}`;
          return (
            <CartItem
              key={key}
              cartItem={{
                colorOption: product.colorOption,
                id: product.id,
                name: product.name,
                storageOption: product.storageOption,
              }}
            />
          );
        })}
      </div>
      <div className={styles.container__footer}>
        <Button
          variant="secondary"
          className={styles['continue-shopping']}
          label={LITERALS.continueShopping}
          onClick={onGoHome}
        />
        {!isCartEmpty && (
          <>
            <div className={styles['total-amount']}>
              <Typography fontSize="14" text={LITERALS.total} />
              <Typography fontSize="14" text={`${totalPrice}  ${CURRENCY}`} />
            </div>
            <Button className={styles['pay-button']} label={LITERALS.pay} />
          </>
        )}
      </div>
    </div>
  );
};
