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
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <div className="bg-dark-light border border-purple-900 rounded-lg p-1 sticky top-24">
              <div className="aspect-square bg-dark-lighter rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-6xl text-purple-900">: )</span>
                {/* <img 
                    src="/assets/your-profile-photo.jpg" 
                    alt="Tims Tittus"
                    className="w-full h-full object-cover"
                  />
                */}
              </div>
              
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold">Tims Tittus</h2>
                <p className="text-purple-600 text-sm">Engineering CyberSecurity Student & Polymath</p>
                
                <div className="mt-4">
                  <a 
                    href="/assets/Resume.pdf" 
                    download="TimsTittus_Resume.pdf"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-purple-600 text-dark font-medium rounded text-sm hover:bg-purple-400 transition-colors duration-300"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="space-y-8">
              <div>
                <h1 className="text-purple-600 text-3xl sm:text-4xl font-bold mb-6">About Me</h1>
                <div className="space-y-4 text-gray-300">
                  <p>
                    I’m a full-stack developer, UI/UX designer, and public speaker with expertise in networking, web development, and cybersecurity. I’ve contributed to ethical hacking projects, mentorship programs, and collaborative applications that combine security with usability.
                  </p>
                  <p>
                    I lead multiple professional societies and hold key roles in executive committees, driving technology initiatives and student-led projects within and beyond my college.
                  </p>
                  <p>
                    Outside of technology, I enjoy reading, traveling, networking, and exploring diverse hobbies that expand my skills and perspectives.
                  </p>

                </div>
              </div>
              
              <div>
                <h2 className="text-purple-600 text-2xl font-bold mb-4">What I Do</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-dark-light border border-purple-900 rounded-lg transform transition-all duration-300 ease-in-out hover:bg-purple-950 hover:scale-105 hover:shadow-xl">
                  <div className="w-12 h-12 bg-dark-lighter rounded-full flex items-center justify-center text-purple-600 mb-4">
                    <Code size={24} />
                  </div>
                    <h3 className="text-purple-300 text-xl font-bold mb-2">Web Development</h3>
                    <p className="text-gray-400">
                      Building responsive and optimized web applications using modern technologies and best practices.
                    </p>
                  </div>  
                                  
                  <div className="p-6 bg-dark-light border border-purple-900 rounded-lg transform transition-all duration-300 ease-in-out hover:bg-purple-950 hover:scale-105 hover:shadow-xl">
                    <div className="w-12 h-12 bg-dark-lighter rounded-full flex items-center justify-center text-purple-600 mb-4">
                      <PenTool size={24} />
                    </div>
                    <h3 className="text-purple-300 text-xl font-bold mb-2">UI/UX Design</h3>
                    <p className="text-gray-400">
                      Creating intuitive interfaces and meaningful user experiences that balance form and function.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-dark-light border border-purple-900 rounded-lg transform transition-all duration-300 ease-in-out hover:bg-purple-950 hover:scale-105 hover:shadow-xl">
                    <div className="w-12 h-12 bg-dark-lighter rounded-full flex items-center justify-center text-purple-600 mb-4">
                      <Globe size={24} />
                    </div>
                    <h3 className="text-purple-300 text-xl font-bold mb-2">Cybersecurity</h3>
                    <p className="text-gray-400">
                      Securing systems by identifying vulnerabilities, mitigating threats, and ensuring digital trust.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-dark-light border border-purple-900 rounded-lg transform transition-all duration-300 ease-in-out hover:bg-purple-950 hover:scale-105 hover:shadow-xl">
                    <div className="w-12 h-12 bg-dark-lighter rounded-full flex items-center justify-center text-purple-600 mb-4">
                      <Zap size={24} />
                    </div>
                    <h3 className="text-purple-300 text-xl font-bold mb-2">Leadership & Collaboration</h3>
                    <p className="text-gray-400">
                      Active in IEEE SB SJCET, HackTheBox, IEDC, FOSS Club, and various other clubs and organizations, leading, collaborating, and driving innovation.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-purple-600 text-2xl font-bold mb-4">Education</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-dark-light border border-gold/10 rounded-lg">
                    <h3 className="font-bold">BTech in Computer Science & Engineering (Cybersecurity)</h3>
                    <p className="text-purple-600 text-sm">SJCET Palai • 2023-2027</p>
                    <p className="text-gray-400 mt-2">Specialized in cybersecurity, including ethical hacking, network security, cryptography, and secure software design.
                        Developed expertise in algorithms, data structures, and software engineering principles, while gaining hands-on experience in vulnerability analysis, penetration testing, and defense strategies.</p>
                  </div>
                  
                  <div className="p-4 bg-dark-light border border-gold/10 rounded-lg">
                    <h3 className="font-bold">Higher Secondary Education</h3>
                    <p className="text-purple-600 text-sm">St Marys Convent School Alakode • 2021-2023</p>
                    <p className="text-gray-400 mt-2">Focused on core subjects like Mathematics, Physics, Chemistry, and Computer Science, strengthened analytical thinking,
                        problem-solving, and a foundational understanding of computational systems.</p>
                  </div>
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