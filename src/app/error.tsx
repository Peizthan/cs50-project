"use client"

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="container mx-auto p-6 space-y-4">
      <h1 className="font-heading text-2xl">Ocurrió un error</h1>
      <p className="text-olive">{error.message}</p>
      <button onClick={reset} className="bg-olive text-beige px-4 py-2 rounded-md">Reintentar</button>
    </main>
  )
}
