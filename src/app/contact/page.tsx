export const metadata = {
  title: "Contact | yash patel",
  description: "Get in touch with yash patel.",
};

export default function Contact() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 pt-20 pb-16 flex-grow flex flex-col justify-center">
      <h1 className="font-serif text-5xl tracking-tight text-foreground mb-8">
        Let's connect
      </h1>
      
      <p className="text-lg text-muted max-w-lg mb-12">
        I am currently open for new opportunities. Whether you have a question or just want to say hi, feel free to reach out.
      </p>

      <ul className="flex flex-col gap-6 text-2xl font-serif">
        <li>
          <a 
            href="mailto:your.email@example.com" 
            className="text-foreground hover:opacity-60 transition-opacity flex items-center gap-4 group"
          >
            <span className="text-sm font-sans tracking-widest uppercase text-muted group-hover:text-foreground transition-colors">Email</span>
            your.email@example.com
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noreferrer"
            className="text-foreground hover:opacity-60 transition-opacity flex items-center gap-4 group"
          >
            <span className="text-sm font-sans tracking-widest uppercase text-muted group-hover:text-foreground transition-colors">GitHub</span>
            @yourusername
          </a>
        </li>
        <li>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noreferrer"
            className="text-foreground hover:opacity-60 transition-opacity flex items-center gap-4 group"
          >
            <span className="text-sm font-sans tracking-widest uppercase text-muted group-hover:text-foreground transition-colors">LinkedIn</span>
            in/yourusername
          </a>
        </li>
      </ul>
    </div>
  );
}