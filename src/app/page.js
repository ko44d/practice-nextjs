import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.description}>
        <div>
          <h1>Next.js 練習アプリへようこそ 👋</h1>
          <p>
            これは、Next.js を全く触ったことがない人が、基本を手を動かして学べるように作られたミニ課題集です。
          </p>
          <p>
            下のリンクから各ページへ進み、ページ内の「やってみよう」の指示に従ってコードを書き換えてみましょう。
          </p>
        </div>
      </section>

      <section className={styles.grid}>
        <Link href="/about" className={styles.card}>
          <h2>1. About（サーバーコンポーネント） →</h2>
          <p>サーバーコンポーネントで静的な内容を表示してみよう。</p>
        </Link>
        <Link href="/counter" className={styles.card}>
          <h2>2. Counter（クライアント） →</h2>
          <p>use client と useState を使ってカウンターを作ってみよう。</p>
        </Link>
        <Link href="/todos" className={styles.card}>
          <h2>3. Todos（API & フェッチ） →</h2>
          <p>API Route を作成し、サーバーコンポーネントでデータを取得しよう。</p>
        </Link>
        <Link href="/contact" className={styles.card}>
          <h2>4. Contact（フォーム） →</h2>
          <p>フォームを作り、API に POST してみよう。</p>
        </Link>
        <Link href="/styles-example" className={styles.card}>
          <h2>5. Styles（CSS Module） →</h2>
          <p>CSS Module を使って見た目を変えてみよう。</p>
        </Link>
      </section>
    </div>
  );
}
