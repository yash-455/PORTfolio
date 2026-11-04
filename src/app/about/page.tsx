export const metadata = {
  title: "About | Yash Patel",
  description: "Learn more about Yash Patel's background and experience.",
};

export default function About() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-12 pt-16 md:pt-24 pb-24">
      <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-12">
        About
      </h1>
      
      <div className="prose prose-neutral dark:prose-invert text-muted leading-relaxed max-w-3xl mb-20 text-lg md:text-xl">
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

      <section className="border-t border-border pt-16">
        <h2 className="text-xs uppercase tracking-widest text-muted mb-10">Experience</h2>
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <span className="text-sm font-mono text-muted md:col-span-3">2023 - Present</span>
            <div className="md:col-span-9">
              <h3 className="text-xl font-medium text-foreground">Independent Developer</h3>
              <p className="text-base text-muted mt-2 max-w-2xl leading-relaxed">Building backend systems, APIs, and exploring GenAI integrations.</p>
            </div>
          </div>
          {/* Add more experience blocks here */}
        </div>
      </section>
    </div>
  );
}