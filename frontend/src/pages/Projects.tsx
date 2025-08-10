
import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, TrendingUpDownIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Steg Tool',
    description: 'A steganography tool that allows you to hide and extract messages within images.',
    image: '1',
    tags: ['Python', 'Crytpgraphy', 'Streamlit'],
    links: {
      live: 'https://steg-it.streamlit.app/',
      github: 'https://github.com/TimsTittus/Steg_Tool'
    },
    featured: true
  },
  {
    id: 2,
    title: 'HomeChime',
    description: 'Browser based app that, inspired by my family’s anxious wait for my younger brother’s school bus.',
    image: '2',
    tags: ['HTML/CSS', 'JavaScript'],
    links: {
      live: 'https://homechime.vercel.app/',
      github: 'https://github.com/TimsTittus/HomeChime'
    },
    featured: true
  },
  {
    id: 3,
    title: '404-Extension',
    description: 'A Chrome extension that tracks 404 error page visits, saves their history and count locally, and displays both in a popup.',
    image: '3',
    tags: ['HTML/CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/TimsTittus/404-Extension'
    },
    featured: true
  },
  {
    id: 4,
    title: 'Parking Mangement System',
    description: 'Helps us to enter, display or alter the details of vehicles in parking records.',
    image: '4',
    tags: ['Python','MySQL'],
    links: {
      github: 'https://github.com/TimsTittus/Parking-Management-System'
    },
    featured: false
  },
  {
    id: 5,
    title: 'Sjcet Events',
    description: 'Contributed to this platform for managing and viewing events happening at SJCET',
    image: '5',
    tags: ['OpenSource', 'HTML/CSS','JavaScript','Vue'],
    links: {
      live: 'https://sjcet-events.vercel.app/',
      github: 'https://github.com/TimsTittus/Sjcet-Events'
    },
    featured: false
  },
  {
    id: 6,
    title: 'Print-Shop',
    description: 'OpenSource web application developed to improve efficiency of printing services within a college environment.',
    image: '6',
    tags: ['OpenSource', 'CSS', 'Python', 'Mako', 'TypeScript'],
    links: {
      live: 'https://github.com/TimsTittus/PortF',
      github: 'https://github.com/TimsTittus/PortF'
    },
    featured: false
  },
  {
    id: 7,
    title: 'Portfolio Website',
    description: 'A minimalist portfolio website crafted to highlight my technical projects and creative work.',
    image: '7',
    tags: ['HTML/CSS', 'React', 'Vite', 'JavaScript'],
    links: {
      live: 'https://github.com/TimsTittus/PortF',
      github: 'https://github.com/TimsTittus/PortF'
    },
    featured: true
  }
];

const categories = [
  'All',
  ...new Set(projects.flatMap(project => project.tags)).values()
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));
  
  return (
    <div className="container mx-auto max-w-6xl">
      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A curated selection of my projects showcasing my skills in development, design, and problem-solving.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === category
                  ? 'bg-purple-700 text-dark border-purple-700'
                  : 'bg-dark-light text-gray-400 hover:text-purple-400 hover:bg-dark-lighter hover:scale-110 hover:border-purple-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-dark-light border border-purple-900/60 rounded-lg overflow-hidden hover:border-purple-700 transition-all duration-300 group"
            >
              <div className="h-48 bg-dark-lighter flex items-center justify-center relative overflow-hidden">
                <span className="text-5xl text-gold/20">{project.image}</span>
                {project.featured && (
                  <span className="absolute top-3 right-3 bg-purple-600 text-dark px-2 py-1 text-xs font-bold rounded">
                    Featured
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 h-20 overflow-hidden">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs bg-dark rounded text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
 
                <div className="flex items-center justify-between">
                {/*
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="inline-flex items-center text-purple-600 group-hover:text-purple-300 transition-colors duration-300"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  */}
                  <div className="flex items-center space-x-4">
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-600 transition-colors duration-300"
                      aria-label="GitHub repository"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-600 transition-colors duration-300"
                      aria-label="Live project"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
