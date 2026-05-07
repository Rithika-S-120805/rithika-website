import { Award, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

const certs = [
  {
    name: "Full Stack Development - A Backend Perspective",
    issuer:
      "Corporate Industry Relations (CIR), Amrita Vishwa Vidyapeetham",
    date: "Feb 2025",
    link: "/fullstack.pdf",
  },

  {
    name: "Data Science and Machine Learning",
    issuer:
      "Corporate Industry Relations (CIR), Amrita Vishwa Vidyapeetham",
    date: "Aug 2025",
    link: "/dsml.pdf",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="container py-24">
      <SectionHeader
        eyebrow="Certifications"
        title="Continuous learning"
        description="Credentials that mark milestones in an ongoing journey."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c, i) => {
          const ref = useReveal<HTMLAnchorElement>();

          return (
            <a
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              ref={ref}
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              className="reveal group glass rounded-2xl p-6 glow-on-hover gradient-border block"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center">
                  <Award size={20} className="text-primary-foreground" />
                </div>

                <ExternalLink
                  size={16}
                  className="text-muted-foreground group-hover:text-primary-glow transition-colors"
                />
              </div>

              <h3 className="font-display text-base font-semibold mt-4 leading-snug">
                {c.name}
              </h3>

              <p className="text-sm text-muted-foreground mt-1">
                {c.issuer}
              </p>

              <p className="text-xs text-muted-foreground/80 mt-2">
                {c.date}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
};