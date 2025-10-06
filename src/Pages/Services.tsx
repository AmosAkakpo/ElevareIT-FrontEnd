import React from 'react'
import { ServicesList } from '../components/ServicesList'
import { ServiceHero } from '../components/ServiceHero'
import {ProgrammingTools} from '../components/ProgrammingTools'
import TypewriterText from '../components/TypewriterText'
function Services() {
  return (
    <>
      <ServiceHero/>
      <ServicesList/>
      <ProgrammingTools/>
      <TypewriterText/>
    </>
  )
}

export default Services