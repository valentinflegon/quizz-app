import React from 'react';
import Navbar from '../../components/Navbar';
import SignIn from '../../components/Signin';

const Signin = () => {
  return (
    <div className='sign-in-page'>
      <Navbar />
      <SignIn />
    </div>
  );
};

export default Signin;