'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-cream-300 bg-beige">
      <div className="container mx-auto px-4 py-8 flex items-center justify-between">
        <p className="text-brown-700 text-sm">© {new Date().getFullYear()} KOSVAS</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-olive-800 text-cream-50 px-4 py-2 hover:bg-olive-700"
          aria-label="Volver al inicio"
        >
          <Image src="/icon.png" alt="KOSVAS" width={20} height={20} className="rounded-sm" />
          Volver al inicio
        </Link>
      </div>
    </footer>
  );
}
