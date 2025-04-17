
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-light border-t border-gold/10 py-6 md:py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gold text-sm">&copy; {new Date().getFullYear()} – All Rights Reserved.</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-gold transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-gold transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:email@example.com" 
              aria-label="Email"
              className="text-gray-400 hover:text-gold transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="hidden md:block">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-gold text-sm transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-gold text-sm transition-colors duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-gold text-sm transition-colors duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
