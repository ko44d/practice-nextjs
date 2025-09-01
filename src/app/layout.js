import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js 練習アプリ",
  description: "Next.js を全く触ったことのない人向けの練習用アプリケーション",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <header className="navbar">
          <div className="navbar-inner">
            <Link href="/" className="brand">
              <span className="brand-dot" aria-hidden="true" />
              Next.js 練習アプリ
            </Link>
            <nav className="nav">
              <Link href="/about">About</Link>
              <Link href="/counter">Counter</Link>
              <Link href="/todos">Todos</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/styles-example">Styles</Link>
            </nav>
          </div>
        </header>
        <main className="site-main">
          <div className="container">{children}</div>
        </main>
        <footer className="site-footer">
          <div className="footer-inner">
            <span>© {new Date().getFullYear()} Next.js 練習アプリ</span>
            <span style={{opacity: 0.7}}>Enjoy learning 🚀</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
