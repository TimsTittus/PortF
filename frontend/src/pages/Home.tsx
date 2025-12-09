import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

const Home: React.FC = () => {
  const canonicalUrl = 'https://timstittus.vercel.app'; 
  const siteTitle = 'Tims Tittus - Engineering & CyberSecurity Student';
  const siteDescription = 'I build secure, efficient solutions, blending coding, design, and cybersecurity skills as a modern polymath.';
  const socialImageUrl = `${canonicalUrl}/assets/hiddenimage.png`; 

  return (
    <div className="container mx-auto max-w-7xl">
      <Helmet>
        {/* --- Primary Meta Tags --- */}
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* --- Open Graph / Facebook (and LinkedIn, etc.) --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={socialImageUrl} />

        {/* --- Twitter Card --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={socialImageUrl} />

        {/* --- Structured Data (JSON-LD) --- */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "dateCreated": new Date().toISOString(),
            "dateModified": new Date().toISOString(),
            "mainEntity": {
              "@type": "Person",
              "name": "Tims Tittus",
              "alternateName": "Tims",
              "url": canonicalUrl,
              "image": socialImageUrl,
              "jobTitle": "Engineering, CyberSecurity Student & Polymath",
              "description": siteDescription,
              "sameAs": [
                "https://github.com/TimsTittus",
                "https://www.linkedin.com/in/tims-tittus/"

              ]
            }
          })}
        </script>
      </Helmet>

      <section className="min-h-[80vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="block text-purple-600 mb-2" style={{ fontSize: '22px' }}>Hello, I'm</span>
              <span className="btn -shine">Tims Tittus</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-400">
              Engineering, CyberSecurity Student & Polymath
            </h2>
            <p className="text-gray-400 max-w-2xl mt-6 text-lg">
            I build secure, efficient solutions, blending coding, design, and cybersecurity skills as a modern polymath.
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
          {/* <div className="lg:col-span-4 hidden lg:block">
            <div className="relative">
              <div className="w-full h-96 bg-dark-light rounded-lg border border-purple-600/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/assets/hiddenimage.png"
                    alt="A visual representation for Tims Tittus's portfolio"
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
            
      <section className="py-16 border-t border-purple-600/10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <p className="text-gray-400">Some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(project => project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="bg-dark-light border border-purple-600/10 rounded-lg overflow-hidden hover:border-purple-600/90 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="h-48 bg-dark-lighter flex items-center justify-center relative overflow-hidden flex-shrink-0">
                <span className="text-5xl text-gold/20">{project.image}</span>
                {project.featured && (
                  <span className="absolute top-3 right-3 bg-purple-600 text-dark px-2 py-1 text-xs font-bold rounded">
                    Featured
                  </span>
                )}
              </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-dark rounded text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-600 transition-colors duration-300"
                          aria-label="GitHub repository"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.links.live && (
                        <a 
                          href={project.links.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-600 transition-colors duration-300"
                          aria-label="Live project"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
 
        <div className="mt-10 flex justify-center">
          <Link to="/projects">
                <button className="button flex items-center gap-2">
                  View All Projects
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
      </section>
      
      <section className="py-16 border-t border-purple-600/10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Skills & Expertise</h2>
          <p className="text-gray-400">Technologies I work with</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            'Speaker', 'Networking', 'Full-Stack', 'Creative Designing', 
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