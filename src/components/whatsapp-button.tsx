import { MessageCircle } from "lucide-react";
import { clinic } from "@/data/clinic";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  label?: string;
  variant?: "primary" | "light" | "dark";
  className?: string;
};

const variants = {
  primary:
    "border border-rosegold/30 bg-[linear-gradient(135deg,#b6786d,#d7a090)] text-warm-white shadow-soft hover:shadow-luxury",
  light:
    "border border-line bg-warm-white/90 text-charcoal shadow-soft hover:border-rosegold/60 hover:text-rosegold",
  dark: "border border-warm-white/14 bg-warm-white/10 text-warm-white shadow-soft hover:bg-warm-white hover:text-charcoal",
};

export function WhatsAppButton({
  label = "تواصل عبر واتساب",
  variant = "primary",
  className,
}: WhatsAppButtonProps) {
  return (
    <a
      href={clinic.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "focus-visible-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black transition duration-300 hover:-translate-y-0.5",
        variants[variant],
        className,
      )}
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      {label}
    </a>
  );
}

export function FloatingWhatsAppButton() {
  return (
    <a
      href={clinic.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="focus-visible-ring fixed bottom-24 right-4 z-50 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-warm-white/65 bg-charcoal px-4 text-warm-white shadow-luxury backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-rosegold md:bottom-6 md:right-6 md:px-5"
    >
      <MessageCircle className="size-5 text-blush" aria-hidden="true" />
      <span className="hidden text-sm font-black sm:inline">تواصل عبر واتساب</span>
    </a>
  );
}
