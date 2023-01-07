import { useEffect, useState, useContext, useCallback } from 'react';
import { AuthenticationContext } from '../../components/AuthenticationContextProvider/AuthenticationContext';
import { CartContext } from '../../components/CartContextProvider/CartContext';
import Modal from '../../components/Modal/Modal';
// import { checkAuthenticate } from '../../utilis/checkAuthenticate';
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
      rate: '',
      count: 0,
    },
  });
  const [visible, setVisible] = useState(false);

  const { setCart } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthenticationContext);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleAddToCart = (id: Pick<CartType, 'id'>, title: Pick<CartType, 'title'>, price: Pick<CartType, 'price'>) => {
    setCart((cart: CartType) => [...[cart], { id, title, price }]);
  };

  const handleOpenModal = (id: Pick<CartType, 'id'>) => {
    fetchSingleProduct(id);
    setVisible(true);
  };

  const handleModalClose = () => {
    setVisible(false);

    // * not sure if this is needed at all?
    // setProduct([]);
  };

  const fetchSingleProduct = async (id: Pick<ProductType, 'id'>) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
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
        <h1>Produkty</h1>
      </section>
      <section className={styles.products}>
        <Modal isVisible={visible} onModalClose={handleModalClose} product={product} />
        {products.map((product) => (
          <div className={styles.product} key={product.id}>
            <img src={product.image} alt={product.title} width='125' />
            <h3>{product.title}</h3>
            <p>{product.price} PLN</p>

            <button onClick={() => handleAddToCart(product.id, product.title, product.price)}>Dodaj do koszyka</button>

            <button onClick={() => handleOpenModal(product.id)}>Więcej szczegółów...</button>
          </div>
        ))}
      </section>
    </main>
  );
};

export { Products };
