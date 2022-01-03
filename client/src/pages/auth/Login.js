import React from 'react';
import Navbar from '../../components/Navbar';
import LogIn from '../../components/Login';

const Login = () => {
  return (
    <div className='log-in-page'>
      <Navbar />
      <LogIn />
    </div>
  );
};

export default Login;