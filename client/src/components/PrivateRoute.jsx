import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { checkAuth } from '../utils/checkAuth';

const PrivateRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const verify = async () => {
      const result = await checkAuth();
      setAuth(result.isAuth);
    };
    verify();
  }, []);

  if (auth === null) return null; // or loading spinner

  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
// This component checks if the user is authenticated before rendering the children components.
// If the user is authenticated, it renders the children components.
// If not, it redirects the user to the login page using Navigate from react-router-dom.