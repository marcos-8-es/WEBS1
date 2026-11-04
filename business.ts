export const BUSINESS = {
  name: "La Barbería de Fernando",
  street: "C. Fray Luis de Granada, 15",
  postalCode: "37007",
  city: "Salamanca",
  country: "España",
  phone: "923 16 53 77",
  phoneHref: "tel:+34923165377",
  rating: "5,0",
  reviews: 49,
  mapsQuery: "La Barbería de Fernando, C. Fray Luis de Granada 15, 37007 Salamanca",
};

export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.mapsQuery)}`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS.mapsQuery)}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.mapsQuery)}&output=embed`;

export const NAV = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#barberia", label: "La barbería" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#opiniones", label: "Opiniones" },
  { href: "/#contacto", label: "Contacto" },
];

/**
 * Servicios: estructura editable. Sustituye `title` y `description`
 * por los servicios reales (y añade `price` si se desea mostrar).
 */
export type Service = { title: string; description: string; price?: string; image: "tools" | "station" | "chair" };
export const SERVICES: Service[] = [
  { title: "Servicio por confirmar", description: "Espacio reservado para describir un servicio real de la barbería.", image: "tools" },
  { title: "Servicio por confirmar", description: "Espacio reservado para describir un servicio real de la barbería.", image: "station" },
  { title: "Servicio por confirmar", description: "Espacio reservado para describir un servicio real de la barbería.", image: "chair" },
];

export const TESTIMONIALS = [
  "Fernando es un excelente profesional. Recomendado al 100%, su servicio es rápido, de alta calidad y con un precio más que justo.",
  "Fernando es una gran persona, educado y muy agradable, además de un gran profesional.",
  "Un gran profesional, siempre atento y muy buen trato.",
];
