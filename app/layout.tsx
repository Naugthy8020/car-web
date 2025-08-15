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
      <html >
        <head>
        <meta name="google-site-verification" content="nlz1Xtk_NZkDZNCuGOEVfsesFAKS-FttnvdDtuAmvxY" />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="大阪市のうさぎ自動車整備工場は、オイル交換・車検・整備・タイヤ交換など、信頼と実績のサービスでお客様のカーライフをサポートします。" />
          <meta name="keywords" content="車の整備, 自動車修理, 車検, オイル交換, タイヤ交換, 整備工場, カーサービス, 大阪, うさぎ自動車整備工場" />
          <meta name="author" content="うさぎ自動車整備工場" />
          <title>うさぎ自動車整備工場｜大阪市の車検・整備・修理ならお任せください</title>

        
     
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
