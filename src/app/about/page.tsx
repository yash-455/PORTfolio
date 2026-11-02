export const metadata = {
  title: "About | yash patel",
  description: "Learn more about yash patel's background and experience.",
};

export default function About() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 pt-20 pb-16">
      <h1 className="font-serif text-5xl tracking-tight text-foreground mb-8">
        About
      </h1>
      
      <div className="prose prose-neutral dark:prose-invert text-muted leading-relaxed max-w-2xl mb-16">
        <p className="mb-6">
          I am a software developer specializing in robust object-oriented architecture, 
          modular backend code, and clean API integration. I hold a GenAI with Python 
          certificate and actively explore the intersection of data and intelligent systems.
        </p>
        <p>
          Beyond backend engineering, I have a strong interest in digital media, actively 
          learning video editing, kinetic cuts, and automotive cinematography.
        </p>
      </div>

      <section className="border-t border-border pt-12">
        <h2 className="text-xs uppercase tracking-widest text-muted mb-8">Experience</h2>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-8 items-baseline">
            <span className="text-sm font-mono text-muted">2023 - Present</span>
            <div>
              <h3 className="text-lg font-medium text-foreground">Independent Developer</h3>
              <p className="text-sm text-muted mt-1">Building backend systems, APIs, and exploring GenAI integrations.</p>
            </div>
          </div>
          {/* Add more experience blocks here */}
        </div>
      </section>
    </div>
  );
}