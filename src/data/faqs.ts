export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "¿Cómo funcionan la búsqueda y los filtros?",
    answer:
      "La búsqueda filtra experiencias por título a medida que escribes. Los filtros de categoría y destino te permiten afinar los resultados. Todos los filtros se aplican al instante y se reflejan en la URL, así que puedes combinarlos libremente.",
  },
  {
    question: "¿Se puede compartir una búsqueda con alguien?",
    answer:
      "Sí. Como los filtros se guardan en la URL, puedes copiar la dirección de la página y compartirla. Quien la abra verá exactamente los mismos resultados que tú.",
  },
  {
    question: "¿Cómo guardo experiencias en favoritos?",
    answer:
      "Haz clic en el ícono de corazón que aparece en cada tarjeta o en la página de detalle. Los favoritos se almacenan temporalmente en tu navegador y se pierden al recargar la página o cerrar la ventana.",
  },
  {
    question: "¿Qué categorías de experiencias existen?",
    answer:
      "Las experiencias se organizan en cinco categorías: Aventura, Cultura, Comida, Bienestar y Naturaleza. Cada una agrupa actividades con un enfoque distinto para que encuentres lo que mejor se adapta a tu viaje.",
  },
  {
    question: "¿Cuándo conviene reservar?",
    answer:
      "Recomendamos reservar con al menos dos semanas de anticipación, especialmente en temporada alta. Así aseguras tu lugar y puedes aprovechar mejores precios.",
  },
  {
    question: "¿Cómo funciona la cancelación?",
    answer:
      "Todas las experiencias tienen cancelación gratuita hasta 24 horas antes de la fecha reservada. Pasado ese plazo, no se reembolsa el importe.",
  },
];