'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../components/Button';
import { useDarkMode } from '../context/DarkModeContext'; // ダークモードの状態を取得

const AchievementsPage: React.FC = () => {
  const { isDarkMode } = useDarkMode(); // ダークモードの状態を取得

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`}>
      {/* グレーのスペース（画像の上） */}
      <div className={`h-[10px] sm:h-5 w-full mt-12 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`} /> {/* 小さい画面では高さが大きくなるように設定 */}

      {/* メインビジュアル */}
      <div className="relative w-full h-[600px] sm:h-[500px]">
        <Image
          src="/images/blake-cheek-p8yEqYFmlo8-unsplash.jpg"
          alt="Achievements"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
          priority
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">実績紹介</h1>
          <p className="text-lg md:text-xl max-w-2xl drop-shadow-md">
            私たちの成果をご覧ください。数々のプロジェクトとクライアントの成功事例を紹介します。
          </p>
        </div>
        <div className="max-w-7xl absolute bottom-6 right-6 sm:right-4 sm:bottom-4 md:right-6 md:bottom-6">
          <Button
            label="詳しく見る"
            href="/achievements"
            className="xl:mr-157 sm:mr-2 md:mr-4" 
          />
        </div>
      </div>

      {/* グレーのスペース（画像の下） */}
      <div className={`h-[10px] sm:h-5 w-full mb-10 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`} /> {/* 小さい画面では高さが大きくなるように設定 */}
    </div>
  );
};

export default AchievementsPage;
