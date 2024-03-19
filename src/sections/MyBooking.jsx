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
        <div>
            <p>The date today: {dateToday}</p>
        </div>
    )
}

export default MyBooking