import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Page not Found</h1>
      <NavLink exact to="/">retour acceuil</NavLink>
    </div>
  );
};

export default NotFound;