'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useDarkMode } from '../context/DarkModeContext'; // ← 追加

type Service = {
  id: string;
  title: string;
  text: string;
  images?: {
    url: string;
  };
};

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const { isDarkMode } = useDarkMode(); // ← ダークモード取得

  const apiUrl = process.env.NEXT_PUBLIC_MICROCMS_SERVICES_ENDPOINT;
  const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;

  useEffect(() => {
    if (!apiUrl || !apiKey) {
      console.error('API URLまたはAPI Keyが環境変数に設定されていません。');
      return;
    }

    const fetchServices = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'X-API-KEY': apiKey,
          },
        });
        setServices(response.data.contents);
      } catch (error) {
        console.error('サービスデータの取得に失敗しました:', error);
      }
    };

    fetchServices();
  }, [apiUrl, apiKey]);

  return (
    <div className={`max-w-5xl mx-auto px-4 py-16 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <h1 className="text-4xl font-bold text-center mb-12">提供サービス一覧</h1>

      {services.length === 0 ? (
        <p className="text-center">サービス情報を読み込み中...</p>
      ) : (
        <div className="space-y-16">
          {services.map((service) => (
            <div key={service.id} className="space-y-4">
              {/* 画像 */}
              {service.images?.url && (
                <div className="w-full h-72 relative rounded-lg overflow-hidden">
                  <Image
                    src={service.images.url}
                    alt={service.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              {/* タイトル */}
              <h2 className="text-2xl font-semibold">{service.title}</h2>

              {/* 詳細内容（HTML対応） */}
              {service.text && (
                <div
                  className={`prose max-w-none ${isDarkMode ? 'prose-invert' : ''}`} // ← Tailwind Typographyのダーク対応
                  dangerouslySetInnerHTML={{ __html: service.text }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
