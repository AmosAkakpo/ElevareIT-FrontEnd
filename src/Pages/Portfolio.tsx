import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { Portfolio } from '../components/Portfolio';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

function PortfolioPage() {
  const { language } = useContext(LanguageContext);
  const isEn = language === 'en';

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-black text-white pt-20 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-purpleAccent/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-tealCustom/15 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block bg-tealCustom/20 text-tealCustom border border-tealCustom/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
            {isEn ? 'Our Work' : 'Nos Projets'}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-100">
            {isEn ? 'Projects We Are Proud Of' : 'Des Projets Dont Nous Sommes Fiers'}
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {isEn
              ? 'From web platforms to brand identities — here is a selection of our most impactful work.'
              : 'Des plateformes web aux identités de marque — voici une sélection de nos travaux les plus impactants.'}
          </p>
        </div>
      </section>

      {/* Portfolio grid */}
      <Portfolio />

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-4">
          {isEn ? 'Ready to Start Your Project?' : 'Prêt à Démarrer Votre Projet ?'}
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          {isEn
            ? "Let's build something great together. Reach out and tell us about your vision."
            : "Construisons quelque chose de grand ensemble. Contactez-nous et parlez-nous de votre vision."}
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-tealCustom text-white px-8 py-3 rounded-md font-semibold hover:bg-tealCustom/80 transition-colors"
        >
          {isEn ? 'Start a Project' : 'Démarrer un Projet'}
          <ArrowRightIcon size={18} />
        </Link>
      </section>
    </div>
  );
}

export default PortfolioPage;