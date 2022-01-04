import React from 'react';
import '../styles/components/navbar.css'
import logo from '../assets/logo.svg'
import { NavLink} from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <NavLink to="/"> <img src={logo} alt="logo" /></NavLink>
        </div>
        <div className="navbar-links_containers">
          <NavLink to="/leaderboard"><p>Leaderboard</p></NavLink>
        </div>
      </div>
      <div className="navbar-sign">
         <NavLink to="/login"><button className="navbar-signin_button">Connexion</button></NavLink>
         <NavLink to="signin" state={{ from: 'navbar'}}><button className="navbar-signup_button" type="button">Inscription</button></NavLink>
      </div>
    </div>
  );
};

export default Navbar;