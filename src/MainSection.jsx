import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import ServiceSec from './ServiceSec'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Testimonals from './Testimonal'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'

function MainSection() {
  return (
   <>
   <Navbar/>
   <HeroSection/>
   <ServiceSec/>
   <About/>
   <Services/>
   <Portfolio/>
   <Testimonals/>
   <Team/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default MainSection
