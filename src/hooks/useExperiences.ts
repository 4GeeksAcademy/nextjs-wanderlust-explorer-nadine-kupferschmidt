import { useMemo } from "react";
import { experiences } from "@/data/experiences";
import type { Filters } from "@/hooks/useFilters";

function escapeRegex(term: string): string {
  return term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Extrae el país de una cadena "Ciudad, País" */
function extractCountry(destination: string): string {
  const parts = destination.split(",");
  const country = parts.length > 1 ? parts[parts.length - 1] : destination;
  return country.trim();
}

export function useExperiences(filters: Filters) {
  const results = useMemo(() => {
    return experiences.filter((experience) => {
      // Filtro por búsqueda (título)
      const searchTerm = filters.search.trim();
      if (searchTerm) {
        const escaped = escapeRegex(searchTerm);
        const regex = new RegExp(escaped, "i");
        if (!regex.test(experience.title)) return false;
      }

      // Filtro por categoría
      const categoryFilter = filters.category.trim();
      if (categoryFilter) {
        if (
          experience.category.toLowerCase() !== categoryFilter.toLowerCase()
        ) {
          return false;
        }
      }

      // Filtro por destino
      const destinationFilter = filters.destination.trim();
      if (destinationFilter) {
        if (
          !experience.destination
            .toLowerCase()
            .includes(destinationFilter.toLowerCase())
        ) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  const countries = useMemo(() => {
    const countrySet = new Set<string>();
    for (const exp of experiences) {
      countrySet.add(extractCountry(exp.destination));
    }
    return Array.from(countrySet).sort((a, b) => a.localeCompare(b));
  }, []);

  return { results, countries };
}