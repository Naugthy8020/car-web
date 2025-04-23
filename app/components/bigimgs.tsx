'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ImageSlider: React.FC = () => {
  const images = [
    '/images/kato-blackmore-qcF-19BvViE-unsplash.jpg',
    '/images/felix-fuchs-8HhQk4kmPjs-unsplash.jpg',
    '/images/chelsea-fern-tck12YHwl2Q-unsplash.jpg',
    '/images/thisisengineering-aL2rxQhEfAM-unsplash.jpg',
  ];

  return (
    <div className="w-full relative">
      {/* スライダー部分 */}
      <div className="relative h-[300px] sm:h-[450px]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          effect="fade"
          speed={800}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[300px] sm:h-[450px]">
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 黒背景の下部・ページネーション */}
        <div className="absolute bottom-0 w-full bg-black/50 py-2">
          <div className="swiper-pagination !static flex justify-center" />
        </div>
      </div>

      {/* 下のグレー部分 */}
      <div className="bg-gray-100 h-20 w-full" />
    </div>
  );
};

export default ImageSlider;
