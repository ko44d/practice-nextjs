import styles from './page.module.css';

export const metadata = {
  title: 'Styles Example | Next.js 練習アプリ',
};

export default function StylesExamplePage() {
  return (
    <div>
      <h1>Styles Example</h1>
      <p>このページでは CSS Module を使います。</p>
      <div className={styles.card}>
        <h2>カード</h2>
        <p>このボックスの見た目を自由にカスタマイズしてみましょう！</p>
      </div>

      <h2 style={{ marginTop: 24 }}>やってみよう</h2>
      <ol>
        <li>page.module.css を編集して、背景色や角丸、ボーダーなどを変更してみましょう。</li>
        <li>ホバー時のスタイルを追加してみましょう。</li>
        <li>新しいクラス名（例: .accent）を作って、テキストの色を変えてみましょう。</li>
      </ol>
    </div>
  );
}
