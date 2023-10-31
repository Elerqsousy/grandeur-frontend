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
