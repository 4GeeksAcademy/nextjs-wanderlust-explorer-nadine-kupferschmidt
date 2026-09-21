export default function BenefitsSection() {
  const benefits = [
    {
      title: "Elige tus favoritos",
      description:
        "Guarda con un corazón las experiencias que más te gusten y encuéntralas en un solo lugar.",
      circleBg: "bg-rose-100",
      icon: (
        <svg className="h-6 w-6 text-rose-600" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
    },
    {
      title: "Comparte tus búsquedas",
      description:
        "Cada filtro vive en la URL: envía un enlace y tus amigos verán exactamente lo mismo.",
      circleBg: "bg-emerald-100",
      icon: (
        <svg className="h-6 w-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
    },
    {
      title: "Filtra a tu manera",
      description:
        "Busca por título y combina categoría y destino para dar con el plan ideal.",
      circleBg: "bg-amber-100",
      icon: (
        <svg className="h-6 w-6 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
          <path d="M8 11h6" />
          <path d="M11 8v6" />
        </svg>
      ),
    },
    {
      title: "Experiencias de todo el mundo",
      description:
        "Aventura, cultura, comida, bienestar y naturaleza en destinos de todo el planeta.",
      circleBg: "bg-sky-100",
      icon: (
        <svg className="h-6 w-6 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-neutral-900 sm:text-3xl">
          ¿Por qué Wanderlust?
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col items-center text-center">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full ${benefit.circleBg}`}
              >
                {benefit.icon}
              </div>
              <h3 className="mt-4 text-base font-bold text-neutral-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}