import Image from "next/image";
import Link from "next/link";
import { WhatsAppLink } from "@/components/custom/WhatsAppLink";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[52vh] md:h-[70vh] w-full overflow-hidden rounded-none md:rounded-xl">
        <Image
          src="/images/hero.JPG"
          alt="KOSVAS"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="container mx-auto px-6 pb-8 md:pb-0">
          <h1 className="font-heading text-3xl md:text-5xl text-beige uppercase drop-shadow">KOSVAS</h1>
          <p className="mt-2 text-cream md:text-lg drop-shadow">El inicio de un legado</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/propiedades" className="bg-olive text-beige px-4 py-2 rounded-md uppercase tracking-wide hover:opacity-90">
              Ver propiedades
            </Link>
            <WhatsAppLink className="bg-cream text-brown px-4 py-2 rounded-md uppercase tracking-wide border border-olive">
              Solicitar información
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}

