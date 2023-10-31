import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/user_slice';
import ErrorMessage from '../components/ErrorMessage';
import '../styles/form.scss';

const RegisterSession = ({ btnName }) => {
  const [nameData, setNameData] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!nameData) {
      setError('Username cannot be empty');
      return;
    }

    dispatch(userRegister(nameData))
      .then((response) => {
        if (response.payload && response.payload.id) {
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
        setError('Registration failed. User already exists');
      });
  };

  const textInputHandler = (e) => {
    setNameData(e.target.value);
    setError('');
  };

  return (
    <div className="form-container">
      <form action="" onSubmit={(e) => formSubmissionHandler(e)}>
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

RegisterSession.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default RegisterSession;
