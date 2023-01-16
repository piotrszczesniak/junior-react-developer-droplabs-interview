import React, { useContext, useMemo } from 'react';
import { CartContext } from '../CartContextProvider/CartContext';
import styles from './Cart.module.scss';
import ShoppingBag from '../../assets/img/shopping-bag.svg';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const cartTotalPrice = useMemo(() => cartItems.reduce((total, { price }) => total + price, 0), [cartItems]);

  return (
    <aside className={styles.cart}>
      <div>{cartTotalPrice} EUR</div>
      <div className={styles['cart-wrapper']}>
        <span className={styles['cart-items']}>{cartItems.length}</span>
        <img style={{ height: '30px' }} src={ShoppingBag} alt='shopping bag' />
      </div>
    </aside>
  );
};

export { Cart };
