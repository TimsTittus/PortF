
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col bg-dark">
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
