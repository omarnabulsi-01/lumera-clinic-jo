import { AlertCircle, ShieldCheck } from "lucide-react";
import { legalNotes } from "@/data/clinic";

export function SafetyNotes() {
  return (
    <section className="luxury-container py-10">
      <div className="rounded-[30px] border border-line bg-charcoal p-6 text-warm-white shadow-luxury md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <div className="mb-3 flex items-center gap-2 text-blush">
              <ShieldCheck className="size-5" aria-hidden="true" />
              <p className="text-sm font-black">ملاحظات طبية مهمة</p>
            </div>
            <h2 className="text-2xl font-black">الجمال الفاخر يبدأ بتقييم آمن وواقعي.</h2>
          </div>
          <div className="grid gap-3 md:w-1/2">
            {legalNotes.map((note) => (
              <p key={note} className="flex gap-3 rounded-2xl border border-warm-white/10 bg-warm-white/6 p-4 text-sm leading-7 text-pearl">
                <AlertCircle className="mt-1 size-4 shrink-0 text-blush" aria-hidden="true" />
                {note}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
