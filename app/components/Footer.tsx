'use client';

import React from 'react';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { useDarkMode } from '../context/DarkModeContext';

const Footer: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      {/* フッターと同じ背景色でスペースを空ける */}
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} h-18`} />

      <footer className={`py-6 ${isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'}`}>
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Car Inc.</p>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:${isDarkMode ? 'text-pink-500' : 'text-pink-600'}`}
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
