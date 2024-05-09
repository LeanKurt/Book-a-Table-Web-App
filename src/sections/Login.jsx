import React from 'react'
import '../login.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  }
  return (
    <section className='login-section'>
    <div className="login-container">
      <form className='login-form'>
        <h2 className='login-h2'>Login</h2>
        <label  className='login-label'for="email">Email:</label>
        <input type="email" name="email" className='login-input' required></input>
        <label className='login-label' for="password">Password:</label>
        <input type="password" name="password" className='login-input'required></input>
        <button className="login-button"onClick={handleClick}>Login</button>
        <div className="login-link">
        <Link to="/signup">
             <p className="login-link">Don't have an account? Sign Up Now</p>
        </Link>
        </div>
      </form>
    </div>
  </section>
  
  )
}

export default Login