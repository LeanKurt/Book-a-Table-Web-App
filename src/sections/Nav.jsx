import React from 'react'
import { myLogo } from '../Constants';

import { useState } from 'react';

import '../Navbar.css'

const Nav = () => {
  const[isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={`navbar ${isOpen ? "open" : ''}`}>
      <div className='logo-container'>
           {myLogo.map((image) => (
            <img src={image.src} className='img-inside' alt={image.alt} height={49} width={200}/>
           ))}
        </div>
      <div className='nav-container'>
      <div className="menu-icon" onClick={toggleNavBar}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <div className='nav-content'>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li className='nav-item'>Home</li>
        <li className='nav-item'>About</li>
        <li className='nav-item'>Products</li>
        <li className='nav-item'>Reservation</li>
        <li className='nav-item'>Login</li>
      </ul>
     
      </div>
      </div>
    </nav>
  )
};

export default Nav