'use client';

import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const News: React.FC = () => {
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

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // API キャッシュのためのuseEffect
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
          localStorage.setItem('questions', JSON.stringify(response.data.contents)); // キャッシュ
          setLoading(false);
        } catch (error) {
          setError('データの取得に失敗しました');
          setLoading(false);
        }
      };

      fetchQuestions();
    }
  }, []);

  // 日付のフォーマット関数
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // データのメモ化
  const memoizedQuestions = useMemo(() => questions, [questions]);

  if (loading) {
    return <div className="text-center mt-10">読み込み中...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">news一覧</h1>

      {/* Swiperカルーセル */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={false} // 無限ループを無効化
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {memoizedQuestions.map((question) => (
          <SwiperSlide key={question.id}>
            <div
              className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow flex flex-col justify-between"
              style={{
                height: '500px',
                width: '100%',
                maxWidth: '800px',
                minWidth: '300px', // 最小幅を指定
                margin: '0 auto',
              }}
            >
              {question.image?.url && (
                <img
                  src={question.image.url}
                  alt={question.title || 'ニュース画像'}
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                  loading="lazy" // 遅延読み込み
                />
              )}
              <h2 className="text-2xl font-semibold mb-2">{question.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{formatDate(question.time)}</p>
              <p className="text-lg text-gray-700 flex-grow overflow-hidden">{question.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
