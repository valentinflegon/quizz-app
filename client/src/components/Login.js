import React from 'react';

const Login = () => {
  return (
    <div className='log-in-comp'>
      <form>
        <label>Username</label>
        <input type="texte"></input>
        <label>Password</label>
        <input type="password"></input>
        <button>Connection</button>
      </form> 
    </div>
  );
};

export default Login;