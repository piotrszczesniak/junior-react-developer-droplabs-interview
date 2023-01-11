import { createContext } from 'react';
import { AuthenticationType } from '../../types/types';

const AuthenticationContext = createContext<AuthenticationType>({
  isAuthenticated: false,
  user: null,
  authenticate: () => {},
  logout: () => {},
});

export { AuthenticationContext };
