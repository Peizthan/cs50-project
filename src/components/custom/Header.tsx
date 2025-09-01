'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-cream-300 bg-beige">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between relative">
        <Link href="/" className="flex items-center gap-2 group" aria-label="Ir al inicio">
          <Image src="/icon.png" alt="KOSVAS" width={28} height={28} className="rounded-sm" />
          <span className="font-heading font-semibold tracking-wide text-olive-900">KOSVAS</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 text-brown-800">
          <Link href="/propiedades" className="hover:text-olive-800">Propiedades</Link>
          <Link href="/about" className="hover:text-olive-800">Quiénes somos</Link>
          <Link href="/vision" className="hover:text-olive-800">Visión</Link>
          <Link href="/contacto" className="hover:text-olive-800">Contacto</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-brown-800 hover:text-olive-800"
          aria-label="Menú"
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        </button>

        {/* Mobile dropdown */}
        {open && (
          <div className="absolute top-full left-0 right-0 z-50 md:hidden bg-beige border-t border-cream-300">
            <div className="py-2 px-4 flex flex-col text-brown-800">
              <Link href="/propiedades" className="py-2 hover:text-olive-800" onClick={() => setOpen(false)}>Propiedades</Link>
              <Link href="/about" className="py-2 hover:text-olive-800" onClick={() => setOpen(false)}>Quiénes somos</Link>
              <Link href="/vision" className="py-2 hover:text-olive-800" onClick={() => setOpen(false)}>Visión</Link>
              <Link href="/contacto" className="py-2 hover:text-olive-800" onClick={() => setOpen(false)}>Contacto</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

