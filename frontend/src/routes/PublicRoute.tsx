import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useSelector} from 'react-redux';

const PublicRoute = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const isAuthenticated = isLoggedIn || localStorage.getItem('token');

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
