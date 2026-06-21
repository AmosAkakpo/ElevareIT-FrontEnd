import React, { useState, useContext } from 'react';
import { LanguageContext } from '../App';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, CheckCircleIcon } from 'lucide-react';

function Contact() {
  const { language } = useContext(LanguageContext);
  const isEn = language === 'en';

  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async send (replace with your actual API call)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
      {/* Page header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {isEn ? 'Get In Touch' : 'Contactez-Nous'}
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          {isEn
            ? "Have a project in mind? We'd love to hear about it. Fill out the form and we'll get back to you shortly."
            : "Vous avez un projet en tête ? Nous adorerions en entendre parler. Remplissez le formulaire et nous vous répondrons rapidement."}
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Contact Info Panel */}
        <div className="lg:col-span-1 bg-tealCustom rounded-2xl p-8 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{isEn ? 'Contact Information' : 'Informations de Contact'}</h2>
            <p className="text-white/70 mb-8 text-sm">
              {isEn ? 'Reach us through any of the channels below.' : 'Contactez-nous via l\'un des canaux ci-dessous.'}
            </p>
            <ul className="space-y-6">
              <li>
                <a href="mailto:info@elevareit.com" className="flex items-start gap-4 hover:text-white/80 transition-colors">
                  <MailIcon size={20} className="flex-shrink-0 mt-0.5" />
                  <span>info@elevareit.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-start gap-4 hover:text-white/80 transition-colors">
                  <PhoneIcon size={20} className="flex-shrink-0 mt-0.5" />
                  <span>+1 234 567 890</span>
                </a>
              </li>
              <li>
                <span className="flex items-start gap-4">
                  <MapPinIcon size={20} className="flex-shrink-0 mt-0.5" />
                  <span>{isEn ? '123 ElevareIT Ave, Tech City' : '123 Avenue ElevareIT, Tech City'}</span>
                </span>
              </li>
            </ul>
          </div>
          {/* Decorative circles */}
          <div className="relative mt-12 h-32">
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-white/10"></div>
            <div className="absolute bottom-8 right-8 w-20 h-20 rounded-full bg-white/10"></div>
          </div>
        </div>

        {/* Form Panel */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <CheckCircleIcon size={56} className="text-tealCustom mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {isEn ? 'Message Sent!' : 'Message Envoyé !'}
              </h3>
              <p className="text-gray-600 mb-6">
                {isEn
                  ? "Thanks for reaching out. We'll get back to you within 24 hours."
                  : "Merci de nous avoir contacté. Nous vous répondrons dans les 24 heures."}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-tealCustom text-white px-6 py-2 rounded-lg hover:bg-tealCustom/80 transition-colors"
              >
                {isEn ? 'Send Another Message' : 'Envoyer un Autre Message'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" autoComplete="off">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                    {isEn ? 'Full Name' : 'Nom Complet'} *
                  </label>
                  <input
                    type="text" id="name" name="name" required
                    value={formState.name} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tealCustom/40 focus:border-tealCustom transition-colors"
                    placeholder={isEn ? 'Your Name' : 'Votre Nom'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                    Email *
                  </label>
                  <input
                    type="email" id="email" name="email" required
                    value={formState.email} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tealCustom/40 focus:border-tealCustom transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="subject">
                  {isEn ? 'Subject' : 'Sujet'} *
                </label>
                <input
                  type="text" id="subject" name="subject" required
                  value={formState.subject} onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tealCustom/40 focus:border-tealCustom transition-colors"
                  placeholder={isEn ? 'What is this about?' : 'De quoi s\'agit-il ?'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                  {isEn ? 'Message' : 'Message'} *
                </label>
                <textarea
                  id="message" name="message" rows={5} required
                  value={formState.message} onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tealCustom/40 focus:border-tealCustom transition-colors resize-none"
                  placeholder={isEn ? 'Tell us about your project...' : 'Parlez-nous de votre projet...'}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-tealCustom text-white font-semibold py-3 rounded-lg hover:bg-tealCustom/80 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <SendIcon size={18} />
                )}
                {loading
                  ? (isEn ? 'Sending...' : 'Envoi...')
                  : (isEn ? 'Send Message' : 'Envoyer le Message')}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;