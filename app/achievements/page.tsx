'use client';

import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

interface Achievement {
  id: string;
  title: string;
  text: string;
  image: {
    url: string;
    height?: number;
    width?: number;
  };
}

const AchievementsPage: React.FC = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { isDarkMode } = useDarkMode(); // ダークモード取得

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_MICROCMS_ACHIEVEMENT_ENDPOINT as string,
          {
            headers: {
              'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '',
            },
          }
        );
        setAchievements(response.data.contents);
      } catch (err) {
        console.error('Error fetching data from microCMS:', err);
        setError('データの取得に失敗しました');
      }
    };

    fetchAchievements();
  }, []);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className={`max-w-4xl mx-auto px-4 py-12 ${isDarkMode ? ' text-white' : 'bg-white text-gray-800'}`}>
      <h1 className="text-4xl font-bold mb-8 text-center">Achievements</h1>
      <ul>
        {achievements.map((achievement) => (
          <li
            key={achievement.id}
            className={`mb-12 pb-8 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}
          >
            <h2 className="text-2xl font-semibold mb-4">{achievement.title}</h2>
            <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{achievement.text}</p>

            {achievement.image?.url && (
              <div className="mb-4">
                <Image
                  src={achievement.image.url}
                  alt={achievement.title}
                  width={achievement.image.width || 700}
                  height={achievement.image.height || 400}
                  className="rounded-lg w-full h-auto max-w-full max-h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AchievementsPage;
