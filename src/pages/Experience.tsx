
import React from 'react';
import { Building, Calendar, Award, BookOpen } from 'lucide-react';

// Work experience data
const workExperience = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc',
    period: 'Jan 2022 - Present',
    description: 'Leading the development of the company\'s main product, managing a team of 3 developers, and implementing new features and improvements.',
    responsibilities: [
      'Architected and developed responsive, accessible web applications using React, TypeScript, and Tailwind CSS',
      'Implemented state management solutions using Redux and Context API',
      'Optimized application performance leading to a 40% improvement in load times',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    id: 2,
    title: 'UI/UX Developer',
    company: 'Creative Agency',
    period: 'Mar 2020 - Dec 2021',
    description: 'Collaborated with designers and developers to create intuitive user interfaces and seamless user experiences for various client projects.',
    responsibilities: [
      'Translated design mockups into responsive, pixel-perfect interfaces',
      'Conducted user research and usability testing to identify pain points',
      'Created interactive prototypes and design systems',
      'Worked directly with clients to gather requirements and present solutions'
    ]
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'Startup Innovations',
    period: 'Jun 2018 - Feb 2020',
    description: 'Worked on building and maintaining the company\'s web application, focusing on frontend functionality and user interface improvements.',
    responsibilities: [
      'Developed and maintained client-side applications using JavaScript, HTML, and CSS',
      'Collaborated with backend developers to integrate APIs and ensure data consistency',
      'Implemented responsive designs and ensured cross-browser compatibility',
      'Participated in agile development processes including sprint planning and retrospectives'
    ]
  }
];

// Skills data
const skills = {
  technical: [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'Git', level: 85 }
  ],
  design: [
    { name: 'UI Design', level: 80 },
    { name: 'UX Research', level: 75 },
    { name: 'Figma/Sketch', level: 85 },
    { name: 'Responsive Design', level: 90 }
  ],
  soft: [
    { name: 'Communication', level: 90 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Team Collaboration', level: 95 },
    { name: 'Time Management', level: 80 },
    { name: 'Adaptability', level: 90 }
  ]
};

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto max-w-5xl">
      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A detailed overview of my professional journey, skills, and expertise.
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Building className="mr-2 text-gold" />
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div 
                key={job.id} 
                className="relative p-6 bg-dark-light border border-gold/10 rounded-lg"
              >
                {index < workExperience.length - 1 && (
                  <div className="absolute bottom-0 left-8 w-0.5 h-8 bg-gold/20 -mb-8"></div>
                )}
                
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <div className="flex items-center text-gold mt-1">
                      <Building size={16} className="mr-1" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center text-gray-400 mt-1">
                      <Calendar size={16} className="mr-1" />
                      <span>{job.period}</span>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    <h4 className="font-bold mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                      {job.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Award className="mr-2 text-gold" />
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="space-y-4">
                {skills.technical.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-gold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gold"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Design Skills</h3>
              <div className="space-y-4">
                {skills.design.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-gold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gold"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-8">Soft Skills</h3>
              <div className="space-y-4">
                {skills.soft.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-gold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gold"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BookOpen className="mr-2 text-gold" />
            Education & Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-dark-light border border-gold/10 rounded-lg">
              <h3 className="text-xl font-bold">BSc in Computer Science</h3>
              <p className="text-gold">University Name • 2015-2019</p>
              <p className="text-gray-400 mt-2">
                Studied algorithms, data structures, software engineering principles, and UI/UX design fundamentals.
              </p>
            </div>
            
            <div className="p-6 bg-dark-light border border-gold/10 rounded-lg">
              <h3 className="text-xl font-bold">Frontend Web Development Certification</h3>
              <p className="text-gold">Tech Academy • 2020</p>
              <p className="text-gray-400 mt-2">
                Advanced training in modern JavaScript frameworks, responsive design, and web performance optimization.
              </p>
            </div>
            
            <div className="p-6 bg-dark-light border border-gold/10 rounded-lg">
              <h3 className="text-xl font-bold">UI/UX Design Professional Certificate</h3>
              <p className="text-gold">Design Institute • 2021</p>
              <p className="text-gray-400 mt-2">
                Comprehensive training in user research, information architecture, interaction design, and prototyping.
              </p>
            </div>
            
            <div className="p-6 bg-dark-light border border-gold/10 rounded-lg">
              <h3 className="text-xl font-bold">Certified Scrum Master</h3>
              <p className="text-gold">Scrum Alliance • 2022</p>
              <p className="text-gray-400 mt-2">
                Certification in agile methodologies, team facilitation, and iterative development processes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
