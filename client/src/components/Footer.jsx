import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/components/footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-links'>
                <div className='footer-links_logo'>
                    <NavLink to="/"> <img src={logo} alt="logo" /></NavLink>
                </div>
                <div className='footer-links_containers'>
                    <NavLink to="/">
                        <p>Community</p>
                    </NavLink>
                    <NavLink to="/aboutus">
                        <p>About us</p>
                    </NavLink>
                <div className='footer-copyright'>
                    @Geoquizz
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
