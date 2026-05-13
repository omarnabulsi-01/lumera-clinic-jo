import { CalendarDays, ShieldCheck } from "lucide-react";
import type { Doctor } from "@/data/doctors";
import { cn } from "@/lib/utils";

const portraitTones = {
  rose: "from-blush-soft via-warm-white to-blush",
  sage: "from-sage-soft via-warm-white to-pearl",
  pearl: "from-ivory via-warm-white to-pearl",
  gold: "from-pearl via-warm-white to-blush-soft",
};

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="rounded-[30px] border border-line bg-warm-white/82 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-luxury">
      <div className={cn("relative h-64 overflow-hidden rounded-[24px] bg-gradient-to-br", portraitTones[doctor.tone])}>
        <div className="absolute inset-x-12 bottom-0 h-44 rounded-t-full bg-charcoal/10" />
        <div className="absolute left-1/2 top-14 size-24 -translate-x-1/2 rounded-full bg-warm-white shadow-soft" />
        <div className="absolute left-1/2 top-20 size-16 -translate-x-1/2 rounded-full bg-pearl" />
        <div className="absolute left-1/2 top-36 h-36 w-40 -translate-x-1/2 rounded-t-[70px] bg-rosegold/18" />
        <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-warm-white/60 bg-warm-white/55 px-4 py-3 text-center backdrop-blur">
          <p className="text-sm font-black text-charcoal">{doctor.specialty}</p>
        </div>
      </div>
      <div className="pt-5">
        <p className="text-xs font-black text-rosegold">{doctor.experience}</p>
        <h3 className="mt-2 text-2xl font-black text-charcoal">{doctor.name}</h3>
        <p className="mt-3 text-sm leading-7 text-mocha">{doctor.bio}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {doctor.treatments.map((treatment) => (
            <span key={treatment} className="rounded-full bg-ivory px-3 py-2 text-xs font-bold text-mocha">
              {treatment}
            </span>
          ))}
        </div>
        <div className="mt-5 grid gap-2 text-sm font-bold text-charcoal">
          <span className="flex items-center gap-2">
            <CalendarDays className="size-4 text-rosegold" aria-hidden="true" />
            {doctor.availability}
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-sage" aria-hidden="true" />
            تقييم طبي قبل الإجراء
          </span>
        </div>
      </div>
    </article>
  );
}
