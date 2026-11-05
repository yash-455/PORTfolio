"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Header } from "@/components/header";
 
const name = "Yash Patel";
const scrambleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function ScrambleName() {
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    let frame = 0;
    const totalFrames = 42;
    const interval = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(1, frame / totalFrames);
      const next = name
        .split("")
        .map((character, index) => {
          if (character === " ") return " ";
          const characterProgress = index / name.length;
          if (characterProgress < progress - 0.08) return character;
          if (characterProgress > progress + 0.08) return "";
          return scrambleCharacters[Math.floor(Math.random() * scrambleCharacters.length)];
        })
        .join("");

      setDisplayName(frame >= totalFrames ? name : next);
      if (frame >= totalFrames) window.clearInterval(interval);
    }, 45);

    return () => window.clearInterval(interval);
  }, []);

  return <span aria-label={name}>{displayName}</span>;
}

export function HeroLanding() {
  return (
    <main className="landing-shell">
      <Header />
      <section className="landing-hero">
        <p className="hero-statement">
          I build and ship complete
          <br />
          software products, from the
          <br />
          interface to the database to
          <br />
          the deploy pipeline.
        </p>

        <div className="hero-meta" aria-label="Profile highlights">
          <span>Full-stack software engineer</span>
          <i />
          <span>Founder of 3 products</span>
          <i />
          <span>Ahmedabad, IND</span>
          <i />
          <Link href="/contact">Open to work</Link>
        </div>

        <h1 className="hero-name">
          <ScrambleName />
        </h1>
      </section>
    </main>
  );
}
