import { ProductInfo } from './product-info.model';

export interface CartItemModel {
  colorOption: ProductInfo['colorOptions'][number];
  id: ProductInfo['id'];
  name: string;
  storageOption: ProductInfo['storageOptions'][number];
}

export interface CartModel {
  totalPrice: number;
  totalItems: number;
  products: CartItemModel[];
}
