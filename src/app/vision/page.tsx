import { SectionHeader } from "@/components/custom/SectionHeader";
import { InfoPanel } from "@/components/custom/InfoPanel";
import { ImageGallery } from "@/components/custom/ImageGallery";

export default function Vision() {
  return (
    <main className="container mx-auto p-6 space-y-8">
      <SectionHeader title="Visión y Misión" />
      <div className="grid md:grid-cols-2 gap-6">
        <InfoPanel>
          <h3 className="font-heading mb-2">Visión</h3>
          <p>
            Ser referentes en el mercado inmobiliario de Paraguay, reconocidos por nuestra
            confiabilidad, innovación y compromiso con cada cliente.
          </p>
        </InfoPanel>
        <ImageGallery images={[{ src: "/images/visión/asu2.jpg" }, { src: "/images/visión/mariano0.jpg" }]} />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <ImageGallery images={[{ src: "/images/visión/fernando2.jpg" }, { src: "/images/visión/surucente0.JPG" }]} />
        <InfoPanel>
          <h3 className="font-heading mb-2">Misión</h3>
          <p>
            Brindar soluciones inmobiliarias de excelencia, facilitando la compra y venta de
            terrenos, casas y propiedades rurales, con un enfoque en la satisfacción del cliente
            y el desarrollo sostenible.
          </p>
        </InfoPanel>
      </div>
    </main>
  );
}

