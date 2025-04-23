import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* 会社名とロゴ */}
      <div className="flex items-center mb-8">
  <Image
    src="/images/round-icons-KldDKNNnm3k-unsplash.svg"
    alt="Car Inc. Logo"
    width={60}
    height={60}
    className="mr-4"
  />
  <h1 className="text-4xl font-bold">Car Inc.</h1>
</div>


      {/* 会社のビジョン */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">私たちのビジョン</h2>
        <div className="mb-4">
          <Image
            src="/images/walls-io-n7u_Zfl4ALs-unsplash.jpg"
            alt="会社のビジョン"
            width={800}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <p className="text-lg text-gray-700">
          「Car Inc.」は、お客様の大切な車を最適な状態でお届けするため、日々努力している車の整備会社です。
          創業以来、地域に根ざしたサービスを提供し、車の安全性と性能を確保することを使命としてきました。
          私たちは、お客様が安心して車を運転できるよう、最新の技術と高度なスキルを駆使してサービスを提供しています。
        </p>
      </section>

      {/* SDGsの取り組み */}
      <section className="mb-8 bg-green-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">SDGsへの取り組み</h2>
        <div className="mb-4">
          <Image
            src="/images/structure.svg"
            alt="SDGsの取り組み"
            width={800}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <p className="text-lg text-gray-700 mb-4">
          当社は、持続可能な開発目標（SDGs）を推進する企業として、環境保護と地域社会への貢献を大切にしています。
          具体的な取り組みとして、以下のことを実践しています：
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>エコカー整備の推進：環境に優しい車両の整備・修理を行い、CO2排出削減に貢献しています。</li>
          <li>リサイクル部品の使用：可能な限りリサイクル部品を使用し、資源の無駄を減らします。</li>
          <li>省エネルギー活動：エネルギー効率の良い整備設備を使用し、環境への負担を軽減しています。</li>
        </ul>
      </section>

      {/* サービス内容 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">サービス内容</h2>
        <div className="mb-4">
          <Image
            src="/images/equalstock-lzlmT0Bku1Q-unsplash.jpg"
            alt="サービス内容"
            width={800}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>オイル交換・フィルター交換: 定期的なオイル交換でエンジンの寿命を延ばし、燃費を向上させます。</li>
          <li>タイヤ交換・バランス調整: 走行性能を向上させ、事故を未然に防ぐための重要なサービスです。</li>
          <li>ブレーキ点検・修理: 安全性を最優先にしたブレーキのメンテナンスを行い、安心して運転できるようサポートします。</li>
          <li>エンジン・トランスミッションの整備: 複雑なエンジンやトランスミッションのメンテナンスも、高度な技術で対応します。</li>
          <li>車検: 法定の車検を確実に実施し、安全基準を満たす整備を行います。</li>
        </ul>
      </section>

      {/* なぜ選ばれるか */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">なぜ私たちを選ぶのか？</h2>
        <div className="mb-4">
          <Image
            src="/images/handiwork-nyc-F6qaWyCbORU-unsplash.jpg"
            alt="選ばれる理由"
            width={800}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>経験豊富な技術者: 豊富な経験と専門的な知識を持ち、あらゆる車種に対応できます。</li>
          <li>最新設備: 最新の整備機器を使用して、車の状態を正確に診断し、高品質な整備を提供します。</li>
          <li>お客様第一: お客様の立場に立ち、最適な整備プランを提案します。</li>
          <li>迅速で丁寧なサービス: できるだけ迅速に、そして丁寧に作業を行います。</li>
        </ul>
      </section>

      {/* お客様の声 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">お客様の声</h2>
        <div className="mb-4">
          <Image
            src="/images/count-chris-hQNFPZK8F80-unsplash.jpg"
            alt="お客様の声"
            width={800}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <p className="text-lg text-gray-700">
          「いつも迅速で丁寧なサービスをありがとうございます。車の調子が良くなり、安全運転に自信が持てるようになりました。」<br />
          「スタッフの方々がとても親切で、説明もわかりやすく安心して整備を任せられました。」<br />
          「地域密着の姿勢が素晴らしく、何かあればすぐに相談できるので助かっています。」
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
