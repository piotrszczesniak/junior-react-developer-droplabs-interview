import React, { useState, useMemo } from 'react';
import { CartType } from '../../types/types';
import { CartContext } from './CartContext';

type CartContextProviderProps = {
  children: React.ReactNode;
};

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<CartType[]>([]);

  const cartValue = useMemo(() => ({ cart, setCart }), [cart, setCart]);

  return <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>;
};

export { CartContextProvider };
