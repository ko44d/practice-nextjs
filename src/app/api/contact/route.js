import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  // 実際はここで DB 保存やメール送信など
  return NextResponse.json({ ok: true, received: body });
}
