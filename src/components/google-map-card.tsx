import { ExternalLink, MapPin } from "lucide-react";
import { clinic } from "@/data/clinic";
import { cn } from "@/lib/utils";

type GoogleMapCardProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function GoogleMapCard({ tone = "light", className }: GoogleMapCardProps) {
  const isDark = tone === "dark";

  return (
    <article
      className={cn(
        "overflow-hidden rounded-[30px] border shadow-luxury",
        isDark ? "border-warm-white/12 bg-warm-white/8 text-warm-white" : "border-line bg-warm-white text-charcoal",
        className,
      )}
    >
      <div className="relative min-h-80 overflow-hidden bg-ivory">
        <iframe
          title="خريطة تقريبية لمنطقة عبدون، عمّان، الأردن"
          src={clinic.mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
        />
      </div>
      <div className="p-5 md:p-6">
        <div className="flex items-start gap-3">
          <span
            className={cn(
              "grid size-11 shrink-0 place-items-center rounded-full",
              isDark ? "bg-warm-white/12 text-blush" : "bg-blush-soft text-rosegold",
            )}
          >
            <MapPin className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-xl font-black">Abdoun, Amman, Jordan</h2>
            <p className={cn("mt-2 text-sm leading-7", isDark ? "text-pearl" : "text-mocha")}>{clinic.mapNote}</p>
          </div>
        </div>
        <a
          href={clinic.mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "focus-visible-ring mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition duration-300 hover:-translate-y-0.5",
            isDark
              ? "border border-warm-white/16 bg-warm-white/10 text-warm-white hover:bg-warm-white hover:text-charcoal"
              : "border border-line bg-ivory text-charcoal hover:border-rosegold/60 hover:text-rosegold",
          )}
        >
          <ExternalLink className="size-4" aria-hidden="true" />
          فتح الموقع على خرائط Google
        </a>
      </div>
    </article>
  );
}
