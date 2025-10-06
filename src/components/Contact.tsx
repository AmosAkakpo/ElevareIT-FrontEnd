import React, { useContext } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
import { LanguageContext } from '../App';
export function Contact() {
  const {
    language
  } = useContext(LanguageContext);
  return <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Get In Touch' : 'Contactez-Nous'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'en' ? 'Ready to start your project? Contact us today for a free consultation and quote.' : "Prêt à démarrer votre projet ? Contactez-nous dès aujourd'hui pour une consultation gratuite et un devis."}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {language === 'en' ? 'Contact Information' : 'Informations de Contact'}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPinIcon size={20} className="text-emerald-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">
                      {language === 'en' ? 'Office Address' : 'Adresse du Bureau'}
                    </h4>
                    <p className="text-gray-600 mt-1">
                      123 Creative Street
                      <br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <PhoneIcon size={20} className="text-emerald-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">
                      {language === 'en' ? 'Phone' : 'Téléphone'}
                    </h4>
                    <p className="text-gray-600 mt-1">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MailIcon size={20} className="text-emerald-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600 mt-1">hello@elevarit.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <ClockIcon size={20} className="text-emerald-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">
                      {language === 'en' ? 'Working Hours' : "Heures d'Ouverture"}
                    </h4>
                    <p className="text-gray-600 mt-1">
                      {language === 'en' ? 'Monday - Friday: 9am - 5pm' : 'Lundi - Vendredi: 9h - 17h'}
                      <br />
                      {language === 'en' ? 'Weekend: Closed' : 'Weekend: Fermé'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <form className="bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Your Name' : 'Votre Nom'}
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder={language === 'en' ? 'John Doe' : 'Jean Dupont'} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Email Address' : 'Adresse Email'}
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder={language === 'en' ? 'john@example.com' : 'jean@exemple.com'} />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'en' ? 'Subject' : 'Sujet'}
                </label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder={language === 'en' ? 'Project Inquiry' : 'Demande de Projet'} />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'en' ? 'Message' : 'Message'}
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder={language === 'en' ? 'Tell us about your project...' : 'Parlez-nous de votre projet...'}></textarea>
              </div>
              <button type="submit" className="w-full bg-emerald-600 text-white font-medium py-3 px-6 rounded-md hover:bg-emerald-700 transition-colors">
                {language === 'en' ? 'Send Message' : 'Envoyer le Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
}