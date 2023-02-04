import { CartType } from '../types/types';
import { useContext } from 'react';
import { CartContext } from '../components/CartContextProvider/CartContext';

export const useAddToCart = (item: CartType) => {
  const { addItemToCart } = useContext(CartContext);
  return (item: CartType) => addItemToCart(item);
};
