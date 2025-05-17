import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <section className="min-h-[80vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="block text-purple-600 mb-2" style={{ fontSize: '22px' }}>Hello, I'm</span>
              <span className="btn-shine">Tims Tittus</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-400">
              CyberSecurity Student & Ideal Generalist
            </h2>
            <p className="text-gray-400 max-w-2xl mt-6 text-lg">
            I craft elegant solutions through code and design—where structure meets intuition, and every detail serves a purpose.
            </p>
            <div className="pt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <Link to="/projects" className="animated-button">
                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
                <span className="text">View my work</span>
                <span className="circle"></span>
                <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
              </Link>

              <Link to="/contact">
                <button className="button flex items-center gap-2">
                  Get in touch
                  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>

            </div>
          </div>
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative">
              <div className="w-full h-96 bg-dark-light rounded-lg border border-purple-600/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-purple-600/10">
                  <span className="text-9xl font-bold">{'{☯}'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 border-t border-purple-600/10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <p className="text-gray-400">Some of my recent work</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              className="bg-dark-light border border-purple-600/10 rounded-lg overflow-hidden hover:border-purple-600/90 transition-all duration-300 group"
            >
              <div className="h-48 bg-dark-lighter flex items-center justify-center">
                <span className="text-5xl text-purple-600/20">Project {item}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title {item}</h3>
                <p className="text-gray-400 mb-4">Short description of the project and the technologies used.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs bg-dark rounded text-gray-400">React</span>
                  <span className="px-3 py-1 text-xs bg-dark rounded text-gray-400">TypeScript</span>
                  <span className="px-3 py-1 text-xs bg-dark rounded text-gray-400">Tailwind</span>
                </div>
                <Link 
                  to={`/projects/${item}`} 
                  className="inline-flex items-center text-purple-600 group-hover:text-purple-600/80 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/projects" 
            className="inline-flex items-center px-6 py-3 border border-purple-600 text-purple-600 font-medium rounded hover:bg-dark-light hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
      
      <section className="py-16 border-t border-purple-600/10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Skills & Expertise</h2>
          <p className="text-gray-400">Technologies I work with</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            'Recon', 'Networking', 'React', 'Creative Designing', 
            'Cybersecurity', 'Bug-Hunting', 'UI/UX Design', 'Leadership'
            ].map((skill) => (
            <div 
              key={skill} 
              className="bg-dark-light border border-purple-600/10 rounded-lg p-6 text-center hover:border-purple-600/30 hover:bg-purple-950 hover:scale-105 hover:shadow-lg transition-all duration-400 ease-in-out"  >
              <h3 className="text-lg font-medium text-purple-500 mb-1">{skill}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;