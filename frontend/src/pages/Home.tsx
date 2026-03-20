import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Mail } from 'lucide-react';
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
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-nb-black mb-4">
              Featured <span className="text-nb-purple">Projects</span>
            </h2>
            <p className="text-lg sm:text-xl font-bold text-nb-black/70 max-w-xl italic">Some of my recent work that defines my engineering journey.</p>
          </div>
          <Link to="/projects" className="group relative">
            <div className="absolute inset-0 bg-nb-black translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></div>
            <div className="relative px-6 py-2 bg-nb-yellow border-2 border-nb-black font-black uppercase text-lg group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all">
              View All
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.filter(project => project.featured)
            .map((project, idx) => (
              <div
                key={project.id}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-nb-black translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
                <div className="relative bg-white border-4 border-nb-black h-full flex flex-col group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all overflow-hidden">
                  <div className={`h-52 ${idx % 3 === 0 ? 'bg-nb-purple' : idx % 3 === 1 ? 'bg-nb-green' : 'bg-nb-blue'} border-b-4 border-nb-black flex items-center justify-center relative overflow-hidden flex-shrink-0`}>
                    <span className="text-7xl drop-shadow-[4px_4px_0px_#000]">{project.image}</span>
                    <span className="absolute top-4 right-4 bg-nb-yellow border-2 border-nb-black text-nb-black px-3 py-1 text-xs font-black uppercase tracking-widest">
                      Featured
                    </span>
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-3 text-nb-black">{project.title}</h3>
                    <p className="text-nb-black font-medium mb-6 flex-grow leading-relaxed text-sm sm:base">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 text-xs font-black uppercase border-2 border-nb-black ${tIdx % 2 === 0 ? 'bg-nb-cream' : 'bg-nb-yellow'} text-nb-black`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-nb-black/10">
                      <div className="flex items-center space-x-6">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-nb-black hover:text-nb-purple transition-all hover:scale-110"
                            aria-label="GitHub repository"
                          >
                            <Github size={24} strokeWidth={3} />
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-nb-black hover:text-nb-purple transition-all hover:scale-110"
                            aria-label="Live project"
                          >
                            <ExternalLink size={24} strokeWidth={3} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="py-24 border-t-4 border-nb-black">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-nb-black mb-4">
            Skills & <span className="bg-nb-yellow px-4 border-2 sm:border-4 border-nb-black shadow-nb-hard">Expertise</span>
          </h2>
          <p className="text-lg sm:text-xl font-bold text-nb-black/70 italic mt-6">Technologies and disciplines I've mastered over the years.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          {[
            { name: 'Speaker', color: 'bg-nb-purple' },
            { name: 'Networking', color: 'bg-nb-blue' },
            { name: 'Full-Stack', color: 'bg-nb-green' },
            { name: 'Designing', color: 'bg-nb-yellow' },
            { name: 'Cybersecurity', color: 'bg-nb-pink' },
            { name: 'Bug-Hunting', color: 'bg-nb-blue' },
            { name: 'UI/UX Design', color: 'bg-nb-purple' },
            { name: 'Leadership', color: 'bg-nb-green' }
          ].map((skill, idx) => (
            <div
              key={skill.name}
              className={`group relative ${idx % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'} hover:rotate-0 transition-transform`}
            >
              <div className="absolute inset-0 bg-nb-black translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-all"></div>
              <div className={`relative ${skill.color} border-4 border-nb-black p-2 sm:p-4 md:p-8 text-center group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all h-full flex items-center justify-center overflow-hidden aspect-square sm:aspect-auto min-h-[80px] sm:min-h-0`}>
                <h3 className="text-[11px] sm:text-base md:text-xl lg:text-2xl font-black uppercase tracking-tight text-nb-black break-all sm:break-words w-full px-1 leading-tight whitespace-normal">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;