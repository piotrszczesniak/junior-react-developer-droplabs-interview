import React, { useState, useMemo, useCallback } from 'react';
import { CartContext } from './CartContext';
import { CartType } from '../../types/types';

type CartContextProviderProps = {
  children: React.ReactNode;
};

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartType[]>([]);

  const addItemToCart = useCallback(
    (newCartItem: CartType) => {
      setCartItems([...cartItems, newCartItem]);
    },
    [cartItems]
  );

  // ! TODO: check if useMemo reduces renders at all
  const cartValue = useMemo(() => ({ cartItems, setCartItems, addItemToCart }), [cartItems, setCartItems, addItemToCart]);

  return <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>;
};

export { CartContextProvider };
