
import * as React from 'react';
import { Download, Code, PenTool, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="container mx-auto max-w-5xl">
      <section className="py-12">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <div className="bg-dark-light border border-purple-900 rounded-lg p-1 sticky top-24">
              <div className="aspect-square bg-dark-lighter rounded-lg flex items-center justify-center">
                <span className="text-6xl text-purple-900">: )</span>
              </div>
              
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold">Tims Tittus</h2>
                <p className="text-purple-600 text-sm">CyberSecurity Student & Ideal Generalist</p>
                
                <div className="mt-4">
                  <a 
                    href="/assets/Tims_Resume.pdf" 
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
                  I'm a developer and designer driven by a singular goal—crafting seamless, efficient, and meaningful digital experiences. With a solid foundation in networking, web development, and a growing expertise in cybersecurity, I approach every project with both structure and soul. My work is where logic meets intuition, and every line of code is written with intention.
                  </p>
                  <p>
                  My journey began in the world of hardware and networks, later expanding into UI/UX design, automation, and ethical hacking. I'm currently deepening my skills in cybersecurity and serve as the college lead for Hack The Box, where I explore offensive security, vulnerability analysis, and red teaming. Over the years, I’ve led and collaborated on projects ranging from secure automation tools to clean, user-focused front ends—always with a focus on clarity and impact.
                  </p>
                  <p>
                  Outside the screen, I explore human behavior through psychology books, ground myself in the gym, and capture fleeting moments through a lens. I'm not just building digital solutions—I'm decoding how people experience, trust, and interact with them.
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
                    <p className="text-gray-400">Building responsive and optimized web applications using modern technologies and best practices.</p>
                  </div>  
                                  
                  <div className="p-6 bg-dark-light border border-purple-900 rounded-lg transform transition-all duration-300 ease-in-out hover:bg-purple-950 hover:scale-105 hover:shadow-xl">
                    <div className="w-12 h-12 bg-dark-lighter rounded-full flex items-center justify-center text-purple-600 mb-4">
                      <PenTool size={24} />
                    </div>
                    <h3 className="text-purple-300 text-xl font-bold mb-2">UI/UX Design</h3>
                    <p className="text-gray-400">Creating intuitive interfaces and meaningful user experiences that balance form and function.</p>
                  </div>
                  
                  <div className="p-6 bg-dark-light border border-purple-900 rounded-lg transform transition-all duration-300 ease-in-out hover:bg-purple-950 hover:scale-105 hover:shadow-xl">
                    <div className="w-12 h-12 bg-dark-lighter rounded-full flex items-center justify-center text-purple-600 mb-4">
                      <Globe size={24} />
                    </div>
                    <h3 className="text-purple-300 text-xl font-bold mb-2">Cybersecurity</h3>
                    <p className="text-gray-400">Securing systems through defense and ethical offense, identifying vulnerabilities, mitigating threats, and ensuring digital trust in an ever-evolving threat landscape.</p>
                  </div>
                  
                  <div className="p-6 bg-dark-light border border-purple-900 rounded-lg transform transition-all duration-300 ease-in-out hover:bg-purple-950 hover:scale-105 hover:shadow-xl">
                    <div className="w-12 h-12 bg-dark-lighter rounded-full flex items-center justify-center text-purple-600 mb-4">
                      <Zap size={24} />
                    </div>
                    <h3 className="text-purple-300 text-xl font-bold mb-2">Leadership & Collaboration</h3>
                    <p className="text-gray-400">Active across IEEE SB SJCET, HackTheBox, IEDC, FOSS Club, and more—leading by example, fostering collaboration, and driving innovation through community, code, and initiative.</p>
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
                    <p className="text-gray-400 mt-2">Focused on corew subjects like Mathematics, Physics, Chemistry, and Computer Science—strengthened analytical thinking,
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
