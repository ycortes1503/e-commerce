import * as React from 'react';
import { ProductInfo } from '@/core/models';
import { getProductById } from './details.api';

export const useDetails = (id: string) => {
  const [product, setProduct] = React.useState<ProductInfo>(null);

  React.useEffect(() => {
    const productsInfoDTO = getProductById(id);
    productsInfoDTO.then((products) => {
      setProduct(products);
    });
  }, [id]);

  return { product };
};
