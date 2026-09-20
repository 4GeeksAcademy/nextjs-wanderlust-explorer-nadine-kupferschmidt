# Wanderlust Explorer

App multipágina con Next.js (App Router) + TypeScript + Tailwind. Explorador de 100 experiencias de viaje con búsqueda y filtros guardados en la URL. Proyecto de bootcamp: código simple y legible.

## Reglas obligatorias
- Prohibido usar librerías de estado (Redux, Zustand, etc.). Solo `useState`, props, custom hooks y el Context nativo de React.
- Favoritos: `useState` con los IDs en un componente cliente `FavoritesProvider` (dentro de `layout.tsx`), expuesto con Context y el hook `useFavorites`. Sin `localStorage` ni persistencia.
- TypeScript estricto, sin `any`. Usar siempre la interface `Experience` de `src/types/experience.ts`.
- No instalar dependencias nuevas sin preguntar. No reescribir archivos que no se pidan.
- Navegación con `next/link` (sin recargas completas). Componentes de servidor por defecto; `"use client"` solo donde se usen hooks.
- `useSearchParams` debe ir dentro de un `<Suspense>`. En rutas dinámicas, `params` es una Promise (`await params` o `use(params)`).
- Imágenes: placeholders de `picsum.photos`; configurar `images.remotePatterns` en `next.config.ts`.
- No llames a setState directamente dentro de un useEffect (el lint lo marca como error: react-hooks/set-state-in-effect). Los datos derivados, como los resultados filtrados, se calculan durante el render con useMemo. Usa useEffect solo para sincronizar con sistemas externos, por ejemplo document.title.
- Respuestas breves: al terminar, resume en 3 líneas como máximo.

## Rutas
`/` Home (hero + botón a `/experiences`) · `/experiences` Explorador · `/experiences/[id]` Detalle · `/favorites` · `/profile`

## Búsqueda y filtros (parte más importante)
- Query params: `search`, `category`, `destination`. Los inputs se prerrellenan desde la URL al cargar.
- Al cambiar un filtro: `new URLSearchParams(searchParams.toString())`, `set` o `delete` según haya valor, y `router.replace(`${pathname}?${params}`)` usando `usePathname`.
- Búsqueda por título con regex case-insensitive. Escapar el término antes: `term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")` y luego `new RegExp(escaped, "i").test(title)`.
- Categoría y destino son independientes y se combinan con la búsqueda (AND). Comparar `category` sin distinguir mayúsculas.
- Lógica de filtrado en un custom hook (`useExperiences`). Usar `useEffect` solo cuando haga falta, con dependencias correctas y sin bucles.
- Sin resultados: mostrar "No se encontraron resultados".

## Datos
- `src/data/experiences.ts`: 100 experiencias. Campos: `id`, `title`, `description`, `category` (`"Adventure" | "Culture" | "Food" | "Wellness" | "Nature"`), `destination` ("Ciudad, País"), `price` (USD), `rating`, `imageUrl` y opcionales `reviewCount`, `duration`, `highlights`, `included`.
- Etiquetas en español para mostrar las categorías (Aventura, Cultura, Comida, Bienestar, Naturaleza) con un mapa constante; en la URL y en los datos se mantienen los valores en inglés.

## Estructura
```
src/app/{layout,page}.tsx, experiences/page.tsx, experiences/[id]/page.tsx, favorites/page.tsx, profile/page.tsx
src/components/  Navbar, Footer, SearchBar, FilterBar, ExperienceCard, FavoritesProvider, FaqAccordion, BackToTop
src/hooks/       useExperiences.ts, useFavorites.ts
src/data/        experiences.ts, faqs.ts
src/types/       experience.ts
```
Un componente por archivo, en PascalCase, con props tipadas. Nombres de código en inglés; textos de la interfaz en español.

## Diseño (inspirado en Klook y Viator)
- Fondo blanco; en el Explorador, gris muy claro con tarjetas blancas `rounded-2xl`, borde fino y sombra suave.
- Acento naranja (`orange-500/600`) para botones primarios, enlace activo y precios. Botones secundarios oscuros (`neutral-900`). Bandas de texto en tonos suaves (`emerald-50`, lavanda). Badge de rating en índigo.
- Tipografía Poppins con `next/font/google`. Títulos grandes en negrita; en la Home, títulos de sección centrados. En el Detalle, títulos con una barrita naranja vertical a la izquierda.
- **Navbar** sticky: logo, enlaces Inicio / Explorar / Favoritos / Perfil con subrayado naranja en el activo (`usePathname`) y un corazón con contador de favoritos.
- **Hero**: foto a ancho completo con degradado oscuro, título blanco grande, subtítulo y botón.
- **ExperienceCard**: imagen arriba con esquinas redondeadas; corazón circular blanco arriba a la derecha (relleno si es favorito); etiqueta "Más popular" si `rating >= 4.7`; línea gris con "Ciudad, País" y categoría; título en negrita a 2 líneas (`line-clamp-2`); estrella con rating y reseñas; "Desde $X" al final. Palabra junto al rating: `>= 4.5` Fantástico, `>= 4.0` Muy bueno, si no Bueno.
- Buscador del Explorador en forma de píldora y panel de filtros en una tarjeta redondeada. Bloque de texto informativo y FAQ en acordeón (un `useState` con la pregunta abierta) al final del Explorador.
- **Footer** oscuro: redes sociales, columnas de enlaces (Explorar, Categorías, Destinos, Compañía) y copyright.
- Botón flotante "Volver al principio".
- Responsive mobile-first: cuadrícula de 1 columna en móvil, 2 en `sm`, 3 en `lg` y 4 en `xl`.