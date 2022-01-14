import React from 'react';
import { useUserContext } from '../lib/contextLib';

const Profile = () => {
  const user = useUserContext();
  console.log(user.user);
  console.log(user.user.username);
  console.log(user.user.password);
  return (
    <div className='profile'>
      <div>
        <p>Profile image : </p>
        <p>Profile username : {user.user.username}</p>
        <p>Profile score : </p>
      </div>
    </div>
  );
};

export default Profile;