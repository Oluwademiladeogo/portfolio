import { notFound } from "next/navigation";
import { automationProjects } from "@/lib/automation-projects";
import ProjectDetail from "./project-detail";

export function generateStaticParams() {
  return automationProjects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = automationProjects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <ProjectDetail project={project} />;
}
