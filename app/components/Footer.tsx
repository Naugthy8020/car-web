import React from 'react';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-10">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} My News Site</p>
        <div className="flex space-x-4 text-2xl">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
