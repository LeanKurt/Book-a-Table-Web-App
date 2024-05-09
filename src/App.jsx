import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Landingproducts from './sections/Landingproducts';
import Footer from './sections/Footer';
import About from './sections/About';
import './App.css';
import Booking from './sections/Booking';
import ConfirmedBooking from './sections/ConfirmedBooking';
import MyBooking from './sections/MyBooking';
import Iloveyou from './sections/Iloveyou';
import Menu from './sections/Menu';
import Signup from './sections/Signup';
import { MyContextProvider } from './sections/MyContext';
import Login from './sections/Login';

function App() {

 
  return (
    <MyContextProvider>
    <main>
      <Router>
        <Nav />
        <Routes>
          <Route path="/home" element={
             <>
             <section className='hero'>
               <Hero />
             </section>
             <section className='section1'>
               <Landingproducts />
             </section>
           </>
          }/>
          <Route path='/About' element = {
            <section className='section1'>
              <About />
            </section>
          }/>
          <Route path="/registration" element ={
            <section className='section1'>

              <Booking />
             
            </section>
          }/>
          <Route path="/confirmed" element= {
            <section className='section1'>
    
              <ConfirmedBooking />
          
            </section>
          }/>
           <Route path="/menu" element= {
            <section className='menu-section'>
    
              <Menu />
          
            </section>
          }/>
          <Route path='/mybooking' element = {
          <section className='section1'>
            <MyBooking />
          </section>
        }/>
           <Route path='/signup' element = {
          <section className='signup-section'>
            <Signup />
          </section>
        }/>
         <Route path='/love' element = {
          <section className='section1'>
            <Iloveyou />
          </section>
         }/>
         <Route path='/login' element = {
            <section className='login-section'>
              <Login />
            </section>
          }/>
        </Routes>
        

      </Router>
      <Footer />
    </main>
    </MyContextProvider>
   
  );
}

export default App;
