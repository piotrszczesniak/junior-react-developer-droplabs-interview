import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationContext } from '../AuthenticationContextProvider/AuthenticationContext';
import PolishFlag from '../../assets/img/polish-flag.svg';
import HamnburgerMenu from '../../assets/img/hamburger-menu.svg';
import classNames from 'classnames';

import styles from './Navbar.module.scss';

const Navbar = ({ onMobileMenuClick, isMobileMenuOpen }) => {
  const { logout, isAuthenticated } = useContext(AuthenticationContext);

  return (
    <nav className={styles.navbar}>
      <div className={styles['logo-wrapper']}>
        <Link className={styles.logo} to='/'>
          1000things
        </Link>
      </div>

      <img
        className={classNames(styles['mobile-menu'])}
        src={HamnburgerMenu}
        style={{ height: '20px' }}
        alt='mobile menu'
        onClick={onMobileMenuClick}
      />
      <div className={classNames(styles['menu-wrapper'], { [styles['mobile']]: isMobileMenuOpen })}>
        <Link className={styles.link} to='/'>
          Strona główna
        </Link>
        <Link className={styles.link} to='/products'>
          Produkty
        </Link>
        <Link className={styles.link} to='/about'>
          O sklepie
        </Link>
        <Link className={styles.link} to='/locations'>
          Sklepy stacjonarne
        </Link>
        <Link className={styles.link} to='/contact'>
          Kontakt
        </Link>
        <Link className={styles.link}>
          <img src={PolishFlag} style={{ height: '20px', border: '1px solid red' }} alt='language selector' />
        </Link>
      </div>

      {isAuthenticated && (
        <div className={styles['logout-wrapper']}>
          <Link className={styles.link} onClick={logout}>
            Wyloguj
          </Link>
        </div>
      )}

      {!isAuthenticated && (
        <div className={styles['login-wrapper']}>
          <Link className={styles.link} to='/login'>
            Zaloguj
          </Link>
        </div>
      )}
    </nav>
  );
};

export { Navbar };
