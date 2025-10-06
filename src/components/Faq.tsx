import React, { useState, useContext } from "react";
import { LanguageContext } from "../App";
import { ChevronDown, ChevronUp } from "lucide-react";

export function Faq() {
  const { language } = useContext(LanguageContext);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

 const faqs = {
  en: [
    {
      question: "How long does it take to create a website?",
      answer:
        "The timeline depends on the number of pages, features, and overall complexity of the site. However, we always aim to deliver your website as quickly as possible without compromising on quality.",
    },
    {
      question: "Will I be able to see the website during development?",
      answer:
        "Yes! We follow an agile approach, which means we regularly share progress updates with you to make sure the project is aligned with your vision before the final delivery.",
    },
    {
      question: "Do you provide support after the website is launched?",
      answer:
        "Absolutely. We offer ongoing support, maintenance, and optimization to ensure your website stays up-to-date and performs at its best.",
    },
    {
      question: "What is the cost of creating a website?",
      answer:
        "The cost depends on several factors such as the number of pages, design complexity, special features, and content requirements. We’ll provide a tailored quote after understanding your specific needs.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes, every website we build is responsive by default. This means it adapts perfectly to mobile phones, tablets, and desktops for an optimal user experience.",
    },
    {
      question: "Do you create logos?",
      answer:
        "Yes, we design professional logos that represent your brand’s identity. Logo delivery usually takes 1 to 2 weeks depending on revisions and complexity.",
    },
    {
      question: "Do you also offer digital marketing services?",
      answer:
        "Yes, we provide digital marketing strategies including SEO, social media content creation, and campaigns to help your business grow online.",
    },
    {
      question: "Do you design other visuals besides websites?",
      answer:
        "Absolutely. We create UI/UX designs, posters, announcements, and other visuals that match your brand identity, ensuring consistency across all platforms.",
    },
  ],
  fr: [
    {
      question: "Combien de temps faut-il pour créer un site web ?",
      answer:
        "La durée dépend du nombre de pages, des fonctionnalités et de la complexité du site. Nous faisons cependant tout notre possible pour livrer votre site dans les meilleurs délais, sans compromettre la qualité.",
    },
    {
      question:
        "Pourrai-je voir l’avancement du site web pendant son développement ?",
      answer:
        "Oui ! Nous suivons une approche agile qui nous pousse à partager régulièrement l’avancement du projet avec vous, afin de garantir que le produit final corresponde bien à vos attentes.",
    },
    {
      question: "Offrez-vous un support après le lancement du site ?",
      answer:
        "Absolument. Nous assurons un support continu, la maintenance et l’optimisation pour que votre site reste performant et toujours à jour.",
    },
    {
      question: "Quel est le coût de la création d’un site web ?",
      answer:
        "Le coût dépend de plusieurs facteurs : nombre de pages, complexité du design, fonctionnalités spécifiques et besoins en contenu. Nous vous fournirons un devis personnalisé après avoir étudié vos besoins.",
    },
    {
      question: "Est-ce que mon site sera adapté aux mobiles ?",
      answer:
        "Oui, tous nos sites sont conçus pour être responsive. Cela signifie qu’ils s’adaptent parfaitement aux téléphones, tablettes et ordinateurs afin d’offrir une expérience utilisateur optimale.",
    },
    {
      question: "Proposez-vous la création de logos ?",
      answer:
        "Oui, nous concevons des logos professionnels qui reflètent l’identité de votre marque. Le délai de livraison est généralement de 1 à 2 semaines, selon la complexité et les révisions.",
    },
    {
      question: "Offrez-vous également des services de marketing digital ?",
      answer:
        "Oui, nous proposons des stratégies de marketing digital incluant le SEO, la création de contenu pour les réseaux sociaux et des campagnes pour développer votre visibilité en ligne.",
    },
    {
      question: "Concevez-vous d’autres visuels que des sites web ?",
      answer:
        "Absolument. Nous réalisons des designs UI/UX, des affiches, des annonces et d’autres supports visuels en cohérence avec l’identité de votre marque, pour assurer une communication homogène.",
    },
  ],
};


  const currentFaqs = language === "en" ? faqs.en : faqs.fr;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {language === "en" ? "Frequently Asked Questions" : "FAQ"}
          </h2> */}
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-500 via-purple-500 to-yellow-400 
            inline-block text-transparent bg-clip-text 
            bg-[length:200%_200%] animate-gradient">
            {language === "en" ? "Frequently Asked Questions" : "Foire Aux Questions"}
          </h2>

        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {currentFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-lg bg-gray-300 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-goldAccent" />
                ) : (
                  <ChevronDown className="text-gray-900" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-900">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}