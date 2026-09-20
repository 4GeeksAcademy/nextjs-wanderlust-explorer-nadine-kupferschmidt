"use client";

import { createContext, useState, useCallback, type ReactNode } from "react";

interface FavoritesContextValue {
  favoriteIds: number[];
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  count: number;
}

export const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const toggleFavorite = useCallback((id: number) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id],
    );
  }, []);

  const isFavorite = useCallback(
    (id: number) => favoriteIds.includes(id),
    [favoriteIds],
  );

  const count = favoriteIds.length;

  return (
    <FavoritesContext.Provider
      value={{ favoriteIds, toggleFavorite, isFavorite, count }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}