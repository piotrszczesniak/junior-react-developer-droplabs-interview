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
        <Link className={styles.link} to='/' {...(isMobileMenuOpen && { onClick: onMobileMenuClick })}>
          Home
        </Link>
        <Link className={styles.link} to='/products' {...(isMobileMenuOpen && { onClick: onMobileMenuClick })}>
          Products
        </Link>
        <Link className={styles.link} to='/about' {...(isMobileMenuOpen && { onClick: onMobileMenuClick })}>
          About
        </Link>
        <Link className={styles.link} to='/locations' {...(isMobileMenuOpen && { onClick: onMobileMenuClick })}>
          Locations
        </Link>
        <Link className={styles.link} to='/contact' {...(isMobileMenuOpen && { onClick: onMobileMenuClick })}>
          Contact
        </Link>
        <Link to={''} className={styles.link} {...(isMobileMenuOpen && { onClick: onMobileMenuClick })}>
          <img src={PolishFlag} style={{ height: '1rem', border: '1px solid red' }} alt='language selector' />
        </Link>
      </div>

      {isAuthenticated && (
        <div className={styles['logout-wrapper']}>
          <Link to={''} className={styles.link} onClick={logout}>
            Logout
          </Link>
        </div>
      )}

      {!isAuthenticated && (
        <div className={styles['login-wrapper']}>
          <Link className={styles.link} to='/login' {...(isMobileMenuOpen && { onClick: onMobileMenuClick })}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export { Navbar };
