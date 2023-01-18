import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthenticationContext } from '../AuthenticationContextProvider/AuthenticationContext';

const WithAuthentication = ({ component: Component }: { component: React.ElementType }) => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  if (isAuthenticated) {
    return <Component />;
  }

  return <Navigate to='/login' />;
};

export { WithAuthentication };
