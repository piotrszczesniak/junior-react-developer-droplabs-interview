import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { ErrorPage } from './pages/ErrorPage';
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';
import { Logout } from './pages/Logout';
import { About } from './pages/About';
import { Locations } from './pages/Locations';
import { CartContext } from './Contexts/CartContext';
import { UserContext } from './Contexts/UserContext';
import { useMemo, useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState([]);

  const cartValue = useMemo(() => ({ cart, setCart }), [cart, setCart]);
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <CartContext.Provider value={cartValue}>
        <UserContext.Provider value={userValue}>
          <nav>
            <Link to='/'>1000things</Link>
            <Link to='/'>Strona główna</Link>
            <Link to='/store'>Store</Link>
            <Link to='/about'>O sklepie</Link>
            <Link to='/login'>Zaloguj</Link>
            <Link to='/logout'>Wyloguj</Link>
            <Link to='/locations'>Sklepy stacjonarne</Link>
            <Link to='/contact'>Kontakt</Link>
          </nav>
          <p>{user?.email}</p>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/about' element={<About />} />
            <Route path='/locations' element={<Locations />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </UserContext.Provider>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
