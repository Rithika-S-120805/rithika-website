import { useReveal } from "@/hooks/use-reveal";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionHeader = ({ eyebrow, title, description }: Props) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal max-w-2xl mb-12">
      <span className="text-sm font-medium tracking-widest uppercase gradient-text">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">{title}</h2>
      {description && (
        <p className="text-muted-foreground mt-4 leading-relaxed">{description}</p>
      )}
    </div>
  );
};
