import React, { useContext } from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, ChevronRightIcon } from 'lucide-react';
import { LanguageContext } from '../App';
export function Footer() {
  const {
    language
  } = useContext(LanguageContext);
  const services = language === 'en' ? ['Brand Identity', 'Web Development', 'UI/UX Design', 'Digital Marketing', 'Content Creation', 'SEO Optimization'] : ['Identité de Marque', 'Développement Web', 'Design UI/UX', 'Marketing Digital', 'Création de Contenu', 'Optimisation SEO'];
  const quickLinks = language === 'en' ? [{
    name: 'About Us',
    href: '#'
  }, {
    name: 'Our Work',
    href: '#portfolio'
  }, {
    name: 'Our Process',
    href: '#process'
  }, {
    name: 'Testimonials',
    href: '#testimonials'
  }, {
    name: 'Contact Us',
    href: '#contact'
  }, {
    name: 'Privacy Policy',
    href: '#'
  }] : [{
    name: 'À Propos de Nous',
    href: '#'
  }, {
    name: 'Nos Projets',
    href: '#portfolio'
  }, {
    name: 'Notre Processus',
    href: '#process'
  }, {
    name: 'Témoignages',
    href: '#testimonials'
  }, {
    name: 'Contactez-Nous',
    href: '#contact'
  }, {
    name: 'Politique de Confidentialité',
    href: '#'
  }];
  return <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">ElevarIT</h3>
            <p className="text-gray-400 mb-6">
              {language === 'en' ? 'We create digital experiences that help businesses grow and succeed in the digital landscape.' : 'Nous créons des expériences numériques qui aident les entreprises à se développer et à réussir dans le paysage numérique.'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">
              {language === 'en' ? 'Services' : 'Services'}
            </h3>
            <ul className="space-y-3">
              {services.map(service => <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRightIcon size={16} className="mr-2" />
                    {service}
                  </a>
                </li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">
              {language === 'en' ? 'Quick Links' : 'Liens Rapides'}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(link => <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRightIcon size={16} className="mr-2" />
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">
              {language === 'en' ? 'Newsletter' : 'Infolettre'}
            </h3>
            <p className="text-gray-400 mb-4">
              {language === 'en' ? 'Subscribe to our newsletter to receive updates and insights.' : 'Abonnez-vous à notre infolettre pour recevoir nos mises à jour et analyses.'}
            </p>
            <form className="flex">
              <input type="email" placeholder={language === 'en' ? 'Your email' : 'Votre email'} className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-900" />
              <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded-r-md hover:bg-emerald-700 transition-colors">
                {language === 'en' ? 'Subscribe' : "S'abonner"}
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ElevarIT.{' '}
              {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {language === 'en' ? 'Terms of Service' : "Conditions d'Utilisation"}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {language === 'en' ? 'Privacy Policy' : 'Politique de Confidentialité'}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {language === 'en' ? 'Cookie Policy' : 'Politique des Cookies'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}