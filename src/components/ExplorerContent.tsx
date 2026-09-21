"use client";

import { useState } from "react";
import { useFilters } from "@/hooks/useFilters";
import { useExperiences } from "@/hooks/useExperiences";
import { useFavorites } from "@/hooks/useFavorites";
import ExperienceCard from "@/components/ExperienceCard";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";

export default function ExplorerContent() {
  const { filters, setFilter, clearFilters } = useFilters();
  const { results, countries } = useExperiences(filters);
  const { isFavorite, toggleFavorite } = useFavorites();

  const [searchText, setSearchText] = useState(filters.search);

  const handleSearchChange = (value: string) => {
    setSearchText(value);
    if (value === "") {
      clearFilters();
    } else {
      setFilter("search", value);
    }
  };

  const hasActiveFilters = !!(filters.search || filters.category || filters.destination);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
          Explora experiencias
        </h1>
      </div>

      <div className="mb-8">
        <SearchBar value={searchText} onChange={handleSearchChange} />
      </div>

      <div className="lg:grid lg:grid-cols-[18rem_1fr] lg:gap-8">
        {/* FilterBar: encima de resultados en móvil, columna izquierda en lg */}
        <div className="mb-6 lg:sticky lg:top-24 lg:mb-0 lg:self-start">
          <FilterBar
            category={filters.category}
            destination={filters.destination}
            countries={countries}
            onCategoryChange={(value) => setFilter("category", value)}
            onDestinationChange={(value) => setFilter("destination", value)}
            onClear={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </div>

        {/* Resultados */}
        <div>
          <p className="mb-6 text-neutral-500">
            {results.length}{" "}
            {results.length === 1 ? "experiencia" : "experiencias"}
          </p>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((experience) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  isFavorite={isFavorite(experience.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-lg font-semibold text-neutral-700">
                No se encontraron resultados
              </p>
              <p className="mt-2 text-sm text-neutral-500">
                Prueba con otro término o quita algún filtro.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-full bg-orange-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}