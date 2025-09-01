'use client';
import { useEffect, useState } from 'react';

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(typeof window !== 'undefined' && window.scrollY > 400);
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
    return () => {};
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-20 right-4 z-40 rounded-full bg-brown-900 text-cream-50 px-4 py-2 shadow-md hover:bg-brown-800"
      aria-label="Volver al inicio"
    >
      ↑
    </button>
  );
}

