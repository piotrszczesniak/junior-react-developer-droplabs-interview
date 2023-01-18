import React, { useContext, useMemo } from 'react';
import { CartContext } from '../CartContextProvider/CartContext';
import styles from './Cart.module.scss';
import ShoppingBag from '../../assets/img/shopping-bag.svg';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  console.log('Cart renders');

  const cartTotalPrice = useMemo(() => cartItems.reduce((total, { price }) => total + price, 0), [cartItems]);

  return (
    <Link to='/order' className={styles['cart-link']}>
      <aside className={styles.cart}>
        <div>{cartTotalPrice} EUR</div>
        <div className={styles['cart-wrapper']}>
          <span className={styles['cart-items']}>{cartItems.length}</span>
          <img style={{ height: '30px' }} src={ShoppingBag} alt='shopping bag' />
        </div>
      </aside>
    </Link>
  );
};

export { Cart };
