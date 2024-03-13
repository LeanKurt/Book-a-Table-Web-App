import React from 'react';
import Reservation from './Reservation';
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import '../registration.css';
 
const Booking = () => {


      
  return (
     <section className='booking-form'>
       <Reservation/>
     </section>
  )
}

export default Booking