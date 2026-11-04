import { projects } from "@/data/projects";
import { ProjectRow } from "@/components/project-row";

export const metadata = {
  title: "Work | Yash Patel",
  description: "Selected projects and backend architecture by Yash Patel.",
};

export default function Work() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-12 pt-16 md:pt-24 pb-24">
      <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-16">
        Selected Work
      </h1>
      
      <div className="flex flex-col">
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}