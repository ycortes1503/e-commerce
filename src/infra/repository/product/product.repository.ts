import { ProductDTO, ProductInfoDTO, http } from '@/infra';
import { Repository } from './product.model';
import { Product, ProductInfo } from '@/core';
import { mapProductInfoApiToModel, mapProductsApiToModel } from '@/common/mappers';

const ENDPOINT = 'https://prueba-tecnica-api-tienda-moviles.onrender.com/products';

export const ProductRepository: Repository = {
  getProducts: async (filter?: string): Promise<Product[]> => {
    const queryParam = new URLSearchParams();
    queryParam.append('search', filter || '');
    queryParam.append('limit', '20');
    queryParam.append('offset', '0');

    const path = `${ENDPOINT}?${queryParam.toString()}`;

    try {
      const response = await http.get<ProductDTO[]>(path);
      return mapProductsApiToModel(response);
    } catch (error) {
      console.error('Error fetching products: ', error);
      return [];
    }
  },
  getProductById: async (id: string): Promise<ProductInfo> => {
    const path = `${ENDPOINT}/${id}`;

    try {
      const response = await http.get<ProductInfoDTO>(path);
      return mapProductInfoApiToModel(response);
    } catch (error) {
      console.error('Error fetching product info: ', error);
      return null;
    }
  },
};
