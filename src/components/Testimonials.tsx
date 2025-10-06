import React, { useContext } from 'react';
import { StarIcon } from 'lucide-react';
import { LanguageContext } from '../App';
export function Testimonials() {
  const {
    language
  } = useContext(LanguageContext);
  const testimonials = {
    en: [{
      quote: 'ElevarIT transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. Their team was professional, responsive, and delivered beyond our expectations.',
      author: 'Sarah Johnson',
      position: 'Marketing Director, TechSolutions Inc.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }, {
      quote: 'Working with ElevarIT on our brand identity was a game-changer for our startup. Their strategic approach and creative vision helped us stand out in a crowded market and attract our ideal customers.',
      author: 'Michael Chen',
      position: 'Founder, GreenLeaf Innovations',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }, {
      quote: 'The digital marketing campaign ElevarIT created for us generated a 200% increase in qualified leads within just three months. Their data-driven approach and creative execution were impressive.',
      author: 'Emily Rodriguez',
      position: 'CMO, Horizon Retail',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }],
    fr: [{
      quote: 'ElevarIT a transformé notre site web dépassé en une plateforme moderne et conviviale qui représente parfaitement notre marque. Leur équipe était professionnelle, réactive et a dépassé nos attentes.',
      author: 'Sarah Johnson',
      position: 'Directrice Marketing, TechSolutions Inc.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }, {
      quote: 'Travailler avec ElevarIT sur notre identité de marque a changé la donne pour notre startup. Leur approche stratégique et leur vision créative nous ont aidés à nous démarquer dans un marché encombré et à attirer nos clients idéaux.',
      author: 'Michael Chen',
      position: 'Fondateur, GreenLeaf Innovations',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }, {
      quote: 'La campagne de marketing digital créée par ElevarIT a généré une augmentation de 200% des leads qualifiés en seulement trois mois. Leur approche axée sur les données et leur exécution créative étaient impressionnantes.',
      author: 'Emily Rodriguez',
      position: 'CMO, Horizon Retail',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }]
  };
  const currentTestimonials = language === 'en' ? testimonials.en : testimonials.fr;
  return <section id="testimonials" className="py-20 bg-softTeal">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Client Testimonials' : 'Témoignages Clients'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'en' ? "Don't just take our word for it. Here's what our clients have to say about working with us." : 'Ne vous fiez pas seulement à notre parole. Voici ce que nos clients disent de leur collaboration avec nous.'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial, index) => <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} size={18} className="text-yellow-400 fill-current" />)}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}