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

  // const increaseItemsAmount = (cartItem: CartType) => {
  //   setCartItems((currentItems) => {
  //     if (currentItems.find((item) => item.id === cartItem.id) == null) {
  //       return [...currentItems, { it: cartItem.id, amount: 1 }];
  //     } else {
  //       return currentItems.map((item) => {
  //         if (item.id === cartItem.id) {
  //           return { ...item, amount: cartItem.amount + 1 };
  //         } else {
  //           return item;
  //         }
  //       });
  //     }
  //   });
  // };

  // const decreaseItemsAmount = (cartItem: CartType) => {
  //   setCartItems((currentItems) => {
  //     if (currentItems.find((item) => item.id === cartItem.id)?.amount === 1) {
  //       return currentItems.filter((item) => item.id !== cartItem.id);
  //     } else {
  //       return currentItems.map((item) => {
  //         if (item.id === cartItem.id) {
  //           return { ...item, amount: cartItem.amount - 1 };
  //         } else {
  //           return item;
  //         }
  //       });
  //     }
  //   });
  // };

  const addItemToCart = useCallback((newCartItem: CartType) => {
    setCartItems((state) => [...state, newCartItem]);
  }, []);

  // ! TODO: check if useMemo reduces renders at all
  const cartValue = useMemo(() => ({ cartItems, clearCart, addItemToCart }), [cartItems, clearCart, addItemToCart]);
  // const cartValue = { cartItems, clearCart, addItemToCart };

  console.log('cart context provider - render');

  // ! TODO: train a - b - c cpomponents

  return <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>;
};

export { CartContextProvider };
