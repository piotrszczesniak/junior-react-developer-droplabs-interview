import React, { useState, useMemo, useCallback } from 'react';
import { UserContext } from '../../contexts/UserContext';

const UserContextProvider = ({ children, setLogin }) => {
  const [user, setUser] = useState(null);

  const handleSetUser = useCallback(
    (user) => {
      setUser(user);
      setLogin(true);
      const loginToken = 'EDnrQ(vG}!7&*]P';
      document.cookie = `loginToken=${loginToken}`;
      // const token = jwt.sign({ id: data.id }, "secret")

      // jwt.sing... // TODO: if time allows use jwt package to generate a token https://www.npmjs.com/package/jsonwebtoken
    },
    [setLogin]
  );

  const userValue = useMemo(() => ({ user, setUser: handleSetUser }), [user, handleSetUser]);

  return <UserContext.Provider value={userValue}>{children}</UserContext.Provider>;
};

export { UserContextProvider };
