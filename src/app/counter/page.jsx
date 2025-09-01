'use client';

import { useState } from 'react';

export default function CounterPage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <p>このページはクライアントコンポーネントです（先頭に 'use client'）。</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12 }}>
        <button onClick={() => setCount((c) => c - 1)}>-1</button>
        <strong>{count}</strong>
        <button onClick={() => setCount((c) => c + 1)}>+1</button>
      </div>

      <h2 style={{ marginTop: 24 }}>やってみよう</h2>
      <ol>
        <li>ボタンをもう一つ追加して +10/-10 を実装してみましょう。</li>
        <li>count が 10 を超えたら背景色が変わるようにしてみましょう。</li>
        <li>初期値を props から受け取れるように改造してみましょう（別ページから渡すのも可）。</li>
      </ol>
    </div>
  );
}
