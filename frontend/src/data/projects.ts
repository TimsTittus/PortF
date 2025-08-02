export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    live?: string;
    github: string;
  };
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Steg Tool',
    description: 'A steganography tool that allows you to hide and extract messages within images.',
    image: '',
    tags: ['Python', 'Cryptography', 'Streamlit'],
    links: {
      live: 'https://steg-it.streamlit.app/',
      github: 'https://github.com/TimsTittus/Steg_Tool'
    },
    featured: true
  },
  {
    id: 2,
    title: 'Parking Management System',
    description: 'Helps us to enter, display or alter the details of vehicles in parking records.',
    image: '',
    tags: ['Python','MySQL'],
    links: {
      github: 'https://github.com/TimsTittus/Parking-Management-System'
    },
    featured: false 
  },
  {
    id: 3,
    title: 'Sjcet Events',
    description: 'Contributed to this platform for managing and viewing events happening at SJCET.',
    image: '',
    tags: ['HTML/CSS','JavaScript','Vue'],
    links: {
      live: 'https://sjcet-events.vercel.app/',
      github: 'https://github.com/TimsTittus/Sjcet-Events'
    },
    featured: false
  },
  {
    id: 4,
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
  // Add more projects here
];