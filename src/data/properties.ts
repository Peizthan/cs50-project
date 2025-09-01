export type Property = {
  slug: string
  title: string
  area_m2: number
  price_per_m2?: number
  location_label: string
  description: string
  images: string[]
  perks?: string[]
  show_total_price?: boolean
  lat?: number
  lng?: number
  city?: string
  category?: string
  seoDescription?: string
  summary?: string
  ogImage?: string
}

export const PROPERTIES: Property[] = [
  {
    slug: "mariano-936m2",
    title: "Terreno en Mariano",
    area_m2: 936,
    price_per_m2: 75,
    location_label: "Mariano Roque Alonso",
    description: "Terreno en esquina 30x33 m, ideal para vivienda o proyecto comercial.",
    images: [
      "/images/propiedades/mariano-936/demo1.png",
      "/images/propiedades/mariano-936/demo2.png",
      "/images/propiedades/mariano-936/demo3.png",
    ],
    perks: ["5 min Ruta Transchaco", "10 min Aeropuerto", "25 min Centro Asunción"],
    lat: -25.2290445,
    lng: -57.5246588,
    city: "Mariano Roque Alonso",
    category: "Terreno urbano",
    seoDescription: "Terreno en esquina de 936 m² en Mariano Roque Alonso, ideal para vivienda o proyecto comercial. A minutos de la Transchaco y el aeropuerto.",
    summary: "Lote 30x33 m con excelente accesibilidad y entorno residencial.",
    show_total_price: true,
  },
  {
    slug: "mariano-1407m2",
    title: "Terreno de 3 lotes en Mariano",
    area_m2: 1407.6,
    price_per_m2: 81,
    location_label: "Mariano Roque Alonso",
    description: "Presentamos un terreno de 1.407,6 m² formado por tres propiedades adyacentes. Ideal para desarrollos inmobiliarios o proyectos familiares.",
    images: [
      "/images/propiedades/mariano-1407/mariano0.jpg",
      "/images/propiedades/mariano-1407/mariano1.jpg",
      "/images/propiedades/mariano-1407/mariano2.jpg",
    ],
    perks: ["5 min Ruta Transchaco", "lotes de 469 m²", "25 min Centro Asunción"],
    lat: -25.22136,
    lng: -57.521744,
    city: "Mariano Roque Alonso",
    category: "Terreno urbano",
    seoDescription: "Manzana de 3 lotes unidos (1.407,6 m²) en Mariano Roque Alonso, ideal para desarrollo residencial o mixto.",
    summary: "Tres lotes contiguos de 469 m² cada uno, cerca de la Transchaco.",
    show_total_price: true,
  },
  {
    slug: "limpio-4680m2",
    title: "Terreno en Limpio",
    area_m2: 4680,
    price_per_m2: 111,
    location_label: "Limpio",
    description: "Estos lotes de 12x30 m en Limpio ofrecen el espacio ideal para crear un proyecto personal o familiar que perdure. Con una ubicación estratégica, estarás a solo minutos de la Ruta Transchaco, el aeropuerto, y a 25 minutos del centro de Asunción.",
    images: [
      "/images/propiedades/limpio-4680/limpio1.jpg",
      "/images/propiedades/limpio-4680/limpio2.jpg",
      "/images/propiedades/limpio-4680/limpio3.jpg",
    ],
    perks: ["5 min Ruta Transchaco", "10 min Aeropuerto", "25 min Centro Asunción"],
    lat: -25.136113,
    lng: -57.4469147,
    city: "Limpio",
    category: "Terreno urbano",
    seoDescription: "Conjunto de lotes en Limpio a minutos de la Transchaco, aeropuerto y centro de Asunción, ideal para proyecto familiar o inversión.",
    summary: "Superficie 4.680 m²; entorno en crecimiento y rápida conexión.",
    show_total_price: true,
  },
  {
    slug: "fernando-9659m2",
    title: "Terreno en Fernando de la Mora",
    area_m2: 9659,
    price_per_m2: 362,
    location_label: "CEREGRAL S.A.E.C.A., Fernando de la Mora",
    description: "Ideal para proyectos de desarrollos inmobiliarios, industriales, centros comerciales, tiendas, distribuidoras, outlets, centro logístico, almacenamiento, ventas, playa de exposición, talleres, etc.",
    images: [
      "/images/propiedades/fernando-9659/fernando1.jpg",
      "/images/propiedades/fernando-9659/fernando2.jpg",
    ],
    perks: ["Incluye equipos industriales", "11 lotes que forman un solo cuerpo", "Calles internas"],
    lat: -25.3249591,
    lng: -57.553807,
    city: "Fernando de la Mora",
    category: "Industrial/Comercial",
    seoDescription: "Predio de 9.659 m² en Fernando de la Mora, ex planta CEREGRAL, apto para parque logístico, comercio o industria.",
    summary: "Excelente acceso metropolitano; posibilidad de reconversión y expansión.",
    show_total_price: true,
  },
  {
    slug: "franco-13120m2",
    title: "Terreno en Presidente Franco",
    area_m2: 13120,
    price_per_m2: 20,
    location_label: "Presidente Franco",
    description: "Un lugar inmejorable para el proyecto de tu vida sobre el Río Monday. Sobre la curva del río, a 5 minutos de la ruta PY07.",
    images: [
      "/images/propiedades/franco-13120/franco1.jpg",
      "/images/propiedades/franco-13120/franco2.jpg",
      "/images/propiedades/franco-13120/franco3.jpg",
      "/images/propiedades/franco-13120/franco4.jpg",
      "/images/propiedades/franco-13120/franco5.jpg",
    ],
    perks: ["Terreno sobre el río", "5 minutos de la ruta PY07", "Zona tranquila"],
    lat: -25.5572193,
    lng: -54.6847098,
    city: "Presidente Franco",
    category: "Ribereño/Quinta",
    seoDescription: "Terreno de 13.120 m² sobre el río Monday, a 5 min de la PY07; entorno natural y tranquilo.",
    summary: "Vista al río y acceso rápido a servicios.",
    show_total_price: true,
  },
  {
    slug: "franco-32427m2",
    title: "Terreno en Presidente Franco",
    area_m2: 32427,
    price_per_m2: 20,
    location_label: "Presidente Franco",
    description: "El espacio perfecto para la Quinta de tus sueños a metros del km9 de la ruta PY07, sobre el Río Monday.",
    images: [
      "/images/propiedades/franco-32427/franco1.jpg",
      "/images/propiedades/franco-32427/franco2.jpg",
      "/images/propiedades/franco-32427/franco3.jpg",
      "/images/propiedades/franco-32427/franco4.jpg",
      "/images/propiedades/franco-32427/franco5.jpg",
    ],
    perks: ["Terreno sobre el río", "5 minutos de la ruta PY07", "Zona tranquila"],
    lat: -25.5748043,
    lng: -54.6789199,
    city: "Presidente Franco",
    category: "Ribereño/Quinta",
    seoDescription: "Fracción de 32.427 m² sobre el río Monday, ideal para quinta o desarrollo turístico.",
    summary: "Zona km 9 PY07; naturaleza y privacidad.",
    show_total_price: true,
  },
  {
    slug: "asuncion-2800m2",
    title: "Casa en Asunción",
    area_m2: 2800,
    price_per_m2: 1250,
    location_label: "Asunción",
    description: "Ubicación privilegiada que combina la tranquilidad de un entorno residencial con la proximidad a las principales vías de la ciudad.",
    images: [
      "/images/propiedades/asuncion-2800/asu0.jpg",
      "/images/propiedades/asuncion-2800/asu1.jpg",
      "/images/propiedades/asuncion-2800/asu2.jpg",
      "/images/propiedades/asuncion-2800/asu3.jpg",
      "/images/propiedades/asuncion-2800/asu4.jpg",
    ],
    perks: ["Barrio exclusivo", "Patio con piscina y quincho con parrilla.", "Salida a dos calles"],
    lat: -25.2737847,
    lng: -57.5540357,
    city: "Asunción",
    category: "Residencial premium",
    seoDescription: "Casa en Asunción con amplio terreno (2.800 m²), piscina y quincho; barrio exclusivo y salida a dos calles.",
    summary: "Ubicación residencial con acceso a vías principales.",
    show_total_price: true,
  },
  {
    slug: "pilar-1650",
    title: "Terreno en Pilar",
    area_m2: 16500000,
    price_per_m2: 0.1,
    location_label: "Pilar",
    description: "Inigualable fracción en el histórico Ita Corá, a orillas del imponente Río Paraná.",
    images: [
      "/images/propiedades/pilar-1650/pilar0.jpg",
      "/images/propiedades/pilar-1650/pilar1.jpg",
      "/images/propiedades/pilar-1650/pilar2.jpg",
      "/images/propiedades/pilar-1650/pilar3.jpg",
    ],
    perks: ["1650 Hectáreas", "Edificación de antiguas ruinas", "A orillas del río Paraná"],
    lat: -27.22725,
    lng: -58.1444167,
    city: "Pilar",
    category: "Rural/Campo",
    seoDescription: "Fracción de 1.650 ha en Ita Corá, a orillas del río Paraná; potencial ganadero, agrícola o turístico.",
    summary: "Ruinas históricas y frente al río.",
    show_total_price: true,
  },
  {
    slug: "sururio-14294m2",
    title: "Terreno en Surubi'y",
    area_m2: 14294,
    price_per_m2: 90,
    location_label: "Mariano Roque Alonso",
    description: "Terreno exclusivo en barrio cerrado frente al río.",
    images: [
      "/images/propiedades/suru-rio-14294/sururio.JPG",
    ],
    perks: ["Dentro de barrio privado", "Frente al río", "A 30 minutos del centro de Asunción"],
    lat: -25.176272,
    lng: -57.530005,
    city: "Mariano Roque Alonso",
    category: "Barrio privado/Ribereño",
    seoDescription: "Lote de 14.294 m² frente al río en barrio cerrado Surubi’y.",
    summary: "Seguridad y entorno natural.",
    show_total_price: true,
  },
  {
    slug: "surucente1-21613m2",
    title: "Terreno en Surubi'y",
    area_m2: 21613,
    price_per_m2: 80,
    location_label: "Mariano Roque Alonso",
    description: "Manzana entera en barrio cerrado.",
    images: [
      "/images/propiedades/suru-cente1-21613/surucente0.JPG",
      "/images/propiedades/suru-cente1-21613/surucente1.JPG",
      "/images/propiedades/suru-cente1-21613/surucente2.JPG",
      "/images/propiedades/suru-cente1-21613/surucente3.JPG",
    ],
    perks: ["Dentro de barrio privado", "Manzana entera", "A 30 minutos del centro de Asunción"],
    lat: -25.174556,
    lng: -57.516958,
    city: "Mariano Roque Alonso",
    category: "Barrio privado",
    seoDescription: "Manzana completa de 21.613 m² en Surubi’y; ideal desarrollo residencial.",
    summary: "Acceso controlado y entorno consolidado.",
    show_total_price: true,
  },
  {
    slug: "surucente2-10125m2",
    title: "Terreno en Surubi'y",
    area_m2: 10125,
    price_per_m2: 80,
    location_label: "Mariano Roque Alonso",
    description: "Frente de cuadra exclusiva dentro de barrio cerrado.",
    images: [
      "/images/propiedades/suru-cente2-10125/surucente0.JPG",
      "/images/propiedades/suru-cente2-10125/surucente1.JPG",
      "/images/propiedades/suru-cente2-10125/surucente2.JPG",
      "/images/propiedades/suru-cente2-10125/surucente3.JPG",
    ],
    perks: ["Dentro de barrio privado", "Frente de cuadra de esquina a esquina", "A 30 minutos del centro de Asunción"],
    lat: -25.175163,
    lng: -57.517368,
    city: "Mariano Roque Alonso",
    category: "Barrio privado",
    seoDescription: "Frente de cuadra de 10.125 m² en Surubi’y, de esquina a esquina.",
    summary: "Listo para proyecto residencial.",
    show_total_price: true,
  },
  {
    slug: "suruii-30563m2",
    title: "Terreno en Surubi'y",
    area_m2: 30563,
    price_per_m2: 39,
    location_label: "Mariano Roque Alonso",
    description: "Terreno a desarrollar en Surubi'y II.",
    images: [
      "/images/propiedades/suru-2-30563/suruii0.JPG",
    ],
    perks: ["Zona de alto desarrollo", "A 5 minutos de la ruta Transchaco", "A 30 minutos del centro de Asunción"],
    lat: -25.184764,
    lng: -57.503924,
    city: "Mariano Roque Alonso",
    category: "Desarrollo/Inversión",
    seoDescription: "Terreno de 30.563 m² en Surubi’y II, zona de alto crecimiento.",
    summary: "Gran frente y proyección a mediano plazo.",
    show_total_price: true,
  },
];

// Helpers expected by the property detail route
export function getAllProperties() {
  return PROPERTIES.map(adaptProperty);
}

export function getPropertyBySlug(slug: string) {
  const p = PROPERTIES.find((it) => it.slug === slug);
  return p ? adaptProperty(p) : undefined;
}

function adaptProperty(p: Property) {
  return {
    ...p,
    pricePerM2: p.price_per_m2,
    images: (p.images || []).map((src) => ({ src })),
  } as any;
}

