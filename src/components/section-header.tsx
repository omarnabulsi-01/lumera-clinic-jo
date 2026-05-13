import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, align = "center", className }: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-start",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-black text-rosegold">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl font-black leading-tight text-charcoal md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-mocha md:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}
