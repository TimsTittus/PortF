"use client";

import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { projects } from '@/data/projects';
import { achievements } from '@/data/achievements';

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = useMemo(() => {
    const allTags = projects.flatMap(project => project.tags);
    const tagCounts = allTags.reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const sortedTags = Object.keys(tagCounts).sort();
    return [
      { name: 'All', count: projects.length },
      ...sortedTags.map(tag => ({ name: tag, count: tagCounts[tag] }))
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesFilter = activeFilter === 'All' || project.tags.includes(activeFilter);
      const matchesSearch = searchTerm === '' ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  const achievementsSchema = achievements.map(a => ({
    "@type": "Achievement",
    "name": a.title,
    "description": a.description
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tims Tittus",
    "url": "https://timstittus.vercel.app",
    "sameAs": [
      "https://github.com/TimsTittus",
      "https://www.linkedin.com/in/tims-tittus/"
    ],
    "achievement": achievementsSchema
  };

  return (
    <div className="container mx-auto max-w-6xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-12">
        <SectionHeader
          title="My"
          highlight="Projects"
          subtitle="A curated selection of my projects showcasing my skills in development, design, and problem-solving."
        />

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 px-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-nb-black translate-x-1 translate-y-1 group-focus-within:translate-x-2 group-focus-within:translate-y-2 transition-all"></div>
            <div className="relative flex items-center bg-white border-2 border-nb-black p-1">
              <Search className="ml-3 text-nb-black/40" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 bg-transparent outline-none font-bold text-nb-black placeholder:text-nb-black/30"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="p-2 hover:bg-nb-cream transition-colors"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Filter Section */}
        <div className="relative mb-16 px-4">
          {/* Scroll Fade Indicators (Mobile Only) */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-nb-cream to-transparent z-10 pointer-events-none sm:hidden"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-nb-cream to-transparent z-10 pointer-events-none sm:hidden"></div>

          <div className="overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex sm:flex-wrap justify-start sm:justify-center gap-3 min-w-max sm:min-w-0">
              {categories.map(category => (
                <button
                  key={category.name}
                  onClick={() => setActiveFilter(category.name)}
                  className={`px-4 py-2 border-2 border-nb-black font-black uppercase text-xs tracking-tight transition-all whitespace-nowrap
                  ${activeFilter === category.name
                      ? 'bg-nb-purple text-nb-black shadow-[4px_4px_0px_0px_#000] -translate-x-1 -translate-y-1'
                      : 'bg-white text-nb-black hover:bg-nb-yellow shadow-[2px_2px_0px_0px_#000] active:shadow-none active:translate-x-[1px] active:translate-y-[1px]'
                    }`}
                >
                  {category.name}
                  <span className={`ml-2 px-1.5 py-0.5 text-[10px] border-l-2 border-nb-black ${activeFilter === category.name ? 'bg-nb-black text-nb-purple' : 'bg-nb-cream text-nb-black/60'
                    }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </section>

      <section className="py-24 border-t-4 border-nb-black mt-12" id="achievements">
        <SectionHeader
          title="Achievements"
          subtitle="A glimpse of milestones and recognitions I’ve earned along my journey."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {achievements.map(ach => (
            <article
              key={ach.id}
              className="group relative"
            >
              <div className="absolute inset-0 bg-nb-black translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-all"></div>
              <div className="relative bg-white border-4 border-nb-black p-6 sm:p-8 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all h-full">
                <header className="flex items-center space-x-4 mb-4">
                  <div className="p-2 sm:p-3 bg-nb-yellow border-2 border-nb-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {ach.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-nb-black">{ach.title}</h3>
                </header>
                <p className="text-nb-black font-medium text-base sm:text-lg leading-relaxed">{ach.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}