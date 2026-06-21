import React, { useContext } from "react";
import { LanguageContext } from "../App";
import TypewriterText from "./TypewriterText";
import { Link } from "react-router-dom";
import { ArrowDownIcon } from "lucide-react";

export function ServiceHero() {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      label: "Our Services",
      prefix: "We craft",
      words: ["bold websites", "strategic brands", "digital experiences", "stunning logos"],
      tagline:
        "We harness the latest technologies to meet your needs and deliver high-quality, tailored solutions.",
      cta: "Get a Free Quote",
    },
    fr: {
      label: "Nos Services",
      prefix: "Nous concevons",
      words: ["des sites audacieux", "des marques stratégiques", "des expériences digitales", "des logos uniques"],
      tagline:
        "Nous exploitons les technologies les plus récentes pour répondre à vos besoins et offrir des solutions sur mesure de haute qualité.",
      cta: "Obtenir un Devis Gratuit",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="relative bg-black text-white pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center px-6">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purpleAccent/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-tealCustom/15 rounded-full blur-3xl"></div>
        {/* Grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <span className="inline-block bg-tealCustom/20 text-tealCustom border border-tealCustom/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
          {t.label}
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-100">
          {t.prefix}{" "}
          <TypewriterText
            words={t.words}
            textColor="text-tealCustom"
            cursorColor="border-tealCustom"
            textSize="text-4xl md:text-6xl font-bold"
            typingSpeed={80}
            deletingSpeed={45}
            pauseTime={1200}
          />
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          {t.tagline}
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-tealCustom text-white px-8 py-3 rounded-md font-semibold hover:bg-tealCustom/80 transition-colors"
        >
          {t.cta}
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 animate-bounce">
        <ArrowDownIcon size={20} />
      </div>
    </section>
  );
}
