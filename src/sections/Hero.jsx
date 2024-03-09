import React from 'react'
import { landingpic } from '../assets/images'; 
import '../Hero.css';

const Hero = () => {
  return (
    <section className='section1'>
      <div className='main-container'>
        <div className="text-container">
           <div className='h1-container'>
            <h1>Little Lemon</h1>
           </div>
           <div className='place-container'>
            <p className='place'>Chicago</p>
           </div>
           <div className='introduction'>
               <p>We are a family owned Meditterenean restaurant, focused on traditional recipe served with a modern twist</p>
           </div>
           <div className='btn-container'>
              <button className='booking-button'>Reserve a Table</button>
           </div>
        </div>
        <div className="image-container">
           <img src={landingpic}/>
        </div>
      </div>
    </section>
  )
}

export default Hero