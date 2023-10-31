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

  const loginFormSubmissionHandler = (e) => {
    e.preventDefault();
    if (!nameData) {
      setError('Username cannot be empty');
      return;
    }

    dispatch(userLogin(nameData))
      .then((response) => {
        if (response.payload) {
          const userInfo = {
            id: response.payload.id,
            name: response.payload.name,
          };
          return userInfo;
        }
        throw new Error('Response payload or id is undefined.');
      })
      .then((userInfo) => {
        sessionStorage.setItem('status', 'true');
        sessionStorage.setItem('logged_user', JSON.stringify(userInfo));
        window.location.replace('/');
      })
      .catch(() => {
        setError('Failed to login. User does not exist!');
      });
  };

  const textInputHandler = (e) => {
    setNameData(e.target.value);
    setError('');
  };

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
