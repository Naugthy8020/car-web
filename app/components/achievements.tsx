'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../components/Button';

const AchievementsPage: React.FC = () => {
  return (
    <div>
      {/* グレーのスペース（画像の上） */}
      <div className="bg-gray-100 h-20 w-full" />

      {/* メインビジュアル */}
      <div className="relative w-full h-[600px]">
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

        <div className="max-w-7xl absolute bottom-6 right-6">
          <Button label="詳しく見る" href="/achievements" />
        </div>
      </div>

      {/* グレーのスペース（画像の下） */}
      <div className="bg-gray-100 h-20 w-full" />
    </div>
  );
};

export default AchievementsPage;
