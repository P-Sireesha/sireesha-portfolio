import { useState } from 'react'
import './App.css'
import Hero from './Sections/Hero'
import Footer from './Sections/Footer'
import Skills from './Sections/Skills'
import Contact from './Sections/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Hero />
    <Skills />
    <Contact />
    <Footer />

    


   
  
      
    </>
  )
}

export default App
