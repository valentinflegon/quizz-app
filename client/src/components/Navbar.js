import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='app-name-navbar navbar-brand'> <NavLink exact to="/">GEOQUIZZ</NavLink></div>
      <div className='navbar-txt'>
        <div className='profil-btn'><NavLink exact to="/" >Mon profil</NavLink></div>
        <div className='auth-btns'>
          <div className='navbar-option'><NavLink exact to="/login">Connexion</NavLink></div>
          <div className='navbar-option'><NavLink exact to="/signin" state={{ from: 'navbar' }}>Inscription</NavLink></div>
          <div className='navbar-option'><NavLink exact to="/">Deconnexion</NavLink></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;