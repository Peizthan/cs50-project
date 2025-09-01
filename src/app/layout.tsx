import type { Metadata } from 'next';
import './globals.css';

import Header from '@/components/custom/Header';
import Footer from '@/components/custom/Footer';
import { Montserrat, Lato } from 'next/font/google';

// Configure brand fonts and expose CSS variables for Tailwind
const bodyFont = Lato({ subsets: ['latin'], variable: '--font-body', weight: ['300', '400', '700'] });
const headingFont = Montserrat({ subsets: ['latin'], variable: '--font-heading', weight: ['300', '500', '700'] });

export const metadata: Metadata = {
  title: 'KOSVAS',
  description: 'Broker inmobiliario — oportunidades exclusivas en Paraguay',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://kosvaspy.com'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body className="font-body bg-beige text-brown-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

