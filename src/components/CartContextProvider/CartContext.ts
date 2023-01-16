import { createContext } from 'react';
import { CartContextType } from '../../types/types';

const CartContext = createContext<CartContextType>({
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
});

export { CartContext };
