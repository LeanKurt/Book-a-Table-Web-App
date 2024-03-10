import React from 'react'
import { useState } from 'react'
import '../registration.css'
import { glass, people, time } from '../assets/images';

const Registration = () => {
  const [toggle, setToggle] = useState(false);
  const [ toggle2, setToggle2] = useState(false);
  const [ toggle3, setToggle3] = useState(false)
  const [occasion, setOccasion] = useState("Occasion");
  const [peoples, setPeoples] = useState("No. of Diners");
  const [ times, setTimes] = useState("Select Time")
  const [fill, setFill] = useState(false);
  const [fill2, setFill2] = useState(false);
  const [fill3, setFill3] = useState(false);
  

  const toggleButton = () => {
    setToggle(!toggle);
  };

  const toggleButton2 = () => {
    setToggle2(!toggle2);
  };

  const toggleButton3 = () => {
    setToggle3(!toggle3);
  };

  const handleOption = (value) => {
    setOccasion(value);
    setToggle(false)
    setFill(true)
  }

  const handlePeople = (value) => {
     setPeoples(value)
     setToggle2(false)
     setFill2(true)
  }

  const handleTime = (value) => {
    setTimes(value);
    setToggle3(false);
    setFill3(true);
  }

  return (
    <section className='registration-form'>
      <div className='registration-container'>
        <div className="reservation">
          <div className="heading">
            <h1>Registration</h1>
          </div>
          <div className='indoor'>
            <label htmlFor='indoor'>Indoor Seating</label>
            <input type='radio' id='indoor' name='indoor'/>
          </div>
          <p>Occasion</p>
          <div onClick={toggleButton} className={`button-container ${fill ? "filled" : ""}`}>
            <div className="formlogo-container">
              <img src={glass} className='form-logo' alt="Glass" />
            </div>
            <div className='occassion'>
              <p className={fill ? "white" : "normal"}>{occasion}</p>
            </div>
            <div className='chevron'><p>{toggle ? "^" : "v"}</p></div>
          </div>
          <div className={`option-container ${toggle ? "open" : ""}`}>
            <div className='options' onClick={() => handleOption("Birthday")}><p>Birthday</p></div>
            <div className='options' onClick={() => handleOption("Anniversary")}><p>Anniversary</p></div>
            <div className='options' onClick={() => handleOption("Wedding")}><p>Wedding</p></div>
          </div>
        </div>
        <div className="reservation2">
        <div className='outdoor'>
            <label htmlFor='Outdoor'>Outdoor Seating</label>
            <input type='radio' id='outdoor' name='outdoor'/>
          </div>
          <div className='reservation-container'>
          <p>Number of Diners</p>
        <div onClick={toggleButton2} className={`button-container2 ${fill2 ? "filled" : ""}`}>
            <div className="formlogo-container">
              <img src={people} className='form-logo' alt="Glass" />
            </div>
            <div className='occassion'>
              <p className={fill2 ? "white" : "normal"}>{peoples}</p>
            </div>
            <div className='chevron'><p>{toggle2 ? "^" : "v"}</p></div>
          </div>
          <div className={`column-container ${toggle2 ? "open" : ""}`}>
             <div className='column1'>
               <div onClick={() => handlePeople("1 Diner")}className='people-option'><p>1 Diner</p></div>
               <div onClick={() => handlePeople("3 Diner")}className='people-option'><p>3 Diner</p></div>
               <div onClick={() => handlePeople("5 Diner")}className='people-option'><p>5 Diner</p></div>
               <div onClick={() => handlePeople("7 Diner")}className='people-option'><p>7 Diner</p></div>
               <div onClick={() => handlePeople("9 Diner")}className='people-option'><p>9 Diner</p></div>
               
                
             </div>
             <div className="column2">
             <div onClick={() => handlePeople("2 Diner")}className='people-option'><p>2 Diner</p></div>
               <div onClick={() => handlePeople("4 Diner")}className='people-option'><p>4 Diner</p></div>
               <div onClick={() => handlePeople("6 Diner")}className='people-option'><p>6 Diner</p></div>
               <div onClick={() => handlePeople("8 Diner")}className='people-option'><p>8 Diner</p></div>
               <div onClick={() => handlePeople("10 Diner")}className='people-option'><p>10 Diner</p></div>
 
             </div>
          </div>
          </div>

          <div className='reservation-container'>
          <p>Time</p>
          <div onClick={toggleButton3} className={`button-container3 ${fill3 ? "filled" : ""}`}>
            <div className="formlogo-container">
              <img src={time} className='form-logo' alt="Glass" />
            </div>
            <div className='occassion'>
              <p className={fill3 ? "white" : "normal"}>{times}</p>
            </div>
            <div className='chevron'><p>{toggle3 ? "^" : "v"}</p></div>
          </div>
          <div className={`column-container ${toggle3 ? "open" : ""}`}>
            <div className='column1'>
              <div onClick={() => handleTime("5:00 pm")}className="time-option">5:00 pm</div>
              <div onClick={() => handleTime("7:00 pm")}className="time-option">7:00 pm</div>
              <div onClick={() => handleTime("9:00 pm")}className="time-option">9:00 pm</div>
            </div>
            <div className='column2'>
            <div onClick={() => handleTime("6:00 pm")}className="time-option">6:00 pm</div>
              <div onClick={() => handleTime("8:00 pm")}className="time-option">8:00 pm</div>
              <div onClick={() => handleTime("10:00 pm")}className="time-option">10:00 pm</div>
            </div>
          </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Registration