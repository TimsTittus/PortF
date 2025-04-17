
import * as React from 'react';
import { Download, Code, PenTool, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="container mx-auto max-w-5xl">
      <section className="py-12">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <div className="bg-dark-light border border-gold/20 rounded-lg p-1 sticky top-24">
              <div className="aspect-square bg-dark-lighter rounded-lg flex items-center justify-center">
                <span className="text-6xl text-gold/20">YN</span>
              </div>
              
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold">Your Name</h2>
                <p className="text-gold text-sm">Developer & Designer</p>
                
                <div className="mt-4">
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-gold text-dark font-medium rounded text-sm hover:bg-gold-light transition-colors duration-300"
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
                <h1 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h1>
                <div className="space-y-4 text-gray-300">
                  <p>
                    I'm a passionate developer and designer with a strong focus on creating clean, efficient, and user-friendly digital experiences. With over 5 years of experience in the industry, I've developed a deep understanding of both the technical and aesthetic aspects of digital product development.
                  </p>
                  <p>
                    My journey began with a fascination for how technology and design intersect to solve real-world problems. This curiosity led me to pursue a degree in Computer Science, followed by specialized training in UI/UX design.
                  </p>
                  <p>
                    When I'm not coding or designing, you'll find me experimenting with photography, exploring hiking trails, or diving into a good book on technology and design thinking.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">What I Do</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-dark-light border border-gold/10 rounded-lg">
                    <div className="w-12 h-12 bg-dark-lighter rounded-full flex items-center justify-center text-gold mb-4">
                      <Code size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Web Development</h3>
                    <p className="text-gray-400">Building responsive and optimized web applications using modern technologies and best practices.</p>
                  </div>
                  
                  <div className="p-6 bg-dark-light border border-gold/10 rounded-lg">
                    <div className="w-12 h-12 bg-dark-lighter rounded-full flex items-center justify-center text-gold mb-4">
                      <PenTool size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                    <p className="text-gray-400">Creating intuitive interfaces and meaningful user experiences that balance form and function.</p>
                  </div>
                  
                  <div className="p-6 bg-dark-light border border-gold/10 rounded-lg">
                    <div className="w-12 h-12 bg-dark-lighter rounded-full flex items-center justify-center text-gold mb-4">
                      <Globe size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">SEO Optimization</h3>
                    <p className="text-gray-400">Improving visibility and searchability to reach the right audience and achieve business goals.</p>
                  </div>
                  
                  <div className="p-6 bg-dark-light border border-gold/10 rounded-lg">
                    <div className="w-12 h-12 bg-dark-lighter rounded-full flex items-center justify-center text-gold mb-4">
                      <Zap size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Performance Tuning</h3>
                    <p className="text-gray-400">Optimizing applications for speed and efficiency to provide the best user experience.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Education & Certifications</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-dark-light border border-gold/10 rounded-lg">
                    <h3 className="font-bold">BSc in Computer Science</h3>
                    <p className="text-gold text-sm">University Name • 2015-2019</p>
                    <p className="text-gray-400 mt-2">Studied algorithms, data structures, software engineering principles, and UI/UX design fundamentals.</p>
                  </div>
                  
                  <div className="p-4 bg-dark-light border border-gold/10 rounded-lg">
                    <h3 className="font-bold">Frontend Web Development Certification</h3>
                    <p className="text-gold text-sm">Tech Academy • 2020</p>
                    <p className="text-gray-400 mt-2">Advanced training in modern JavaScript frameworks, responsive design, and web performance optimization.</p>
                  </div>
                  
                  <div className="p-4 bg-dark-light border border-gold/10 rounded-lg">
                    <h3 className="font-bold">UI/UX Design Professional Certificate</h3>
                    <p className="text-gold text-sm">Design Institute • 2021</p>
                    <p className="text-gray-400 mt-2">Comprehensive training in user research, information architecture, interaction design, and prototyping.</p>
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
