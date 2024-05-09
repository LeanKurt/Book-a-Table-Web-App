import React from 'react'
import '../About.css'
import { Link } from 'react-router-dom'
import { chef } from '../assets/images'
const About = () => {
  return (
    <section className='about-section'>
      <div className='main-container2'>
        <div className='about-container'>

        <div className='text-about'>
           <div className='text-title'>
              <h1 className='about-title'>About us</h1>
           </div>
           <div className='about-description'>
              <p>Welcome to little lemon, where every meal is a reflection of culture and tradition. 
                Nestled in the heart of Chicago. Little lemon invites
                you on a gastronomic journey through  vibrant flavors.
              </p>
              <div className='btn-container'>
              <Link to ="/registration"><button className='booking-button2'>Make your reservation now</button></Link>
           </div>
           </div>
        </div>
        <div className='about-image'>
            <img src={chef} className='img-inside'></img>
        </div>
        </div>

      </div>
  
    </section>
  )
}

export default About