import React, { useContext, useMemo } from 'react';
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);
  const cartTotalPrice = useMemo(() => cart.reduce((total, { price }) => total + price, 0), [cart]);
  return (
    <div>
      <span>You have {cart.length} products in your cart</span>
      <span>Total is: {cartTotalPrice} PLN</span>
    </div>
  );
};

export { Cart };
