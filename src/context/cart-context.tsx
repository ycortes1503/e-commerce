import { LOCAL_STORAGE_CART_KEY } from '@/common/constants';
import { CartItemModel, CartModel } from '@/core/models';
import * as React from 'react';
import _ from 'lodash';
import { useLocalStorage } from '@/common/hooks';

const CartContext = React.createContext<{
  totalItems: number;
  totalPrice: number;
  products: CartItemModel[];
  addToCart: (product: CartItemModel) => void;
  removeFromCart: (product: CartItemModel) => void;
}>(null);

export const useCartContext = () => {
  const context = React.useContext(CartContext);

  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }

  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { value: cartProductsLocalStorage, setValue: setCartProductsLocalStorage } =
    useLocalStorage<CartModel>(LOCAL_STORAGE_CART_KEY);

  const [cartProducts, setCartProducts] = React.useState<CartModel>(
    cartProductsLocalStorage ?? {
      totalPrice: 0,
      totalItems: 0,
      products: [],
    },
  );

  const addToCart = (product: CartItemModel) => {
    const productPprice = product.storageOption.price;

    const updatedCartProducts: CartModel = {
      totalPrice: cartProducts.totalPrice + productPprice,
      totalItems: cartProducts.totalItems + 1,
      products: [...cartProducts.products, product],
    };

    setCartProducts(updatedCartProducts);
    setCartProductsLocalStorage(updatedCartProducts);
  };

  const removeFromCart = (product: CartItemModel) => {
    const copyOfCartProducts = [...cartProducts.products];

    const indexOfProductToRemove = cartProducts.products.findIndex((item) => _.isEqual(item, product));
    copyOfCartProducts.splice(indexOfProductToRemove, 1);

    const updatedProducts = [...copyOfCartProducts];

    const productPprice = product.storageOption.price;

    const updatedCartProducts: CartModel = {
      totalPrice: cartProducts.totalPrice - productPprice,
      totalItems: cartProducts.totalItems - 1,
      products: [...updatedProducts],
    };

    setCartProducts(updatedCartProducts);
    setCartProductsLocalStorage(updatedCartProducts);
  };

  const values = {
    products: [...cartProducts.products],
    totalItems: cartProducts.totalItems,
    totalPrice: cartProducts.totalPrice,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
