import Link from "next/link"

export default function NotFound() {
  return (
    <main className="container mx-auto p-6 space-y-4">
      <h1 className="font-heading text-3xl">Página no encontrada</h1>
      <p className="text-olive">La página que buscas no existe o fue movida.</p>
      <Link href="/" className="underline">Volver al inicio</Link>
    </main>
  )
}
