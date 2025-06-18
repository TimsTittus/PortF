
import React from 'react';
import { Building, Calendar, Award, BookOpen } from 'lucide-react';

const workExperience = [
  {
    id: 1,
    title: 'Web Master',
    company: 'IEEE SB SJCET',
    period: 'April 2025 - Present',
    description: 'Oversee the maintenance, design, and functionality of the IEEE SB SJCET website to enhance member engagement and promote events.',
    responsibilities: [
      'Updated IEEE SB SJCET website with timely event details and content',
      'Resolved website and tech issues, ensuring optimal IEEE SB SJCET performance',
      'Designed user-friendly web pages for enhanced accessibility and engagement',
      'Improved application performance, reducing load times by 40%',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    id: 2,
    title: 'IPR & Research Lead',
    company: 'Startup Bootcamp SJCET – IEDC',
    period: 'January 2025 – Present',
    description: 'Lead IP and research efforts to support student-led innovations and startup initiatives within SJCET’s Startup Bootcamp.',
    responsibilities: [
      'Guided teams in patent drafting, prior art searches, and technical documentation',
      'Organized IP awareness programs and research workshops for students',
      'Promoted a culture of innovation through structured IP support systems',
      'Collaborated with faculty and experts to offer research mentorship',
      'Facilitated technology disclosures and supported filing processes'
    ]
  },
  {
    id: 3,
    title: 'Assistant Network Technician',
    company: 'ITTA Cable Network – Kozhichal, Kannur',
    period: 'February 2022 – August 2024',
    description: 'Managed and optimized fiber network infrastructure, ensuring reliable connectivity, automation, and cross-functional collaboration.',
    responsibilities: [
      'Configured and optimized OLTs, routers, and fiber networks for improved performance',
      'Automated routine tasks using scripting and SQL tools to enhance operational efficiency',
      'Designed and deployed scalable network solutions with strong security protocols',
      'Reduced downtime through advanced troubleshooting and proactive maintenance',
      'Documented network architectures and provided technical training to support teams'
    ]
  },
  {
    id: 4,
    title: 'College Lead',
    company: 'HackTheBox Kerala',
    period: 'Mar 2025 - June 2025',
    description: 'Manage cybersecurity events, including CTFs and workshops, to build ethical hacking skills and promote awareness with HackTheBox Kerala.',
    responsibilities: [
      'Manage cybersecurity activities and encourage hacking skills on campus',
      'Run CTFs, workshops, and practical sessions to build ethical hacking skills',
      'Work with HackTheBox Kerala to raise cybersecurity awareness'
    ]
  },
  {
    id: 5,
    title: 'Cyber Lead, Core Team Member',
    company: 'The Nexus Project (FOSS Club)',
    period: 'November 2024 – Present',
    description: 'Support open-source initiatives and cybersecurity activities through events, workshops, and community collaboration at The Nexus Project.',
    responsibilities: [
      'Organized FOSS workshops and technical sessions promoting open-source culture',
      'Collaborated with peers to plan and execute college-wide tech activities',
      'Mentored juniors on Git, version control, and secure coding practices',
      'Helped grow community engagement and participation in open-source projects'
    ]
  },
  {
    id: 6,
    title: 'Vice-Chairperson',
    company: 'IEEE SIGHT SB SJCET',
    period: 'April 2025 – Present',
    description: 'Support planning and execution of community outreach and social impact projects under IEEE SIGHT, fostering collaboration and awareness.',
    responsibilities: [
      'Assisted in organizing and managing IEEE SIGHT community initiatives',
      'Promoted IEEE SIGHT goals through events and awareness campaigns',
      'Planned outreach programs focused on sustainable and impactful solutions',
      'Coordinated with internal teams and external partners for seamless execution'
    ]
  },
  {
    id: 7,
    title: 'Graphic Designer',
    company: 'IEEE SB SJCET',
    period: 'May 2024 – March 2025',
    description: 'Created engaging visual content for IEEE SB SJCET events and initiatives while maintaining brand consistency and timely delivery.',
    responsibilities: [
      'Designed event posters, social media graphics, and promotional materials',
      'Used Figma, Photoshop, and Illustrator to produce high-quality visuals',
      'Ensured compliance with IEEE branding guidelines across all designs',
      'Collaborated with event teams to deliver assets on schedule'
    ]
  }
];

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
            <Building className="mr-2 text-purple-600" />
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
                    <div className="flex items-center text-purple-600 mt-1">
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
            <Award className="mr-2 text-purple-600" />
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
                      <span className="text-purple-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple-400"
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
                      <span className="text-purple-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple-400"
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
                      <span className="text-purple-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple-400"
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
            <BookOpen className="mr-2 text-purple-600" />
            Education & Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-dark-light border border-gold/10 rounded-lg">
              <h3 className="text-xl font-bold">BSc in Computer Science</h3>
              <p className="text-purple-600">University Name • 2015-2019</p>
              <p className="text-gray-400 mt-2">
                Studied algorithms, data structures, software engineering principles, and UI/UX design fundamentals.
              </p>
            </div>
            
            <div className="p-6 bg-dark-light border border-gold/10 rounded-lg">
              <h3 className="text-xl font-bold">Frontend Web Development Certification</h3>
              <p className="text-purple-600">Tech Academy • 2020</p>
              <p className="text-gray-400 mt-2">
                Advanced training in modern JavaScript frameworks, responsive design, and web performance optimization.
              </p>
            </div>
            
            <div className="p-6 bg-dark-light border border-gold/10 rounded-lg">
              <h3 className="text-xl font-bold">UI/UX Design Professional Certificate</h3>
              <p className="text-purple-600">Design Institute • 2021</p>
              <p className="text-gray-400 mt-2">
                Comprehensive training in user research, information architecture, interaction design, and prototyping.
              </p>
            </div>
            
            <div className="p-6 bg-dark-light border border-gold/10 rounded-lg">
              <h3 className="text-xl font-bold">Certified Scrum Master</h3>
              <p className="text-purple-600">Scrum Alliance • 2022</p>
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
