import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Logout = () => {
  const { setLogin } = useContext(UserContext);

  const handleLogout = () => {
    setLogin(false);
    document.cookie = 'loginToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
  };

  return (
    <section>
      <h1>Logout page</h1>
      <button onClick={handleLogout}>Logout</button>
    </section>
  );
};

export { Logout };
