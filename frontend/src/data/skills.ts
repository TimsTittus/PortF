export interface Skill {
  name: string;
  level: number;
}

export interface SkillsData {
  technical: Skill[];
  design: Skill[];
  soft: Skill[];
}

export const skills: SkillsData = {
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

export const categories = {
  main: [
    { name: 'Speaker', color: 'bg-nb-purple' },
    { name: 'Networking', color: 'bg-nb-blue' },
    { name: 'Full-Stack', color: 'bg-nb-green' },
    { name: 'Designing', color: 'bg-nb-yellow' },
    { name: 'Cybersecurity', color: 'bg-nb-pink' },
    { name: 'Bug-Hunting', color: 'bg-nb-blue' },
    { name: 'UI/UX Design', color: 'bg-nb-purple' },
    { name: 'Leadership', color: 'bg-nb-green' }
  ]
};
