"use client";

import Link from "next/link";
import type { Experience } from "@/types/experience";
import ExperienceCard from "@/components/ExperienceCard";
import { useFavorites } from "@/hooks/useFavorites";

interface FeaturedExperiencesProps {
  items: Experience[];
}

export default function FeaturedExperiences({ items }: FeaturedExperiencesProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  if (items.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-neutral-900 sm:text-3xl">
          Experiencias destacadas
        </h2>
        <p className="mt-2 text-center text-neutral-500">
          Las mejores experiencias seleccionadas para ti
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={isFavorite(experience.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/experiences"
            className="inline-block rounded-full bg-neutral-900 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            Descubre más
          </Link>
        </div>
      </div>
    </section>
  );
}