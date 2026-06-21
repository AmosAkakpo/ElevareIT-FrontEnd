import React, { useContext } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { LanguageContext } from '../App';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import Teamanimation from '../../Public/animations/Team.json';

export function Hero() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-black">
      {/* background effect */}
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
              {language === 'en' ? (
                <>
                  We create{' '}
                  <span className="text-tealCustom">digital experiences</span>{' '}
                  that matter
                </>
              ) : (
                <>
                  Nous créons des{' '}
                  <span className="text-tealCustom">expériences numériques</span>{' '}
                  qui comptent
                </>
              )}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              {language === 'en'
                ? "We're a creative digital agency specializing in web design, branding, and digital marketing that helps businesses stand out in the digital landscape."
                : "Nous sommes une agence numérique créative spécialisée dans la conception web, le branding et le marketing numérique qui aide les entreprises à se démarquer dans le paysage numérique."}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/services"
                className="bg-purpleAccent text-white px-6 py-3 rounded-md font-medium hover:bg-gray-100 hover:border-purpleAccent hover:border-2 hover:text-gray-700 transition-colors inline-flex items-center justify-center"
              >
                {language === 'en' ? 'Explore Our Services' : 'Explorer nos services'}
                <ArrowRightIcon size={18} className="ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border border-gray-400 text-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors inline-flex items-center justify-center"
              >
                {language === 'en' ? 'Get In Touch' : 'Nous Contacter'}
              </Link>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-tealCustom/20 rounded-full opacity-70 animate-bounce"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-50 animate-blob"></div>
              <Lottie
                animationData={Teamanimation}
                loop
                autoplay
                className="relative z-10 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}