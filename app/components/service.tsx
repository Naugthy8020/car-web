'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';

const ServicesSection: React.FC = () => {
  const [services, setServices] = useState<any[]>([]);

  // 環境変数を取得
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
        setServices(response.data.contents); // data.contents配列を保存
      } catch (error) {
        console.error('サービスデータの取得に失敗しました:', error);
      }
    };

    fetchServices();
  }, [apiUrl, apiKey]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white relative">
      <h2 className="text-3xl font-bold text-center mb-12">サービス紹介</h2>

      {/* 画像を横に3つ並べる */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link href={`/our-services/${service.id}`} key={index}>
            <div className="w-full h-64 relative rounded-lg overflow-hidden  shadow-md cursor-pointer">
              {/* 画像表示 */}
              {service.images?.url ? (
                <Image
                  src={service.images.url}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-lg transition-all duration-100 hover:filter hover:brightness-75"
                  width={500}  // 任意の適切な幅に設定
                  height={500} // 任意の適切な高さに設定
                  priority={false} // priority=falseで遅延読み込みを有効化
                  loading="lazy"  // 画像遅延読み込み
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p>画像はありません</p>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* 詳しく見るボタン */}
      <div className="flex justify-end mt-6">
        <Link
          href="/our-services"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          詳しく見る
        </Link>
      </div>
    </div>
  );
};

export default ServicesSection;
