import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="w-full max-w-3xl mx-auto px-6 py-12 flex items-center justify-between">
      <Link href="/" className="font-serif text-2xl tracking-tight text-foreground hover:opacity-70 transition-opacity">
        yash patel
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link href="/work" className="text-muted hover:text-foreground transition-colors">Work</Link>
        <Link href="/about" className="text-muted hover:text-foreground transition-colors">About</Link>
        <Link href="/contact" className="text-muted hover:text-foreground transition-colors">Contact</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}