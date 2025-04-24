'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { notFound, useParams } from 'next/navigation';
import { useDarkMode } from '../../context/DarkModeContext';

export default function ServiceDetailPage() {
  const { isDarkMode } = useDarkMode();
  const { id } = useParams(); // useParams()を使ってID取得
  const [service, setService] = useState<any>(null);

  useEffect(() => {
    const getServiceData = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_MICROCMS_SERVICES_ENDPOINT;
      const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;

      try {
        const res = await axios.get(`${apiUrl}/${id}`, {
          headers: { 'X-API-KEY': apiKey },
        });
        setService(res.data);
      } catch (error) {
        console.error('サービスの詳細データ取得に失敗:', error);
        notFound(); // 失敗時に 404
      }
    };

    if (id) getServiceData();
  }, [id]);

  if (!service) return null;

  return (
    <div className={`max-w-4xl mx-auto px-4 py-12 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
      <h1 className="text-3xl font-bold mb-6">{service.title}</h1>
      <div className="w-full h-72 relative mb-6 rounded overflow-hidden shadow">
        <Image
          src={service.images?.url || '/images/placeholder.jpg'}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-lg">{service.text}</p>
    </div>
  );
}
