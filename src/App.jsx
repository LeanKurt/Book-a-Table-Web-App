import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Landingproducts from './sections/Landingproducts';
import Footer from './sections/Footer';
import About from './sections/About';
import './App.css';
import Reservation from './sections/Reservation';

function App() {
  return (
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
              <Reservation />
            </section>
          }/>
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
