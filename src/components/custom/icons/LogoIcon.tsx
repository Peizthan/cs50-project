"use client";
import { useState } from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & { fallbackClassName?: string };

// Renders the brand icon using the raster asset in /public/images/logo-icon.png.
// Falls back to the old inline SVG if the image is missing or fails to load.
export default function LogoIcon({ className, alt = 'KOSVAS', fallbackClassName, ...rest }: Props) {
  const [error, setError] = useState(false);

  if (!error) {
    return (
      <img
        src="/images/logo-icon.png"
        alt={alt}
        className={className}
        onError={() => setError(true)}
        {...rest}
      />
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={fallbackClassName || className}>
      <circle cx="16" cy="16" r="14" fill="currentColor" opacity="0.12" />
      <path d="M10 21l6-10 6 10h-2.6l-3.4-5.7L12.6 21H10z" fill="currentColor" />
    </svg>
  );
}
