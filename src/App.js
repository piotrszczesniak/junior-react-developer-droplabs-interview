import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ErrorPage } from './pages/ErrorPage';
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';
import { Logout } from './pages/Logout';
import { About } from './pages/About';
import { Locations } from './pages/Locations';
import { CartContext } from './contexts/CartContext';
import { UserContext } from './contexts/UserContext';
import { useMemo, useState, useCallback } from 'react';
import { Cart } from './components/Cart/Cart';
// import { useAuthenticate } from './hooks/useAuthenticate';

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);

  // higher order function
  const handleSetUser = useCallback((user) => {
    setUser(user);
    setLogin(true);
    const loginToken = 'EDnrQ(vG}!7&*]P';
    document.cookie = `loginToken=${loginToken}`;

    // jwt.sing... // TODO: if time allows use jwt package to generate a token https://www.npmjs.com/package/jsonwebtoken
  }, []);

  const handleLogout = () => {
    setLogin(false);
    document.cookie = 'loginToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
  };

  // console.log("errors:", errors);
  // const token = jwt.sign({ id: data.id }, "secret")

  const cartValue = useMemo(() => ({ cart, setCart }), [cart, setCart]);
  const userValue = useMemo(() => ({ user, setUser: handleSetUser, login, setLogin }), [user, handleSetUser, login, setLogin]);

  // const cartTotalPrice = useMemo(() => cart.reduce((total, { price }) => total + price, 0), [cart]);

  return (
    <Router>
      <CartContext.Provider value={cartValue}>
        <UserContext.Provider value={userValue}>
          <nav>
            <Link to='/'>1000things</Link>
            <Link to='/'>Strona główna</Link>
            <Link to='/products'>Produkty</Link>
            <Link to='/about'>O sklepie</Link>
            <Link to='/locations'>Sklepy stacjonarne</Link>
            <Link to='/contact'>Kontakt</Link>
            {login && <button onClick={handleLogout}>Logout</button>}
            {/* {login && <Link to='/logout'>Wyloguj</Link>} */}
            {!login && <Link to='/login'>Zaloguj</Link>}
            <Cart />
            {/* <p>You have {cart.length} products in your cart</p>
            <p>Total is: {cartTotalPrice} PLN</p> */}
          </nav>
          {/* <p>{user?.email}</p> */}

          <main>
            <Routes>
              <Route index element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/login' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/about' element={<About />} />
              <Route path='/locations' element={<Locations />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </main>
        </UserContext.Provider>
      </CartContext.Provider>
    </Router>
  );
}

/*
 useAuth = () => {

  const navigate = useNavigate()

  if(!cookie) {
    navigate('/login')
  }
 }

*/

export default App;
