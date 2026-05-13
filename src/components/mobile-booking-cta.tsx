import { CalendarDays, Phone } from "lucide-react";
import Link from "next/link";
import { clinic } from "@/data/clinic";

export function MobileBookingCta() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 rounded-full border border-warm-white/70 bg-warm-white/84 p-2 shadow-luxury backdrop-blur-2xl md:hidden">
      <div className="grid grid-cols-[1fr_auto] gap-2">
        <Link
          href="/booking"
          className="focus-visible-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#b6786d,#d9a08f)] px-5 text-sm font-black text-warm-white shadow-soft"
        >
          <CalendarDays className="size-4" aria-hidden="true" />
          احجزي موعدًا
        </Link>
        <a
          href={`tel:${clinic.phone.replaceAll(" ", "")}`}
          aria-label="الاتصال بالعيادة"
          className="focus-visible-ring grid size-12 place-items-center rounded-full border border-line bg-ivory text-charcoal"
        >
          <Phone className="size-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
