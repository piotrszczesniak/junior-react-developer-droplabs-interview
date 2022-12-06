import './App.scss';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ErrorPage } from './pages/ErrorPage';
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Locations } from './pages/Locations';
import { useState } from 'react';
import { Cart } from './components/Cart/Cart';
import { CartContextProvider } from './components/CartContextProvider/CartContextProvider';
import { UserContextProvider } from './components/UserContextProvider/UserContextProvider';

// import { useAuthenticate } from './hooks/useAuthenticate';

function App() {
  const [login, setLogin] = useState(false);

  const handleLogout = () => {
    setLogin(false);
    document.cookie = 'loginToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
  };

  // console.log("errors:", errors);

  return (
    <Router>
      <CartContextProvider>
        <UserContextProvider setLogin={setLogin}>
          <nav>
            <Link to='/'>1000things</Link>
            <Link to='/'>Strona główna</Link>
            <Link to='/products'>Produkty</Link>
            <Link to='/about'>O sklepie</Link>
            <Link to='/locations'>Sklepy stacjonarne</Link>
            <Link to='/contact'>Kontakt</Link>
            {login && <button onClick={handleLogout}>Logout</button>}
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
              <Route path='/about' element={<About />} />
              <Route path='/locations' element={<Locations />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </main>
        </UserContextProvider>
      </CartContextProvider>
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
