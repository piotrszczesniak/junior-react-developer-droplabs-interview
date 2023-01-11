import React, { useState, useMemo } from 'react';
import { CartContext } from './CartContext';
import { CartType } from '../../types/types';

type CartContextProviderProps = {
  children: React.ReactNode;
};

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartType[]>([]);

  // ! TODO: check if useMemo reduces renders at all
  const cartValue = useMemo(() => ({ cartItems, setCartItems }), [cartItems, setCartItems]);

  return <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>;
};

export { CartContextProvider };
