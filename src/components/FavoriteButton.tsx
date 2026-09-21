"use client";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  label?: boolean;
}

export default function FavoriteButton({
  isFavorite,
  onToggle,
  label = false,
}: FavoriteButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isFavorite}
      aria-label={
        isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"
      }
      className={
        label
          ? "flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600"
          : "flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition-transform hover:scale-110"
      }
    >
      <svg
        className={label ? "h-5 w-5" : "h-5 w-5"}
        viewBox="0 0 24 24"
        fill={isFavorite ? "#ef4444" : "none"}
        stroke={isFavorite ? "#ef4444" : "#525252"}
        strokeWidth={2}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      {label && (isFavorite ? "Quitar de favoritos" : "Guardar en favoritos")}
    </button>
  );
}