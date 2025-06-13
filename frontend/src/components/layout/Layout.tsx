import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = `${e.pageX}px`;
      const y = `${e.pageY}px`;
      document.documentElement.style.setProperty('--x', x);
      document.documentElement.style.setProperty('--y', y);
    };
  
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex flex-col interactive-gradient">
      <Navbar />
      <main 
        className="flex-grow px-4 sm:px-6 md:px-12 pt-20 pb-16 animate-fade-in"
        key={location.pathname}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;