import { ProductInfoDTO } from '@/infra/dto';
import { ProductRepository } from '@/infra/repository/product/product.repository';

export const getProductById = async (id: string): Promise<ProductInfoDTO> => {
  return await ProductRepository.getProductById(id);
};
