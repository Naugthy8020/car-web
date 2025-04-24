'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const sanitize = (str: string) => {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = '名前は必須です。';
    if (!formData.email.trim()) newErrors.email = 'メールは必須です。';
    else if (!validateEmail(formData.email))
      newErrors.email = '有効なメールアドレスを入力してください。';
    if (!formData.message.trim()) newErrors.message = 'メッセージは必須です。';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const sanitizedData = {
        name: sanitize(formData.name),
        email: sanitize(formData.email),
        message: sanitize(formData.message),
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        sanitizedData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      console.log('送信成功:', result.text);
      setSubmissionSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('送信エラー:', error);
      alert('送信に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">お問い合わせ</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
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
            className={`w-full p-3 border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

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
            className={`w-full p-3 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-semibold mb-2">
            メッセージ
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full p-3 border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300"
        >
          {isSubmitting ? '送信中...' : '送信'}
        </button>
      </form>

      {submissionSuccess && (
        <div className="mt-6 text-center text-green-500 font-medium">
          <p>お問い合わせありがとうございます。後ほどご連絡いたします。</p>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
