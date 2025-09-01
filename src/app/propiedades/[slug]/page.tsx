import type { Metadata } from 'next';
import LightboxGallery from '@/components/custom/LightboxGallery';
import MapEmbed from '@/components/custom/MapEmbed';
import { CTABar } from '@/components/custom/CTABar';
import { SectionHeader } from '@/components/custom/SectionHeader';
import { InfoPanel } from '@/components/custom/InfoPanel';
import { getPropertyBySlug, getAllProperties } from '@/data/properties';

export const revalidate = 3600;

export async function generateStaticParams() {
  const props = await getAllProperties();
  return props.map((p: any) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = await getPropertyBySlug(params.slug);
  if (!p) return {};
  const url = process.env.NEXT_PUBLIC_SITE_URL || '';
  const locLabel = p.city || p.location_label || 'Paraguay';
  const title = `${p.title} – ${locLabel} | KOSVAS`;
  const description = p.seoDescription || p.summary || `Oportunidad en ${locLabel}. Consulta por disponibilidad y precio.`;
  const firstImage = (p.images && p.images[0] && (p.images[0] as any).src) || '/icon.png';
  const ogImage = p.ogImage || `${url}${firstImage}`;
  return {
    title,
    description,
    openGraph: {
      title, description, url: `${url}/propiedades/${p.slug}`, type: 'article', images: [ogImage],
    },
    twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
    alternates: { canonical: `${url}/propiedades/${p.slug}` },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const p = await getPropertyBySlug(params.slug);
  if (!p) {
    return <div className="container mx-auto px-4 py-10">Propiedad no encontrada.</div>;
  }

  const images = (p.images || []).map((it: any) => (typeof it === 'string' ? { src: it } : it));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: p.title,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/propiedades/${p.slug}`,
    category: p.category || 'Land',
    image: (p.images || []).map((it: any) => it.src),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'PYG',
      price: p.pricePerM2,
      availability: 'https://schema.org/InStock',
    },
    areaServed: p.city || p.location_label || 'Paraguay',
    area: {
      '@type': 'QuantitativeValue',
      unitCode: 'MTK',
      value: p.area_m2,
    },
    address: p.location_label ? { '@type': 'PostalAddress', addressLocality: p.location_label } : undefined,
    description: p.seoDescription || p.summary,
  };

  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SectionHeader title={p.title} subtitle={p.city || ''} />
      {typeof p.pricePerM2 === 'number' && (
        <p className="text-brown-700">Precio por m²: {p.pricePerM2.toLocaleString()} PYG</p>
      )}

      <LightboxGallery images={images} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <InfoPanel>
            <p className="text-brown-800">{p.summary || p.seoDescription || 'Oportunidad exclusiva.'}</p>
            <p className="text-sm text-brown-700 mt-3">
              Nota: Las instalaciones del barrio (piscinas, deportes, etc.) son privadas y no están incluidas en esta oferta.
            </p>
          </InfoPanel>
        </div>
        <div>
          {typeof p.lat === 'number' && typeof p.lng === 'number' && (
            <InfoPanel>
              <p className="mb-2 font-medium text-olive-900">Ubicación aproximada</p>
              <MapEmbed lat={p.lat} lng={p.lng} />
            </InfoPanel>
          )}
        </div>
      </div>

      <CTABar propertyId={params.slug} />
    </div>
  );
}

