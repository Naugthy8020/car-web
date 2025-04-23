'use client';

import React, { useEffect } from 'react';

// Google Mapsの型定義
declare global {
  interface Window {
    initMap: () => void;
  }

  var google: any;
}

const MapPage = () => {
  useEffect(() => {
    // Google Maps APIがすでにロードされているかチェック
    if (document.getElementById('google-maps-script')) {
      // すでにロード済みなら初期化のみ行う
      if (window.google && window.google.maps) {
        window.initMap();
      }
      return;
    }

    // スクリプト作成
    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onerror = (e) => {
      console.error('Google Maps APIの読み込みに失敗しました:', e);
    };
    document.head.appendChild(script);

    // 地図初期化関数
    window.initMap = () => {
      const mapElement = document.getElementById('map');
      if (!mapElement) return;

      const map = new google.maps.Map(mapElement, {
        center: { lat: 37.5665, lng: 127.0089 }, // 東大門
        zoom: 13,
      });

      new google.maps.Marker({
        position: { lat: 37.5665, lng: 127.0089 },
        map,
        title: 'Dongdaemun, Seoul',
      });
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">地図ページ</h1>
      <div id="map" style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
};

export default MapPage;
