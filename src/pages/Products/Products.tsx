import { useEffect, useState, useContext, useCallback } from 'react';
import { AuthenticationContext } from '../../components/AuthenticationContextProvider/AuthenticationContext';
import { CartContext } from '../../components/CartContextProvider/CartContext';
import Modal from '../../components/Modal/Modal';
import styles from './Products.module.scss';
import { Navigate } from 'react-router-dom';

import { CartType, ProductType } from '../../types/types';

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [product, setProduct] = useState<ProductType>({
    id: 1,
    title: '',
    price: 0,
    description: '',
    image: '',
    category: '',
    rating: {
      rate: 0,
      count: 0,
    },
  });
  const [visible, setVisible] = useState<boolean>(false);
  const { addItemToCart } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthenticationContext);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        throw new Error('Problem with fetching...');
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  const handleAddToCart = ({ id, title, price }: CartType) => {
    addItemToCart({ id, title, price });
  };

  const handleOpenModal = (id: CartType['id']) => {
    fetchSingleProduct(id);
    setVisible(true);
  };

  const handleModalClose = () => {
    setVisible(false);
    setProduct({
      id: 1,
      title: '',
      price: 0,
      description: '',
      image: '',
      category: '',
      rating: {
        rate: 0,
        count: 0,
      },
    });
  };

  const fetchSingleProduct = async (id: CartType['id']) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);

      if (response.ok) {
        const data = await response.json();
        setProduct(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (!isAuthenticated) return <Navigate to='/login' />;

  return (
    <main className='product-page'>
      <section>
        <h1>Products</h1>
      </section>
      <section className={styles.products}>
        <Modal isVisible={visible} onModalClose={handleModalClose} product={product} />
        {products.map(({ id, title, image, price }) => (
          <div className={styles.product} key={id}>
            <img src={image} alt={title} width='125' />
            <h3>{title}</h3>
            <p>{price} EUR</p>

            <button onClick={() => handleAddToCart({ id, title, price })}>Add to cart</button>

            <button onClick={() => handleOpenModal(id)}>More details...</button>
          </div>
        ))}
      </section>
    </main>
  );
};

export { Products };
