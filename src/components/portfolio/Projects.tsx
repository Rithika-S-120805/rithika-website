import { ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

const projects = [
  {
    title: "Art Gallery Management System",
    description:
      "A full-stack web platform for discovering, showcasing, and purchasing artworks with artist and admin management features.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    emoji: "🎨",
    live: "#",
    github:
      "https://github.com/Rithika-S-120805/Art-Gallery-Management-System",
  },
  {
    title: "Sleep Apnea Detection",
    description:
      "Machine learning project for detecting sleep apnea using ECG signal analysis, preprocessing, and HRV feature extraction.",
    tags: ["Python", "Machine Learning", "Pandas", "NumPy", "SciPy"],
    emoji: "💓",
    live: "#",
    github: "#",
  },
  {
    title: "AR Bookstore Navigation",
    description:
      "An augmented reality bookstore navigation system using trees, stacks, queues, and OpenCV for smart indoor guidance.",
    tags: ["Python", "OpenCV", "Data Structures", "AR"],
    emoji: "📚",
    live: "#",
    github: "#",
  },
  {
    title: "Movie Ticket Booking System",
    description:
      "A responsive movie ticket booking web application with seat selection and booking management features.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js"],
    emoji: "🎬",
    live: "#",
    github: "#",
  },
  {
    title: "Weather Monitoring App",
    description:
      "Frontend-based weather application providing real-time weather monitoring with a clean and responsive UI.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    emoji: "🌦️",
    live: "https://weather-app-578f.vercel.app/",
    github: "#",
  },
  {
    title: "Arrhythmia Classification",
    description:
      "Machine learning system for ECG-based arrhythmia classification using advanced signal processing techniques.",
    tags: ["Python", "ML", "ECG Analysis", "Data Science"],
    emoji: "🧠",
    live: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="container py-24">
      <SectionHeader
        eyebrow="Projects"
        title="Things I've built"
        description="A collection of projects spanning web development, machine learning, AR systems, and intelligent applications."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => {
          const ref = useReveal<HTMLDivElement>();

          return (
            <article
              key={p.title}
              ref={ref}
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              className="reveal group glass rounded-2xl overflow-hidden glow-on-hover gradient-border flex flex-col hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-40 bg-gradient-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-30 group-hover:opacity-50 transition-opacity" />

                <div className="absolute inset-0 grid place-items-center text-6xl">
                  {p.emoji}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-lg font-semibold">
                  {p.title}
                </h3>

                <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-secondary border border-border/60 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-5 pt-4 border-t border-border/60">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm hover:text-primary-glow transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm hover:text-primary-glow transition-colors"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};