import React, { useContext } from 'react';
import { PenToolIcon, GlobeIcon, MegaphoneIcon, ServerIcon, CameraIcon, SearchIcon } from 'lucide-react';
import { LanguageContext } from '../App';
import { useInView } from 'react-intersection-observer';

import Lottie from "lottie-react";
import digitalmarketing from '../../Public/animations/digitalmarketing.json';
import contentcreation from '../../Public/animations/contentcreation.json';
import logocreation from '../../Public/animations/logocreation.json';
import seooptimisation from "../../Public/animations/seooptimisation.json";
import supportmaintenance from '../../Public/animations/supportmaintenance.json';
import websitecreation from '../../Public/animations/websitecreation.json';

// Lazy-loaded service card — animation only plays when scrolled into view
function ServiceCard({ anim, title, description, icon }: {
  anim: object;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '100px' });

  return (
    <div
      ref={ref}
      className="bg-tealCustom p-8 rounded-lg border border-green-500 shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
    >
      <div className="h-32 sm:h-40 md:h-48 mb-4 flex items-center justify-center">
        {inView ? (
          <Lottie
            animationData={anim}
            loop
            autoplay
            className="h-full w-full"
          />
        ) : (
          <div className="h-full w-full" />
        )}
      </div>
      <div className="mb-5">{icon}</div>
      <h3 className="text-xl font-bold text-gray-300 mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export function ServicesList() {
  const { language } = useContext(LanguageContext);

  const services = {
    en: [
      {
        anim: websitecreation,
        title: 'Web Development',
        description: 'Creating modern, responsive websites to present your company, projects, or products with impact.',
        icon: <GlobeIcon size={32} className="text-yellow-400" />,
      },
      {
        anim: logocreation,
        title: 'Logo Creation',
        description: 'Designing unique and professional logos that strengthen your brand\'s identity and recognition.',
        icon: <PenToolIcon size={32} className="text-yellow-400" />,
      },
      {
        anim: digitalmarketing,
        title: 'Digital Marketing',
        description: 'Helping your brand grow with campaigns, visuals, and posters tailored for digital platforms.',
        icon: <MegaphoneIcon size={32} className="text-yellow-400" />,
      },
      {
        anim: seooptimisation,
        title: 'SEO Optimization',
        description: 'Improving search rankings and visibility with proven strategies to drive organic traffic.',
        icon: <SearchIcon size={32} className="text-yellow-400" />,
      },
      {
        anim: contentcreation,
        title: 'Content Creation',
        description: 'Producing high-quality written and visual content to engage your audience and tell your story.',
        icon: <CameraIcon size={32} className="text-yellow-400" />,
      },
      {
        anim: supportmaintenance,
        title: 'Maintenance & Support',
        description: 'Ongoing support and regular updates to ensure your website stays secure, fast, and always online.',
        icon: <ServerIcon size={32} className="text-yellow-400" />,
      },
    ],
    fr: [
      {
        anim: websitecreation,
        title: 'Développement Web',
        description: 'Création de sites web modernes et responsives pour présenter votre entreprise, vos projets ou vos produits avec impact.',
        icon: <GlobeIcon size={32} className="text-yellow-400" />,
      },
      {
        anim: logocreation,
        title: 'Création de Logo',
        description: 'Conception de logos uniques et professionnels qui renforcent l\'identité et la reconnaissance de votre marque.',
        icon: <PenToolIcon size={32} className="text-yellow-400" />,
      },
      {
        anim: digitalmarketing,
        title: 'Marketing Digital',
        description: 'Accompagnement dans la croissance de votre marque avec des campagnes, visuels et affiches adaptés aux plateformes numériques.',
        icon: <MegaphoneIcon size={32} className="text-yellow-400" />,
      },
      {
        anim: seooptimisation,
        title: 'Optimisation SEO',
        description: 'Amélioration du classement et de la visibilité grâce à des stratégies éprouvées pour générer du trafic organique.',
        icon: <SearchIcon size={32} className="text-yellow-400" />,
      },
      {
        anim: contentcreation,
        title: 'Création de Contenu',
        description: 'Production de contenus visuels et écrits de haute qualité pour engager votre audience et raconter votre histoire.',
        icon: <CameraIcon size={32} className="text-yellow-400" />,
      },
      {
        anim: supportmaintenance,
        title: 'Maintenance & Support',
        description: 'Assistance continue et mises à jour régulières pour garantir que votre site reste sécurisé, rapide et toujours en ligne.',
        icon: <ServerIcon size={32} className="text-yellow-400" />,
      },
    ],
  };

  const currentServices = language === 'en' ? services.en : services.fr;

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Our Services' : 'Nos Services'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'en'
              ? 'We offer a comprehensive range of digital services to help your business thrive in the digital landscape.'
              : 'Nous offrons une gamme complète de services numériques pour aider votre entreprise à prospérer dans le paysage numérique.'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service, index) => (
            <ServiceCard
              key={index}
              anim={service.anim}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}