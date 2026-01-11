import React, { useContext } from "react";
import { LanguageContext } from "../App";
import TypewriterText from "./TypewriterText";
import Lottie from "lottie-react";
import programminganim from "../../Public/animations/programminganim.json";

export function ServiceHero() {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      label: "Our Services",
      prefix: "We craft",
      words: ["bold websites", "strategic brands", "digital experiences"],
      tagline:
        "We harness the latest technologies to meet your needs and deliver high-quality, tailored solutions.",
    },
    fr: {
      label: "Nos Services",
      prefix: "Nous concevons",
      words: ["des sites audacieux", "des marques stratégiques", "des expériences digitales"],
      tagline:
        "Nous exploitons les technologies les plus récentes pour répondre à vos besoins et offrir des solutions sur mesure de haute qualité.",
    },
  };

  const t = content[language];

  return (
    <section className=" relative  text-gray-900 min-h-[100vh] flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {t.prefix}{" "}
          <TypewriterText
            words={t.words}
            textColor="text-tealCustom"
            cursorColor="border-tealCustom"
            textSize="text-4xl md:text-6xl font-bold"
            typingSpeed={80}
            deletingSpeed={45}
            pauseTime={1000}
          />
        </h1>

        <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          {t.tagline}
        </p>
      </div>

    </section>
  );
}
