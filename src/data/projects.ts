export interface Project {
  id: string;
  title: string;
  year: string;
  role: string;
  stack: string[];
  summary: string;
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "lumina",
    title: "Lumina Design System",
    year: "2026",
    role: "Lead Engineer",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    summary: "Architected a highly accessible, monochromatic component library focused on minimal layout shifts and smooth typographic scaling.",
    repoUrl: "https://github.com/yourusername/lumina",
  },
  {
    id: "aura",
    title: "Aura Analytics",
    year: "2025",
    role: "Frontend Developer",
    stack: ["React", "Framer Motion", "D3.js"],
    summary: "Built a high-performance dashboard that translates complex datasets into calm, readable visual hierarchies.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/aura",
  }
];