import React from 'react'
import { myLogo } from '../Constants';
import { Littlelemon } from '../assets/images';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
         
            <img src={Littlelemon} className='img-inside' alt="Little Lemon" height={49} width={200}/>

        </div>
      <div className='nav-container'>
      <div className="menu-icon" onClick={toggleNavBar}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <div className='nav-content'>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li className='nav-item'><Link to="/">Home</Link></li>
        <li className='nav-item'><Link to="/About">About</Link></li>
        <li className='nav-item'><Link to="/">Menu</Link></li>
        <li className='nav-item'><Link to="/registration">Reservation</Link></li>
        <li className='nav-item'><Link to="/">Login</Link></li>
      </ul>
     
      </div>
      </div>
    </nav>
  )
};

export default Nav