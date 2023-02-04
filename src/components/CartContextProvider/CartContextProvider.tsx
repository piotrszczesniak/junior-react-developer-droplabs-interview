import React, { useState, useCallback, useMemo } from 'react';
import { CartContext } from './CartContext';
import { CartType } from '../../types/types';

type CartContextProviderProps = {
  children: React.ReactNode;
};

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartType[]>([]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const addItemToCart = useCallback((newCartItem: CartType) => {
    setCartItems((state) => [...state, newCartItem]);
  }, []);

  const cartTotalPrice = Number(cartItems.reduce((accu, currItem) => accu + currItem.price, 0).toFixed(2));

  const cartValue = useMemo(
    () => ({ cartItems, clearCart, addItemToCart, cartTotalPrice }),
    [cartItems, clearCart, addItemToCart, cartTotalPrice]
  );

  return <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>;
};

export { CartContextProvider };
