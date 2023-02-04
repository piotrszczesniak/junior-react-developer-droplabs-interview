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

  const cartValue = useMemo(() => ({ cartItems, clearCart, addItemToCart }), [cartItems, clearCart, addItemToCart]);

  return <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>;
};

export { CartContextProvider };
