import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/data/experiences";
import FeaturedExperiences from "@/components/FeaturedExperiences";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import type { Experience } from "@/types/experience";

function getFeaturedByCategory(
  source: typeof experiences,
  category: string,
) {
  const filtered = source.filter((e) => e.category === category);
  if (filtered.length === 0) return null;
  return filtered.reduce((best, current) => {
    if (current.rating > best.rating) return current;
    if (current.rating === best.rating && current.id < best.id) return current;
    return best;
  });
}

export default function Home() {
  const categories = ["Adventure", "Food", "Nature"] as const;
  const featured = categories
    .map((cat) => getFeaturedByCategory(experiences, cat))
    .filter((item): item is Experience => item !== null);

  return (
    <>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <Image
          src="https://picsum.photos/seed/wanderlust-hero/1600/900"
          alt="Paisaje de viaje"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
        <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center sm:gap-8">
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Descubre experiencias únicas alrededor del mundo
          </h1>
          <p className="max-w-xl text-base text-white/80 sm:text-lg lg:text-xl">
            Explora nuestra selección de {experiences.length} experiencias
            cuidadosamente elegidas para ti
          </p>
          <Link
            href="/experiences"
            className="mt-2 rounded-full bg-orange-500 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-orange-600 sm:px-10 sm:py-3.5 sm:text-lg"
          >
            Explorar experiencias
          </Link>
        </div>
      </section>

      <FeaturedExperiences items={featured} />
      <AboutSection />
      <BenefitsSection />
    </>
  );
}
