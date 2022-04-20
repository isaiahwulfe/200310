import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SignupLogin from './components/SignupLogin';
import { InputAdornment } from '@material-ui/core';
import './signupLogin.css';

const Login = ({ user, login }) => {
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <SignupLogin 
      headerTag="Don't have an account?"
      href="/register"
      headerAction="Create account"
      handleRegister={handleLogin}
      formHeader="Welcome Back!"
      userName={true}
      email={false}
      pass1={true}
      pass2={false}
      formErrorMessage={false}
      endAdornment={<InputAdornment position="end"><a href="/register" className="forgot-link">Forgot?</a></InputAdornment>}
      formAction="Login"
    />
  );
};

export default Login;
