'use client';


import Header from './components/Header';
import { DarkModeProvider } from './context/DarkModeContext'; 
import Footer from './components/Footer';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useDarkMode } from './context/DarkModeContext'; // Contextをインポート

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
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
          <Header />
          
          {/* Dark mode の状態に基づいて main の背景色を変更 */}
          <MainWithDarkMode>{children}</MainWithDarkMode>
          
          <Footer />
        </body>
      </html>
    </DarkModeProvider>
  );
}

// `main`にダークモードを適用するコンポーネント
const MainWithDarkMode: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isDarkMode } = useDarkMode();  // ダークモード状態を取得

  return (
    <main className={`flex-grow ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white-600 text-gray-800'}`}>
      {children}
    </main>
  );
};
