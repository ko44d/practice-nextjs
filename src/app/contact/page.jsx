'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      });
      const data = await res.json();
      setResult(data);
    } catch (e) {
      setResult({ ok: false, error: String(e) });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 8, maxWidth: 360, marginTop: 12 }}>
        <label>
          お名前
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="山田 太郎" />
        </label>
        <label>
          メッセージ
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="こんにちは！" />
        </label>
        <button type="submit" disabled={loading}>{loading ? '送信中...' : '送信'}</button>
      </form>

      {result && (
        <pre style={{ marginTop: 16, background: '#111', padding: 12, borderRadius: 8 }}>
{JSON.stringify(result, null, 2)}
        </pre>
      )}

      <h2 style={{ marginTop: 24 }}>やってみよう</h2>
      <ol>
        <li>必須チェック（バリデーション）を入れて、不正な場合は送信しないようにしましょう。</li>
        <li>送信に成功したらフォームをリセットし、「ありがとうございました！」などのメッセージを表示しましょう。</li>
        <li>API 側で name が空の場合に 400 を返すようにしてみましょう。</li>
      </ol>
    </div>
  );
}
