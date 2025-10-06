import React, { useContext } from "react";
import { LanguageContext } from "../App";
import TypewriterText from "./TypewriterText";
import { ArrowRightIcon } from "lucide-react";

export function ServiceHero() {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      label: "Our Services",
      prefix: "We craft",
      words: ["bold websites", "strategic brands", "digital experiences"],
      tagline:
        "Transforming ideas into results — from design to deployment.",
      cta: "Explore Our Work",
    },
    fr: {
      label: "Nos Services",
      prefix: "Nous concevons",
      words: ["des sites audacieux", "des marques stratégiques", "des expériences digitales"],
      tagline:
        "Transformer vos idées en résultats — du design au déploiement.",
      cta: "Découvrez nos projets",
    },
  };

  const t = content[language];

  return (
    <section className="relative overflow-hidden bg-black text-gray-100 min-h-[90vh] flex items-center justify-center">
      {/* BACKGROUND VISUALS */}
      <div className="absolute inset-0">
        {/* floating blobs */}
        <div className="absolute -top-32 -left-20 w-[400px] h-[400px] bg-purpleAccent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-tealCustom/20 rounded-full blur-3xl animate-pulse"></div>

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span className="uppercase tracking-[0.25em] text-gray-500 text-sm mb-6 block">
          {t.label}
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {t.prefix}{" "}
          <TypewriterText
            words={t.words}
            prefix=""
            textColor="text-tealCustom"
            cursorColor="border-goldAccent"
            textSize="text-4xl md:text-6xl font-bold"
            typingSpeed={85}
            deletingSpeed={45}
            pauseTime={1000}
          />
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          {t.tagline}
        </p>

        <button className="inline-flex items-center gap-3 bg-gradient-to-r from-purpleAccent to-tealCustom px-8 py-3 rounded-full font-semibold text-white hover:opacity-90 transition-all duration-300">
          {t.cta}
          <ArrowRightIcon size={22} />
        </button>
      </div>

      {/* BOTTOM GRADIENT FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-transparent"></div>
    </section>
  );
}
