import { Product } from '@/core/models';
import * as styles from './card.module.scss';
import { Typography } from '../../atoms/typography';
import { CURRENCY } from '@/common/constants';
import { isNullOrUndefined } from '@/helpers';

export interface CardProps {
  product: Product;
  onClick: (id: string) => void;
}

export const Card = ({ product, onClick }: CardProps) => {
  const { id, basePrice, brand, imageUrl, name } = product;

  return (
    <div className={styles.container} onClick={() => onClick(id)}>
      <img src={imageUrl} alt={`Image of ${name}`} />
      <div className={styles.footer}>
        <Typography fontSize="10" className={styles.brand} text={brand} />
        <div className={styles['footer-bottom']}>
          <Typography fontSize="12" text={name} />
          <Typography fontSize="12" text={`${basePrice} ${CURRENCY}`} />
        </div>
      </div>
    </div>
  );
};
