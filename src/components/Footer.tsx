import React, { useContext } from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, ChevronRightIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { LanguageContext } from '../App';
import { NavLink } from 'react-router-dom';

export function Footer() {
  const { language } = useContext(LanguageContext);

  const services = {
    en: [
      { name: 'Web Development', href: '/services' },
      { name: 'Logo Creation', href: '/services' },
      { name: 'Digital Marketing', href: '/services' },
      { name: 'SEO Optimization', href: '/services' },
      { name: 'Content Creation', href: '/services' },
      { name: 'Maintenance & Support', href: '/services' },
    ],
    fr: [
      { name: 'Développement Web', href: '/services' },
      { name: 'Création de Logo', href: '/services' },
      { name: 'Marketing Digital', href: '/services' },
      { name: 'Optimisation SEO', href: '/services' },
      { name: 'Création de Contenu', href: '/services' },
      { name: 'Maintenance & Support', href: '/services' },
    ],
  };

  const quickLinks = {
    en: [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact Us', href: '/contact' },
    ],
    fr: [
      { name: 'Accueil', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contactez-Nous', href: '/contact' },
    ],
  };

  const currentServices = language === 'en' ? services.en : services.fr;
  const currentLinks = language === 'en' ? quickLinks.en : quickLinks.fr;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold text-tealCustom mb-4">
              Elevare<span className="text-white">IT</span>
            </h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              {language === 'en'
                ? 'We create digital experiences that help businesses grow and succeed in the digital landscape.'
                : 'Nous créons des expériences numériques qui aident les entreprises à se développer et à réussir dans le paysage numérique.'}
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-tealCustom hover:text-white transition-colors">
                <FacebookIcon size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-tealCustom hover:text-white transition-colors">
                <TwitterIcon size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-tealCustom hover:text-white transition-colors">
                <InstagramIcon size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-tealCustom hover:text-white transition-colors">
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">
              {language === 'en' ? 'Services' : 'Services'}
            </h4>
            <ul className="space-y-3">
              {currentServices.map((service) => (
                <li key={service.name}>
                  <NavLink to={service.href}
                    className="text-gray-400 hover:text-tealCustom transition-colors flex items-center text-sm">
                    <ChevronRightIcon size={14} className="mr-2 flex-shrink-0" />
                    {service.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">
              {language === 'en' ? 'Quick Links' : 'Liens Rapides'}
            </h4>
            <ul className="space-y-3">
              {currentLinks.map((link) => (
                <li key={link.name}>
                  <NavLink to={link.href}
                    className="text-gray-400 hover:text-tealCustom transition-colors flex items-center text-sm">
                    <ChevronRightIcon size={14} className="mr-2 flex-shrink-0" />
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">
              {language === 'en' ? 'Contact Us' : 'Contactez-Nous'}
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@elevareit.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-tealCustom transition-colors text-sm">
                  <MailIcon size={16} className="flex-shrink-0 mt-0.5" />
                  info@elevareit.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890"
                  className="flex items-start gap-3 text-gray-400 hover:text-tealCustom transition-colors text-sm">
                  <PhoneIcon size={16} className="flex-shrink-0 mt-0.5" />
                  +1 234 567 890
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPinIcon size={16} className="flex-shrink-0 mt-0.5" />
                  {language === 'en' ? '123 ElevareIT Ave, Tech City' : '123 Avenue ElevareIT, Tech City'}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} ElevareIT.{' '}
              {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                {language === 'en' ? 'Terms of Service' : "Conditions d'Utilisation"}
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                {language === 'en' ? 'Privacy Policy' : 'Politique de Confidentialité'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}