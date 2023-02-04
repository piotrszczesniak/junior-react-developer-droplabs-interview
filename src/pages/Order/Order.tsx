import React, { useContext } from 'react';
import { CartContext } from '../../components/CartContextProvider/CartContext';
// import { CartType } from '../../types/types';
import { parseCartTotals } from '../../utilis/parseCartTotals';
// import styles from 'Order.module.scss';

const Order = () => {
  const {
    cartItems,
    // addItemToCart
  } = useContext(CartContext);

  const cart = parseCartTotals(cartItems);
  console.log(cart);

  // const increaseAmount = () => {
  //   console.log('increase');
  // };

  // const handleAddToCart = (item: CartType) => {
  //   addItemToCart(item);
  // };

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
                {/* 
                  // TODO: if i use addItemToCart i am getting type errors when I pass as an arg: {item.id, item.items[0].price, item.items[0].title}
                */}
                {/* <button> - </button> {item.amount} <button onClick={() => handleAddToCart({item.id, item.items[0].price, item.items[0].title})}> + </button> */}
              </li>
            );
          })}
        </ol>
      </section>
    </main>
  );
};

export default Order;
