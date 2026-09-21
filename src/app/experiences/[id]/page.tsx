import { notFound } from "next/navigation";
import { experiences } from "@/data/experiences";
import ExperienceDetail from "@/components/ExperienceDetail";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ExperiencePage({ params }: Props) {
  const { id } = await params;
  const numId = Number(id);

  if (Number.isNaN(numId)) {
    notFound();
  }

  const experience = experiences.find((exp) => exp.id === numId);
  if (!experience) {
    notFound();
  }

  const similar = experiences
    .filter((exp) => exp.category === experience.category && exp.id !== experience.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <ExperienceDetail experience={experience} similar={similar} />
    </div>
  );
}