import React, { useContext } from 'react';
import { MessageSquareIcon, LightbulbIcon, PencilRulerIcon, CodeIcon, CheckCircleIcon, BarChart2Icon } from 'lucide-react';
import { LanguageContext } from '../App';

import Lottie from "lottie-react";

import InfiLoaderAnimation from "../../Public/animations/InfinityLoader.json";


export function Process() {
  const {
    language
  } = useContext(LanguageContext);
  const steps = {
    en: [
    {
      icon: <MessageSquareIcon size={24} className="text-white" />,
      title: "Consultation",
      description:
        "We begin by sitting down with you to fully understand your business goals, target audience, and overall vision. During this stage, we encourage open conversation and idea sharing so we can uncover the real challenges and opportunities. This foundation helps us set clear expectations and ensures we are aligned from the very start."
    },
    {
      icon: <LightbulbIcon size={24} className="text-white" />,
      title: "Strategy",
      description:
        "Once we understand your needs, we craft a tailored strategy that maps out the entire project. This includes defining objectives, identifying the right digital tools, and creating a roadmap that balances creativity with practicality. Our goal is to give you a clear picture of how we’ll move forward to achieve lasting results."
    },
    {
      icon: <PencilRulerIcon size={24} className="text-white" />,
      title: "Design",
      description:
        "Our design team transforms ideas into visually engaging concepts that reflect your brand identity. We carefully consider user experience, accessibility, and aesthetics to create designs that both inspire and perform. Every detail, from colors to typography, is chosen to communicate your message effectively."
    },
    {
      icon: <CodeIcon size={24} className="text-white" />,
      title: "Development",
      description:
        "With the designs approved, our developers bring your project to life using modern frameworks and best practices. We focus on writing clean, scalable, and secure code so your digital solution performs reliably across all devices. Collaboration and transparency are key here—we keep you updated at every milestone."
    },
    {
      icon: <CheckCircleIcon size={24} className="text-white" />,
      title: "Testing",
      description:
        "Before launch, we rigorously test every feature to ensure flawless functionality and performance. This includes cross-browser checks, responsiveness testing, and quality assurance to catch any issues early. Our priority is to deliver a solution that is both stable and enjoyable for your users."
    },
    {
      icon: <BarChart2Icon size={24} className="text-white" />,
      title: "Launch & Support",
      description:
        "Once everything is ready, we launch your project with careful attention to detail. But our work doesn’t stop there—we provide continuous support, monitoring, and optimization to keep your solution performing at its best. This long-term partnership ensures your digital presence grows alongside your business."
    }
  ],
    fr: [
    {
      icon: <MessageSquareIcon size={24} className="text-white" />,
      title: "Consultation",
      description:
        "Nous commençons par échanger avec vous afin de bien comprendre vos objectifs, votre public cible et votre vision globale. À cette étape, nous favorisons une discussion ouverte pour identifier clairement vos défis et vos opportunités. Cette base solide nous permet d’établir des attentes claires et de nous assurer que nous sommes alignés dès le départ."
    },
    {
      icon: <LightbulbIcon size={24} className="text-white" />,
      title: "Stratégie",
      description:
        "Une fois vos besoins identifiés, nous élaborons une stratégie sur mesure qui trace la feuille de route du projet. Cela inclut la définition des objectifs, le choix des bons outils numériques et la création d’un plan équilibrant créativité et efficacité. Notre objectif est de vous offrir une vision claire de la manière dont nous avancerons pour obtenir des résultats durables."
    },
    {
      icon: <PencilRulerIcon size={24} className="text-white" />,
      title: "Design",
      description:
        "Notre équipe de design transforme les idées en concepts visuellement percutants qui reflètent l’identité de votre marque. Nous accordons une attention particulière à l’expérience utilisateur, à l’accessibilité et à l’esthétique afin de concevoir des interfaces à la fois inspirantes et performantes. Chaque détail, des couleurs à la typographie, est choisi pour communiquer efficacement votre message."
    },
    {
      icon: <CodeIcon size={24} className="text-white" />,
      title: "Développement",
      description:
        "Une fois les maquettes validées, nos développeurs donnent vie à votre projet en utilisant des technologies modernes et des pratiques éprouvées. Nous écrivons un code propre, sécurisé et évolutif pour garantir une performance optimale sur tous les appareils. La collaboration et la transparence sont essentielles : nous vous tenons informés à chaque étape importante."
    },
    {
      icon: <CheckCircleIcon size={24} className="text-white" />,
      title: "Tests",
      description:
        "Avant le lancement, nous effectuons une batterie de tests rigoureux afin de vérifier la fonctionnalité et les performances du projet. Cela comprend des contrôles multi-navigateurs, des tests de réactivité et une assurance qualité approfondie pour corriger toute anomalie. Notre priorité est de livrer une solution stable et agréable pour vos utilisateurs."
    },
    {
      icon: <BarChart2Icon size={24} className="text-white" />,
      title: "Lancement & Support",
      description:
        "Lorsque tout est prêt, nous procédons au lancement de votre projet avec une attention particulière aux détails. Mais notre accompagnement ne s’arrête pas là : nous assurons un suivi continu, une optimisation régulière et une assistance proactive. Ce partenariat à long terme garantit que votre présence numérique évolue en même temps que votre entreprise."
    }
  ]
  };
  const currentSteps = language === 'en' ? steps.en : steps.fr;
  return <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Our Process' : 'Notre Processus'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'en' ? 'We follow a proven methodology to ensure successful project delivery and client satisfaction.' : 'Nous suivons une méthodologie éprouvée pour assurer la réussite des projets et la satisfaction des clients.'}
          </p>
          {/* <DotLottieReact 
            src="/animations/InfiLoader.lottie" loop autoplay 
            
            className="relative z-10 rounded-lg object-cover max-w-2xl mx-auto w-32 h-16 " 
          /> */}
          <Lottie
            animationData={InfiLoaderAnimation}
            loop
            autoplay
            className="relative z-10 mx-auto w-32 h-16"
          />

        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentSteps.map((step, index) => (
            <div key={index} className="flex group">   {/* 👈 add group here */}
              <div className="mr-4">
                <div
                  className={
                    "relative flex items-center justify-center w-12 h-12 rounded-full " +
                    "bg-tealCustom text-white overflow-hidden transition-colors duration-300 " +
                    // pseudo sweep effect triggered by group-hover
                    "before:content-[''] before:absolute before:inset-0 before:transform before:scale-x-0 before:origin-left " +
                    "before:bg-purpleAccent before:z-0 before:pointer-events-none before:transition-transform before:duration-300 before:ease-out " +
                    "group-hover:before:scale-x-100"
                  }
                >
                  <span className="relative z-10">
                    {step.icon}
                  </span>
                </div>

                {index !== currentSteps.length - 1 && (
                  <div className="h-full w-0.5 bg-tealCustom mx-auto mt-2 hidden md:block"></div>
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>;
}