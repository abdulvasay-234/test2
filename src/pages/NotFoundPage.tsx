import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-center min-h-[calc(100vh-200px)] py-16 bg-gray-50"
    >
      <div className="container-custom">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-9xl font-bold text-primary-600 mb-6">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/" className="btn btn-primary flex items-center justify-center">
              <Home className="h-5 w-5 mr-2" />
              Go to Homepage
            </Link>
            <Link to="/courses" className="btn btn-outline flex items-center justify-center">
              <Search className="h-5 w-5 mr-2" />
              Browse Courses
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;