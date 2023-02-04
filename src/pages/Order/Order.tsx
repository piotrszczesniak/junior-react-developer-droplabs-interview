import React, { useContext } from 'react';
import { CartContext } from '../../components/CartContextProvider/CartContext';
import { CartType } from '../../types/types';
import { parseCartTotals } from '../../utilis/parseCartTotals';
import styles from './Order.module.scss';

const Order = () => {
  const { cartItems, cartTotalPrice, addItemToCart } = useContext(CartContext);

  const cart = parseCartTotals(cartItems);
  console.log(cart);

  const increaseAmount = (item: CartType) => {
    addItemToCart(item);
  };

  const decreaseAmount = () => {
    console.log('decrease');
  };

  // const handleAddToCart = (item: CartType) => {
  //   addItemToCart(item);
  // };

  if (cartItems.length === 0) {
    return (
      <main className='order-page'>
        <section>
          <h1>Order details</h1>
        </section>
        <p>You have no products in your basket...</p>
      </main>
    );
  }

  return (
    <main className='order-page'>
      <section>
        <h1>Order details</h1>
      </section>
      <section className={styles['order']}>
        <ol className={styles['order-details']}>
          {cart.map((item) => {
            const {
              id: itemId,
              total,
              amount,
              items: [{ id, title, price }],
            } = item;

            return (
              <li className={styles['order-line']} key={itemId}>
                <div className={styles['order-line-details']}>
                  <div>
                    <span>{title}</span>
                  </div>
                  <div>
                    <button className={styles['order-button']} onClick={decreaseAmount}>
                      -
                    </button>
                    <span>{amount}</span>
                    <button className={styles['order-button']} onClick={() => increaseAmount({ id, title, price })}>
                      +
                    </button>
                    x <span>{price}</span> = <span>{total}</span>
                    <span>EUR</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <p className={styles['order-total']}>{cartTotalPrice} EUR</p>
      </section>
    </main>
  );
};

export default Order;
