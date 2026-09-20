"use client";

import { experiences } from "@/data/experiences";
import { useFavorites } from "@/hooks/useFavorites";
import ExperienceCard from "@/components/ExperienceCard";

export default function ExplorerContent() {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
          Explora experiencias
        </h1>
        <p className="mt-1 text-neutral-500">
          {experiences.length} experiencias
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isFavorite={isFavorite(experience.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}