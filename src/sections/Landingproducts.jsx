import React from 'react'
import { landingProducts, deliveryLogo } from '../Constants';
import '../landing.css';
const Landingproducts = () => {
  return (
     <section className='section1'>
      <div className='heading-container'>
        <div className='section-heading'>
            <h1>This weeks specials!</h1>
        </div>
        <div className='order-button'>
           <button className='order-btn'>Online Menu</button>
        </div>
        </div>
        <div className='products-container'>
          {landingProducts.map((product) => (
            <div className='card-container'>
              <div className='img-container'>
                <img src={product.src} className='img-product' width={195}/>
              </div>
              <div className='product-title'>
                <div className='name'>
                  <p className='title'>{product.title}</p>
                  </div>
                  <div className='product-price'>
                    <p className='price'>{product.price}</p>
                  </div>
              </div>
              <div className='product-description'>
                <p></p>
              </div>
              <div className='bottom'>
                <div className='action'>
                  <p>Order a delivery</p>
                  <img src=''/>
                  </div>
              </div>
            </div>
          ))}
        </div>      
     </section>
  )
}

export default Landingproducts