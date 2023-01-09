import { createContext } from 'react';

type ContextType = {
  isAuthenticated: boolean;
  user: ;
  authenticate: ;
  logout: () => void;
};

const AuthenticationContext = createContext<ContextType>({
  isAuthenticated: false,

});

export { AuthenticationContext };
