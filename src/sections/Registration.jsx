import React from 'react'
import { useState } from 'react'
import '../registration.css'
import { glass } from '../assets/images';

const Registration = () => {
  const [toggle, setToggle] = useState(false);
  const [occasion, setOccasion] = useState("Occasion")
  const [fill, setFill] = useState(false)

  const toggleButton = () => {
      setToggle(!toggle);
  };

  const handleOption = (value) => {
      setOccasion(value);
      setToggle(false)
      setFill(true)
  }


  return (
    <section className='registration-form'>
       <div className='registration-container'>
          <div className="reservation">
            <div className="heading">
              <h1>Registration</h1>
            </div>
                <div onClick={toggleButton} className={`button-container ${fill ? "filled": ""}`}>
                    <div className="formlogo-container">
                        <img src={glass} className='form-logo' alt="Glass" />
                    </div>
                    <div className='occassion'>
                        <p className={fill ? "white" : "normal"}>{occasion}</p>
                    </div>
                    <div className='chevron'><p>{toggle ? "^" : "v" }</p></div>
                </div>
                <div className={`option-container ${toggle ? "open" : ""}`}>
                    <div className='options' onClick={() => handleOption("Birthday")}><p>Birthday</p></div>
                    <div className='options' onClick={() => handleOption("Anniversary")}><p>Anniversary</p></div>
                    <div className='options' onClick={() => handleOption("Wedding")}><p>Wedding</p></div>
                </div>  
          </div>
       <div className="reservation2">
          
       </div>
      </div>
    </section>
  )
}

export default Registration