import { Suspense } from "react";
import ExplorerContent from "@/components/ExplorerContent";

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Suspense fallback={<div className="flex items-center justify-center py-32 text-neutral-500">Cargando...</div>}>
        <ExplorerContent />
      </Suspense>
    </div>
  );
}