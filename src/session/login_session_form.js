import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/user_slice';
import ErrorMessage from '../components/ErrorMessage';
import '../styles/form.scss';

const LoginSession = ({ btnName }) => {
  const [nameData, setNameData] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="form-container">
      <form action="" onSubmit={(e) => loginFormSubmissionHandler(e)}>
        <input
          type="text"
          value={nameData}
          onChange={(e) => textInputHandler(e)}
          placeholder="Enter your name..."
        />
        {error && <ErrorMessage message={error} />}
        <button type="submit">{btnName}</button>
      </form>
    </div>
  );
};

LoginSession.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default LoginSession;
