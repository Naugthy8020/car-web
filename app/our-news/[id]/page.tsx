// import { notFound } from 'next/navigation';
// import axios from 'axios';
// import Image from 'next/image';

// // ニュースの詳細を取得する非同期関数
// async function getNewsDetail(id: string) {
//   const apiUrl = process.env.NEXT_PUBLIC_MICROCMS_ENDPOINT;
//   const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;

//   try {
//     const res = await axios.get(`${apiUrl}/${id}`, {
//       headers: {
//         'X-API-KEY': apiKey,
//       },
//     });
//     return res.data;
//   } catch (error) {
//     console.error('ニュース詳細取得失敗:', error);
//     return null;
//   }
// }

// // Pageコンポーネント
// export default async function Page({ params }: { params: { id: string } }) {
//   const { id } = params;  // params.idをそのまま使用

//   const news = await getNewsDetail(id);

//   if (!news) {
//     notFound(); // 404エラー
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-12">
//       <h1 className="text-3xl font-bold mb-6">{news.title}</h1>
//       <div className="w-full h-72 relative mb-6 rounded overflow-hidden shadow">
//         <Image
//           src={news.image?.url || '/images/placeholder.jpg'} // 画像URLがない場合はデフォルト画像を使用
//           alt={news.title}
//           fill
//           style={{ objectFit: 'cover' }}
//         />
//       </div>
//       <p className="text-lg text-gray-700">{news.text}</p>
//     </div>
//   );
// }
import React from 'react'

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>こんにちは、Next.js と TypeScript!</h1>
      <p>簡単なページの作成が完了しました。</p>
    </div>
  )
}

export default HomePage
