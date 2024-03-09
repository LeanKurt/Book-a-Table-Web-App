import { useState } from 'react'
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Landingproducts from './sections/Landingproducts';
import Footer from './sections/Footer';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Nav/>
      <section className='section1'>
       <Hero />
      </section>
      <section className='section1'>
        <Landingproducts />
      </section>
      <Footer />
    </main>
    
  )
}

export default App
