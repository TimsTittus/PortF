
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nb-cream border-t-4 border-nb-black py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-nb-black font-black text-lg uppercase tracking-wider">&copy; {new Date().getFullYear()} – Tims Tittus</p>
            <p className="text-nb-black/60 font-bold text-sm">Polymath & Engineer</p>
          </div>

          <div className="flex items-center space-x-4">
            {[
              { icon: <Github size={24} />, href: "https://github.com/TimsTittus", label: "GitHub" },
              { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/tims-tittus/", label: "LinkedIn" },
              { icon: <Mail size={24} />, href: "mailto:timstittus1@gmail.com", label: "Email" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 bg-white border-2 border-nb-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-nb-black hover:bg-nb-purple"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <nav>
              <ul className="flex space-x-8">
                {['Home', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="text-nb-black font-bold uppercase hover:text-nb-purple transition-colors underline decoration-2 underline-offset-4"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
