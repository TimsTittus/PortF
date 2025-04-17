
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
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-8xl font-bold text-gold">404</h1>
      <h2 className="text-2xl font-medium mt-4 mb-6">Page Not Found</h2>
      <p className="text-gray-400 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-6 py-3 bg-gold text-dark font-medium rounded hover:bg-gold-light transition-colors duration-300"
      >
        <HomeIcon className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
