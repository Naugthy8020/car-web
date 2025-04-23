import axios from 'axios';

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

const AchievementsPage = async () => {
  try {
    // axiosを使って非同期でデータを取得
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_MICROCMS_ACHIEVEMENT_ENDPOINT}`,
      {
        headers: {
          'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '',
        },
      }
    );

    // 取得したアチーブメントデータ
    const achievements: Achievement[] = response.data.contents;

    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Achievements</h1>
        
        <ul>
          {achievements.map((achievement) => (
            <li key={achievement.id} className="mb-12 border-b border-gray-300 pb-8">
              <h2 className="text-2xl font-semibold mb-4">{achievement.title}</h2>
              <p className="text-lg text-gray-700 mb-4">{achievement.text}</p>
              
              {/* 画像の表示 */}
              {achievement.image?.url && (
                <div className="mb-4">
                  <img 
                    src={achievement.image.url} 
                    alt={achievement.title} 
                    width={achievement.image.width || 700}  // 幅を少し小さく変更
                    height={achievement.image.height || 400} // 高さを少し小さく変更
                    className="rounded-lg w-full h-auto max-w-full max-h-[500px] object-cover"
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data from microCMS:', error);
    return <div className="text-center text-red-500">Error fetching data.</div>;
  }
};

export default AchievementsPage;
