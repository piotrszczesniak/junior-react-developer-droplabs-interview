import React, { useState, useMemo } from 'react';
import { CartContext } from '../../contexts/CartContext';

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cartValue = useMemo(() => ({ cart, setCart }), [cart, setCart]);

  return <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>;
};

export { CartContextProvider };
