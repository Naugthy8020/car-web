'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicesSection: React.FC = () => {
  const images = [
    '/images/maxim-hopman-s4d_ESS0ylA-unsplash.jpg',
    '/images/tahamie-farooqui-IU-mLTtrJgo-unsplash.jpg',
    '/images/tim-mossholder-V37iTrYZz2E-unsplash.jpg',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white relative">
      <h2 className="text-3xl font-bold text-center mb-12">サービス紹介</h2>

      {/* 画像を横に3つ並べる */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="w-full h-64 relative rounded-lg overflow-hidden shadow-md">
            <Image
              src={src}
              alt={`サービス${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* 詳しく見るボタン（Linkでページ内遷移） */}
      <div className="flex justify-end mt-6">
        <Link
          href="/services"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          詳しく見る
        </Link>
      </div>
    </div>
  );
};

export default ServicesSection;
