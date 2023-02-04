import { useEffect, useState, useContext, useCallback } from 'react';
import { CartContext } from '../../components/CartContextProvider/CartContext';
import Modal from '../../components/Modal/Modal';
import styles from './Products.module.scss';

import { CartType, ProductType } from '../../types/types';

const Products = () => {
  const [loadingProducts, setLoadingProducts] = useState<boolean>(false);
  const [loadingSingleProduct, setLoadingSingleProduct] = useState<boolean>(false);
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

  const fetchProducts = useCallback(async () => {
    try {
      setLoadingProducts(true);
      const response = await fetch(`https://fakestoreapi.com/products`);
      // console.log(response);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
        setLoadingProducts(false);
      } else {
        throw new Error('Problem with fetching...');
      }
    } catch (error: any) {
      setLoadingProducts(false);
      console.log(error.message);
    }
  }, []);

  const handleAddToCart = (item: CartType) => {
    addItemToCart(item);
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
      setLoadingSingleProduct(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);

      if (response.ok) {
        const data = await response.json();
        setProduct(data);
        setLoadingSingleProduct(false);
      }
    } catch (err) {
      console.log(err);
      setLoadingSingleProduct(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <main className='product-page'>
      <section>
        <h1>Products</h1>
      </section>
      {loadingProducts ? (
        <section className={styles.products}>Products are loading...</section>
      ) : (
        <section className={styles.products}>
          <Modal isVisible={visible} onModalClose={handleModalClose} product={product} isLoading={loadingSingleProduct} />
          {products.map(({ id, title, image, price }) => (
            <div className={styles.product} key={id}>
              <img src={image} alt={title} width='125' />
              <h3>{title}</h3>
              <p>{price} EUR</p>

              {/*
             // TODO: i wanted to use a useAddToCart but couldn't work it out in Order component becuse of type errors
             */}
              <button onClick={() => handleAddToCart({ id, title, price })}>Add to cart</button>

              <button onClick={() => handleOpenModal(id)}>More details...</button>
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export { Products };
