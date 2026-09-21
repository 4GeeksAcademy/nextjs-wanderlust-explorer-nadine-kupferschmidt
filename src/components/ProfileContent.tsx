"use client";

import { useMemo } from "react";
import Link from "next/link";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/hooks/useFavorites";

export default function ProfileContent() {
  const { favoriteIds, count } = useFavorites();

  const uniqueCountries = useMemo(() => {
    const countrySet = new Set<string>();
    for (const id of favoriteIds) {
      const exp = experiences.find((e) => e.id === id);
      if (exp) {
        const parts = exp.destination.split(",");
        const country = parts.length > 1
          ? parts[parts.length - 1].trim()
          : exp.destination.trim();
        countrySet.add(country);
      }
    }
    return countrySet.size;
  }, [favoriteIds]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Tarjeta de perfil */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white">
            LF
          </div>
          <div>
            <h1 className="text-xl font-bold text-neutral-900">
              Lucía Fernández
            </h1>
            <p className="text-sm text-neutral-500">
              lucia.fernandez@example.com
            </p>
            <p className="text-xs text-neutral-400">
              Miembro desde marzo de 2024
            </p>
          </div>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-neutral-600">
          Apasionada por descubrir culturas, sabores y paisajes nuevos.
          Siempre buscando la próxima aventura que contar.
        </p>
      </div>

      {/* Tarjeta de resumen */}
      <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mb-5 text-lg font-semibold text-neutral-900">
          Resumen
        </h2>
        <div className="flex gap-10">
          <div>
            <p className="text-3xl font-bold text-neutral-900">{count}</p>
            <p className="mt-1 text-sm text-neutral-500">
              Favoritos guardados
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-neutral-900">
              {uniqueCountries}
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              Destinos distintos
            </p>
          </div>
        </div>
        <Link
          href="/favorites"
          className="mt-6 inline-block rounded-full bg-orange-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600"
        >
          Ver mis favoritos
        </Link>
      </div>
    </div>
  );
}