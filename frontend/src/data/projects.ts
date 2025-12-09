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
    title: 'Audio Adversarial Attack Generator',
    description: 'Built a white-box adversarial tool in PyTorch with Wav2Vec2 that uses mathematical optimization to embed inaudible hidden voice commands into audio, deceiving ASR systems while remaining imperceptible to humans.',
    image: '',
    tags: ['Python', 'PyTorch', 'Adversarial ML', 'HuggingFace', 'Audio Signal Processing', 'Cybersecurity'],
    links: {
      github: 'https://github.com/TimsTittus/Audio-Adversarial-Attack-Generator'
    },
    featured: true,
    imageUrl: ""
  },
  {
    id: 2,
    title: 'MonkeyPen.ai',
    description: 'AI-powered tool that converts text into realistic handwritten output, offering 50+ handwriting styles, real-time previews, and multi-format export options.',
    image: '',
    tags: ['Python', 'Ai', 'Machine Learning', 'Flask', 'OpenCV', 'TypeScript', 'React'],
    links: {
      github: 'https://github.com/TimsTittus/MonkeyPen-Site'
    },
    featured: true,
    imageUrl: ""
  },
  {
    id: 3,
    title: 'ORVANE',
    description: 'Secure browser extension for end-to-end encrypted messaging using AES with ECDH key exchange, password protection, and a backend for managing secure sessions.',
    image: '',
    tags: ['HTML/CSS', 'JavaScript', 'Chrome Extension', 'Cryptography', 'Security', 'Encryption'],
    links: {
      github: 'https://github.com/TimsTittus/Orvane'
    },
    featured: true,
    imageUrl: ""
  }
  // Add more projects here
];