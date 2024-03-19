import React from 'react'
import { MyContext } from './MyContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import '../Mybooking.css'


const MyBooking = () => {
    const { date,  occasion,  peoples,  times,  setting,  } = useContext(MyContext);
    const currentDate = () => {
        let newDate = new Date();
        let year = newDate.getFullYear();
        let currentMonth = newDate.getMonth() + 1;
        let currentDay = newDate.getDate();
        let formattedYear = year.toString();
        let formattedMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth.toString();
        let formattedDay = currentDay < 10 ? `0${currentDay}` : currentDay.toString();
        let dateToday = formattedYear + "-" + formattedMonth + "-" + formattedDay;
        return dateToday; 
    }
    const navigate = useNavigate();
    const backToBooking = () => {
        
        navigate('/');
    }
    return (
        <section className='confirmed'>
            <div className='mybooking-container'>
                <div className="booking-date">
                    <h1>Your Booking was made on {currentDate()}</h1>
                </div>
                <div className="container-all">
               <div className='container-1'>
                <div className="setting-container">
                    <p>Date: {date}</p>
                    <p>Setting: {setting}</p>

                </div>
                <div className="occasion-container">
                    <p>Occassion: {occasion}</p>

                </div>

               </div>
               <div className="container-2">
                <div className="no-people">
                    <p>No. of people: {peoples}</p>

                </div>
                <div className="time-container">
                    <p>Time: {times}</p>

                </div>
               </div>
               </div>

            </div>

            <button onClick={backToBooking}className='booking-button'>Go Back?</button>
        </section>
        
    )
}

export default MyBooking