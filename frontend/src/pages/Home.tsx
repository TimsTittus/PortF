import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/layout/SEO';
import ProjectCard from '../components/ui/ProjectCard';
import SectionHeader from '../components/ui/SectionHeader';
import SkillGrid from '../components/home/SkillGrid';
import { projects } from '../data/projects';

const Home: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="container mx-auto max-w-7xl">
      <SEO />

      <section className="min-h-[80vh] flex flex-col justify-center pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-block px-4 py-1 bg-nb-yellow border-2 border-nb-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg] font-black text-nb-black uppercase tracking-tighter mb-4">
              Hello, I'm
            </div>
            <h1 className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tighter text-nb-black uppercase leading-[0.9]">
              Tims <br />
              <span className="text-nb-purple drop-shadow-[4px_4px_0px_#000]">Tittus</span>
            </h1>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-nb-black/80 tracking-tight">
              Engineering, CyberSecurity Student & <span className="bg-nb-green px-2 border-2 border-nb-black">Polymath</span>
            </h2>
            <p className="text-nb-black font-bold max-w-2xl mt-6 text-lg sm:text-xl leading-relaxed">
              I build secure, efficient solutions, blending coding, design, and cybersecurity skills as a modern polymath.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row flex-wrap gap-6">
              <Link to="/projects" className="group relative w-full sm:w-auto">
                <div className="absolute inset-0 bg-nb-black translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-all"></div>
                <div className="relative px-8 py-4 bg-nb-purple border-4 border-nb-black text-nb-black font-black uppercase text-xl flex items-center justify-center gap-3 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all">
                  View my work
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link to="/contact" className="group relative w-full sm:w-auto">
                <div className="absolute inset-0 bg-nb-black translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-all"></div>
                <div className="relative px-8 py-4 bg-white border-4 border-nb-black text-nb-black font-black uppercase text-xl flex items-center justify-center gap-3 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all">
                  Get in touch
                  <Mail className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative rotate-3">
              <div className="absolute inset-0 bg-nb-black translate-x-4 translate-y-4"></div>
              <div className="relative aspect-square bg-nb-blue border-4 border-nb-black flex items-center justify-center p-8">
                <div className="w-full h-full border-4 border-nb-black bg-white flex items-center justify-center font-black text-4xl text-center uppercase p-4 shadow-nb-hard">
                  Security & <br /> Code
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t-4 border-nb-black">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader 
            title="Featured" 
            highlight="Projects" 
            subtitle="Some of my recent work that defines my engineering journey."
            className="text-left"
          />
          <Link to="/projects" className="group relative mb-6">
            <div className="absolute inset-0 bg-nb-black translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></div>
            <div className="relative px-6 py-2 bg-nb-yellow border-2 border-nb-black font-black uppercase text-lg group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all">
              View All
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </section>

      <section className="py-24 border-t-4 border-nb-black">
        <SectionHeader 
          title="Skills &" 
          highlight="Expertise" 
          subtitle="Technologies and disciplines I've mastered over the years."
        />
        <SkillGrid />
      </section>
    </div>
  );
};

export default Home;