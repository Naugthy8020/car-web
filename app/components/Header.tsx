"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation'; // ← 現在のパス取得
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // ← 現在のパス取得

  const isActive = (href: string) =>
    pathname === href ? 'border-b-2 border-black font-semibold' : ''; // アクティブリンクに下線

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // メニュー開閉トグル
  };

  return (
    <header className="bg-gray-100 text-gray-600 py-9 shadow">
      <div className="container mx-auto">
        <div className="flex items-center w-full">
          {/* ロゴ */}
          <Image
            src="/images/round-icons-KldDKNNnm3k-unsplash.svg"
            alt="Car Inc. Logo"
            width={40}
            height={40}
            className="mr-4"
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
                  className={`hover:text-black ${isActive('/')}`} // ホームリンク
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`hover:text-black ${isActive('/about')}`} // Aboutリンク
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/qa"
                  className={`hover:text-black ${isActive('/qa')}`} // Contactリンク
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* ハンバーガーメニュー */}
          <button
            className="lg:hidden text-gray-600 w-8 h-8 flex items-center justify-center ml-auto"
            onClick={toggleMenu} // ハンバーガーメニューを押したときにメニュー開閉
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
                className={`hover:text-black ${isActive('/')}`} // モバイルのホームリンク
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`hover:text-black ${isActive('/about')}`} // モバイルのAboutリンク
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/qa"
                className={`hover:text-black ${isActive('/qa')}`} // モバイルのContactリンク
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
