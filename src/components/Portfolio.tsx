import React, { useState, useContext } from 'react';
import { LanguageContext } from '../App';

export function Portfolio() {
  const { language } = useContext(LanguageContext);
  const [activeFilter, setActiveFilter] = useState<'all' | 'branding' | 'web' | 'ui' | 'marketing'>('all');

  const filters: { key: 'all' | 'branding' | 'web' | 'ui' | 'marketing'; en: string; fr: string }[] = [
    { key: 'all', en: 'All', fr: 'Tout' },
    { key: 'branding', en: 'Branding', fr: 'Marque' },
    { key: 'web', en: 'Web Design', fr: 'Conception Web' },
    { key: 'ui', en: 'UI/UX', fr: 'UI/UX' },
    { key: 'marketing', en: 'Marketing', fr: 'Marketing' },
  ];

  const projects = [
    {
      titleEn: 'Artisan Coffee Rebrand',
      titleFr: 'Refonte Café Artisanal',
      category: 'branding' as const,
      image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      titleEn: 'Eco Tech Website',
      titleFr: 'Site Web ÉcoTech',
      category: 'web' as const,
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      titleEn: 'Fitness App Interface',
      titleFr: 'Interface Application Fitness',
      category: 'ui' as const,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      titleEn: 'Travel Campaign',
      titleFr: 'Campagne de Voyage',
      category: 'marketing' as const,
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      titleEn: 'Restaurant Identity',
      titleFr: 'Identité de Restaurant',
      category: 'branding' as const,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      titleEn: 'E-commerce Platform',
      titleFr: 'Plateforme E-commerce',
      category: 'web' as const,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Our Work' : 'Nos Projets'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Explore our portfolio of successful projects across various industries and services.'
              : 'Explorez notre portfolio de projets réussis dans divers secteurs et services.'}
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-full capitalize text-sm md:text-base transition-colors ${
                  activeFilter === filter.key
                    ? 'bg-tealCustom text-white shadow'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {language === 'en' ? filter.en : filter.fr}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-md">
              <img
                src={project.image}
                alt={language === 'en' ? project.titleEn : project.titleFr}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {language === 'en' ? project.titleEn : project.titleFr}
                </h3>
                <p className="text-tealCustom capitalize">
                  {filters.find((f) => f.key === project.category)?.[language === 'en' ? 'en' : 'fr']}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}