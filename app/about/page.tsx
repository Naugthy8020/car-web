import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* 会社名とロゴ */}
      <div className="flex items-center mb-8 border-b border-gray-300 pb-4">
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
      <section className="mb-8 border-b border-gray-300 pb-8">
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
      <section className="mb-8 bg-green-100 p-6 rounded-lg border-b border-gray-300 pb-8">
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
      <section className="mb-8 border-b border-gray-300 pb-8">
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
          <li>オイル交換・フィルター交換</li>
          <li>タイヤ交換・バランス調整</li>
          <li>ブレーキ点検・修理</li>
          <li>エンジン・トランスミッションの整備</li>
          <li>車検</li>
        </ul>
      </section>

      {/* なぜ選ばれるか */}
      <section className="mb-8 border-b border-gray-300 pb-8">
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
          <li>経験豊富な技術者</li>
          <li>最新設備</li>
          <li>お客様第一</li>
          <li>迅速で丁寧なサービス</li>
        </ul>
      </section>

      {/* お客様の声 */}
      <section className="border-b border-gray-300 pb-8">
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

      {/* 会社情報とポリシー */}
      <section className="mt-12  text-sm" id="policy">
        <h2 className="text-2xl font-semibold mb-4">会社情報・ポリシー</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">会社概要</h3>
          <p><strong>会社名：</strong>Car Inc.</p>
          <p><strong>所在地：</strong>〒123-4567 大阪府大阪市中央区サンプル町1-2-3</p>
          <p><strong>電話番号：</strong>06-1234-5678</p>
          <p><strong>メールアドレス：</strong>info@carinc.jp</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">個人情報保護方針</h3>
          <p>
            当社は、お客様の個人情報を厳重に管理し、法令に基づき適切に取り扱います。
            情報の第三者提供は、法的義務を除き一切行いません。
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">サービスに関するポリシー</h3>
          <ul className="list-disc pl-6">
            <li>整備内容や料金については事前に明確にご説明いたします。</li>
            <li>国の法令や安全基準に則ったサービス提供を徹底しています。</li>
            <li>お客様第一の姿勢で、信頼と安心の整備をお届けします。</li>
          </ul>
        </div>

        <p className="mt-8 text-center text-gray-500">&copy; {new Date().getFullYear()} Car Inc. All rights reserved.</p>
      </section>
    </div>
  );
};

export default AboutPage;
