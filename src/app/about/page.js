export const metadata = {
  title: "About | Next.js 練習アプリ",
};

// サーバーコンポーネントの例（デフォルトはサーバー）
export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>
        このページはサーバーコンポーネントです。JS をダウンロードしなくても描画されます。
      </p>
      <h2>やってみよう</h2>
      <ol>
        <li>このページのタイトルや説明文を自分の言葉に書き換えてみましょう。</li>
        <li>metadata の description を追加してみましょう。</li>
        <li>グローバルレイアウト（src/app/layout.js）のナビに自分のページを追加してみましょう。</li>
      </ol>
      <p style={{ marginTop: 16 }}>
        ヒント: metadata は <code>export const metadata = {'{'} title: "...", description: "..." {'}'} </code> のように書けます。
      </p>
    </div>
  );
}
