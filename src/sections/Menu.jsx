import React from 'react'
import '../menu.css'
import { menu,deliveryLogo } from '../Constants'
const Menu = () => {
  return (
    <section className='menu-section'>
       <div className='menu-heading'>
        <h1>Our Menu</h1>
       </div>
      <div className='menu-container'>
        {menu.map((product , index) => (
          <div className='menu-card'>
            <div className='img-container'>
              <img key = {index}src={product.src} className='img-product' width={195}/>
            </div>
            <div className='product-title'>
              <div className='name'>
                <p className='title'>{product.title}</p>
                </div>
                <div className='product-price'>
                  <p className='price'>{product.price}</p>
                </div>
            </div>
            <div className='menu-product'>
              <p className='description'>{product.description}</p>
            </div>
            <div className='bottom'>
              <div className='action'>
                <p className='order'>Order a delivery</p>
                </div>
              <div className='delivery-container'>
                {deliveryLogo.map((logo) => (
                  <img src={logo.src}  className='delivery'alt={logo.alt} width={30} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>      
   </section>
  )
}

export default Menu