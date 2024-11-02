import { Product } from '@/core/models';
import * as React from 'react';
import { getProducts } from './home.api';

export const useHome = (filter?: string) => {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const productsDTO = getProducts(filter);
    productsDTO.then((products) => {
      setProducts(products);
    });
  }, [filter]);

  return { products };
};
