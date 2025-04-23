import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  label: string;
  href: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, href, className }) => {
  return (
    <Link href={href} passHref>
      <button
        className={`max-w-7xl px-6 py-3 bg-black bg-opacity-60 text-white text-lg rounded-lg shadow-md 
                    hover:bg-opacity-80 hover:shadow-lg hover:scale-105 transition-all duration-300 
                    ${className}`}
      >
        {label}
      </button>
    </Link>
  );
};

export default Button;
