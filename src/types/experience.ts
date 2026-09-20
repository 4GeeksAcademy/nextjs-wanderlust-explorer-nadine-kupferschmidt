export const CATEGORIES = ["Adventure", "Culture", "Food", "Wellness", "Nature"] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<Category, string> = {
  Adventure: "Aventura",
  Culture: "Cultura",
  Food: "Comida",
  Wellness: "Bienestar",
  Nature: "Naturaleza",
};

export interface Experience {
  id: number;
  title: string;
  description: string;
  category: Category;
  /** Formato "Ciudad, País" */
  destination: string;
  /** Precio en USD por persona */
  price: number;
  /** Valoración de 1 a 5 */
  rating: number;
  imageUrl: string;
  reviewCount?: number;
  duration?: string;
  highlights?: string[];
  included?: string[];
}