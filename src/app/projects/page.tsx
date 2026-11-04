import Image from "next/image";
import { projects, Project } from "@/data/projects";

export const metadata = {
  title: "Projects | Yash Patel",
  description: "Featured projects and visual architecture by Yash Patel.",
};

function ProjectCard({ project }: { project: Project }) {
  const liveUrl = project.links?.live ?? project.liveUrl;
  const repoUrl = project.links?.repo ?? project.repoUrl;

  return (
    <article className="py-16 border-b border-border last:border-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group">
      {/* Left Column: Project Details */}
      <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
        <header className="mb-4">
          <div className="text-xs tracking-widest uppercase text-muted font-mono flex items-center gap-2 mb-2">
            <span>{project.year}</span>
            <span>&middot;</span>
            <span>{project.role}</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight">
            {project.title}
          </h2>
        </header>

        <p className="text-base md:text-lg text-muted leading-relaxed mb-6">
          {project.summary}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium border border-border text-foreground/80 bg-black/[0.02] dark:bg-white/[0.04]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-6 text-sm">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-foreground font-medium underline decoration-border hover:decoration-foreground underline-offset-4 transition-colors"
            >
              <span>Visit Live Site</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors underline decoration-border hover:decoration-foreground underline-offset-4"
            >
              <span>View Source</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      </div>

      {/* Right Column: Project Photo */}
      <div className="lg:col-span-6 order-1 lg:order-2">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-neutral-100 dark:bg-neutral-900">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted font-mono text-xs">
              Project Preview Image
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-12 pt-16 md:pt-24 pb-24">
      {/* Header section identical in styling to Work page */}
      <header className="mb-16">
        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-4">
          Projects
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          Detailed visual architecture and implementations of selected systems, interfaces, and tools.
        </p>
      </header>

      {/* Projects List */}
      <div className="flex flex-col">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
