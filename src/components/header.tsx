import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <div className="w-full border-b border-border">
      <header className="w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-12 py-10 md:py-14 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-xl tracking-tight text-foreground hover:opacity-70 transition-opacity">
          yash patel
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="text-muted hover:text-foreground transition-colors">Home</Link>
          <Link href="/work" className="text-muted hover:text-foreground transition-colors">Work</Link>
          <Link href="/projects" className="text-muted hover:text-foreground transition-colors">Projects</Link>
          <Link href="/about" className="text-muted hover:text-foreground transition-colors">About</Link>
          <Link href="/contact" className="text-muted hover:text-foreground transition-colors">Contact</Link>
          <ThemeToggle />
        </nav>
      </header>
    </div>
  );
}