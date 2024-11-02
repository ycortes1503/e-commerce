import { Product, ProductInfo } from '@/core';
import { ProductDTO, ProductInfoDTO } from '@/infra';

export const mapProductApiToModel = (product: ProductDTO): Product => {
  return {
    id: product.id ?? '',
    brand: product.brand ? product.brand : '',
    name: product.name ? product.name : '',
    basePrice: product.basePrice ?? 0,
    imageUrl: product.imageUrl ?? '',
  };
};

export const mapProductsApiToModel = (products: ProductDTO[]): Product[] => {
  return products.map(mapProductApiToModel);
};

export const mapProductInfoApiToModel = (productInfo: ProductInfoDTO): ProductInfo => {
  return {
    id: productInfo.id ?? '',
    brand: productInfo.brand ?? '',
    name: productInfo.name ?? '',
    description: productInfo.description ?? '',
    basePrice: productInfo.basePrice ?? 0,
    rating: productInfo.rating ?? 0,
    specs: mapSpecificationApiToModel(productInfo.specs),
    colorOptions: productInfo.colorOptions ? productInfo.colorOptions.map(mapColorOptionApiToModel) : [],
    storageOptions: productInfo.storageOptions ? productInfo.storageOptions.map(mapStorageOptionApiToModel) : [],
    similarProducts: mapProductsApiToModel(productInfo.similarProducts),
  };
};

export const mapSpecificationApiToModel = (specs: ProductInfoDTO['specs']): ProductInfo['specs'] => {
  return {
    screen: specs.screen ?? '',
    resolution: specs.resolution ?? '',
    processor: specs.processor ?? '',
    mainCamera: specs.mainCamera ?? '',
    selfieCamera: specs.selfieCamera ?? '',
    battery: specs.battery ?? '',
    os: specs.os ?? '',
    screenRefreshRate: specs.screenRefreshRate,
  };
};

export const mapColorOptionApiToModel = (
  colorOptions: ProductInfoDTO['colorOptions'][number],
): ProductInfo['colorOptions'][number] => {
  return {
    name: colorOptions.name ?? '',
    hexCode: colorOptions.hexCode ?? '',
    imageUrl: colorOptions.imageUrl ?? '',
  };
};

export const mapStorageOptionApiToModel = (
  storageOptions: ProductInfoDTO['storageOptions'][number],
): ProductInfo['storageOptions'][number] => {
  return {
    capacity: storageOptions.capacity ?? '',
    price: storageOptions.price ?? 0,
  };
};
