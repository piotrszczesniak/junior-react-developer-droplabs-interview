import React, { useContext } from 'react';
import { CartContext } from '../../components/CartContextProvider/CartContext';
// import styles from 'Order.module.scss';

const Order = () => {
  const { cartItems } = useContext(CartContext);

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
        {/* // TODO: how to build tables
          //! -- how to get same id products 
        */}
        <table style={{ width: '100%', border: '1px dashed black' }}>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Id</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
          {cartItems.map((item, key) => (
            <tr>
              <td>{key}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.id}</td>
              <td>items count</td>
              <td>Remove</td>
            </tr>
          ))}
        </table>
      </section>
    </main>
  );
};

export default Order;
