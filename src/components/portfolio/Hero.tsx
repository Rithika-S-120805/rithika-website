import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";

const roles = ["Full-Stack Developer", "UI/UX Enthusiast", "Machine Learning Engineer", "Problem Solver", "Lifelong Learner"];

export const Hero = () => {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[idx % roles.length];
    const speed = del ? 40 : 90;
    const t = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setIdx((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
        aria-hidden
      />

      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-blob" aria-hidden />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-accent/25 blur-3xl animate-blob [animation-delay:-6s]" aria-hidden />

      {/* Floating shapes */}
      <div className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-primary animate-float opacity-70" aria-hidden />
      <div className="absolute top-2/3 left-1/4 w-2 h-2 rounded-full bg-accent animate-float [animation-delay:-2s] opacity-80" aria-hidden />
      <div className="absolute top-1/3 left-1/2 w-4 h-4 rotate-45 border border-primary/60 animate-float [animation-delay:-4s]" aria-hidden />
      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 rounded-full border-2 border-accent/50 animate-float [animation-delay:-3s]" aria-hidden />

      {/* SVG orbit lines */}
      <svg className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[640px] h-[640px] opacity-30 hidden md:block animate-spin-slow" viewBox="0 0 200 200" aria-hidden>
        <defs>
          <linearGradient id="og" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="none" stroke="url(#og)" strokeWidth="0.4" strokeDasharray="2 4" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="url(#og)" strokeWidth="0.4" />
        <circle cx="100" cy="100" r="55" fill="none" stroke="url(#og)" strokeWidth="0.4" strokeDasharray="1 3" />
      </svg>


      <div className="container relative grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium glass">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="gradient-text">Rithika Senthilkumar</span>
          </h1>
          <div className="text-2xl md:text-3xl font-display text-muted-foreground h-10">
            <span className="text-foreground">{text}</span>
            <span className="inline-block w-0.5 h-7 ml-1 bg-primary align-middle animate-pulse" />
          </div>
          <p className="text-muted-foreground max-w-lg leading-relaxed">
            I craft thoughtful, performant digital experiences — blending clean code with bold design. 
            As a Web Developer and ML Engineer, I build scalable systems, intelligent applications, 
            and beautiful interfaces that turn ideas into impactful products. Currently exploring 
            modern web technologies, machine learning, and everything in between.

          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.7)] transition-all"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border glass hover:border-primary/60 transition-colors"
            >
              <Download size={18} /> Resume
            </a>
          </div>
          <div className="flex items-center gap-4 pt-4">
            {[
              { Icon: Github, href: "https://github.com/Rithika-S-120805" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/rithika-s-453a0a374/" },
              { Icon: Mail, href: "mailto:s.rithika120805@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 grid place-items-center rounded-full glass hover:text-primary hover:-translate-y-1 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Avatar / decorative card */}
        <div className="relative mx-auto animate-fade-in [animation-delay:0.2s]">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-primary blur-2xl opacity-50" />
            <div className="absolute inset-4 rounded-full bg-gradient-primary animate-gradient-shift bg-[length:200%_200%]" />
            <div className="absolute inset-6 rounded-full bg-card grid place-items-center">
              <div className="text-center px-6">
                <div className="flex flex-col items-center">
                <img
                  src="/profile.jpeg"
                  alt="RS"
                  className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-[0_0_40px_rgba(200,85,247,0.35)]"
                />

                
              </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-2xl text-xs animate-float">
              ✨ 2+ years coding
            </div>
            <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-2xl text-xs animate-float [animation-delay:-3s]">
              🚀 8+ projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
