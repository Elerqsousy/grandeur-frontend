import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const isUserLoggedIn = () => {
  const status = sessionStorage.getItem('status');
  return status === 'true';
};

const ProtectedRoute = ({ element: Element }) => {
  const isLoggedIn = isUserLoggedIn();

  if (!isLoggedIn) {
    return <Navigate to="/splash" />;
  }

  return <Element />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
