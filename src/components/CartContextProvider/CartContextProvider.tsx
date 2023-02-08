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

  const removeItemFromCart = useCallback(
    (itemToRemoved: CartType) => {
      const { id } = itemToRemoved;
      const index = cartItems.findIndex((element) => element.id === id);
      if (index !== -1) {
        setCartItems((state) => {
          const tempArray = [...state];
          tempArray.splice(index, 1);
          return tempArray;
        });
      }
    },
    [cartItems]
  );

  const cartTotalPrice = Number(cartItems.reduce((accu, currItem) => accu + currItem.price, 0).toFixed(2));

  const cartValue = useMemo(
    () => ({ cartItems, clearCart, addItemToCart, cartTotalPrice, removeItemFromCart }),
    [cartItems, clearCart, addItemToCart, cartTotalPrice, removeItemFromCart]
  );

  return <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>;
};

export { CartContextProvider };
