import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const galleryItems = [
  {
    category: "فيلر الشفاه",
    before: "تحديد بسيط",
    after: "امتلاء ناعم",
    accent: "from-blush-soft via-warm-white to-pearl",
    glow: "bg-rosegold/18",
  },
  {
    category: "نضارة البشرة",
    before: "إجهاد باهت",
    after: "إشراق زجاجي",
    accent: "from-sage-soft via-warm-white to-blush-soft",
    glow: "bg-sage/16",
  },
  {
    category: "تحديد الفك",
    before: "خط ناعم",
    after: "كونتور متوازن",
    accent: "from-pearl via-warm-white to-sage-soft",
    glow: "bg-charcoal/10",
  },
  {
    category: "علاج التصبغات",
    before: "تفاوت لون",
    after: "صفاء تدريجي",
    accent: "from-champagne via-warm-white to-sage-soft",
    glow: "bg-rosegold/14",
  },
  {
    category: "تحت العين",
    before: "ظل خفيف",
    after: "راحة مضيئة",
    accent: "from-pearl via-warm-white to-blush-soft",
    glow: "bg-blush/42",
  },
  {
    category: "تجميل الأنف غير الجراحي",
    before: "ملامح ناعمة",
    after: "توازن جانبي",
    accent: "from-sage-soft via-warm-white to-champagne",
    glow: "bg-sage/14",
  },
];

export function BeforeAfterGallery({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <Reveal
            key={item.category}
            delay={(index % 3) * 0.06}
            className="group overflow-hidden rounded-[30px] border border-line bg-warm-white/88 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-rosegold/40 hover:shadow-luxury"
          >
            <div className={cn("relative h-80 overflow-hidden rounded-[24px] bg-gradient-to-br", item.accent)}>
              <div className={cn("absolute right-6 top-8 size-28 rounded-full blur-2xl", item.glow)} />
              <div className="absolute left-6 bottom-7 size-24 rounded-full bg-warm-white/44 blur-xl" />
              <div className="absolute inset-4 grid grid-cols-2 gap-3">
                <MockupPanel label="قبل" caption={item.before} muted />
                <MockupPanel label="بعد" caption={item.after} />
              </div>
              <div className="absolute inset-y-6 left-1/2 w-px -translate-x-1/2 bg-warm-white/82 shadow-[0_0_24px_rgba(255,253,249,0.72)]" />
              <div className="absolute left-1/2 top-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-warm-white/80 bg-charcoal text-blush shadow-luxury">
                <Sparkles className="size-4" aria-hidden="true" />
              </div>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black text-rosegold">نموذج توضيحي فاخر</p>
                <h2 className="mt-2 text-xl font-black text-charcoal">{item.category}</h2>
              </div>
              <span className="rounded-full border border-line bg-ivory px-3 py-1 text-xs font-black text-mocha">Mockup</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-mocha">
              تصور بصري غير طبي يوضح اتجاه التحسين الجمالي فقط، دون استخدام صور حقيقية أو وعود بنتيجة محددة.
            </p>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 rounded-[28px] border border-rosegold/18 bg-blush-soft/70 p-5 text-sm font-bold leading-8 text-charcoal shadow-soft">
        الصور المعروضة نماذج توضيحية وليست نتائج حقيقية. النتائج تختلف من شخص لآخر، ولا تُنشر أي صور حقيقية إلا بعد موافقة خطية.
      </p>
    </>
  );
}

function MockupPanel({ label, caption, muted = false }: { label: string; caption: string; muted?: boolean }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[22px] border border-warm-white/72 bg-warm-white/58 p-4 shadow-soft backdrop-blur",
        muted && "bg-ivory/62",
      )}
    >
      <span className="relative z-10 rounded-full bg-warm-white px-3 py-1 text-xs font-black text-mocha shadow-soft">{label}</span>
      <div className="absolute inset-x-5 top-20 h-24 rounded-[999px] border border-rosegold/18" />
      <div className="absolute inset-x-8 top-28 h-20 rounded-[999px] border border-sage/18" />
      <div className="absolute bottom-12 left-1/2 h-20 w-16 -translate-x-1/2 rounded-[48%_48%_44%_44%] border border-charcoal/10 bg-warm-white/52" />
      <div
        className={cn(
          "absolute bottom-8 left-1/2 h-2 w-20 -translate-x-1/2 rounded-full",
          muted ? "bg-mocha/12" : "bg-rosegold/36",
        )}
      />
      <p className="absolute inset-x-4 bottom-4 text-center text-xs font-black text-charcoal">{caption}</p>
    </div>
  );
}
