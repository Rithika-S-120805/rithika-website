import { Briefcase, Award, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

const internships = [
  {
    company: "Emertxe Information Technologies",
    role: "IoT Intern",
    period: "Sep 2025 — Nov 2025",
    location: "Bengaluru, India",
    certificate: "/emertxe.pdf",
    points: [
      "Worked on IoT-based embedded system applications using microcontrollers and sensor modules.",
      "Gained hands-on experience with Arduino Uno, ESP-32.",
      "Explored IoT communication protocols, device integration, and practical implementation of smart systems.",
    ],
  },
  {
    company: "KGiSL Technologies",
    role: "Full Stack Engineering Intern",
    period: "Apr 2026 — May 2026",
    location: "Coimbatore, India",
    certificate: "/kgisl.pdf",
    points: [
      "Worked on full-stack web application development using modern frontend and backend technologies.",
      "Contributed to building responsive user interfaces and integrating backend functionalities for scalable applications.",
      "Collaborated with development teams to improve application performance, usability, and overall user experience.",
    ],
  },

  {
    company: "ELGi Equipments Limited",
    role: "Manufacturing Engineering Intern",
    period: "May 2026 — present2026",
    location: "Coimbatore, India",
    certificate: "/elgi.pdf",
    points: [
      "Worked on manufacturing process optimization and quality control in an industrial setting.",
      "Tested the software to validate its functionality, performance, and reliability, ensuring it meets the specified requirements.",
      "Generated power Bi reports to analyze and visualize manufacturing data, providing insights for process improvement and decision-making.",
    ],
  },
];

export const Internships = () => {
  return (
    <section id="internships" className="container py-24">
      <SectionHeader
        eyebrow="Internships"
        title="Where I've worked"
        description="Hands-on industry experience across IoT systems and full-stack development."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {internships.map((it, i) => {
          const ref = useReveal<HTMLDivElement>();

          return (
            <div
              key={it.company}
              ref={ref}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal glass rounded-2xl p-6 glow-on-hover gradient-border hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-primary grid place-items-center shadow-lg shadow-primary/20">
                  <Briefcase
                    size={20}
                    className="text-primary-foreground"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold">
                      {it.company}
                    </h3>

                    <span className="text-xs text-muted-foreground">
                      {it.period}
                    </span>
                  </div>

                  <p className="text-primary-glow text-sm mt-0.5">
                    {it.role}
                  </p>

                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-muted-foreground">
                      {it.location}
                    </p>

                    <a
                        href={it.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-glow transition-colors"
                      >
                        <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {it.points.map((p, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-primary shrink-0" />

                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};