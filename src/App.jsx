import { useState } from 'react'
import Nav from './sections/Nav';
import Hero from './sections/Hero';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Nav/>
      <section>
        <Hero />
      </section>

    </main>
    
  )
}

export default App
