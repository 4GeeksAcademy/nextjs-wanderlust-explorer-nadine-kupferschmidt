"use client";

import { useMemo } from "react";
import Link from "next/link";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/hooks/useFavorites";
import ExperienceCard from "@/components/ExperienceCard";

export default function FavoritesContent() {
  const { favoriteIds, isFavorite, toggleFavorite, count } = useFavorites();

  const favoriteExperiences = useMemo(() => {
    return favoriteIds
      .map((id) => experiences.find((exp) => exp.id === id))
      .filter(Boolean);
  }, [favoriteIds]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
          Tus favoritos
        </h1>
        <p className="mt-1 text-neutral-500">
          {count} {count === 1 ? "favorito" : "favoritos"}
        </p>
      </div>

      {favoriteExperiences.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {favoriteExperiences.map((experience) => (
            <ExperienceCard
              key={experience!.id}
              experience={experience!}
              isFavorite={isFavorite(experience!.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <svg
            className="mb-6 h-16 w-16 text-red-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <p className="text-lg font-semibold text-neutral-700">
            Todavía no tienes favoritos
          </p>
          <p className="mt-2 text-sm text-neutral-500">
            Explora experiencias y guarda tus favoritas para revisarlas después.
          </p>
          <Link
            href="/experiences"
            className="mt-6 rounded-full bg-orange-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600"
          >
            Explorar experiencias
          </Link>
          <p className="mt-8 text-xs text-neutral-400">
            Tus favoritos se guardan solo mientras navegas por la app.
          </p>
        </div>
      )}
    </div>
  );
}