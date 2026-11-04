import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectRow } from "@/components/project-row";

export default function Home() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-12 pt-16 md:pt-24 pb-24">
      {/* Hero Section */}
      <section className="mb-28 md:mb-36">
        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-foreground mb-8 max-w-4xl">
          Building thoughtful digital architecture.
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mb-12 leading-relaxed">
          I am Yash Patel, a software developer focused on robust backend systems, modular code, and clean API integration. Currently exploring new opportunities.
        </p>
        <Link 
          href="/work" 
          className="inline-flex items-center text-sm font-medium border border-border px-7 py-3.5 rounded-full hover:bg-foreground hover:text-background transition-colors duration-300"
        >
          View Selected Work
        </Link>
      </section>

      {/* Featured Work Preview */}
      <section className="border-t border-border pt-16">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-8">Selected Work</h2>
        <div className="flex flex-col">
          {projects.slice(0, 2).map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-12">
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