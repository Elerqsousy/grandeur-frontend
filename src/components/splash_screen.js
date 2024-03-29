import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import LoginSession from '../session/login_session_form';
import RegisterSession from '../session/register_session_form';

import '../styles/splash_screen.scss';
import '../styles/form.scss';

const isUserLoggedIn = () => {
  const status = sessionStorage.getItem('status');
  return status === 'true';
};

const SplashScreen = () => {
  const isLoggedIn = isUserLoggedIn();

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <section className="splash">
      <div className="splash_inner">
        <h1 className="text-focus-in">Grandeur</h1>
        <p className=" text text-focus-in">
          Redefining Real Estate Reservations.
        </p>
        <div className="slide-in-bottom">
          <div className="splash-container">
            {showLogin && (
              <div>
                <LoginSession btnName="Login" />
                <p>
                  New here?
                  {' '}
                  <button className="btn" type="button" onClick={handleRegisterClick}>
                    Register
                  </button>
                </p>
              </div>
            )}
            {showRegister && (
              <div>
                <RegisterSession btnName="Register" />
                <p>
                  Already have an account?
                  {' '}
                  <button className="btn" type="button" onClick={handleLoginClick}>
                    Login
                  </button>
                </p>
              </div>
            )}
            {!showLogin && !showRegister && (
              <section>
                <button
                  className="log-btn"
                  type="button"
                  onClick={handleLoginClick}
                >
                  Login
                </button>
                <button
                  className="log-btn"
                  type="button"
                  onClick={handleRegisterClick}
                >
                  Register
                </button>
              </section>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplashScreen;
