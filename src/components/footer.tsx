"use client";

import { useEffect, useState } from "react";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full max-w-3xl mx-auto px-6 py-8 mt-auto flex items-center justify-between text-sm text-muted border-t border-border">
      <p>© {year || "..."} Yash Patel</p>
      <div className="flex gap-6">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}