import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { checkAuthenticate } from '../utilis/checkAuthenticate';

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

  let x = document.cookie;
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkAuthenticate(x)) {
      navigate('/login');
    }
    fetchProducts();
  }, [products, x, navigate]);

  return (
    <section className='Products'>
      {products.map((product, index) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} width='150' />
          <h3>{product.title}</h3>
          <p>{product.price} PLN</p>
          <button onClick={() => handleAddToCart(product.id, product.title, product.price)}>Add to cart</button>
        </div>
      ))}
    </section>
  );
};

export { Products };
