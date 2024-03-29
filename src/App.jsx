import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Blog from './components/Blog'
import Pricing from './components/Pricing'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Projects from './components/Projects'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return(
    <>
      <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <AboutUs/>
        <Blog/>
        <Projects/>
        <Pricing/>
        <FAQ/>
        <Contact/>  
        <Footer/>  
      </div>
     
    
   
    </>
  ) 
};

export default App
