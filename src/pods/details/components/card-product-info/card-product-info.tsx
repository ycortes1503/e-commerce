import * as React from 'react';
import cx from 'classnames';
import * as styles from './card-product-info.module.scss';
import { CartItemModel, ColorOption, ProductInfo, StorageOption } from '@/core/models';
import { Button, Typography, Card } from '@/common/components';
import { CURRENCY } from '@/common/constants';
import { isNullOrUndefined } from '@/helpers';
import { StorageBox } from '../storage-box';
import { ColorPicker } from '../color-picker';

const LITERALS = {
  specifications: 'SPECIFICATIONS',
  brand: 'BRAND',
  name: 'NAME',
  description: 'DESCRIPTION',
  screen: 'SCREEN',
  resolution: 'RESOLUTION',
  processor: 'PROCESSOR',
  mainCamera: 'MAIN CAMERA',
  selfieCamera: 'SELFIE CAMERA',
  battery: 'BATTERY',
  os: 'OPERATING SYSTEM',
  screenRefreshRate: 'SCREEN REFRESH RATE',
  similarItems: 'SIMILAR ITEMS',
  from: 'From',
  storage: 'STORAGE',
  howMuchSpace: 'HOW MUCH SPACE DO YOU NEED?',
  pickColor: 'COLOR, PICK YOUR FAVOURITE.',
  addToCart: 'ADD TO CART',
};

export interface ProductInfoProps {
  productInfo: ProductInfo;
  className?: string;
  onAddToCart: (cartItem: CartItemModel) => void;
  onSeeDetails: (productId: string) => void;
}
export const CardProductInfo = ({ productInfo, className, onAddToCart, onSeeDetails }: ProductInfoProps) => {
  const defaultColor = productInfo?.colorOptions[0];
  const [selectedColor, setSelectedColor] = React.useState<ColorOption>(defaultColor);
  const [selectedStorage, setSelectedStorage] = React.useState<StorageOption>(null);

  React.useEffect(() => {
    setSelectedColor(defaultColor);
  }, [defaultColor]);

  if (!productInfo) {
    return null;
  }

  const { id, name, brand, description, basePrice, rating, specs, colorOptions, storageOptions, similarProducts } =
    productInfo;
  const { screen, resolution, processor, mainCamera, selfieCamera, battery, os, screenRefreshRate } = specs;

  const imageUrl = selectedColor?.imageUrl;
  const hasSelectedColorAndStorage = !isNullOrUndefined(selectedColor) && !isNullOrUndefined(selectedStorage);

  return (
    <section className={cx(styles.container, className)}>
      <div className={styles['container__product-container']}>
        <img src={imageUrl} alt={`Image of ${name}`} />
        <div className={styles['product-info']}>
          <div className={styles['product-info__top']}>
            <Typography fontSize="24" text={name.toUpperCase()} />
            <Typography fontSize="20" text={`${LITERALS.from} ${basePrice} ${CURRENCY}`} />
          </div>
          <div className={styles['product-info__middle']}>
            <Typography fontSize="14" text={`${LITERALS.storage} ${LITERALS.howMuchSpace}`} />
            <StorageBox storageOptions={storageOptions} onSelect={setSelectedStorage} />
          </div>
          <div className={styles['product-info__bottom']}>
            <Typography fontSize="14" text={`${LITERALS.pickColor}`} />
            <ColorPicker colorOptions={colorOptions} onSelect={setSelectedColor} />
          </div>
          <Button
            disabled={!hasSelectedColorAndStorage}
            label={LITERALS.addToCart}
            onClick={() => onAddToCart({ id, name, colorOption: selectedColor, storageOption: selectedStorage })}
          />
        </div>
      </div>

      <div className={styles['container__spec-container']}>
        <Typography fontSize="20" text={LITERALS.specifications} />
        <div>
          <div className={styles['spec-item']}>
            <Typography text={LITERALS.brand} />
            <Typography text={brand} />
          </div>
          <div className={styles['spec-item']}>
            <Typography text={LITERALS.name} />
            <Typography text={name} />
          </div>
          <div className={styles['spec-item']}>
            <Typography text={LITERALS.description} />
            <Typography text={description} />
          </div>
          <div className={styles['spec-item']}>
            <Typography text={LITERALS.screen} />
            <Typography text={screen} />
          </div>
          <div className={styles['spec-item']}>
            <Typography text={LITERALS.resolution} />
            <Typography text={resolution} />
          </div>
          <div className={styles['spec-item']}>
            <Typography text={LITERALS.processor} />
            <Typography text={processor} />
          </div>
          <div className={styles['spec-item']}>
            <Typography text={LITERALS.mainCamera} />
            <Typography text={mainCamera} />
          </div>
          <div className={styles['spec-item']}>
            <Typography text={LITERALS.selfieCamera} />
            <Typography text={selfieCamera} />
          </div>
          <div className={styles['spec-item']}>
            <Typography text={LITERALS.battery} />
            <Typography text={battery} />
          </div>
          <div className={styles['spec-item']}>
            <Typography text={LITERALS.os} />
            <Typography text={os} />
          </div>
          <div className={styles['spec-item']}>
            <Typography text={LITERALS.screenRefreshRate} />
            <Typography text={screenRefreshRate} />
          </div>
        </div>
      </div>
      <div className={styles['container__similar-items-container']}>
        <Typography fontSize="20" text={LITERALS.similarItems} />
        <div className={styles['similar-items']}>
          {similarProducts.map((product, index) => {
            const key = `${index}-${product.id}`;

            return <Card key={key} product={product} onClick={onSeeDetails} />;
          })}
        </div>
        <div className={styles['scrollbar-container']}>
          <div className={styles['scrollbar-container__bar']} />
        </div>
      </div>
    </section>
  );
};
