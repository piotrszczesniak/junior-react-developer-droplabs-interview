import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../components/CartContextProvider/CartContext';
import { checkAuthenticate } from '../../utilis/checkAuthenticate';
import styles from './Products.module.scss';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { setCart } = useContext(CartContext);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddToCart = (id, title, price) => {
    setCart((cart) => [...cart, { id, title, price }]);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!checkAuthenticate()) {
      navigate('/login');
      return;
    }

    fetchProducts();
  }, [products, navigate]);

  return (
    <main className='product-page'>
      <section>
        <h1>Produkty</h1>
      </section>
      <section className={styles.products}>
        {products.map((product, index) => (
          <div className={styles.product} key={product.id}>
            <img src={product.image} alt={product.title} width='150' />
            <h3>{product.title}</h3>
            <p>{product.price} PLN</p>
            <button onClick={() => handleAddToCart(product.id, product.title, product.price)}>Add to cart</button>
          </div>
        ))}
      </section>
    </main>
  );
};

export { Products };
