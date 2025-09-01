import { PROPERTIES } from "@/data/properties"
import PropertyCard from "@/components/PropertyCard"

export default function Propiedades() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="font-heading text-3xl mb-6">Propiedades</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPERTIES.map((p) => <PropertyCard key={p.slug} p={p} />)}
      </div>
    </main>
  )
}
