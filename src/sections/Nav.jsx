import React from 'react'
import { navLinks, myLogo } from '../Constants';
import { useState } from 'react';

import '../App.css'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState("false");
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
  return (
    <header className='header'>
        <div className='logo'>
           {myLogo.map((logo) => (
            <img src={logo.src} alt={logo.alt}   className='img-inside'/>
           ))}
        </div>
        <div className='menu-icon' onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
        <nav className={`nav-bar ${menuOpen ? "open" : ""}`}>
            <ul>
                {navLinks.map((nav,index) => (
                    <li id={index}>{nav.name}</li>
                ))}
            </ul>
            <button className='nav-btn'>Login</button>
        </nav>      
    </header>
  )
}

export default Nav