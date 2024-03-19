import React from 'react'
import '../registration.css'

import { useNavigate } from 'react-router-dom'



const ConfirmedBooking = () => {
    const navigate = useNavigate();
  const checkBooking = () => {
       navigate('/mybooking');
  }
  return (
    <section className='confirmed'>
      <div>
        <h1>Booking has been confirmed</h1>
      </div>
      <button  onClick ={checkBooking}className='booking-button'>Check your Booking  -&gt;</button>

    
    </section>

    

  )
}

export default ConfirmedBooking