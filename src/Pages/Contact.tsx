
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

function Contact() {
  const { language } = useContext(LanguageContext);
  const isEn = language === 'en';
  return (
    <div className="bg-gradient-to-br from-teal-50 to-white min-h-[80vh] flex flex-col items-center justify-center pt-20 pb-12 px-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-8">
        {/* Contact Info */}
        <div className="flex-1 flex flex-col justify-center mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-teal-700 mb-4">{isEn ? 'Contact Us' : 'Contactez-Nous'}</h2>
          <p className="text-gray-600 mb-6">
            {isEn
              ? 'We would love to hear from you! Fill out the form or reach us via the details below.'
              : 'Nous serions ravis de vous entendre ! Remplissez le formulaire ou contactez-nous via les coordonnées ci-dessous.'}
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold">Email:</span>
              <a href="mailto:info@elevareit.com" className="text-teal-600 hover:underline">info@elevareit.com</a>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold">Phone:</span>
              <a href="tel:+1234567890" className="text-teal-600 hover:underline">+1 234 567 890</a>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold">Location:</span>
              <span>123 ElevareIT Ave, Tech City</span>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <form className="flex-1 flex flex-col gap-4" autoComplete="off">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">{isEn ? 'Name' : 'Nom'}</label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300" placeholder={isEn ? 'Your Name' : 'Votre Nom'} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300" placeholder="you@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">{isEn ? 'Message' : 'Message'}</label>
            <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300" placeholder={isEn ? 'Type your message...' : 'Écrivez votre message...'}></textarea>
          </div>
          <button type="submit" className="mt-2 bg-teal-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-teal-700 transition-all">
            {isEn ? 'Send Message' : 'Envoyer'}
          </button>
        </form>
      </div>
  
    </div>
  );
}

export default Contact;