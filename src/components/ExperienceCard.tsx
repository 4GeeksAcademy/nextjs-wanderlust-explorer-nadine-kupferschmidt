import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/types/experience";
import { CATEGORY_LABELS } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

function ratingLabel(rating: number): string {
  if (rating >= 4.5) return "Fantástico";
  if (rating >= 4.0) return "Muy bueno";
  return "Bueno";
}

export default function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps) {
  const { id, title, destination, category, price, rating, imageUrl, reviewCount } = experience;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Link href={`/experiences/${id}`} className="block h-full w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </Link>

        {/* Favorite button (absolute, above image, not inside Link) */}
        <button
          type="button"
          onClick={() => onToggleFavorite(id)}
          aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
          aria-pressed={isFavorite}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition-transform hover:scale-110"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill={isFavorite ? "#ef4444" : "none"}
            stroke={isFavorite ? "#ef4444" : "#525252"}
            strokeWidth={2}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>

        {/* "Más popular" badge */}
        {rating >= 4.7 && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-500 shadow-sm">
            Más popular
          </span>
        )}
      </div>

      {/* Text content */}
      <Link href={`/experiences/${id}`} className="block p-4">
        <div className="flex items-center gap-1 text-sm text-neutral-500">
          <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="truncate">{destination}</span>
          <span className="mx-1">·</span>
          <span>{CATEGORY_LABELS[category]}</span>
        </div>

        <h3 className="mt-1.5 line-clamp-2 text-base font-bold text-neutral-900">
          {title}
        </h3>

        <div className="mt-2 flex items-center gap-1.5">
          <svg className="h-4 w-4 text-orange-500" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="text-sm font-semibold text-neutral-900">{rating.toFixed(1)}</span>
          <span className="text-sm text-neutral-600">{ratingLabel(rating)}</span>
          {reviewCount !== undefined && (
            <span className="text-sm text-neutral-400">({reviewCount})</span>
          )}
        </div>

        <div className="mt-3">
          <span className="text-base font-bold text-neutral-900">US$ {price}</span>
          <span className="text-sm text-neutral-500"> por persona</span>
        </div>
      </Link>
    </div>
  );
}