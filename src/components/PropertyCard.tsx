'use client';
import Link from 'next/link';
import LightboxGallery from '@/components/custom/LightboxGallery';
import MapEmbed from '@/components/custom/MapEmbed';
import { WhatsAppLink } from '@/components/custom/WhatsAppLink';

type Img = { src: string; alt?: string } | string;
type P = {
  id?: string;
  slug: string;
  title: string;
  pricePerM2?: number; // camelCase variant
  price_per_m2?: number; // snake_case variant from data
  images: Img[];
  lat?: number;
  lng?: number;
  location_label?: string;
};

export default function PropertyCard({ p }: { p: P }) {
  const id = p.id || p.slug;
  const images = (p.images || []).map((it) => (typeof it === 'string' ? { src: it } : it));
  const price = typeof p.pricePerM2 === 'number' ? p.pricePerM2 : p.price_per_m2;

  return (
    <article className="rounded-2xl border border-cream-300 bg-cream-50 overflow-hidden shadow-sm">
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-semibold text-olive-900">
          <Link href={`/propiedades/${p.slug}`} className="hover:underline">
            {p.title}
          </Link>
        </h3>

        {typeof price === 'number' && (
          <p className="text-brown-700 text-sm mt-1">
            Precio por m²: {price.toLocaleString()} USD
          </p>
        )}

        <div className="mt-4">
          <LightboxGallery images={images} />
        </div>

        {typeof p.lat === 'number' && typeof p.lng === 'number' ? (
          <details className="mt-4">
            <summary className="cursor-pointer select-none text-olive-800 hover:underline">
              Ver ubicación (mapa interactivo)
            </summary>
            <div className="mt-3">
              <MapEmbed lat={p.lat} lng={p.lng} />
            </div>
          </details>
        ) : (
          p.location_label ? (
            <p className="mt-4 text-sm text-brown-700">Ubicación aproximada: {p.location_label}</p>
          ) : null
        )}

        <div className="mt-5 flex items-center gap-3">
          <Link
            href={`/propiedades/${p.slug}`}
            className="rounded-lg px-4 py-2 bg-olive-800 text-cream-50 hover:bg-olive-700"
          >
            Ver detalle
          </Link>
          <WhatsAppLink
            propertyId={id}
            className="rounded-lg px-4 py-2 border border-olive-800 text-olive-800 hover:bg-olive-50"
          >
            Consultar por WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </article>
  );
}
