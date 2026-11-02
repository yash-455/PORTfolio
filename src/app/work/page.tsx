import { projects } from "@/data/projects";
import { ProjectRow } from "@/components/project-row";

export const metadata = {
  title: "Work | yash patel",
  description: "Selected projects and backend architecture by yash patel.",
};

export default function Work() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 pt-20 pb-16">
      <h1 className="font-serif text-5xl tracking-tight text-foreground mb-16">
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