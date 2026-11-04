export const metadata = {
  title: "Contact | Yash Patel",
  description: "Get in touch with Yash Patel.",
};

export default function Contact() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-12 pt-16 md:pt-24 pb-24 flex-grow flex flex-col justify-center">
      <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-8">
        Let&apos;s connect
      </h1>
      
      <p className="text-lg md:text-xl text-muted max-w-xl mb-16 leading-relaxed">
        I am currently open for new opportunities. Whether you have a question or just want to say hi, feel free to reach out.
      </p>

      <ul className="flex flex-col gap-8 text-2xl md:text-3xl font-display font-bold">
        <li>
          <a 
            href="mailto:your.email@example.com" 
            className="text-foreground hover:opacity-60 transition-opacity flex items-baseline gap-4 md:gap-6 group"
          >
            <span className="text-xs md:text-sm font-sans tracking-widest uppercase text-muted group-hover:text-foreground transition-colors w-24">Email</span>
            your.email@example.com
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noreferrer"
            className="text-foreground hover:opacity-60 transition-opacity flex items-baseline gap-4 md:gap-6 group"
          >
            <span className="text-xs md:text-sm font-sans tracking-widest uppercase text-muted group-hover:text-foreground transition-colors w-24">GitHub</span>
            @yourusername
          </a>
        </li>
        <li>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noreferrer"
            className="text-foreground hover:opacity-60 transition-opacity flex items-baseline gap-4 md:gap-6 group"
          >
            <span className="text-xs md:text-sm font-sans tracking-widest uppercase text-muted group-hover:text-foreground transition-colors w-24">LinkedIn</span>
            in/yourusername
          </a>
        </li>
      </ul>
    </div>
  );
}