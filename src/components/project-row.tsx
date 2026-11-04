"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";

export function ProjectRow({ project }: { project: Project }) {
  const liveUrl = project.links?.live ?? project.liveUrl;
  const repoUrl = project.links?.repo ?? project.repoUrl;

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="py-12 md:py-16 border-b border-border last:border-0 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start"
    >
      <header className="md:col-span-5">
        <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight mb-2">
          {project.title}
        </h3>
        <div className="text-xs tracking-widest uppercase text-muted flex gap-2 items-center mb-6">
          <span>{project.year}</span>
          <span>&middot;</span>
          <span>{project.role}</span>
        </div>
        <div className="flex gap-6 text-sm">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="underline decoration-border hover:text-foreground hover:decoration-foreground underline-offset-4 transition-all">
              Live Site &rarr;
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noreferrer" className="underline decoration-border hover:text-foreground hover:decoration-foreground underline-offset-4 transition-all">
              Source Code &rarr;
            </a>
          )}
        </div>
      </header>
      
      <div className="md:col-span-7 flex flex-col justify-between">
        <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          {project.stack.map((item) => (
            <span key={item} className="px-2.5 py-1 rounded-md border border-border text-muted">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}