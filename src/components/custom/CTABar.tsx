'use client';
import { WhatsAppLink } from '@/components/custom/WhatsAppLink';

export function CTABar({ propertyId }: { propertyId?: string }) {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center">
      <WhatsAppLink
        propertyId={propertyId}
        className="px-5 py-3 rounded-full shadow-lg bg-olive-800 text-cream-50 text-sm md:text-base hover:bg-olive-700"
      >
        Consultar por WhatsApp
      </WhatsAppLink>
    </div>
  );
}

