export const metadata = {
  title: 'Todo 詳細 | Next.js 練習アプリ',
};

export default async function TodoDetailPage({ params }) {
  const { id } = params;
  // 本来は API から 1 件取得しますが、練習のため簡易実装にしています。
  return (
    <div>
      <h1>Todo 詳細</h1>
      <p>id: <strong>{id}</strong></p>
      <p>ここに選択した Todo の詳細を表示してみましょう。</p>

      <h2 style={{ marginTop: 24 }}>やってみよう</h2>
      <ol>
        <li>API に /api/todos/[id] を追加して、このページから fetch してみましょう。</li>
        <li>存在しない ID の場合は NotFound を表示してみましょう（ヒント: notFound()）。</li>
        <li>ページ固有の metadata.title を動的に id に合わせて変えてみましょう。</li>
      </ol>
    </div>
  );
}
