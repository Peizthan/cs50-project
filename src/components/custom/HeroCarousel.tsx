'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Slide = { src: string; alt?: string };
const AUTOPLAY_MS = 5000;

export default function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);

  // Autoplay only when there is more than one slide
  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  const go = (n: number) => {
    if (!slides || slides.length === 0) return;
    setI((n + slides.length) % slides.length);
  };

  if (!slides || slides.length === 0) {
    return (
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden rounded-b-2xl bg-cream-100" />
    );
  }

  return (
    <section className="relative h-[52vh] md:h-[68vh] overflow-hidden rounded-b-2xl bg-cream-100">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${idx === i ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image src={s.src} alt={s.alt || 'hero'} fill priority={idx === i} className="object-cover" sizes="100vw" />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10" />

      {/* Overlay brand, slogan and CTAs */}
      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="container mx-auto px-6 pb-8 md:pb-0">
          <h1 className="font-heading tracking-wide text-3xl md:text-5xl text-beige uppercase drop-shadow">KOSVAS</h1>
          <p className="mt-2 font-body text-cream md:text-lg drop-shadow">El inicio de un legado</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/propiedades" className="bg-olive text-beige px-4 py-2 rounded-md uppercase tracking-wide hover:opacity-90">
              Ver propiedades
            </a>
            <a href="/contacto" className="bg-cream text-brown px-4 py-2 rounded-md uppercase tracking-wide border border-olive hover:opacity-90">
              Solicitar información
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => go(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 w-2 rounded-full ${idx === i ? 'bg-cream-50' : 'bg-cream-200/70'}`}
          />
        ))}
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center p-3">
        <button aria-label="Anterior" onClick={() => go(i - 1)} className="rounded-full bg-black/40 text-cream-50 px-3 py-2">‹</button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center p-3">
        <button aria-label="Siguiente" onClick={() => go(i + 1)} className="rounded-full bg-black/40 text-cream-50 px-3 py-2">›</button>
      </div>
    </section>
  );
}

