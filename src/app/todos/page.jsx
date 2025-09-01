import Link from 'next/link';
import { headers } from 'next/headers';

export const metadata = {
  title: 'Todos | Next.js 練習アプリ',
};

function resolveBaseUrl() {
  // 1) 環境変数があれば優先（末尾スラッシュは除去）
  const envBase = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '');
  if (envBase) return envBase;

  // 2) リクエストヘッダーから Host / Proto を取得（Vercel/プロキシ対応）
  const h = headers();
  const host = h.get('x-forwarded-host') || h.get('host');
  const proto = h.get('x-forwarded-proto') || (process.env.NODE_ENV === 'development' ? 'http' : 'https');
  if (host) return `${proto}://${host}`;

  // 3) 最後のフォールバック（開発ローカル）
  return 'http://localhost:3000';
}

async function fetchTodos() {
  const base = resolveBaseUrl();
  const res = await fetch(`${base}/api/todos`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export default async function TodosPage() {
  const data = await fetchTodos();
  const todos = data.todos ?? [];

  return (
    <div>
      <h1>Todos</h1>
      <ul style={{ marginTop: 12 }}>
        {todos.map((t) => (
          <li key={t.id}>
            <Link href={`/todos/${t.id}`}>{t.title}</Link>{' '}
            {t.done ? '✅' : '⬜'}
          </li>
        ))}
      </ul>

      <h2 style={{ marginTop: 24 }}>やってみよう</h2>
      <ol>
        <li>API の配列に新しい Todo を追加してみましょう。</li>
        <li>done が true のアイテムに取り消し線を付けてみましょう。</li>
        <li>読み込み中に "Loading..." を表示する loading.js を作ってみましょう（ヒント: src/app/todos/loading.js）。</li>
      </ol>
    </div>
  );
}
