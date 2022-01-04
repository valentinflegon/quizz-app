import React from 'react';
import { NavLink } from 'react-router-dom';

const MainMenu = () => {
  return (
    <div className='main-menu'>
      <div className='btn btn-light'> <NavLink exact to="/play">Jouer</NavLink></div>
      <div className='btn btn-light'> <NavLink exact to="/leaderboard">Classement</NavLink></div>
    </div>
  );
};

export default MainMenu;