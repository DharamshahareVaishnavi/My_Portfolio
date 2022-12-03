import React, { useEffect } from 'react'
import About from './Pages/About'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import "aos/dist/aos.css";

const App = () => {

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App