
import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout process.',
    image: 'project1',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    links: {
      live: '#',
      github: '#'
    },
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag and drop interface, and team collaboration features.',
    image: 'project2',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    links: {
      live: '#',
      github: '#'
    },
    featured: true
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A minimalist portfolio website designed to showcase creative work with a focus on typography and whitespace.',
    image: 'project3',
    tags: ['HTML/CSS', 'JavaScript', 'GSAP'],
    links: {
      live: '#',
      github: '#'
    },
    featured: true
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'An interactive weather dashboard with 7-day forecasts, location-based weather data, and customizable units.',
    image: 'project4',
    tags: ['React', 'TypeScript', 'OpenWeather API'],
    links: {
      live: '#',
      github: '#'
    },
    featured: false
  },
  {
    id: 5,
    title: 'Recipe Finder',
    description: 'A recipe search application that allows users to find recipes based on ingredients, dietary restrictions, and meal types.',
    image: 'project5',
    tags: ['React', 'API Integration', 'Styled Components'],
    links: {
      live: '#',
      github: '#'
    },
    featured: false
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'A comprehensive fitness tracking application with workout planning, progress visualization, and social sharing features.',
    image: 'project6',
    tags: ['React Native', 'Firebase', 'Chart.js'],
    links: {
      live: '#',
      github: '#'
    },
    featured: false
  }
];

// Filter categories
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
                  ? 'bg-gold text-dark'
                  : 'bg-dark-light text-gray-400 hover:text-white hover:bg-dark-lighter'
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
              className="bg-dark-light border border-gold/10 rounded-lg overflow-hidden hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="h-48 bg-dark-lighter flex items-center justify-center relative overflow-hidden">
                <span className="text-5xl text-gold/20">{project.image}</span>
                {project.featured && (
                  <span className="absolute top-3 right-3 bg-gold text-dark px-2 py-1 text-xs font-bold rounded">
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
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="inline-flex items-center text-gold group-hover:text-gold-light transition-colors duration-300"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  
                  <div className="flex items-center space-x-4">
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gold transition-colors duration-300"
                      aria-label="GitHub repository"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gold transition-colors duration-300"
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
