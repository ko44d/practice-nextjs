import { NextResponse } from 'next/server';

const TODOS = [
  { id: 1, title: '牛乳を買う', done: false },
  { id: 2, title: 'メールを返信する', done: true },
  { id: 3, title: 'Next.js を学ぶ', done: false },
];

export async function GET() {
  // シンプルな GET API（本来は DB からの取得等）
  return NextResponse.json({ todos: TODOS });
}
