export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export const workExperience: Experience[] = [
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

export const volunteeringExperience: Experience[] = [
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
