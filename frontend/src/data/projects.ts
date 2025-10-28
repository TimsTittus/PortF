export interface Project {
  imageUrl: string;
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
    featured: true,
    imageUrl: ""
  },
  {
    id: 2,
    title: 'HomeChime',
    description: 'Browser based app that, inspired by my family’s anxious wait for my younger brother’s school bus.',
    image: '',
    tags: ['HTML/CSS', 'JavaScript'],
    links: {
      live: 'https://homechime.vercel.app/',
      github: 'https://github.com/TimsTittus/HomeChime'
    },
    featured: true,
    imageUrl: ""
  },
  {
    id: 3,
    title: 'WEBVNR Desktop',
    description: 'Python + Qt app to test web endpoints for SQLi, XSS, and sensitive data leaks with custom payloads and results.',
    image: '',
    tags: ['Python', 'PyQt', 'Desktop App', 'Security'],
    links: {
      live: '',
      github: 'https://github.com/TimsTittus/WEBVNR'
    },
    featured: true,
    imageUrl: ""
  }
  // Add more projects here
];