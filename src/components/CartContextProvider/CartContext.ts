import { createContext } from 'react';
import { CartContextType } from '../../types/types';

const CartContext = createContext<CartContextType>({
  cartItems: [],
  clearCart: () => {},
  addItemToCart: () => {},
  cartTotalPrice: 0,
});

export { CartContext };
