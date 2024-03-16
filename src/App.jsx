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
import { useState } from 'react';
import { MyContextProvider } from './sections/MyContext';

function App() {

 
  return (
    <MyContextProvider>
    <main>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={
             <>
             <section className='section1'>
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
        
         
        </Routes>
      </Router>
      <Footer />
    </main>
    </MyContextProvider>
   
  );
}

export default App;
