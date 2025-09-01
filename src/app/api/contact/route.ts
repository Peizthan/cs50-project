import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Ensure Node.js runtime for Nodemailer in the App Router
export const runtime = 'nodejs';

// Simple in-memory rate limiter (per serverless instance)
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_HITS = 5;

function allow(ip: string) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length <= MAX_HITS;
}

// Load nodemailer at request time to avoid bundling issues during build
async function getMailer() {
  const mod = await import('nodemailer');
  return (mod as any).default ?? (mod as any);
}

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  website?: string; // honeypot
};

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '0.0.0.0';
    if (!allow(ip)) {
      return NextResponse.json({ ok: false, message: 'Too many requests' }, { status: 429 });
    }

    const { name = '', email = '', phone = '', message = '', website = '' } = (await req.json()) as ContactBody;

    // Honeypot: bots fill hidden fields
    if (typeof website === 'string' && website.trim() !== '') {
      return NextResponse.json({ ok: true }, { status: 200 }); // pretend success
    }

    // Minimal validation
    const emailOk = /^[^@]+@[^@]+\.[^@]+$/.test(email);
    if (!name || !emailOk || !message) {
      return NextResponse.json({ ok: false, message: 'Invalid input' }, { status: 400 });
    }

    const env = process.env as Record<string, string | undefined>;
    const SMTP_HOST = env.SMTP_HOST;
    const SMTP_PORT = env.SMTP_PORT;
    const SMTP_USER = env.SMTP_USER;
    const SMTP_PASS = env.SMTP_PASS;
    const CONTACT_TO = env.CONTACT_TO;
    const CONTACT_FROM = env.CONTACT_FROM;

    const isProd = process.env.NODE_ENV === 'production';
    const missingConfig = !SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO || !CONTACT_FROM;
    if (missingConfig) {
      if (isProd) {
        return NextResponse.json({ ok: false, message: 'Server not configured' }, { status: 500 });
      }
      // Dev fallback: avoid 500 locally when SMTP is not configured
      console.warn('[contact] Missing SMTP envs. Dev fallback: not sending email, returning ok');
      return NextResponse.json({ ok: true, dev: true }, { status: 200 });
    }

    const nodemailer = await getMailer();
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const subject = `Nuevo contacto — ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const html = `
      <h2>New contact</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || '-'}</p>
      <p><b>Message:</b><br/>${String(message).split('\\n').join('<br/>')}</p>
    `;

    await transporter.sendMail({ from: CONTACT_FROM, to: CONTACT_TO, subject, text, html });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') console.error('Contact error:', err);
    return NextResponse.json({ ok: false, message: 'Unexpected error' }, { status: 500 });
  }
}

