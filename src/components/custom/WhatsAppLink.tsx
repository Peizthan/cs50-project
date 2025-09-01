'use client';
import { usePathname } from 'next/navigation';

function buildMsg(propertyId?: string, isHome = false) {
  const defaultMsg = process.env.NEXT_PUBLIC_WAPP_MESSAGE || 'Hola, quiero saber más sobre sus propiedades.';
  if (propertyId) return `Hola, quiero saber más sobre la propiedad ${propertyId}.`;
  if (isHome) return defaultMsg;
  return 'Hola, quiero saber más.';
}

export function WhatsAppLink({
  propertyId,
  className = '',
  children,
}: {
  propertyId?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const phone = process.env.NEXT_PUBLIC_WAPP_PHONE || '';
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '';
  const msg = encodeURIComponent(buildMsg(propertyId, isHome));
  const sanitizedPhone = phone.replace(/\D/g, '');
  const href = sanitizedPhone ? `https://wa.me/${sanitizedPhone}?text=${msg}` : '#';

  const onClick = () => {
    if (typeof window !== 'undefined') {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      w.gtag?.('event', 'whatsapp_click', {
        slug: propertyId || (isHome ? 'home' : pathname),
      });
    }
  };

  return (
    <a href={href} onClick={onClick} className={className}>
      {children || 'WhatsApp'}
    </a>
  );
}

