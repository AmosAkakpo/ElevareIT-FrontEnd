import React, { useContext } from 'react'
import { ServicesList } from '../components/ServicesList'
import { ServiceHero } from '../components/ServiceHero'
import {ProgrammingTools} from '../components/ProgrammingTools'
import TypewriterText from '../components/TypewriterText'
import { LanguageContext } from '../App';

function Services() {
  const {language} = useContext(LanguageContext);

  return (
    <>
      <ServiceHero/>
      <ServicesList/>
     
    </>
  )
}

export default Services