export const SpaceBackground = () => {
  const stars = Array.from({ length: 80 }, (_, i) => {
    const seed = i * 9301 + 49297;
    const x = (seed % 1000) / 10;
    const y = ((seed * 7) % 1000) / 10;
    const size = ((seed % 7) + 2) / 2;
    const delay = (seed % 50) / 10;
    return { x, y, size, delay };
  });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      {/* LIGHT THEME: pastel grid + orbits (hidden in dark) */}
      <div className="absolute inset-0 dark:hidden">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }}
        />
        <svg className="absolute -right-40 -top-40 w-[700px] h-[700px] opacity-30 animate-spin-slow" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="orbit-grad-l" x1="0" x2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="95" fill="none" stroke="url(#orbit-grad-l)" strokeWidth="0.4" strokeDasharray="2 4" />
          <circle cx="100" cy="100" r="78" fill="none" stroke="url(#orbit-grad-l)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="62" fill="none" stroke="url(#orbit-grad-l)" strokeWidth="0.4" strokeDasharray="1 3" />
          <circle cx="195" cy="100" r="2" fill="hsl(var(--primary))" />
          <circle cx="100" cy="22" r="1.5" fill="hsl(var(--accent))" />
        </svg>
        <svg className="absolute -left-32 -bottom-32 w-[560px] h-[560px] opacity-25 animate-spin-reverse" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.4" strokeDasharray="3 5" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.4" />
        </svg>
      </div>

      {/* DARK THEME: deep space — stars + nebula + planet */}
      <div className="absolute inset-0 hidden dark:block">
        {/* Nebula glows */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full bg-fuchsia-500/10 blur-3xl" />

        {/* Stars */}
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-foreground animate-twinkle"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
              boxShadow: "0 0 6px hsl(var(--foreground) / 0.7)",
            }}
          />
        ))}

        {/* Shooting star */}
        <span
          className="absolute top-[15%] left-[10%] w-24 h-px bg-gradient-to-r from-transparent via-foreground to-transparent rotate-[20deg] animate-shoot"
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }}
        />

        {/* Orbit system */}
        <svg className="absolute -right-40 -top-40 w-[750px] h-[750px] opacity-40 animate-spin-slow" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="orbit-grad-d" x1="0" x2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="95" fill="none" stroke="url(#orbit-grad-d)" strokeWidth="0.5" strokeDasharray="2 4" />
          <circle cx="100" cy="100" r="78" fill="none" stroke="url(#orbit-grad-d)" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="62" fill="none" stroke="url(#orbit-grad-d)" strokeWidth="0.5" strokeDasharray="1 3" />
          <circle cx="195" cy="100" r="2.5" fill="hsl(var(--primary))" />
          <circle cx="100" cy="22" r="2" fill="hsl(var(--accent))" />
          <circle cx="38" cy="100" r="1.5" fill="hsl(var(--primary-glow))" />
        </svg>

        {/* Planet */}
        <div className="absolute -left-24 bottom-10 w-72 h-72 rounded-full opacity-60 animate-float"
          style={{
            background: "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.9), hsl(var(--accent) / 0.5) 60%, transparent 75%)",
            filter: "blur(2px)",
          }}
        />
      </div>
    </div>
  );
};
