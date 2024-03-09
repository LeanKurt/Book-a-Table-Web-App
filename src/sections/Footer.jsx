import React from 'react'
import { Littlelemon } from '../assets/images'
import '../footer.css'

const footer = () => {
  return (
    <footer>
      <section className='section2'>
        <div className='brand'>
          <div className='logo-container'>
              <img src={Littlelemon} className='img-inside'/>
          </div>

          <div className="des-container">
             <p>We are a family owned Mediterrenean restaurant,
              focused on traditional recipes served with a modern twist.
             </p>
          </div>
        </div>

        <div className='links'>
        <p className='heading'>Important Links</p>
        <p>Home</p>
        <p>About</p>
        <p>Menu</p>
        <p>Reservation</p>
        <p>Login</p>
           
        </div>

        <div className='contact'>
        <p className='heading'>Contacts</p>
        <p>Adress:<br></br>
        123 Towncity, USA</p>
        <p>Phone:<br></br>
        +63 968 265 6762</p>
        <p>Email:<br></br>
        little@lemon.com</p>
        </div>
        

        <div className='social-media'>
        <p className='heading'>Social Media</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>

        </div>
      </section>
    </footer>
  )
}

export default footer