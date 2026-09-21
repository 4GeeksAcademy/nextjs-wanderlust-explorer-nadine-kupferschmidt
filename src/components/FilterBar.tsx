"use client";

import { CATEGORIES, CATEGORY_LABELS } from "@/types/experience";

interface FilterBarProps {
  category: string;
  destination: string;
  countries: string[];
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
  onClear: () => void;
  hasActiveFilters: boolean;
}

export default function FilterBar({
  category,
  destination,
  countries,
  onCategoryChange,
  onDestinationChange,
  onClear,
  hasActiveFilters,
}: FilterBarProps) {
  const selectValue = countries.find(
    (c) => c.toLowerCase() === destination.toLowerCase(),
  ) ?? "";

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      {/* Categoría */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-neutral-700">
          Categoría
        </h3>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onCategoryChange("")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              !category
                ? "bg-orange-500 text-white"
                : "border border-neutral-300 text-neutral-600 hover:border-neutral-400"
            }`}
          >
            Todas
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onCategoryChange(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                category.toLowerCase() === cat.toLowerCase()
                  ? "bg-orange-500 text-white"
                  : "border border-neutral-300 text-neutral-600 hover:border-neutral-400"
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Línea separadora */}
      <hr className="my-4 border-neutral-200" />

      {/* Destino */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-neutral-700">
          Destino
        </h3>
        <select
          value={selectValue}
          onChange={(e) => onDestinationChange(e.target.value)}
          className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
        >
          <option value="">Todos los destinos</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      {/* Limpiar filtros */}
      {hasActiveFilters && (
        <button
          type="button"
          onClick={onClear}
          className="mt-4 text-sm font-medium text-orange-600 hover:text-orange-700"
        >
          Limpiar filtros
        </button>
      )}
    </div>
  );
}