# Next.js 練習アプリ（超入門）

Next.js を全く触ったことのない人向けの、手を動かして学べるミニ課題集です。App Router（src/app）を使った Next.js 14 を前提にしています。

## 動かし方

1. 依存をインストール

```bash
npm install
```

2. 開発サーバーを起動

```bash
npm run dev
```

3. ブラウザで http://localhost:3000 を開く

## 何が学べる？

- ページとルーティング（/about, /todos など）
- サーバーコンポーネントとクライアントコンポーネントの違い
- API Route の作成とデータ取得（fetch）
- 動的ルート（/todos/[id]）
- フォーム送信（/contact）
- CSS Module によるスタイリング（/styles-example）

## 練習の流れ

ホームページに各課題へのリンクがあります。各ページの「やってみよう」の指示に従ってコードを書き換えてみましょう。答えはありません。自分で試行錯誤するのが目的です。

- 1. About（サーバーコンポーネント）: `src/app/about/page.js`
- 2. Counter（クライアント）: `src/app/counter/page.jsx`
- 3. Todos（API & フェッチ）: `src/app/api/todos/route.js`, `src/app/todos/page.jsx`, `src/app/todos/[id]/page.jsx`
- 4. Contact（フォーム）: `src/app/api/contact/route.js`, `src/app/contact/page.jsx`
- 5. Styles（CSS Module）: `src/app/styles-example/page.jsx`, `src/app/styles-example/page.module.css`

## 便利なヒント

- サーバーコンポーネントでは `fetch` を直接使ってデータ取得ができます。
- クライアントコンポーネントにするには、ファイル先頭に `'use client'` と書きます。
- ローディング UI を付けたいときは、該当ディレクトリに `loading.js` を置きます（例: `src/app/todos/loading.js`）。
- 404 ページを出したいときは `not-found.js` を使うか、コード内で `notFound()` を呼びます。
- ページの `<head>`（タイトルなど）は `export const metadata = { title: '...' }` で設定できます。

## もっと学ぶ

- Next.js 公式ドキュメント: https://nextjs.org/docs
- Learn Next.js（公式チュートリアル）: https://nextjs.org/learn

楽しんで学んでください！🚀
