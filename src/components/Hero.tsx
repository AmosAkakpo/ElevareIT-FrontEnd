import React, { useContext } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { LanguageContext } from '../App';
import Lottie from "lottie-react";
import Teamanimation from '../../Public/animations/Team.json'
export function Hero() {
  const {
    language
  } = useContext(LanguageContext);
  return <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-black"> 
  {/* bg-gradient-to-r from-black via-purpleAccent to-tealCustom*/}

      {/* background effect  */}
      <div className="absolute inset-0 pointer-events-none">
        {/* floating blobs */}
        <div className="absolute -top-32 -left-20 w-[400px] h-[400px] bg-purpleAccent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-tealCustom/20 rounded-full blur-3xl animate-pulse"></div>

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>


      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 mb-6 leading-tight">
              {language === 'en' ? <>
                  We create{' '}
                  <span className="text-tealCustom">digital experiences</span>{' '}
                  that matter
                </> : <>
                  Nous créons des{' '}
                  <span className="text-tealCustom">
                    expériences numériques
                  </span>{' '}
                  qui comptent
                </>}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              {language === 'en' ? "We're a creative digital agency specializing in web design, branding, and digital marketing that helps businesses stand out in the digital landscape." : "Nous sommes une agence numérique créative spécialisée dans la conception web, l'image de marque et le marketing numérique qui aide les entreprises à se démarquer dans le paysage numérique."}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/services" className="bg-purpleAccent text-white px-6 py-3 rounded-md font-medium hover:bg-gray-100 hover:border-purpleAccent hover:border-2 hover:text-gray-700 transition-colors inline-flex items-center justify-center">
                {language === 'en' ? 'Explore Our Services' : 'Explorer nos services'}
                <ArrowRightIcon size={18} className="ml-2" />
              </a>
              {/* <a href="/portfolio" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center">
                {language === 'en' ? 'View Our Work' : 'Voir nos projets'}
              </a> */}

              {/* <a href="/portfolio" className="mt-20 group px-6 py-3 font-medium cursor-pointer relative font-normal hover:border hover:rounded-md hover:border-gray-300 flex items-center justify-center bg-transparent
                  text-gray-700 h-[50px] sm:h-auto w-full sm:w-[150px]  overflow-hidden   transition-allduration-100 ">
                <span className="group-hover:w-full absolute left-0 h-full w-5  border-y border-l rounded-l-lg  border-gray-300 hover:border-none transition-all duration-500 ">
                </span>
                <p className="group-hover:opacity-0 group-hover:translate-x-[-100%] text-gray-100 absolute translate-x-0 transition-all  
                    duration-200">{language === 'en' ? 'View Our Work' : 'Voir nos projets'}</p>
                <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute text-gray-100 translate-x-full opacity-0  transition-all duration-200 rounded-md ">
                   {language === 'en' ? 'Click Now →' : 'Clickez ici →'}
                </span>
                <span className="group-hover:w-full absolute right-0 h-full w-5  border-y border-r rounded-r-lg  border-gray-300 hover:border-none transition-all duration-500 ">
                </span>
              </a> */}

        
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-200 rounded-full opacity-70 animate-bounce"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-50 animate-blob"></div>

              {/* <img src="https://images.unsplash.com/photo-1653566031535-bcf33e1c2893?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Digital agency team working" className="relative z-10 rounded-lg shadow-xl w-full object-cover" /> */}
                <Lottie
                  animationData={Teamanimation}
                  loop
                  autoplay
                  className="relative z-10 h-full w-full object-cover"
                />
            </div>
          </div>
        </div>

        {/* trusted company section to rework */}
        {/* <div className="mt-20 md:mt-32">
          <p className="text-center text-gray-500 mb-8">
            {language === 'en' ? 'Trusted by innovative companies' : 'Approuvé par des entreprises innovantes'}
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {['Google', 'Microsoft', 'Airbnb', 'Spotify', 'Slack'].map(brand => <div key={brand} className="text-xl font-bold text-gray-400">
                  {brand}
                </div>)}
          </div>
        </div> */}

      </div>
      
    </section>;
}