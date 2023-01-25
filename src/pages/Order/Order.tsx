import React, { useContext } from 'react';
import { CartContext } from '../../components/CartContextProvider/CartContext';
import { parseCartTotals } from '../../utilis/parseCartTotals';
// import styles from 'Order.module.scss';

const Order = () => {
  const { cartItems } = useContext(CartContext);

  const cart = parseCartTotals(cartItems);
  console.log(cart);

  if (cartItems.length === 0) {
    return (
      <main className='order-page'>
        <section>
          <h1>Order</h1>
        </section>
        <p>You have no products in your basket...</p>
      </main>
    );
  }

  return (
    <main className='order-page'>
      <section>
        <h1>Order</h1>
      </section>
      <section className={'products'}>
        <ol>
          {cart.map((item) => {
            return (
              <li key={item.id}>
                {item.items[0].title} | {item.amount} x {item.items[0].price} = {item.total}
                <button> - </button> {item.amount} <button> + </button>
              </li>
            );
          })}
        </ol>
      </section>
    </main>
  );
};

export default Order;
