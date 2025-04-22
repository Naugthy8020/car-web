import React from 'react';
import Image from 'next/image';
import axios from 'axios';
import { notFound } from 'next/navigation';

// サービスの詳細情報を直接取得するサーバーコンポーネント
async function getServiceData(id: string) {
  const apiUrl = process.env.NEXT_PUBLIC_MICROCMS_SERVICES_ENDPOINT;
  const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;

  try {
    const res = await axios.get(`${apiUrl}/${id}`, {
      headers: {
        'X-API-KEY': apiKey,
      },
    });
    return res.data;
  } catch (error) {
    console.error('サービスの詳細データ取得に失敗:', error);
    return null; // エラーが発生した場合はnullを返す
  }
}

export default async function ServiceDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const service = await getServiceData(id);

  if (!service) {
    notFound(); // サービスが見つからなければ404
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{service.title}</h1>
      <div className="w-full h-72 relative mb-6 rounded overflow-hidden shadow">
        <Image
          src={service.images?.url || '/images/placeholder.jpg'} // 画像がない場合はプレースホルダー画像を表示
          alt={service.title}
          fill
          style={{ objectFit: 'cover' }} // objectFitを指定して画像の調整
        />
      </div>
      <p className="text-lg text-gray-700">{service.text}</p>
    </div>
  );
}
