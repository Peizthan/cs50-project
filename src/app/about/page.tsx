import { SectionHeader } from "@/components/custom/SectionHeader"
import { InfoPanel } from "@/components/custom/InfoPanel"

export default function About() {
  return (
    <main className="container mx-auto p-6">
      <SectionHeader title="¿Quiénes somos?" subtitle="KOSVAS — Corredores Inmobiliarios" />
      <InfoPanel>
        <p>KOSVAS es un nuevo proyecto inmobiliario que combina la tradición familiar con un
enfoque moderno y profesional. 

Dedicados a la compra y venta de terrenos, casas y propiedades rurales, nos guiamos
por un firme compromiso con la honestidad y la seguridad en cada transacción. 

Nuestro legado familiar es la base de nuestro compromiso, garantizando a nuestros
clientes un servicio confiable, transparente y respaldado por años de experiencia. 

Trabajamos con dedicación para construir el futuro de nuestros clientes, basándonos
en valores que han sido parte de nuestra familia por generaciones.</p>
      </InfoPanel>
    </main>
  )
}

