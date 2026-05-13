import Link from "next/link";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";
import type { Service } from "@/data/services";
import { formatPriceRange } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  compact?: boolean;
};

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-line bg-warm-white/82 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-rosegold/45 hover:shadow-luxury">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black text-rosegold">{service.eyebrow}</p>
          <h3 className="mt-2 text-xl font-black leading-8 text-charcoal">{service.title}</h3>
        </div>
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-blush-soft text-rosegold transition group-hover:bg-rosegold group-hover:text-warm-white">
          <Sparkles className="size-5" aria-hidden="true" />
        </span>
      </div>
      <p className="mt-4 line-clamp-3 text-sm leading-7 text-mocha">{service.description}</p>
      <div className="mt-5 grid gap-3 text-sm">
        <div className="rounded-2xl bg-ivory px-4 py-3 font-black text-charcoal">
          {formatPriceRange(service.priceRange)}
        </div>
        {!compact ? (
          <div className="flex items-center gap-2 text-mocha">
            <Clock className="size-4 text-rosegold" aria-hidden="true" />
            <span>{service.duration}</span>
          </div>
        ) : null}
      </div>
      <Link
        href={`/services/${service.slug}`}
        className="focus-visible-ring mt-auto inline-flex items-center gap-2 pt-6 text-sm font-black text-rosegold transition hover:text-rosegold-dark"
      >
        تفاصيل الخدمة
        <ArrowLeft className="size-4 transition group-hover:-translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}
