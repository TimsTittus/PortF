import React, { useState } from 'react';
import SEO from '../components/layout/SEO';
import ProjectCard from '../components/ui/ProjectCard';
import SectionHeader from '../components/ui/SectionHeader';
import { projects } from '../data/projects';
import { achievements } from '../data/achievements';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    ...Array.from(new Set(projects.flatMap(project => project.tags))).sort()
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  const achievementsSchema = achievements.map(a => ({
    "@type": "Achievement",
    "name": a.title,
    "description": a.description
  }));

  return (
    <div className="container mx-auto max-w-6xl">
      <SEO 
        title="Projects & Achievements" 
        description="A curated selection of my projects, skills, and achievements."
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Tims Tittus",
            "url": "https://timstittus.vercel.app",
            "sameAs": [
              "https://github.com/TimsTittus",
              "https://www.linkedin.com/in/tims-tittus/"
            ],
            "achievement": achievementsSchema
          })}
        </script>
      </SEO>

      <section className="py-12">
        <SectionHeader 
          title="My" 
          highlight="Projects" 
          subtitle="A curated selection of my projects showcasing my skills in development, design, and problem-solving."
        />

        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 border-2 border-nb-black font-bold uppercase tracking-tight transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] 
              ${activeFilter === category
                  ? 'bg-nb-purple text-nb-black'
                  : 'bg-white text-nb-black hover:bg-nb-yellow'
                }`}
            >
              {category}
            </button>
          ))}
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
};

export default Projects;