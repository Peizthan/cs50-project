import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  const host = request.headers.get('host') || '';
  if (host.includes('kosvas-v3.vercel.app')) {
    const url = new URL(request.url);
    url.host = 'kosvaspy.com';
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

