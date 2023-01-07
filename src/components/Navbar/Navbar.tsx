import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationContext } from '../AuthenticationContextProvider/AuthenticationContext';
import PolishFlag from '../../assets/img/polish-flag.svg';
import MobileMenuOpen from '../../assets/img/hamburger-menu.svg';
import MobileMenuClose from '../../assets/img/close-icon.svg';
import classNames from 'classnames';

import styles from './Navbar.module.scss';

type NavbarProps = {
  onMobileMenuClick: () => void;
  isMobileMenuOpen: boolean;
};

const Navbar = ({ onMobileMenuClick, isMobileMenuOpen }: NavbarProps) => {
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
        src={!isMobileMenuOpen ? MobileMenuOpen : MobileMenuClose}
        alt='mobile menu'
        onClick={onMobileMenuClick}
      />
      <div className={classNames(styles['menu-wrapper'], { [styles['mobile']]: isMobileMenuOpen })}>
        <Link className={styles.link} to='/' onClick={isMobileMenuOpen && onMobileMenuClick}>
          Strona główna
        </Link>
        <Link className={styles.link} to='/products' onClick={isMobileMenuOpen && onMobileMenuClick}>
          Produkty
        </Link>
        <Link className={styles.link} to='/about' onClick={isMobileMenuOpen && onMobileMenuClick}>
          O sklepie
        </Link>
        <Link className={styles.link} to='/locations' onClick={isMobileMenuOpen && onMobileMenuClick}>
          Sklepy stacjonarne
        </Link>
        <Link className={styles.link} to='/contact' onClick={isMobileMenuOpen && onMobileMenuClick}>
          Kontakt
        </Link>
        <Link className={styles.link} onClick={isMobileMenuOpen && onMobileMenuClick}>
          <img src={PolishFlag} style={{ height: '1rem', border: '1px solid red' }} alt='language selector' />
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
          <Link className={styles.link} to='/login' onClick={isMobileMenuOpen && onMobileMenuClick}>
            Zaloguj
          </Link>
        </div>
      )}
    </nav>
  );
};

export { Navbar };
