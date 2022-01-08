import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-text'>
        <div>
          <NavLink to='/contact'>Contactez-nous</NavLink>
        </div>
        <div>
          <NavLink to='/about-us'>À propos</NavLink>
        </div>
        <div>
          <NavLink to='/terms-conditions'>Termes & Conditions </NavLink>
        </div>
        <div>
          @GEOQUIZZ
        </div>
      </div>
    </div>
  )
}

export default Footer;
