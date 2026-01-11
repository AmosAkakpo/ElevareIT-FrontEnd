import React, { useState, useContext } from 'react';
import { LanguageContext } from '../App';
export function Portfolio() {
  const {
    language
  } = useContext(LanguageContext);
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = {
    en: ['all', 'branding', 'web design', 'ui/ux', 'marketing'],
    fr: ['tout', 'marque', 'conception web', 'ui/ux', 'marketing']
  };
  const currentFilters = language === 'en' ? filters.en : filters.fr;
  const projects = [{
    title: language === 'en' ? 'Artisan Coffee Rebrand' : 'Refonte Café Artisanal',
    category: language === 'en' ? 'branding' : 'marque',
    image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }, {
    title: language === 'en' ? 'Eco Tech Website' : 'Site Web ÉcoTech',
    category: language === 'en' ? 'web design' : 'conception web',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }, {
    title: language === 'en' ? 'Fitness App Interface' : 'Interface Application Fitness',
    category: 'ui/ux',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }, {
    title: language === 'en' ? 'Travel Campaign' : 'Campagne de Voyage',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }, {
    title: language === 'en' ? 'Restaurant Identity' : 'Identité de Restaurant',
    category: language === 'en' ? 'branding' : 'marque',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }, {
    title: language === 'en' ? 'E-commerce Platform' : 'Plateforme E-commerce',
    category: language === 'en' ? 'web design' : 'conception web',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }];
  const filteredProjects = activeFilter === 'all' || activeFilter === 'tout' ? projects : projects.filter(project => project.category === activeFilter);
  return <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container  px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Our Work' : 'Nos Projets'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'en' ? 'Explore our portfolio of successful projects across various industries and services.' : 'Explorez notre portfolio de projets réussis dans divers secteurs et services.'}
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {currentFilters.map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-4 py-2 rounded-full capitalize text-sm md:text-base transition-colors ${activeFilter === filter ? 'bg-emerald-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
                {filter}
              </button>)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
              <img src={project.image} alt={project.title} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-emerald-200 capitalize">
                  {project.category}
                </p>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <a href="#contact" className="inline-block border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-md font-medium hover:bg-emerald-600 hover:text-white transition-colors">
            {language === 'en' ? 'Start Your Project' : 'Démarrer Votre Projet'}
          </a>
        </div>
      </div>
    </section>;
}