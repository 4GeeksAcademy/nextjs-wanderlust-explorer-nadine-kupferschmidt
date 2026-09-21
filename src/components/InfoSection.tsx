export default function InfoSection() {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-10">
      <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">
        Más sobre las experiencias de Wanderlust
      </h2>

      <div className="mt-8 space-y-8">
        <div>
          <h3 className="text-base font-bold text-neutral-900">
            Cómo son las experiencias en Wanderlust
          </h3>
          <p className="mt-2 leading-relaxed text-neutral-600">
            Cada experiencia está cuidadosamente seleccionada para ofrecerte
            actividades auténticas y memorables en distintos destinos del mundo.
            Desde recorridos guiados por ciudades históricas hasta talleres
            gastronómicos con chefs locales, todo está diseñado para que
            descubras el alma de cada lugar.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-neutral-900">
            Cómo elegir según tu estilo de viaje
          </h3>
          <p className="mt-2 leading-relaxed text-neutral-600">
            Nuestras experiencias se organizan en cinco categorías — Aventura,
            Cultura, Comida, Bienestar y Naturaleza — para que encuentres la
            que mejor se adapta a tus intereses. Si buscas adrenalina, las
            actividades de aventura son para ti; si prefieres sumergirte en la
            historia local, la categoría de cultura te encantará.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-neutral-900">
            Cuándo conviene reservar
          </h3>
          <p className="mt-2 leading-relaxed text-neutral-600">
            Reservar con antelación no solo te garantiza un lugar, sino que
            suele venir acompañado de mejores precios y disponibilidad.
            Temporadas altas como verano o fines de semana largos se agotan
            rápido, así que te recomendamos planificar con tiempo.
          </p>
        </div>
      </div>
    </div>
  );
}