"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="py-12 border-b border-border last:border-0"
    >
      <header className="mb-4">
        <h3 className="font-serif text-3xl text-foreground tracking-tight mb-1">
          {project.title}
        </h3>
        <div className="text-xs tracking-widest uppercase text-muted flex gap-2 items-center">
          <span>{project.year}</span>
          <span>&middot;</span>
          <span>{project.role}</span>
        </div>
      </header>
      
      <p className="text-base text-foreground/80 leading-relaxed mb-6 max-w-2xl">
        {project.summary}
      </p>
      
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
        <span className="font-medium text-foreground">Stack:</span> {project.stack.join(", ")}
      </div>
      
      <div className="mt-6 flex gap-6 text-sm">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="underline decoration-border hover:text-foreground hover:decoration-foreground underline-offset-4 transition-all">
            Live Site
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="underline decoration-border hover:text-foreground hover:decoration-foreground underline-offset-4 transition-all">
            Source Code
          </a>
        )}
      </div>
    </motion.article>
  );
}