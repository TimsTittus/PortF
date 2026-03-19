import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Download, Code, PenTool, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {

  const baseUrl = 'https://timstittus.vercel.app';
  const pageUrl = `${baseUrl}/about`;
  const pageTitle = 'About Tims Tittus | CyberSecurity & Engineering';
  const pageDescription = 'Learn about Tims Tittus, a full-stack developer, UI/UX designer, and public speaker with expertise in networking, web development, and cybersecurity.';
  const socialImageUrl = `${baseUrl}/assets/hiddenimage.png`;

  return (
    <div className="container mx-auto max-w-5xl">

      {/* 3. Add the Helmet component for SEO */}
      <Helmet>
        {/* --- Primary Meta Tags --- */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />

        {/* --- Open Graph / Social Media --- */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={socialImageUrl} />

        {/* --- Twitter Card --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={socialImageUrl} />

        {/* --- Structured Data (JSON-LD) --- */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": pageTitle,
            "description": pageDescription,
            "url": pageUrl,
            "mainEntity": {
              "@type": "Person",
              "name": "Tims Tittus",
              "jobTitle": "Engineering CyberSecurity Student & Polymath",
              "url": baseUrl,
              "image": socialImageUrl,
              "sameAs": [
                "https://github.com/TimsTittus",
                "https://www.linkedin.com/in/tims-tittus/"
              ]
            }
          })}
        </script>
      </Helmet>

      <section className="py-12">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 sticky top-24">
            <div className="group relative">
              <div className="absolute inset-0 bg-nb-black translate-x-3 translate-y-3 transition-all"></div>
              <div className="relative bg-white border-4 border-nb-black p-1 transition-all overflow-hidden shadow-nb-hard">
                <div className="aspect-square bg-nb-purple border-b-4 border-nb-black flex items-center justify-center overflow-hidden">
                  <span className="text-8xl drop-shadow-[4px_4px_0px_#000]">: )</span>
                </div>

                <div className="p-6 text-center">
                  <h2 className="text-2xl font-black uppercase tracking-tight text-nb-black">Tims Tittus</h2>
                  <p className="text-nb-purple font-black text-sm uppercase mt-1">Engineering Polymath</p>

                  <div className="mt-6">
                    <a
                      href="/assets/Resume.pdf"
                      download="TimsTittus_Resume.pdf"
                      className="group relative inline-block w-full"
                    >
                      <div className="absolute inset-0 bg-nb-black translate-x-1 translate-y-1 transition-all"></div>
                      <div className="relative bg-nb-yellow border-2 border-nb-black px-4 py-2 text-nb-black font-black uppercase text-sm flex items-center justify-center gap-2 hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all">
                        <Download size={18} strokeWidth={3} />
                        Download CV
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="space-y-16">
              <div>
                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-nb-black mb-8">
                  About <span className="text-nb-purple">Me</span>
                </h1>
                <div className="space-y-6 text-xl font-bold text-nb-black leading-relaxed">
                  <p>
                    I’m a full-stack developer, UI/UX designer, and public speaker with expertise in networking, web development, and cybersecurity. I’ve contributed to ethical hacking projects, mentorship programs, and collaborative applications that combine security with usability.
                  </p>
                  <p className="bg-nb-cream p-6 border-l-8 border-nb-purple">
                    I lead multiple professional societies and hold key roles in executive committees, driving technology initiatives and student-led projects within and beyond my college.
                  </p>
                  <p>
                    Outside of technology, I enjoy reading, traveling, networking, and exploring diverse hobbies that expand my skills and perspectives.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-nb-black mb-8">What I <span className="bg-nb-green px-2 border-2 border-nb-black">Do</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { title: "Web Development", desc: "Building responsive and optimized web applications using modern technologies and best practices.", icon: <Code size={28} strokeWidth={3} />, color: "bg-nb-purple" },
                    { title: "UI/UX Design", desc: "Creating intuitive interfaces and meaningful user experiences that balance form and function.", icon: <PenTool size={28} strokeWidth={3} />, color: "bg-nb-yellow" },
                    { title: "Cybersecurity", desc: "Securing systems by identifying vulnerabilities, mitigating threats, and ensuring digital trust.", icon: <Globe size={28} strokeWidth={3} />, color: "bg-nb-blue" },
                    { title: "Leadership", desc: "Active in IEEE SB SJCET, HackTheBox, and more, leading and driving innovation.", icon: <Zap size={28} strokeWidth={3} />, color: "bg-nb-green" }
                  ].map((item) => (
                    <div key={item.title} className="group relative">
                      <div className="absolute inset-0 bg-nb-black translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-all"></div>
                      <div className="relative bg-white border-4 border-nb-black p-8 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all h-full">
                        <div className={`w-14 h-14 ${item.color} border-2 border-nb-black flex items-center justify-center text-nb-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                          {item.icon}
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-3 text-nb-black">{item.title}</h3>
                        <p className="text-nb-black font-medium leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-nb-black mb-8">Education</h2>
                <div className="space-y-8">
                  {[
                    {
                      title: "BTech in Computer Science (Cybersecurity)",
                      loc: "SJCET Palai • 2023-2027",
                      desc: "Specialized in cybersecurity, ethical hacking, and secure software design.",
                      color: "border-nb-purple"
                    },
                    {
                      title: "Higher Secondary Education",
                      loc: "St Marys Convent School • 2021-2023",
                      desc: "Focused on Mathematics, Physics, and Computer Science.",
                      color: "border-nb-yellow"
                    }
                  ].map((edu) => (
                    <div key={edu.title} className={`p-8 bg-white border-4 border-nb-black ${edu.color} shadow-nb-hard`}>
                      <h3 className="text-2xl font-black uppercase tracking-tight text-nb-black">{edu.title}</h3>
                      <p className="text-nb-purple font-black uppercase text-sm mt-1">{edu.loc}</p>
                      <p className="text-nb-black font-medium mt-4 text-lg leading-relaxed">{edu.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;