'use client';

import React from 'react';
import Link from 'next/link';
import { useDarkMode } from '../context/DarkModeContext'; // ダークモードの状態を取得

type IconSquareProps = {
  icon: string;
  label: string;
  href: string;
};

const IconSquare: React.FC<IconSquareProps> = React.memo(({ icon, label, href }) => {
  const { isDarkMode } = useDarkMode(); // ダークモードの状態を取得

  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 
        border-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} 
        text-${isDarkMode ? 'white' : 'gray-800'} text-sm font-medium 
        hover:${isDarkMode ? 'border-gray-500' : 'border-gray-500'} 
        transition-border duration-300 no-underline`}
    >
      <span className={`text-3xl md:text-4xl lg:text-5xl`}>
        {icon}
      </span>
      <span className={`text-xs md:text-sm lg:text-base`}>
        {label}
      </span>
    </Link>
  );
});

IconSquare.displayName = 'IconSquare';

export default IconSquare;
