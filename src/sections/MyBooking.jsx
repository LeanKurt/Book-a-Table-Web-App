import React from 'react'
import { MyContext } from './MyContext';
import { useContext } from 'react';


const MyBooking = () => {
    const { date, setDate, occasion, setOccasion, peoples, setPeoples, times, setTimes, setting, setSetting } = useContext(MyContext);
        let newDate = new Date();
        let year = newDate.getFullYear();
        let currentMonth = newDate.getMonth() + 1;
        let currentDay = newDate.getDate();
        let formattedYear = year.toString();
        let formattedMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth.toString();
        let formattedDay = currentDay < 10 ? `0${currentDay}` : currentDay.toString();
        let dateToday = formattedYear + "-" + formattedMonth + "-" + formattedDay; 
    return (
        <section className='confirmed'>
            <div className='card-container'>
               <div className='container-1'>
                <div className="setting-container">

                </div>
                <div className="occasion-container">

                </div>

               </div>
               <div className="container-2">
                <div className="no-people">

                </div>
                <div className="time-container">
                    
                </div>
               </div>

            </div>
        </section>
        
    )
}

export default MyBooking