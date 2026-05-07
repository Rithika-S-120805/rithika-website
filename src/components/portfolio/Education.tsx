import { GraduationCap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  {
    school: "Amrita Vishwa Vidyapeetham, Coimbatore",
    degree: "B.Tech in Computer and Communication Engineering",
    period: "2023 — 2027",
    detail: "CGPA: 8.42 / 10 · Merit scholarship recipient",
  },
  {
    school: "Nirmala Matha Convent School (ICSE/ISC), Coimbatore",
    degree: "Senior Secondary (PCM + Computer Science)",
    period: "2022 — 2023",
    detail: "Scored 92.75% · School topper in ISC, awarded for excellence in academics",
  },
  {
    school: "Nirmala Matha Convent School (ICSE/ISC), Coimbatore",
    degree: "Secondary School (ICSE)",
    period: "2020 — 2021",
    detail: "Scored 94.8% · School topper in ICSE · Served as school pupil leader",
  },
];

export const Education = () => {
  return (
    <section id="education" className="container py-24">
      <SectionHeader
        eyebrow="Education"
        title="Where I've studied"
        description="A foundation built on curiosity, late-night problem sets, and a love for building things."
      />
      <div className="relative pl-6 md:pl-8">
        <div className="absolute left-2 md:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
        {items.map((it, i) => {
          const ref = useReveal<HTMLDivElement>();
          return (
            <div
              key={i}
              ref={ref}
              className="reveal relative mb-10 last:mb-0"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute -left-[27px] md:-left-[33px] top-2 w-4 h-4 rounded-full bg-gradient-primary ring-4 ring-background grid place-items-center">
                <GraduationCap size={10} className="text-primary-foreground" />
              </div>
              <div className="glass rounded-2xl p-6 glow-on-hover gradient-border">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold">{it.school}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                    {it.period}
                  </span>
                </div>
                <p className="text-primary-glow mt-1 text-sm">{it.degree}</p>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{it.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
