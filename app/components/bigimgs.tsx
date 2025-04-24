'use client';


import React, { useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useDarkMode } from '../context/DarkModeContext';  // ダークモードの状態を取得

const ImageSlider: React.FC = () => {
  const { isDarkMode } = useDarkMode();  // ダークモードの状態を取得
  const images = [
    '/images/kato-blackmore-qcF-19BvViE-unsplash.jpg',
    '/images/felix-fuchs-8HhQk4kmPjs-unsplash.jpg',
    '/images/chelsea-fern-tck12YHwl2Q-unsplash.jpg',
    '/images/thisisengineering-aL2rxQhEfAM-unsplash.jpg',
  ];

  useEffect(() => {
    // Swiper初期化タイミングのため、矢印の存在が確認できるようになる
  }, []);

  return (
    <div className={`w-full relative ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* ナビゲーションボタン（外に出す） */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer select-none">
        <div className={`custom-swiper-button-prev text-white text-5xl hover:opacity-80 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
          &#10094;
        </div>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer select-none">
        <div className={`custom-swiper-button-next text-white text-5xl hover:opacity-80 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
          &#10095;
        </div>
      </div>

      {/* スライダー部分 */}
      <div className="relative h-[300px] sm:h-[450px]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={{
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
          }}
          effect="fade"
          speed={800}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[300px] sm:h-[450px] relative">
                <Image
                  src={src}
                  alt={`スライド画像 ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ページネーション */}
        <div className="absolute bottom-0 w-full bg-black/50 py-2">
          <div className={`swiper-pagination !static flex justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`} />
        </div>
      </div>

      {/* 下のグレー部分 */}
      <div className={`h-4 sm:h-6 w-full ${isDarkMode ? 'bg-black' : 'bg-gray-100'}`} />
    </div>
  );
};

ImageSlider.displayName = 'ImageSlider';

export default ImageSlider;
