export default function MapEmbed({
  lat,
  lng,
  q,
  zoom = 16,
  className = '',
}: {
  lat?: number;
  lng?: number;
  q?: string; // fallback query (e.g., location label)
  zoom?: number;
  className?: string;
}) {
  const src =
    typeof lat === 'number' && typeof lng === 'number'
      ? `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&hl=es&output=embed`
      : `https://maps.google.com/maps?q=${encodeURIComponent(q || '')}&z=${zoom}&hl=es&output=embed`;
  return (
    <iframe
      src={src}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`w-full aspect-[4/3] rounded-xl border border-cream-300 ${className}`}
    />
  );
}
