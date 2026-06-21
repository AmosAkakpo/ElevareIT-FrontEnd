import React from 'react'
import { Hero } from '../components/Hero'
import { Testimonials } from '../components/Testimonials'
import { Process } from '../components/Process'
import { AboutUs } from '../components/AboutUs'
import { Faq } from '../components/Faq'

function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Process />
      <Testimonials />
      <Faq />
    </>
  )
}

export default Home