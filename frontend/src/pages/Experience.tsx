import React from 'react';
import { Building, Calendar, Award, BookOpen } from 'lucide-react';

const workExperience = [
  {
    id: 1,
    title: 'Web Master',
    company: 'IEEE SB SJCET',
    period: 'April 2025 - Present',
    description: 'Maintain and develop the IEEE SB SJCET websites, ensuring reliable performance, clear design, and up-to-date event details.',
    responsibilities: [
      'Maintained and updated the IEEE SB SJCET websites with event content',
      'Resolved technical issues and optimized performance (40% faster load times)',
      'Designed accessible pages and mentored junior developers'
    ]
  },
  {
    id: 2,
    title: 'MERN Stack Developer',
    company: 'BRIK Community – Remote',
    period: 'June 2025 – Present',
    description: 'Develop scalable full-stack web applications with optimized performance, strong security, and excellent user experience.',
    responsibilities: [
      'Build and optimize community web projects with the MERN stack (MongoDB, Express.js, React, Node.js)',
      'Collaborate in student teams on real-world full-stack applications',
      'Improve site performance, cutting load times by 30%'
    ]
  },
  {
    id: 3,
    title: 'Mentor, Internship',
    company: 'TheNexusProject (SJCET Bootcamp)',
    period: 'June 2025 – July 2025',
    description: 'Led student interns in creating a lightweight web platform with optimized UI/UX, frontend, and backend workflows.',
    responsibilities: [
      'Mentored interns through UI/UX, frontend, and backend development best practices',
      'Reviewed progress, gave technical feedback, and resolved issues across the development cycle',
      'Guided project planning and code reviews to deliver a functional web platform'
    ]
  },
  {
    id: 4,
    title: 'Assistant Network Technician',
    company: 'ITTA Cable Network – Kozhichal, Kannur',
    period: 'February 2022 – August 2024',
    description: 'Managed and optimized fiber network infrastructure for reliable, automated connectivity.',
    responsibilities: [
      'Configure and optimize OLTs, routers, and fiber networks for high performance',
      'Automate network tasks with scripting and SQL to boost efficiency',
      'Design and deploy scalable, secure fiber network solutions',
      'Troubleshoot, maintain systems to minimize downtime and train support teams'
    ]
  }
];

const volunteeringExperience = [
  {
    id: 1,
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
    id: 2,
    title: 'Lead',
    company: 'TheNexusProject (FOSS Club)',
    period: 'June 2025 – Present',
    description: 'Support open-source projects and cybersecurity programs through events, workshops, and community work at The Nexus Project.',
    responsibilities: [
      'Organized FOSS workshops and technical sessions to promote open-source culture',
      'Collaborated with peers to plan and execute college-wide tech activities ncluding FOSSDAY, Debian installation parties, Season of Commits and Internship',
      'Mentored students on Git, version control, secure coding, and open-source projects'
    ]
  },
  {
    id: 3,
    title: 'IPR & Research Lead',
    company: 'Startup Bootcamp SJCET – IEDC',
    period: 'January 2025 – Present',
    description: 'Lead IP and research efforts to support student-led innovations and startup initiatives within SJCET’s Startup Bootcamp.',
    responsibilities: [
      'Guided teams in patent drafting, prior art searches, and technical documentation',
      'Organized IP awareness programs and research workshops for students',
      'Promoted a culture of innovation through structured IP support systems'
    ]
  },
  {
    id: 4,
    title: 'Vice-Chairperson',
    company: 'IEEE SIGHT SB SJCET',
    period: 'April 2025 – Present',
    description: 'Helpplan and run IEEE SIGHT community outreach projects.',
    responsibilities: [
      'Organize and manage IEEE SIGHT community projects and outreach programs',
      'Promote IEEE SIGHT goals through events and awareness activities',
      'Coordinate with teams and partners to deliver sustainable solutions'
    ]
  },
  {
    id: 5,
    title: 'CyberLead, Core Team Member',
    company: 'TheNexusProject (FOSS Club)',
    period: 'November 2024 – Present',
    description: 'Support open-source and cybersecurity projects through events, workshops, and community work at The Nexus Project.',
    responsibilities: [
      'Organized FOSS workshops and technical sessions to promote open-source culture',
      'Plan and execute college-wide tech events with peers, mentoring students on Git, version control, and secure coding',
      'Grow community engagement and participation in open-source projects'
    ]
  },
  {
    id: 6,
    title: 'Graphic Designer',
    company: 'IEEE SB SJCET',
    period: 'May 2024 – March 2025',
    description: 'Created visual content for IEEE SB SJCET events, ensuring brand consistency and on-time delivery.',
    responsibilities: [
      'Designed event posters, social media graphics, and promotional materials',
      'Used Figma, Photoshop, and Illustrator to produce high-quality visuals',
      'Worked with event teams to deliver high-quality assets on time'
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
    { name: 'UI Design', level: 95 },
    { name: 'UX Research', level: 75 },
    { name: 'Figma/Sketch', level: 85 },
    { name: 'Responsive Design', level: 90 }
  ],
  soft: [
    { name: 'Communication', level: 100 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Team Collaboration', level: 95 },
    { name: 'Time Management', level: 90 },
    { name: 'Adaptability', level: 90 }
  ]
};

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto max-w-5xl">
      <section className="py-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-nb-black mb-6">Experience</h1>
          <p className="text-xl font-bold text-nb-black/70 max-w-2xl mx-auto italic">
            A detailed overview of my professional journey, skills, and expertise.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-nb-black mb-12 flex items-center">
            <div className="p-3 bg-nb-purple border-4 border-nb-black shadow-nb-hard mr-6">
              <Building size={32} strokeWidth={3} />
            </div>
            Work Experience
          </h2>

          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <div
                key={job.id}
                className="group relative"
              >
                <div className="absolute inset-0 bg-nb-black translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
                <div className="relative bg-white border-4 border-nb-black p-8 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="md:w-1/3">
                      <h3 className="text-3xl font-black uppercase tracking-tight text-nb-black">{job.title}</h3>
                      <div className="flex items-center text-nb-purple font-black uppercase text-sm mt-3">
                        <Building size={18} className="mr-2" strokeWidth={3} />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center text-nb-black/60 font-bold text-sm mt-2">
                        <Calendar size={18} className="mr-2" strokeWidth={3} />
                        <span>{job.period}</span>
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <p className="text-xl font-bold text-nb-black mb-6 leading-relaxed bg-nb-cream p-4 border-l-4 border-nb-purple">{job.description}</p>
                      <h4 className="text-lg font-black uppercase mb-4 text-nb-black underline decoration-4 underline-offset-4">Key Responsibilities:</h4>
                      <ul className="space-y-3">
                        {job.responsibilities.map((responsibility, i) => (
                          <li key={i} className="flex items-start gap-3 text-nb-black font-medium leading-relaxed">
                            <span className="mt-1 w-2 h-2 bg-nb-black flex-shrink-0"></span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-nb-black mb-12 flex items-center">
            <div className="p-3 bg-nb-green border-4 border-nb-black shadow-nb-hard mr-6">
              <Building size={32} strokeWidth={3} />
            </div>
            Volunteering
          </h2>

          <div className="grid grid-cols-1 gap-12">
            {volunteeringExperience.map((job) => (
              <div
                key={job.id}
                className="group relative"
              >
                <div className="absolute inset-0 bg-nb-black translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-all"></div>
                <div className="relative bg-white border-4 border-nb-black p-8 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="md:w-1/3">
                      <h3 className="text-2xl font-black uppercase tracking-tight text-nb-black">{job.title}</h3>
                      <div className="flex items-center text-nb-green font-black uppercase text-sm mt-3">
                        <Building size={18} className="mr-2" strokeWidth={3} />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center text-nb-black/60 font-bold text-sm mt-2">
                        <Calendar size={18} className="mr-2" strokeWidth={3} />
                        <span>{job.period}</span>
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <p className="text-lg font-bold text-nb-black mb-4 leading-relaxed">{job.description}</p>
                      <ul className="grid grid-cols-1 gap-2">
                        {job.responsibilities.map((responsibility, i) => (
                          <li key={i} className="text-nb-black/70 font-bold text-sm bg-nb-cream px-3 py-1 border-2 border-nb-black">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-nb-black mb-12 flex items-center">
            <div className="p-3 bg-nb-yellow border-4 border-nb-black shadow-nb-hard mr-6">
              <Award size={32} strokeWidth={3} />
            </div>
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-8 bg-white border-4 border-nb-black shadow-nb-hard">
              <h3 className="text-3xl font-black uppercase tracking-tight mb-8 text-nb-black underline decoration-8 decoration-nb-purple underline-offset-4">Technical</h3>
              <div className="space-y-8">
                {skills.technical.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2 font-black uppercase tracking-tight text-lg">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-6 bg-nb-cream border-4 border-nb-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div
                        className="h-full bg-nb-purple border-r-4 border-nb-black"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div className="p-8 bg-white border-4 border-nb-black shadow-nb-hard">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-6 text-nb-black underline decoration-8 decoration-nb-yellow underline-offset-4">Design</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.design.map((skill) => (
                    <div key={skill.name} className="p-4 bg-nb-yellow border-2 border-nb-black font-black uppercase text-xs text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      {skill.name} - {skill.level}%
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-white border-4 border-nb-black shadow-nb-hard">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-6 text-nb-black underline decoration-8 decoration-nb-green underline-offset-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.soft.map((skill) => (
                    <div key={skill.name} className="px-4 py-2 bg-nb-green border-2 border-nb-black font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-nb-black mb-12 flex items-center">
            <div className="p-3 bg-nb-blue border-4 border-nb-black shadow-nb-hard mr-6">
              <BookOpen size={32} strokeWidth={3} />
            </div>
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "BTech in Computer Science & Engineering (Cybersecurity)",
                loc: "SJCET Palai • 2023-2027",
                desc: "Specialized in cybersecurity, including ethical hacking, network security, cryptography, and secure software design.",
                color: "bg-nb-purple"
              },
              {
                title: "Minor in Robotics & Automation",
                loc: "SJCET Palai • 2023-2027",
                desc: "Specialized in robotic system design, control algorithms, sensor integration, and autonomous navigation.",
                color: "bg-nb-blue"
              }
            ].map((edu) => (
              <div key={edu.title} className="group relative">
                <div className="absolute inset-0 bg-nb-black translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
                <div className={`relative bg-white border-4 border-nb-black p-8 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all h-full`}>
                  <div className={`w-12 h-12 ${edu.color} border-2 border-nb-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}></div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-nb-black">{edu.title}</h3>
                  <p className="text-nb-purple font-black uppercase text-sm mt-2">{edu.loc}</p>
                  <p className="text-nb-black font-medium mt-6 text-lg leading-relaxed">{edu.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
