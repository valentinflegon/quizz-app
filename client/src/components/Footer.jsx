import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-links_logo'>
          <NavLink className='logo' to="/">GEOQUIZZ</NavLink>
        </div>
        <div className='footer-text'>
          <div>
            <NavLink  to='/contact'>Contact</NavLink>
          </div>
          <div>
          <NavLink  to='/about-us'>About us</NavLink>
          </div>
          <div>
          <NavLink  to='/terms-conditions'>Terms and Conditions</NavLink>

          </div>
          <div>
          @GEOQUIZZ
          </div>
        </div>
    </div>
  )
}

export default Footer;
