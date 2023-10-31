import React, { useState } from 'react';
import LoginSession from '../session/login_session_form';
import RegisterSession from '../session/register_session_form';
import '../styles/splash_screen.scss';
import '../styles/form.scss';

const SplashScreen = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleSwitchToLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleSwitchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <section className="splash">
      <div className="splash_inner">
        <h1 className="text-focus-in">Grandeur</h1>
        <p className=" text text-focus-in">Redefining Real Estate Reservations.</p>
        <div className="btn slide-in-bottom">
        </div>
      </div>
    </section>
  );
};

export default SplashScreen;
