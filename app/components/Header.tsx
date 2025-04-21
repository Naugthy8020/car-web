"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
 <header className="bg-gray-100 text-gray-600 py-9 shadow">

      <div className="container mx-auto">
        <div className="flex items-center w-full">
          {/* ロゴ */}
          <h1 className="text-xl font-bold">
            <Link href="/">My Website</Link>
          </h1>

          {/* ナビゲーションメニュー */}
          <nav className="hidden lg:flex ml-8 flex-grow justify-end">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-black">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-black">About</Link>
              </li>
              <li>
                <Link href="/qa" className="hover:text-black">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* ハンバーガーボタン（モバイル表示） */}
          <button
            className="lg:hidden text-gray-600 w-8 h-8 flex items-center justify-center ml-auto"
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

        {/* モバイル時ナビ表示 */}
        <nav className={`mt-2 ${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link href="/" className="hover:text-black">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-black">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
