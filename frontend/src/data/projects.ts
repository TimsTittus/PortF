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
    title: 'HomeChime',
    description: 'Browser based app that, inspired by my family’s anxious wait for my younger brother’s school bus.',
    image: '',
    tags: ['HTML/CSS', 'JavaScript'],
    links: {
      live: 'https://homechime.vercel.app/',
      github: 'https://github.com/TimsTittus/HomeChime'
    },
    featured: true
  },
  {
    id: 3,
    title: '404-Extension',
    description: 'A Chrome extension that tracks 404 error page visits, saves their history and count locally, and displays both in a popup.',
    image: '3',
    tags: ['HTML/CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/TimsTittus/404-Extension'
    },
    featured: true
  }
  // Add more projects here
];