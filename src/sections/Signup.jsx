import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../signup.css'
const Signup = () => {
    const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  }
  return (
    <section className='signup-section'>
    <div className="signup-container">
      <form className='login-form'>
        <h2 className='login-h2'>Signup</h2>
        <label  className='login-label'for="email">Name:</label>
        <input type="text" name="text" className='login-input' required></input>
        <label  className='login-label'for="email">Email:</label>
        <input type="email" name="email" className='login-input' required></input>
        <label className='login-label' for="password">Password:</label>
        <input type="password" name="password" className='login-input'required></input>
        <label className='login-label' for="password">Confirm password:</label>
        <input type="password" name="password" className='login-input'required></input>
        <button className="login-button"onClick={handleClick}>Sign Up</button>
        <div className="login-link">
        </div>
      </form>
    </div>
  </section>
  
  )
}

export default Signup