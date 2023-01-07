import { createContext } from 'react';
import { CartType } from '../../types/types';

const CartContext = createContext<CartType[]>([]);

export { CartContext };
