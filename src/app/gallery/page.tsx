import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SafetyNotes } from "@/components/safety-notes";

export const metadata: Metadata = {
  title: "معرض قبل وبعد",
  description: "معرض توضيحي جاهز لإضافة نتائج قبل وبعد بموافقة صريحة من العميلات.",
};

const galleryItems = [
  "فيلر الشفاه",
  "تحديد الفك",
  "نضارة البشرة",
  "تحت العين",
  "الخدود",
  "تجديد البشرة",
  "آثار حب الشباب",
  "التصبغات",
  "الهيدرافيشل",
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="قبل وبعد"
        title="معرض احترافي يحترم الخصوصية أولًا."
        description="لا نستخدم صور مرضى حقيقية هنا. البطاقات الحالية مكانية فقط، ويمكن استبدالها لاحقًا بصور موثقة بعد موافقة مكتوبة."
      />
      <section className="luxury-container py-20 md:py-28">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Reveal key={item} delay={(index % 3) * 0.06} className="rounded-[30px] border border-line bg-warm-white/82 p-5 shadow-soft">
              <div className="grid h-72 grid-cols-2 gap-3">
                <div className="rounded-[24px] bg-gradient-to-br from-pearl to-warm-white p-4">
                  <span className="rounded-full bg-warm-white px-3 py-1 text-xs font-black text-mocha">قبل</span>
                </div>
                <div className="rounded-[24px] bg-gradient-to-br from-blush-soft to-sage-soft p-4">
                  <span className="rounded-full bg-warm-white px-3 py-1 text-xs font-black text-mocha">بعد</span>
                </div>
              </div>
              <h2 className="mt-5 text-xl font-black text-charcoal">{item}</h2>
              <p className="mt-2 text-sm leading-7 text-mocha">
                بطاقة مكانية مخصصة للعرض المستقبلي. النتائج تختلف من شخص لآخر وتتطلب تقييمًا طبيًا.
              </p>
            </Reveal>
          ))}
        </div>
      </section>
      <SafetyNotes />
    </>
  );
}
