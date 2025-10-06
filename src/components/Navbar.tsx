import React, { useEffect, useState, useContext } from 'react';
import { MenuIcon, XIcon, GlobeIcon } from 'lucide-react';
import { LanguageContext } from '../App';
import { useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const location = useLocation();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pages where the transparent → scroll behavior should apply
  const dynamicPages = ['/', '/services'];
  const isDynamicPage = dynamicPages.includes(location.pathname);

  // Determine if navbar should be transparent or white
  const showTransparent = isDynamicPage && !scrolled;

  const navbarBg = showTransparent ? 'bg-transparent' : 'bg-white shadow-md';
  const textColor = showTransparent ? 'text-gray-200' : 'text-gray-700';
  const logoRightColor = showTransparent ? 'text-gray-100' : 'text-gray-900';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${navbarBg} ${showTransparent ? 'py-5' : 'py-3'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-tealCustom">
            Elevar<span className={logoRightColor}>IT</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { href: '/', en: 'Home', fr: 'Acceuil' },
              { href: '/services', en: 'Services', fr: 'Services' },
              { href: '/portfolio', en: 'Work', fr: 'Projets' },
              { href: '/blog', en: 'Testimonials', fr: 'Témoignages' },
              { href: '/contact', en: 'Contact', fr: 'Contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${textColor} hover:text-tealCustom font-medium transition-colors`}
              >
                {language === 'en' ? link.en : link.fr}
              </a>
            ))}
          </nav>

          {/* Language toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`flex items-center ${textColor} hover:text-tealCustom font-medium transition-colors mr-4`}
            >
              <GlobeIcon size={16} className="mr-1" />
              {language === 'en' ? 'FR' : 'EN'}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleLanguage}
              className={`flex items-center ${textColor} hover:text-tealCustom font-medium transition-colors mr-4`}
            >
              <GlobeIcon size={16} className="mr-1" />
              {language === 'en' ? 'FR' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColor} hover:text-tealCustom focus:outline-none`}
            >
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden fixed top-[64px] left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto font-tamoha">
          <div className="px-6 py-8 flex flex-col space-y-6">
            {[
              { href: '/', en: 'Home', fr: 'Acceuil' },
              { href: '/services', en: 'Services', fr: 'Services' },
              { href: '/portfolio', en: 'Work', fr: 'Projets' },
              { href: '/blog', en: 'Blog', fr: 'Blog' },
              { href: '/contact', en: 'Contact', fr: 'Contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-tealCustom font-medium text-lg border-b-2 border-tealCustom"
                onClick={() => setIsOpen(false)}
              >
                {language === 'en' ? link.en : link.fr}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
