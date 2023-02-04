import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Products } from './pages/Products/Products';
import { ErrorPage } from './pages/ErrorPage';
import { Login } from './pages/Login/Login';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Locations } from './pages/Locations';
import { CartContextProvider } from './components/CartContextProvider/CartContextProvider';
import { AuthenticationContextProvider } from './components/AuthenticationContextProvider/AuthenticationContextProvider';
import { Navbar } from './components/Navbar/Navbar';
import { Cart } from './components/Cart/Cart';
import Order from './pages/Order/Order';
import { useState } from 'react';
import { WithAuthentication } from './components/WithAuthentication/WithAuthentication';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Router>
      <CartContextProvider>
        <AuthenticationContextProvider>
          <Navbar onMobileMenuClick={toggleMobileMenu} isMobileMenuOpen={openMenu} />
          <Cart />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/products' element={<WithAuthentication component={Products} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/locations' element={<Locations />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/order' element={<Order />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </AuthenticationContextProvider>
      </CartContextProvider>
    </Router>
  );
}

export default App;
