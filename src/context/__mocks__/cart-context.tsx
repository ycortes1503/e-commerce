import { CartItemModel } from '@/core/models';

export const CartProvider = ({ children }: { children: React.ReactNode }) => children;

const colorOption = {
  name: 'Midnight Purple',
  hexCode: '#4B0082',
  imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-A60-midnight-purple.png',
};

const storageOption = {
  capacity: '256GB',
  price: 200,
};

const products: CartItemModel[] = [
  {
    colorOption,
    id: '1',
    name: 'Product 1',
    storageOption,
  },
  {
    colorOption,
    id: '2',
    name: 'Product 2',
    storageOption,
  },
  {
    colorOption,
    id: '3',
    name: 'Product 3',
    storageOption,
  },
];

const mockCartContext = {
  totalItems: 3,
  totalPrice: 600,
  products,
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
};

export const useCartContext = () => mockCartContext;
