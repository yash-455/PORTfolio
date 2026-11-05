"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const currentIndex = navItems.findIndex((item) => item.href === pathname);

  return (
    <div className="site-header w-full border-b border-border">
      <header className="w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-12 py-10 md:py-14 flex items-center justify-between">
        <Link 
          href="/" 
          transitionTypes={currentIndex > 0 ? ["nav-back"] : undefined}
          className="font-display font-bold text-xl tracking-tight text-foreground hover:opacity-70 transition-opacity"
        >
          yash patel
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {navItems.map((item, index) => {
            const isGoingBack = currentIndex !== -1 && index < currentIndex;
            return (
              <Link
                key={item.href}
                href={item.href}
                transitionTypes={isGoingBack ? ["nav-back"] : undefined}
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-foreground font-medium"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      </header>
    </div>
  );
}