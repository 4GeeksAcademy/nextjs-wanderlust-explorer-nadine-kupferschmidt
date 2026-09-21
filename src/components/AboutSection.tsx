export default function AboutSection() {
  return (
    <section className="bg-orange-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
          ¿Qué es Wanderlust?
        </h2>
        <p className="mt-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
          Wanderlust es una plataforma para descubrir y guardar experiencias únicas alrededor del mundo,
          desde tours gastronómicos hasta rutas de vela. Cada experiencia ha sido cuidadosamente
          seleccionada para que encuentres el plan perfecto, ya sea una aventura al aire libre,
          un taller de cocina tradicional o una escapada de bienestar.
        </p>
        <p className="mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
          Funciona de manera sencilla: busca por título lo que te apetezca, filtra por categoría y
          destino para afinar los resultados, marca tus experiencias favoritas con el corazón y
          comparte tus búsquedas con un enlace para que tus amigos vean exactamente los mismos filtros.
        </p>
      </div>
    </section>
  );
}