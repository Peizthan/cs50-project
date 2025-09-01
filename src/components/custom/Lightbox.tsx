"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: { src: string; alt?: string }[]
  startIndex: number
  onClose: () => void
}) {
  const [index, setIndex] = useState(startIndex)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length)
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener("keydown", onKey)
      return () => window.removeEventListener("keydown", onKey)
    }
    return () => {}
  }, [images.length, onClose])

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center">
      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute top-4 right-4 text-white/90 text-2xl px-3 py-1 rounded hover:bg-white/10"
      >
        ×
      </button>

      <button
        aria-label="Anterior"
        onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
        className="absolute left-2 md:left-6 text-white/90 text-2xl px-3 py-1 rounded hover:bg-white/10"
      >
        ‹
      </button>

      <div className="relative w-[90vw] h-[70vh] max-w-5xl">
        <Image
          src={images[index].src}
          alt={images[index].alt ?? `Imagen ${index + 1}`}
          fill
          className="object-contain"
          priority
        />
      </div>

      <button
        aria-label="Siguiente"
        onClick={() => setIndex((i) => (i + 1) % images.length)}
        className="absolute right-2 md:right-6 text-white/90 text-2xl px-3 py-1 rounded hover:bg-white/10"
      >
        ›
      </button>
    </div>
  )
}

