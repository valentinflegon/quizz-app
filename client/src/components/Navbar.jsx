import React from 'react';
import logo from '../assets/logo.svg'
import { NavLink} from 'react-router-dom';

const Navbar = () => {

  let isLogged = true;

  return isLogged ? (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='logo'>
          <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
        </div>
        <div className="navbar-links_containers">
          <NavLink to="/leaderboard"><p>Leaderboard</p></NavLink>
        </div>
      </div>
      <div className="navbar-sign">
         <NavLink to="/login"><p>Connexion</p></NavLink>
         <NavLink to="signin" state={{ from: 'navbar'}}><button className="navbar-signup_button" type="button">Inscription</button></NavLink>
      </div>
    </div>
  )
  :
  (<div>nique ta mere</div>);
};

export default Navbar;