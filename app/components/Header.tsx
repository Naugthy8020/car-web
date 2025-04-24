"use client";

import { useDarkMode } from '../context/DarkModeContext'; // コンテキストをインポート
import { usePathname } from 'next/navigation'; 
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // useDarkModeを使う
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href ? 'border-b-2 border-black font-semibold' : '';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`py-9 shadow ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}>
      <div className="container mx-auto">
        <div className="flex items-center w-full">
          {/* ロゴ */}
          <Image
            src="/images/round-icons-KldDKNNnm3k-unsplash.svg"
            alt="Car Inc. Logo"
            width={40}
            height={40}
            className={`ml-5 mr-4 mb-3 ${isDarkMode ? 'filter invert brightness-0' : ''}`}
          />

          <h1 className="text-xl font-bold">
            <Link href="/">Car Inc.</Link>
          </h1>

          {/* ナビゲーション */}
          <nav className="hidden lg:flex ml-8 flex-grow justify-end">
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/"
                  className={`hover:text-black ${isActive('/')}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`hover:text-black ${isActive('/about')}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/qa"
                  className={`hover:text-black ${isActive('/qa')}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* ハンバーガーメニュー */}
          <button
            className="lg:hidden text-gray-600 w-8 h-8 flex items-center justify-center absolute right-2 mt-3.5 mr-5"
            onClick={toggleMenu}
          >
            <div className="relative w-6 h-6 transition-all duration-300">
              <span
                className={`block absolute w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-45 top-[50%] transform -translate-y-1/2' : 'top-0'
                }`}
              ></span>
              <span
                className={`block absolute w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0 top-[50%] transform -translate-y-1/2' : 'top-[25%]'
                }`}
              ></span>
              <span
                className={`block absolute w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-135 top-[50%] transform -translate-y-1/2' : 'top-[50%]'
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* モバイルナビ */}
        <nav className={`mt-2 ${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                href="/"
                className={`hover:text-black ${isActive('/')}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`hover:text-black ${isActive('/about')}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/qa"
                className={`hover:text-black ${isActive('/qa')}`}
              >
                Contact
              </Link>
            </li>
            {/* ダークモード切り替えボタン */}
            <li>
              <button
                onClick={toggleDarkMode}
                className={`mt-4 text-gray-600 ${isDarkMode ? 'text-white' : 'text-black'}`}
              >
                {isDarkMode ? '☀️Light Mode☀️' : '🌙 Dark Mode🌙'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
