import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

const socials = [
  {
    Icon: Mail,
    label: "Email",
    value: "s.rithika120805@gmail.com",
    href: "mailto:s.rithika120805@gmail.com",
  },

  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "/in/rithikasenthilkumar",
    href: "https://www.linkedin.com/in/rithika-s-453a0a374/",
  },

  {
    Icon: Github,
    label: "GitHub",
    value: "Rithika-S-120805",
    href: "https://github.com/Rithika-S-120805",
  },
];

export const Contact = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="container py-24">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something together"
        description="Open to internships, freelance projects, and interesting collaborations. The fastest way to reach me is email — I usually reply within a day."
      />
      <div ref={ref} className="reveal glass rounded-3xl p-8 md:p-12 gradient-border relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Have an idea? <br />
              <span className="gradient-text">Let's make it real.</span>
            </h3>
            <p className="text-muted-foreground mt-4 max-w-md">
              Whether it's a project, a question, or just a hello — my inbox is always open.
            </p>
            <a
              href="mailto:s.rithika120805@gmail.com"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.7)] transition-all"
            >
              <Mail size={18} /> Say hello
            </a>
            <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
              <MapPin size={16} /> Based in Coimbatore, India · open to remote
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {socials.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 p-4 rounded-2xl bg-secondary/60 border border-border/60 hover:border-primary/50 hover:-translate-y-0.5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center shrink-0">
                  <Icon size={18} className="text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">{label}</div>
                  <div className="text-sm font-medium truncate">{value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
