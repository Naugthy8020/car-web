'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import Button from './Button';  // ボタンコンポーネントの読み込み

const ServicesSection: React.FC = () => {
  const [services, setServices] = useState<any[]>([]);

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
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white relative">
     <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 mt-8 tracking-tight relative text-gray-800 after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-400">
  Services
</h2>


      {/* サービスカード一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link href={`/our-services/${service.id}`} key={index}>
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md cursor-pointer group">
              {/* 画像 */}
              {service.images?.url ? (
                <Image
                  src={service.images.url}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p>画像はありません</p>
                </div>
              )}

              {/* オーバーレイタイトル */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white px-4 py-2">
                <p className="text-lg md:text-xl font-semibold">{service.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 一覧へボタン */}
      <div className="flex justify-end mt-6">
        <Button
          label="サービス一覧へ"
          href="/our-services"
        />
      </div>
    </div>
  );
};

export default ServicesSection;
