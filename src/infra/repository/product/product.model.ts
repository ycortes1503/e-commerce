import { Product, ProductInfo } from '@/core/models';

export interface Repository {
  getProducts(filter?: string): Promise<Product[]>;
  getProductById(id: string): Promise<ProductInfo>;
}
