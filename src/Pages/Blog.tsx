import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CalendarIcon, ClockIcon, TagIcon } from 'lucide-react';

const posts = [
  {
    titleEn: '5 Web Design Trends You Need to Know in 2025',
    titleFr: '5 Tendances Web Design à Connaître en 2025',
    excerptEn: 'Discover the design patterns shaping the web this year — from glassmorphism to AI-generated interfaces.',
    excerptFr: 'Découvrez les tendances qui façonnent le web cette année — du glassmorphisme aux interfaces générées par IA.',
    date: 'June 10, 2025',
    readTime: '5 min',
    tagEn: 'Design',
    tagFr: 'Design',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
  },
  {
    titleEn: 'Why SEO Still Matters in 2025',
    titleFr: 'Pourquoi le SEO est Toujours Important en 2025',
    excerptEn: 'SEO evolves constantly. Here is what businesses need to prioritize to stay visible on Google this year.',
    excerptFr: 'Le SEO évolue constamment. Voici ce que les entreprises doivent prioriser pour rester visibles sur Google.',
    date: 'May 28, 2025',
    readTime: '4 min',
    tagEn: 'SEO',
    tagFr: 'SEO',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80',
  },
  {
    titleEn: 'How a Strong Brand Identity Drives Business Growth',
    titleFr: 'Comment une Identité de Marque Forte Stimule la Croissance',
    excerptEn: 'Your brand is more than a logo. Learn how a cohesive identity builds trust, loyalty, and revenue.',
    excerptFr: 'Votre marque est bien plus qu\'un logo. Découvrez comment une identité cohérente crée confiance, fidélité et revenus.',
    date: 'May 15, 2025',
    readTime: '6 min',
    tagEn: 'Branding',
    tagFr: 'Marque',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
  },
  {
    titleEn: 'The Power of Content Marketing for Small Businesses',
    titleFr: 'La Puissance du Marketing de Contenu pour les PME',
    excerptEn: 'Content marketing is one of the most cost-effective strategies to grow your audience and drive leads.',
    excerptFr: 'Le marketing de contenu est l\'une des stratégies les plus rentables pour développer votre audience.',
    date: 'May 2, 2025',
    readTime: '5 min',
    tagEn: 'Marketing',
    tagFr: 'Marketing',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
  },
  {
    titleEn: 'Responsive Web Design: Why It Cannot Be Optional',
    titleFr: 'Design Responsive : Pourquoi Ce N\'est Plus Optionnel',
    excerptEn: 'Over 60% of web traffic comes from mobile. Here is why your site must be fully responsive in 2025.',
    excerptFr: 'Plus de 60% du trafic web vient du mobile. Voici pourquoi votre site doit être entièrement responsive.',
    date: 'April 20, 2025',
    readTime: '4 min',
    tagEn: 'Web',
    tagFr: 'Web',
    image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=800&q=80',
  },
  {
    titleEn: 'Social Media Marketing: Which Platforms Should You Focus On?',
    titleFr: 'Marketing sur les Réseaux Sociaux : Sur Quelles Plateformes Se Concentrer ?',
    excerptEn: 'Not all platforms are equal. We break down where your brand should invest its social media energy.',
    excerptFr: 'Toutes les plateformes ne se valent pas. Nous analysons où votre marque devrait concentrer son énergie.',
    date: 'April 8, 2025',
    readTime: '5 min',
    tagEn: 'Marketing',
    tagFr: 'Marketing',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80',
  },
];

function Blog() {
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
            {isEn ? 'Insights & Tips' : 'Conseils & Insights'}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-100">
            {isEn ? 'The ElevareIT Blog' : 'Le Blog ElevareIT'}
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {isEn
              ? 'Digital tips, industry insights, and agency news — all in one place.'
              : 'Conseils numériques, tendances du secteur et actualités — tout en un endroit.'}
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={isEn ? post.titleEn : post.titleFr}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-tealCustom text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <TagIcon size={10} />
                    {isEn ? post.tagEn : post.tagFr}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <CalendarIcon size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <ClockIcon size={12} />
                      {post.readTime} {isEn ? 'read' : 'de lecture'}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug flex-1">
                    {isEn ? post.titleEn : post.titleFr}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                    {isEn ? post.excerptEn : post.excerptFr}
                  </p>
                  <button className="mt-auto text-tealCustom font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    {isEn ? 'Read More' : 'Lire Plus'}
                    <ArrowRightIcon size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-900 text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-3">
          {isEn ? 'Stay in the Loop' : 'Restez Informé'}
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          {isEn
            ? 'Subscribe to our newsletter for the latest digital tips and agency news.'
            : 'Abonnez-vous à notre newsletter pour les derniers conseils numériques.'}
        </p>
        <form
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder={isEn ? 'Your email address' : 'Votre adresse email'}
            className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-tealCustom"
          />
          <button
            type="submit"
            className="bg-tealCustom text-white px-6 py-3 rounded-lg font-semibold hover:bg-tealCustom/80 transition-colors whitespace-nowrap"
          >
            {isEn ? 'Subscribe' : "S'abonner"}
          </button>
        </form>
      </section>
    </div>
  );
}

export default Blog;