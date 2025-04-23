
'use client';
import React, { use, useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ここで実際の送信処理を追加することができます（例えば、API経由で送信）。
    // フォーム送信後、サーバーからのレスポンスに基づいて以下のフラグを設定。

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
    }, 1000); // ここでは仮に1秒後に成功としています

    // 実際の処理に合わせてエラーハンドリングなどを追加してください
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">お問い合わせ</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 名前 */}
        <div>
          <label htmlFor="name" className="block text-lg font-semibold mb-2">
            名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* メールアドレス */}
        <div>
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* メッセージ */}
        <div>
          <label htmlFor="message" className="block text-lg font-semibold mb-2">
            メッセージ
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* 送信ボタン */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300"
          >
            {isSubmitting ? '送信中...' : '送信'}
          </button>
        </div>
      </form>

      {submissionSuccess && (
        <div className="mt-6 text-center text-green-500">
          <p>お問い合わせいただきありがとうございます。後ほどご連絡いたします。</p>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
