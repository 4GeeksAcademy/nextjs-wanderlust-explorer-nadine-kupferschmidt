"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/types/experience";
import { CATEGORY_LABELS } from "@/types/experience";
import { useFavorites } from "@/hooks/useFavorites";
import FavoriteButton from "@/components/FavoriteButton";
import ReviewsSection from "@/components/ReviewsSection";
import ExperienceCard from "@/components/ExperienceCard";

interface ExperienceDetailProps {
  experience: Experience;
  similar: Experience[];
}

function ratingLabel(rating: number): string {
  if (rating >= 4.5) return "Fantástico";
  if (rating >= 4.0) return "Muy bueno";
  return "Bueno";
}

export default function ExperienceDetail({
  experience,
  similar,
}: ExperienceDetailProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    document.title = `${experience.title} | Wanderlust Explorer`;
  }, [experience.title]);

  const {
    title,
    description,
    category,
    destination,
    price,
    rating,
    imageUrl,
    reviewCount,
    duration,
    highlights,
    included,
  } = experience;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <nav className="mb-6 text-sm text-neutral-500">
        <Link href="/" className="hover:text-neutral-700">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <Link href="/experiences" className="hover:text-neutral-700">
          Experiencias
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-900">{title}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl lg:text-4xl">
          {title}
        </h1>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="flex items-center gap-1">
            <svg
              className="h-4 w-4 text-orange-500"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="font-semibold text-neutral-900">
              {rating.toFixed(1)}
            </span>
          </span>
          <span className="text-neutral-600">{ratingLabel(rating)}</span>
          {reviewCount !== undefined && (
            <span className="text-neutral-400">
              ({reviewCount} {reviewCount === 1 ? "opinión" : "opiniones"})
            </span>
          )}
          <span className="text-neutral-300">·</span>
          <span className="flex items-center gap-1 text-neutral-500">
            <svg
              className="h-4 w-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {destination}
          </span>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="lg:grid lg:grid-cols-[1fr_22rem] lg:gap-10">
        {/* Left column — content */}
        <div>
          {/* Image */}
          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute right-4 top-4 z-10">
              <FavoriteButton
                isFavorite={isFavorite(experience.id)}
                onToggle={() => toggleFavorite(experience.id)}
              />
            </div>
          </div>

          {/* Price card — visible on mobile (below image) */}
          <div className="mb-8 rounded-2xl border border-neutral-200 p-5 shadow-sm lg:hidden">
            <p className="text-sm text-neutral-500">Desde</p>
            <p className="text-3xl font-bold text-neutral-900">
              US$ {price}
              <span className="text-base font-normal text-neutral-500">
                {" "}
                por persona
              </span>
            </p>
            <div className="mt-3 flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-orange-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm font-semibold text-neutral-900">
                {rating.toFixed(1)}
              </span>
              <span className="text-sm text-neutral-600">
                {ratingLabel(rating)}
              </span>
            </div>
            <div className="mt-4">
              <FavoriteButton
                isFavorite={isFavorite(experience.id)}
                onToggle={() => toggleFavorite(experience.id)}
                label
              />
            </div>
            <div className="mt-4 rounded-lg bg-green-50 p-3 text-xs text-green-700">
              <p className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 shrink-0 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Cancelación gratuita hasta 24 horas antes
              </p>
              <p className="mt-1.5 flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 shrink-0 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Reserva ahora y paga después
              </p>
            </div>
          </div>

          {/* Descripción general */}
          <section className="mb-8">
            <h2 className="mb-4 flex items-center gap-3 text-lg font-bold text-neutral-900">
              <span className="inline-block h-6 w-1 rounded-full bg-orange-500" />
              Descripción general
            </h2>
            <p className="leading-relaxed text-neutral-600">{description}</p>
            {highlights && highlights.length > 0 && (
              <ul className="mt-4 space-y-2">
                {highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-neutral-600"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Qué incluye */}
          {included && included.length > 0 && (
            <section className="mb-8">
              <h2 className="mb-4 flex items-center gap-3 text-lg font-bold text-neutral-900">
                <span className="inline-block h-6 w-1 rounded-full bg-orange-500" />
                Qué incluye
              </h2>
              <ul className="space-y-2">
                {included.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-neutral-600"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Datos rápidos */}
          <section className="mb-8">
            <h2 className="mb-4 flex items-center gap-3 text-lg font-bold text-neutral-900">
              <span className="inline-block h-6 w-1 rounded-full bg-orange-500" />
              Datos rápidos
            </h2>
            <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
              <div>
                <p className="text-neutral-400">Categoría</p>
                <p className="font-medium text-neutral-900">
                  {CATEGORY_LABELS[category]}
                </p>
              </div>
              {duration && (
                <div>
                  <p className="text-neutral-400">Duración</p>
                  <p className="font-medium text-neutral-900">{duration}</p>
                </div>
              )}
              <div>
                <p className="text-neutral-400">Destino</p>
                <p className="font-medium text-neutral-900">{destination}</p>
              </div>
            </div>
          </section>

          {/* Opiniones */}
          <section className="mb-8">
            <h2 className="mb-4 flex items-center gap-3 text-lg font-bold text-neutral-900">
              <span className="inline-block h-6 w-1 rounded-full bg-orange-500" />
              Opiniones
            </h2>
            <ReviewsSection rating={rating} reviewCount={reviewCount} />
          </section>
        </div>

        {/* Right column — price card (desktop) */}
        <div className="hidden lg:block">
          <div className="rounded-2xl border border-neutral-200 p-6 shadow-sm lg:sticky lg:top-24">
            <p className="text-sm text-neutral-500">Desde</p>
            <p className="text-3xl font-bold text-neutral-900">
              US$ {price}
            </p>
            <p className="text-sm text-neutral-500">por persona</p>

            <div className="mt-4 flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-orange-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm font-semibold text-neutral-900">
                {rating.toFixed(1)}
              </span>
              <span className="text-sm text-neutral-600">
                {ratingLabel(rating)}
              </span>
            </div>

            <div className="mt-6">
              <FavoriteButton
                isFavorite={isFavorite(experience.id)}
                onToggle={() => toggleFavorite(experience.id)}
                label
              />
            </div>

            <div className="mt-4 rounded-lg bg-green-50 p-3 text-xs text-green-700">
              <p className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 shrink-0 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Cancelación gratuita hasta 24 horas antes
              </p>
              <p className="mt-1.5 flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 shrink-0 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Reserva ahora y paga después
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Experiencias similares */}
      {similar.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-6 text-xl font-bold text-neutral-900">
            Experiencias similares
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {similar.map((exp) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                isFavorite={isFavorite(exp.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}