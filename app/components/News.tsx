'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper-custom.css'; // 必ず存在確認！
import { useDarkMode } from '../context/DarkModeContext'; // Contextをインポート

interface Question {
  id: string;
  title: string;
  time: string;
  image: {
    url: string;
    height?: number;
    width?: number;
  };
  text: string;
}

interface ApiResponse {
  contents: Question[];
}

const News: React.FC = () => {
  const { isDarkMode } = useDarkMode(); // ダークモードの状態を取得
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cachedData = localStorage.getItem('questions');

    if (cachedData) {
      setQuestions(JSON.parse(cachedData));
      setLoading(false);
    } else {
      const fetchQuestions = async () => {
        try {
          const response = await axios.get<ApiResponse>(
            process.env.NEXT_PUBLIC_MICROCMS_ENDPOINT as string,
            {
              headers: {
                'X-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_API_KEY as string,
              },
            }
          );
          setQuestions(response.data.contents);
          localStorage.setItem('questions', JSON.stringify(response.data.contents));
          setLoading(false);
        } catch (err) {
          console.error('データの取得に失敗:', err);
          setError('データの取得に失敗しました');
          setLoading(false);
        }
      };

      fetchQuestions();
    }
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) return <div className="text-center mt-10">読み込み中...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;

  return (
    <div className={`max-w-6xl mx-auto px-4 py-8 relative ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white-600 text-gray-800'}`}>
      <h1 className="text-4xl md:text-5xl font-black tracking-wide text-center relative mb-2 mt-9 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-teal-400">
        News
      </h1>

      {/* カスタム矢印（黒） */}
      <div
        className="custom-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 text-5xl hover:opacity-60 cursor-pointer select-none px-2"
        style={{ color: '#000' }}
      >
        &#10094;
      </div>
      <div
        className="custom-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 text-5xl hover:opacity-60 cursor-pointer select-none px-2"
        style={{ color: '#000' }}
      >
        &#10095;
      </div>

      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        loop={false}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
        className="mySwiper"
        style={{ padding: '0 24px', paddingBottom: '40px' }}
      >
        {questions.map((question) => (
          <SwiperSlide key={question.id} className="flex justify-center">
            <Link href={`/our-news/${question.id}`}>
              <div
                className={`rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow flex flex-col justify-between mb-4 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`}
                style={{ height: '500px', width: '100%', maxWidth: '350px' }}
              >
                {question.image?.url && (
                  <Image
                    src={question.image.url}
                    alt={question.title || 'ニュース画像'}
                    className="w-full h-64 object-cover mb-4 rounded-lg"
                    width={500}
                    height={256}
                    loading="lazy"
                  />
                )}
                <h2 className="text-2xl font-semibold mb-2">{question.title}</h2>
                <p className="text-sm mb-2">{formatDate(question.time)}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
