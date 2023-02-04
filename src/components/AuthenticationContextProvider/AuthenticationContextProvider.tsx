import React, { useState, useMemo, useCallback, useContext } from 'react';
import { AuthenticationContext } from './AuthenticationContext';
import { checkAuthenticate } from '../../utilis/checkAuthenticate';
import { CartContext } from '../CartContextProvider/CartContext';

import { UserType } from '../../types/types';

type AuthenticationContextProviderProps = {
  children: React.ReactNode;
};

const AuthenticationContextProvider = ({ children }: AuthenticationContextProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);
  const { clearCart } = useContext(CartContext);

  const authenticate = useCallback((data: UserType) => {
    setUser(data);
    const loginToken = 'EDnrQ(vG}!7&*]P';
    document.cookie = `loginToken=${loginToken}`;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    clearCart();
    document.cookie = 'loginToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  }, [clearCart]);

  let isAuthenticated: boolean;

  if (user && checkAuthenticate('loginToken')) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  const userValue = useMemo(() => ({ user, authenticate, logout, isAuthenticated }), [user, authenticate, logout, isAuthenticated]);

  return <AuthenticationContext.Provider value={userValue}>{children}</AuthenticationContext.Provider>;
};

export { AuthenticationContextProvider };
