'use client';
import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';

export default function LightboxGallery({ images }: { images: { src: string; alt?: string }[] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const show = (i: number) => { setIdx(i); setOpen(true); };
  const next = useCallback(() => setIdx((i) => (i + 1) % images.length), [images.length]);
  const prev = useCallback(() => setIdx((i) => (i - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }
    return () => {};
  }, [open, next, prev]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((img, i) => (
          <button key={i} onClick={() => show(i)} className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={img.src}
              alt={img.alt || 'Imagen de la propiedad'}
              fill
              className="object-cover hover:scale-105 transition-transform"
              sizes="(max-width:768px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button onClick={() => setOpen(false)} aria-label="Cerrar" className="absolute top-4 right-4 text-cream-50 text-2xl">×</button>
          <button onClick={prev} aria-label="Anterior" className="absolute left-2 md:left-6 text-cream-50 text-3xl">‹</button>
          <div className="relative w-[92vw] h-[70vh] md:w-[80vw] md:h-[80vh]">
            <Image
              src={images[idx].src}
              alt={images[idx].alt || 'Imagen de la propiedad'}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <button onClick={next} aria-label="Siguiente" className="absolute right-2 md:right-6 text-cream-50 text-3xl">›</button>
        </div>
      )}
    </>
  );
}

