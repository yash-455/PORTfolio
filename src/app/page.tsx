import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectRow } from "@/components/project-row";

export default function Home() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 pt-20 pb-16">
      {/* Hero Section */}
      <section className="mb-32">
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.1] tracking-tight text-foreground mb-6">
          Building thoughtful digital architecture.
        </h1>
        <p className="text-lg text-muted max-w-xl mb-10 leading-relaxed">
          I am yash patel, a software developer focused on robust backend systems, modular code, and clean API integration. Currently exploring new opportunities.
        </p>
        <Link 
          href="/work" 
          className="inline-flex items-center text-sm font-medium border border-border px-6 py-3 rounded-full hover:bg-foreground hover:text-background transition-colors duration-300"
        >
          View Selected Work
        </Link>
      </section>

      {/* Featured Work Preview */}
      <section className="border-t border-border pt-16">
        <h2 className="font-serif text-2xl text-foreground mb-4">Selected Work</h2>
        <div className="flex flex-col">
          {projects.slice(0, 2).map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-8">
          <Link 
            href="/work" 
            className="text-sm text-muted hover:text-foreground transition-colors underline decoration-border hover:decoration-foreground underline-offset-4"
          >
            Explore all projects &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}