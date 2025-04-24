'use client';

import { notFound } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import { useDarkMode } from '../../context/DarkModeContext';
import { useEffect, useState } from 'react';

// ニュースの型定義
interface News {
  title: string;
  text: string;
  image?: {
    url: string;
  };
}

// ニュース詳細を取得する非同期関数
async function getNewsDetail(id: string) {
  const apiUrl = process.env.NEXT_PUBLIC_MICROCMS_ENDPOINT;
  const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;

  try {
    const res = await axios.get(`${apiUrl}/${id}`, {
      headers: {
        'X-API-KEY': apiKey,
      },
    });
    return res.data;
  } catch (error) {
    console.error('ニュース詳細取得失敗:', error);
    return null;
  }
}

// Pageコンポーネント
export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { isDarkMode } = useDarkMode(); // ダークモードの状態を取得
  const [news, setNews] = useState<News | null>(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      const { id } = await params;
      const data = await getNewsDetail(id);

      if (!data) {
        notFound(); // 404エラー
      } else {
        setNews(data); // ニュース詳細をセット
      }
    };

    fetchNewsDetail();
  }, [params]);

  if (!news) return null;

  return (
    <div
      className={`max-w-4xl mx-auto px-4 py-12 ${
        isDarkMode ? 'text-white ' : 'text-gray-700 bg-white'
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">{news.title}</h1>
      <div className="w-full h-72 relative mb-6 rounded overflow-hidden shadow">
        <Image
          src={news.image?.url || '/images/placeholder.jpg'} // 画像URLがない場合はデフォルト画像を使用
          alt={news.title}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-lg">{news.text}</p>
    </div>
  );
}
