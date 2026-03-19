
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { HomeIcon } from 'lucide-react';

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-nb-black translate-x-4 translate-y-4"></div>
        <div className="relative bg-nb-purple border-8 border-nb-black px-12 py-8">
          <h1 className="text-9xl font-black text-nb-black tracking-tighter">404</h1>
        </div>
      </div>

      <h2 className="text-4xl font-black uppercase tracking-tight text-nb-black mb-6">Oops! Lost in the <span className="text-nb-purple">Void</span></h2>

      <p className="text-xl font-bold text-nb-black/60 max-w-lg mb-12 italic">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <Link to="/" className="group relative inline-block">
        <div className="absolute inset-0 bg-nb-black translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-all"></div>
        <div className="relative px-10 py-5 bg-nb-yellow border-4 border-nb-black text-nb-black font-black uppercase text-xl flex items-center gap-3 hover:-translate-x-1 hover:-translate-y-1 transition-all">
          <HomeIcon className="group-hover:scale-110 transition-transform" strokeWidth={3} />
          Back to Safety
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
