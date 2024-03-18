import React from 'react'
import { useState, useContext } from 'react'
import { MyContext } from './MyContext';
import { glass, people, time } from '../assets/images';
import { Link, useNavigate } from 'react-router-dom';


const Reservation = () => {

 
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const { date, setDate, occasion, setOccasion, peoples, setPeoples,times , setTimes, setting , setSetting } = useContext(MyContext);
  const [fill, setFill] = useState(false);
  const [fill2, setFill2] = useState(false);
  const [fill3, setFill3] = useState(false);
  const [fill4, setFill4] = useState(false);
  const navigate = useNavigate();
 
  const handleDate = (event) => {
    setDate(event.target.value);
    setFill4(true);
  }

  const handleRadio = (event) => {
    setSetting(event.target.value);
  }
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
    setToggle(false);
    setFill(true);
  };

  const handlePeople = (value) => {
    setPeoples(value)
    setToggle2(false)
    setFill2(true)
  };

  const handleTime = (value) => {
    setTimes(value);
    setToggle3(false);
    setFill3(true);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if( date !== '' && occasion !== 'Occasion' && peoples !== 'No. of Diners' && times !== 'Select Time' && setting !== '') {
      navigate('/confirmed');
      alert("Thank you for booking");
    }
  }


  const ErrorMessage = () => {
    return (
      <div>
        <p className='error'> *Please fill in all required field</p>
      </div>

    )
  }

  const validateInput = () => {
    return (
      date !== '' && occasion !== 'Occasion' && peoples !== 'No. of Diners' && times !== 'Select Time' && setting !== ''
    );
  }

  return (
    <section className='registration-form'>
      <form onSubmit={handleSubmit}>
        <div className='registration-container'>
          <div className='row1'>
          <div className="reservation">
            <div className="heading">
              <h1>Reservation</h1>
            </div>
            <div className='indoor'>
              <label htmlFor='indoor'>Indoor Seating</label>
              <input type='radio' value="Indoor" onChange={handleRadio} checked={setting === "Indoor"} disabled={setting === "Outdoor"} id='indoor' name='indoor' />
            </div>
            <div className='date-container'>
              <label htmlFor="date">Date</label>
              <input type='date' name='date' id='date' onChange={handleDate} className={`dateset ${fill4 ? "filled" : ""}`}></input>
            </div>
            <div className="reservation-container">
              <p className='occa'>Occasion</p>
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
          </div>
          <div className="reservation2">
            <div className='outdoor'>
              <label htmlFor='Outdoor'>Outdoor Seating</label>
              <input type='radio' id='outdoor' name='outdoor' value="Outdoor" checked={setting === "Outdoor"} disabled={setting === "Indoor"} onChange={handleOption} />
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
                  <div onClick={() => handlePeople("1 Diner")} className='people-option'><p>1 Diner</p></div>
                  <div onClick={() => handlePeople("3 Diner")} className='people-option'><p>3 Diner</p></div>
                  <div onClick={() => handlePeople("5 Diner")} className='people-option'><p>5 Diner</p></div>
                  <div onClick={() => handlePeople("7 Diner")} className='people-option'><p>7 Diner</p></div>
                  <div onClick={() => handlePeople("9 Diner")} className='people-option'><p>9 Diner</p></div>
                </div>
                <div className="column2">
                  <div onClick={() => handlePeople("2 Diner")} className='people-option'><p>2 Diner</p></div>
                  <div onClick={() => handlePeople("4 Diner")} className='people-option'><p>4 Diner</p></div>
                  <div onClick={() => handlePeople("6 Diner")} className='people-option'><p>6 Diner</p></div>
                  <div onClick={() => handlePeople("8 Diner")} className='people-option'><p>8 Diner</p></div>
                  <div onClick={() => handlePeople("10 Diner")} className='people-option'><p>10 Diner</p></div>
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
                  <div onClick={() => handleTime("5:00 pm")} className="time-option">5:00 pm</div>
                  <div onClick={() => handleTime("7:00 pm")} className="time-option">7:00 pm</div>
                  <div onClick={() => handleTime("9:00 pm")} className="time-option">9:00 pm</div>
                </div>
                <div className='column2'>
                  <div onClick={() => handleTime("6:00 pm")} className="time-option">6:00 pm</div>
                  <div onClick={() => handleTime("8:00 pm")} className="time-option">8:00 pm</div>
                  <div onClick={() => handleTime("10:00 pm")} className="time-option">10:00 pm</div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className='submit-container'>
         <button type="submit" className={!validateInput() ? "disabled" : "booking-button"} disabled={!validateInput()}>Reserve a Table</button>
          {!validateInput() ? (
            <ErrorMessage />
          ) : null}
        </div>
        </div>
      </form>
    </section>
  )
}

export default Reservation