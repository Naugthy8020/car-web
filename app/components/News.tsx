'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import 'swiper/swiper-bundle.css';
import './swiper-custom.css';

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

  if (loading) {
    return <div className="text-center mt-10">読み込み中...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">news一覧</h1>

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
        navigation={true}
        className="mySwiper"
        style={{ padding: '0 24px', paddingBottom: '40px' }}
      >
        {questions.map((question) => (
          <SwiperSlide key={question.id} className="flex justify-center">
            <Link href={`/our-news/${question.id}`}>
              <div
                className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow flex flex-col justify-between mb-4"
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
                <p className="text-sm text-gray-500 mb-2">{formatDate(question.time)}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
