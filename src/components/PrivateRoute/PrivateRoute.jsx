import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCookies } from '../../hooks/useCookies';

const PrivateRoute = ({ children }) => {
  const { getCookie } = useCookies();
  const firstName = getCookie('firstName');
  if (!firstName) {
    return <Navigate to="/" />;
  }
  return children;
};
export default PrivateRoute;
