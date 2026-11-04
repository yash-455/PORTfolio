"use client";

import { useEffect, useState } from "react";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-12 py-10 mt-auto flex items-center justify-between text-sm text-muted border-t border-border">
      <p>© {year ?? 2026} Yash Patel</p>
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