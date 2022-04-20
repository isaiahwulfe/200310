import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SignupLogin from './components/SignupLogin.js';
import './signupLogin.css';

const Signup = ({ user, register }) => {
  const history = useHistory();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <SignupLogin 
      headerTag="Already have an account?"
      href="/login"
      headerAction="Login"
      handleRegister={handleRegister}
      formHeader="Create an account."
      userName={true}
      email={true}
      pass1={true}
      pass2={true}
      formErrorMessage={formErrorMessage.confirmPassword}
      endAdornment={false}
      formAction="Create"
    />
  );
};

export default Signup;
