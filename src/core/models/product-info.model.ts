import { Product } from './product.model';

export interface ProductInfo {
  id: string;
  brand: string;
  name: string;
  description: string;
  basePrice: number;
  rating: number;
  specs: Specs;
  colorOptions: ColorOption[];
  storageOptions: StorageOption[];
  similarProducts: Product[];
}

export interface ColorOption {
  name: string;
  hexCode: string;
  imageUrl: string;
}

export interface Specs {
  screen: string;
  resolution: string;
  processor: string;
  mainCamera: string;
  selfieCamera: string;
  battery: string;
  os: string;
  screenRefreshRate: string;
}

export interface StorageOption {
  capacity: string;
  price: number;
}
