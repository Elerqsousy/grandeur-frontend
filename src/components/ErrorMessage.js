import React from 'react';
import PropTypes from 'prop-types';
import '../styles/errorMessage.scss';

const ErrorMessage = ({ message }) => (
  <div className="error-message">
    {message}
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
