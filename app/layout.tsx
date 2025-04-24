'use client';

import Header from './components/Header';
import { DarkModeProvider } from './context/DarkModeContext';
import Footer from './components/Footer';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useDarkMode } from './context/DarkModeContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DarkModeProvider>
      <html lang="ja">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="大阪市のうさぎ自動車整備工場は、オイル交換・車検・整備・タイヤ交換など、信頼と実績のサービスでお客様のカーライフをサポートします。" />
          <meta name="keywords" content="車の整備, 自動車修理, 車検, オイル交換, タイヤ交換, 整備工場, カーサービス, 大阪, うさぎ自動車整備工場" />
          <meta name="author" content="うさぎ自動車整備工場" />
          <title>うさぎ自動車整備工場｜大阪市の車検・整備・修理ならお任せください</title>

          {/* Safari含む各ブラウザに対応するfavicon設定 */}
          <link rel="icon" type="image/svg+xml" href="/fv.svg" />
          <link rel="alternate icon" type="image/png" href="/favicon.png" />

          {/* Open Graph / SNS Meta Tags */}
          <meta property="og:title" content="うさぎ自動車整備工場｜大阪市の車検・整備・修理ならお任せください" />
          <meta property="og:description" content="大阪市のうさぎ自動車整備工場は、オイル交換・車検・整備・タイヤ交換など、信頼と実績のサービスでお客様のカーライフをサポートします。" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://usagi-carservice.com" />
          <meta property="og:image" content="/og-image.jpg" />
          <meta name="twitter:card" content="summary_large_image" />

          {/* JSON-LD構造化データ */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "うさぎ自動車整備工場",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "大阪市中央区〇〇1-2-3",
                "addressRegion": "大阪府",
                "postalCode": "540-0001",
                "addressCountry": "JP"
              },
              "telephone": "06-1234-5678",
              "url": "https://usagi-carservice.com",
              "openingHours": "Mo-Fr 09:00-18:00",
              "image": "https://usagi-carservice.com/shop-front.jpg"
            })
          }} />
        </head>

        <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
          <Header />
          <MainWithDarkMode>{children}</MainWithDarkMode>
          <Footer />
        </body>
      </html>
    </DarkModeProvider>
  );
}

// ダークモードに応じて背景を切り替え
const MainWithDarkMode: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <main className={`flex-grow ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      {children}
    </main>
  );
};
