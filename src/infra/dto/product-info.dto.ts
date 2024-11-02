import { ProductDTO } from './product.dto';

export interface ProductInfoDTO {
  id: string;
  brand: string;
  name: string;
  description: string;
  basePrice: number;
  rating: number;
  specs: SpecsDTO;
  colorOptions: ColorOptionDTO[];
  storageOptions: StorageOptionDTO[];
  similarProducts: ProductDTO[];
}

export interface ColorOptionDTO {
  name: string;
  hexCode: string;
  imageUrl: string;
}

export interface SpecsDTO {
  screen: string;
  resolution: string;
  processor: string;
  mainCamera: string;
  selfieCamera: string;
  battery: string;
  os: string;
  screenRefreshRate: string;
}

export interface StorageOptionDTO {
  capacity: string;
  price: number;
}
