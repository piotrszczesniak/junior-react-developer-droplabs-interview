import React, { useContext, useMemo } from 'react';
import { CartContext } from '../CartContextProvider/CartContext';
import styles from './Cart.module.scss';
import ShoppingBag from '../../assets/img/shopping-bag.svg';

const Cart = () => {
  const { cart } = useContext(CartContext);
  const cartTotalPrice = useMemo(() => cart.reduce((total, { price }) => total + price, 0), [cart]);
  return (
    <aside className={styles.cart}>
      <div>{cartTotalPrice.toFixed(2)} PLN</div>
      <div className={styles['cart-wrapper']}>
        <span className={styles['cart-items']}>{cart.length}</span>
        <img style={{ height: '30px' }} src={ShoppingBag} alt='shopping bag' />
      </div>
    </aside>
  );
};

export { Cart };
