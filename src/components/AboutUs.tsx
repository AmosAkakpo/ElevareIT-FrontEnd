import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { LanguageContext } from "../App";

import Lottie from "lottie-react";
import rocketanimation from "../../Public/animations/Startup.json"
import gearanimation from  "../../Public/animations/Gears.json"
import staranimation from "../../Public/animations/AI Searching.json"

export function AboutUs() {
  const { language } = useContext(LanguageContext);

  const highlights = [
    {
      src: rocketanimation,
      titleEn: "Goal-Oriented",
      titleFr: "Axé sur les Objectifs",
      descEn:"We help clients reach their goals with creative and effective digital solutions.",
      descFr:"Nous aidons nos clients à atteindre leurs objectifs avec des solutions numériques créatives et efficaces.",

    },
    { 
      src: staranimation, 
      titleEn: "Quality-Focused", 
      titleFr: "Qualité Avant Tout", 
      descEn:
        "Delivering high-quality work is our priority, ensuring every project exceeds expectations.",
      descFr:
        "Livrer un travail de haute qualité est notre priorité, chaque projet dépassant les attentes.",
    },
    { 
      src: gearanimation, 
      titleEn: "Experienced", 
      titleFr: "Expérimentés", 
      descEn:
        "We have experience with a variety of digital tools to provide solutions tailored to our clients.",
      descFr:
        "Nous avons de l’expérience avec divers outils numériques pour fournir des solutions adaptées à nos clients.",
    },
  ];

  function HighlightCard({ src, titleEn, titleFr, descEn, descFr, language }) {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "150px" });
  return (
    <div ref={ref} className="bg-gray-200 p-6 rounded-lg shadow-md text-center w-64">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16">
          {inView ? 
            <Lottie
              animationData={src}
              loop
              autoplay
            /> : null}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {language === "en" ? titleEn : titleFr}
      </h3>
      <p className="text-gray-600">{language === "en" ? descEn : descFr}</p>
    </div>
  );
}
  return (
    // <section id="about" className="py-20 bg-gray-50">
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === "en" ? "About Us" : "À propos de nous"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === "en" ? "We are a small, hard-working, and passionate team. With experience in a wide range of tools, we create digital solutions designed to satisfy and delight our clients."
            : "Nous sommes une petite équipe passionnée et travailleuse. Grâce à notre expérience avec une large gamme d’outils, nous créons des solutions numériques conçues pour satisfaire et ravir nos clients."
            }
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 hover:">
          {highlights.map((h, i) => (
            <HighlightCard key={i} {...h} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}
