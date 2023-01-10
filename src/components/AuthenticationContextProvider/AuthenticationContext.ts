import { createContext } from 'react';
import { AuthenticationType, UserType } from '../../types/types';

const AuthenticationContext = createContext<AuthenticationType>({
  isAuthenticated: false,
  user: null,
  authenticate: (data: UserType) => {},
  logout: () => {},
});

export { AuthenticationContext };
