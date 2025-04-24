
'use client';
import React from 'react';
import { useDarkMode } from './context/DarkModeContext'; // Assuming the DarkModeContext is correctly implemented
import News from './components/News';
import IconSquare from './components/IconSquare';
import ServicesSection from './components/service';
import AchievementsPage from './components/achievements';
import ImageSlider from './components/bigimgs';

export default function Home() {
  const { isDarkMode } = useDarkMode(); // Get the dark mode status

  return (
    <>
      <ImageSlider />
      <ServicesSection />
      <AchievementsPage />

      <News />

      {/* IconSquare section with dynamic background color based on dark mode */}
      <div className={`flex flex-wrap justify-center gap-8 mt-16 md:gap-12 lg:gap-16 p-8 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <IconSquare icon="📝" label="About" href='/about' />
        <IconSquare icon="📍" label="Map" href='/map' />
        <IconSquare icon="☎︎" label="Call" href="/about#policy" />
        <IconSquare icon="💬" label="Contact" href='qa' />
      </div>
    </>
  );
}
