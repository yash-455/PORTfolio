export interface ProjectLinks {
  live?: string;
  repo?: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  role: string;
  stack: string[];
  summary: string;
  image?: string;
  links: ProjectLinks;
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
    image: "/projects/lumina.svg",
    links: {
      repo: "https://github.com/yourusername/lumina",
    },
    repoUrl: "https://github.com/yourusername/lumina",
  },
  {
    id: "aura",
    title: "Aura Analytics",
    year: "2025",
    role: "Frontend Developer",
    stack: ["React", "Framer Motion", "D3.js"],
    summary: "Built a high-performance dashboard that translates complex datasets into calm, readable visual hierarchies.",
    image: "/projects/aura.svg",
    links: {
      live: "https://example.com",
      repo: "https://github.com/yourusername/aura",
    },
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/aura",
  },
  {
    id: "nexus",
    title: "Nexus API Gateway",
    year: "2025",
    role: "Backend Architect",
    stack: ["Go", "gRPC", "Redis", "Docker"],
    summary: "Engineered a low-latency distributed microservices gateway handling high throughput routing, rate limiting, and real-time JWT authentication.",
    image: "/projects/nexus.svg",
    links: {
      repo: "https://github.com/yourusername/nexus",
    },
    repoUrl: "https://github.com/yourusername/nexus",
  }
];