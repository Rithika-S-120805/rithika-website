import {
  Code2,
  Layers,
  Wrench,
  Database,
  Cpu,
  BrainCircuit,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

const groups = [
  {
    icon: Code2,
    title: "Programming Languages",
    items: ["Python", "Java", "C++", "C", "SQL"],
  },
  {
    icon: Layers,
    title: "Frontend & Web",
    items: [
      "ReactJS",
      "HTML5",
      "PHP",
      "CSS3",
      "Tailwind CSS",
      "Node.js",
      "Angular",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    items: [
      "Machine Learning",
      "Pandas",
      "NumPy",
      "SciPy",
      "Data Analysis",
      "ECG Signal Processing",
      "Image Processing",
      "Natural Language Processing",
    ],
  },
  {
    icon: Database,
    title: "Database & Backend",
    items: ["MySQL", "PostgreSQL", "PHP", "REST APIs", "Database Management"],
  },
  {
    icon: Cpu,
    title: "Hardware & IoT",
    items: ["Arduino Uno", "ESP-32", "PlutoSDR", "IoT Systems"],
  },
  {
    icon: Wrench,
    title: "Tools & Practices",
    items: [
      "Git & GitHub",
      "Vercel",
      "Spring Boot",
      "Unit Testing",
      "Security - JWT, OAuth",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="container py-24">
      <SectionHeader
        eyebrow="Skills"
        title="My technical toolkit"
        description="Blending web development, machine learning, and scalable system design to build impactful digital experiences."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => {
          const ref = useReveal<HTMLDivElement>();
          const Icon = g.icon;

          return (
            <div
              key={g.title}
              ref={ref}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal glass rounded-2xl p-6 glow-on-hover gradient-border hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary grid place-items-center mb-5 shadow-lg shadow-primary/20">
                <Icon size={22} className="text-primary-foreground" />
              </div>

              <h3 className="font-display text-xl font-semibold mb-4">
                {g.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary/80 text-foreground border border-border/50 hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};