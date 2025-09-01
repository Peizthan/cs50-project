import Link from "next/link"

export default function NavBar() {
  return (
    <header className="w-full bg-cream border-b border-olive">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-heading text-brown text-xl tracking-wide" aria-label="Ir al inicio">
          KOSVAS
        </Link>

        <div className="flex items-center gap-4 text-olive">
          <Link href="/propiedades" className="hover:underline">Propiedades</Link>
          <Link href="/about" className="hover:underline">Quiénes somos</Link>
          <Link href="/vision" className="hover:underline">Visión/Misión</Link>
          <Link href="/contacto" className="hover:underline">Contacto</Link>
        </div>
      </nav>
    </header>
  )
}

