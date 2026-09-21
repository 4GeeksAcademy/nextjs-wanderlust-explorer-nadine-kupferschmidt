import Link from "next/link";

export default function ExperienceNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-lg font-semibold text-neutral-700">
        Experiencia no encontrada
      </p>
      <p className="mt-2 text-sm text-neutral-500">
        La experiencia que buscas no existe o ha sido eliminada.
      </p>
      <Link
        href="/experiences"
        className="mt-6 rounded-full bg-orange-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600"
      >
        Volver a explorar
      </Link>
    </div>
  );
}