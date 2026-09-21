import { Suspense } from "react";
import ExplorerContent from "@/components/ExplorerContent";
import InfoSection from "@/components/InfoSection";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/data/faqs";

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Suspense fallback={<div className="flex items-center justify-center py-32 text-neutral-500">Cargando...</div>}>
        <ExplorerContent />
      </Suspense>

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mt-12">
          <InfoSection />
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-xl font-bold text-neutral-900 sm:text-2xl">
            Preguntas frecuentes
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </div>
    </div>
  );
}