import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="medical-gradient noise-layer overflow-hidden border-b border-line">
      <div className="luxury-container relative z-10 grid min-h-[390px] items-end gap-10 py-16 md:py-20 lg:grid-cols-[1fr_0.75fr]">
        <Reveal className="max-w-3xl">
          <p className="mb-4 text-sm font-black text-rosegold">{eyebrow}</p>
          <h1 className="text-balance text-4xl font-black leading-tight text-charcoal md:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-9 text-mocha">{description}</p>
        </Reveal>
        {children ? <Reveal delay={0.15}>{children}</Reveal> : null}
      </div>
    </section>
  );
}
