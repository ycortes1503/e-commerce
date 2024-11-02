import { ProductDTO } from '@/infra/dto/index';
import { ProductRepository } from '@/infra/repository/product/product.repository';

export const getProducts = async (filter?: string): Promise<ProductDTO[]> => {
  return await ProductRepository.getProducts(filter);
};
