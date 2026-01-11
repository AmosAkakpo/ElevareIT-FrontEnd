import React from 'react'
import { Hero } from '../components/Hero'
import { Testimonials } from '../components/Testimonials'
import { Process } from '../components/Process'
import { AboutUs } from '../components/AboutUs'
import {Faq} from '../components/Faq'

import Typewriter from '../components/Typewriter'
function Home() {
  return (
    <>
      <Hero />
      <AboutUs /> 
      <Process />
      {/* <Testimonials /> */}
      <Faq/>
      
    </>
  )
}

export default Home