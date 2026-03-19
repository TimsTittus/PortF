import React, { useState } from 'react';
import { ExternalLink, Github, Trophy, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const projects = [
  {
    id: 10,
    title: 'Audio Adversarial Attack Generator',
    description: 'Built a white-box adversarial tool in PyTorch with Wav2Vec2 that uses mathematical optimization to embed inaudible hidden voice commands into audio, deceiving ASR systems while remaining imperceptible to humans.',
    image: '',
    tags: ['Python', 'PyTorch', 'Adversarial ML', 'HuggingFace', 'Audio Signal Processing', 'Cybersecurity'],
    links: {
      github: 'https://github.com/TimsTittus/Audio-Adversarial-Attack-Generator'
    },
    featured: true
  },
  {
    id: 11,
    title: 'MonkeyPen.ai',
    description: 'AI-powered tool that converts text into realistic handwritten output, offering 50+ handwriting styles, real-time previews, and multi-format export options.',
    image: '',
    tags: ['Python', 'Ai', 'Machine Learning', 'Flask', 'OpenCV', 'TypeScript', 'React'],
    links: {
      github: 'https://github.com/TimsTittus/MonkeyPen-Site'
    },
    featured: true
  },
  {
    id: 12,
    title: 'ORVANE',
    description: 'Secure browser extension for end-to-end encrypted messaging using AES with ECDH key exchange, password protection, and a backend for managing secure sessions.',
    image: '',
    tags: ['HTML/CSS', 'JavaScript', 'Chrome Extension', 'Cryptography', 'Security', 'Encryption'],
    links: {
      github: 'https://github.com/TimsTittus/Orvane'
    },
    featured: true
  },
  {
    id: 4,
    title: 'Asthra-CTF',
    description: 'Developed a complete CTF platform from scratch with my team for the national tech fest Asthra.',
    image: '',
    tags: ['HTML/CSS', 'JavaScript', 'Python', 'Docker', 'CTF', 'Security'],
    links: {
      github: 'https://github.com/Cyber-Security-Association-SJCET/asthra-ctf'
    },
    featured: false
  },
  {
    id: 1,
    title: 'Steg Tool',
    description: 'A steganography tool that allows you to hide and extract messages within images.',
    image: '',
    tags: ['Python', 'Cryptography', 'Streamlit', 'Security'],
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
    image: '',
    tags: ['HTML/CSS', 'JavaScript', 'Chrome Extension'],
    links: {
      live: 'https://homechime.vercel.app/',
      github: 'https://github.com/TimsTittus/HomeChime'
    },
    featured: false
  },
  {
    id: 3,
    title: 'WEBVNR Desktop',
    description: 'Python + Qt app to test web endpoints for SQLi, XSS, and sensitive data leaks with custom payloads and results.',
    image: '',
    tags: ['Python', 'PyQt', 'Desktop App', 'Security'],
    links: {
      live: '',
      github: 'https://github.com/TimsTittus/WEBVNR'
    },
    featured: true
  },
  {
    id: 5,
    title: '404-Extension',
    description: 'Chrome extension that tracks 404 error page visits, saves their history and count locally, and displays both in a popup.',
    image: '',
    tags: ['HTML/CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/TimsTittus/404-Extension'
    },
    featured: false
  },
  {
    id: 6,
    title: 'Parking Mangement System',
    description: 'Helps us to enter, display or alter the details of vehicles in parking records.',
    image: '',
    tags: ['Python', 'MySQL'],
    links: {
      github: 'https://github.com/TimsTittus/Parking-Management-System'
    },
    featured: false
  },
  {
    id: 7,
    title: 'Sjcet Events',
    description: 'Contributed to this platform for managing and viewing events happening at SJCET',
    image: '',
    tags: ['OpenSource', 'HTML/CSS', 'JavaScript', 'Vue'],
    links: {
      live: 'https://sjcet-events.vercel.app/',
      github: 'https://github.com/TimsTittus/Sjcet-Events'
    },
    featured: false
  },
  {
    id: 8,
    title: 'Print-Shop',
    description: 'OpenSource web application developed to improve efficiency of printing services within a college environment.',
    image: '',
    tags: ['OpenSource', 'CSS', 'Python', 'Mako', 'TypeScript'],
    links: {
      live: 'https://github.com/TimsTittus/PortF',
      github: 'https://github.com/TimsTittus/PortF'
    },
    featured: false
  },
  {
    id: 9,
    title: 'Portfolio Website',
    description: 'A minimalist portfolio website crafted to highlight my technical projects and creative work.',
    image: '',
    tags: ['HTML/CSS', 'React', 'Vite', 'JavaScript'],
    links: {
      live: 'https://github.com/TimsTittus/PortF',
      github: 'https://github.com/TimsTittus/PortF'
    },
    featured: false
  }
];

const achievements = [
  {
    id: 1,
    title: "Hackathon Winner",
    description: "Won Kerala Police Cyberdome International Hackathon with Outstanding performance award.",
    icon: <Trophy className="w-6 h-6 text-purple-500" />
  },
  {
    id: 2,
    title: "Smart India Hackathon 2nd Place",
    description: "Secured 2nd place at Smart India Hackathon Prelims 2024 among 45+ teams.",
    icon: <Trophy className="w-6 h-6 text-purple-500" />
  },
  {
    id: 3,
    title: "Open Source Contributor & Maintainer",
    description: "Contributed to many open source projects inside & outside college.",
    icon: <Star className="w-6 h-6 text-purple-500" />
  },
  {
    id: 4,
    title: "Lead & Execom Member",
    description: "Holding lead & other main positions in various professional clubs and communities.",
    icon: <Award className="w-6 h-6 text-purple-500" />
  }
];

const categories = [
  'All',
  ...Array.from(new Set(projects.flatMap(project => project.tags))).sort()
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="container mx-auto max-w-6xl">

      {/* SEO structured data.*/}
      <Helmet>
        <title>My Projects & Achievements</title>
        <meta name="description" content="A curated selection of my projects, skills, and achievements." />
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
            "achievement": achievements.map(a => ({
              "@type": "Achievement",
              "name": a.title,
              "description": a.description
            }))
          })}
        </script>
      </Helmet>

      {/* Projects Section */}
      <section className="py-12">
        <div className="text-center mb-16 px-4">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-nb-black mb-6">My <span className="text-nb-purple">Projects</span></h1>
          <p className="text-lg sm:text-xl font-bold text-nb-black/70 max-w-2xl mx-auto italic">
            A curated selection of my projects showcasing my skills in development, design, and problem-solving.
          </p>
        </div>

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
            <div
              key={project.id}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-nb-black translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
              <div className="relative bg-white border-4 border-nb-black h-full flex flex-col group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all overflow-hidden">
                <div className={`h-48 ${idx % 3 === 0 ? 'bg-nb-purple' : idx % 3 === 1 ? 'bg-nb-green' : 'bg-nb-blue'} border-b-4 border-nb-black flex items-center justify-center relative overflow-hidden flex-shrink-0`}>
                  <span className="text-6xl drop-shadow-[4px_4px_0px_#000]">{project.image || '🚀'}</span>
                  {project.featured && (
                    <span className="absolute top-3 right-3 bg-nb-yellow border-2 border-nb-black text-nb-black px-3 py-1 text-xs font-black uppercase">
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-3 text-nb-black">{project.title}</h3>
                  <p className="text-nb-black font-medium mb-6 flex-grow leading-relaxed text-sm sm:base">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tag} className={`px-3 py-1 text-xs font-black uppercase border-2 border-nb-black ${tIdx % 2 === 0 ? 'bg-nb-cream' : 'bg-nb-yellow'} text-nb-black`}>
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

      {/* Achievements Section*/}
      <section className="py-24 border-t-4 border-nb-black mt-12" id="achievements">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-nb-black mb-4">Achievements</h2>
          <p className="text-lg sm:text-xl font-bold text-nb-black/70 max-w-2xl mx-auto italic">
            A glimpse of milestones and recognitions I’ve earned along my journey.
          </p>
        </div>

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