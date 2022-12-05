import { useEffect, useState, useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const Store = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);

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

  let cartTotalPrice = cart.reduce(
    (total, currentValue) => total + currentValue.price,
    0
  );

  useEffect(() => {
    fetchProducts();
  }, [products]);

  return (
    <div className="Store">
      <p>You have {cart.length} products in your cart</p>
      <p>Total is: {cartTotalPrice} PLN</p>
      {products.map((product, index) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} width="150" />
          <h3>{product.title}</h3>
          <p>{product.price} PLN</p>
          <button
            onClick={() =>
              handleAddToCart(product.id, product.title, product.price)
            }
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export { Store };
