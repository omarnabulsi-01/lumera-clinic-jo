import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "الأسئلة المتكررة",
  description: "إجابات عن الأسعار، النتائج، الخصوصية، والحجز في لوميرا كلينك.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="الأسئلة المتكررة"
        title="كل سؤال جيد يجعل القرار أكثر أمانًا."
        description="إجابات مختصرة وواضحة حول الحجز، الأسعار، النتائج، والخصوصية."
      />
      <section className="luxury-container py-20 md:py-28">
        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map((faq) => (
            <Reveal key={faq.question}>
              <details className="group rounded-[26px] border border-line bg-warm-white p-6 shadow-soft open:shadow-luxury">
                <summary className="cursor-pointer list-none text-xl font-black text-charcoal">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ivory text-rosegold transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-base leading-8 text-mocha">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
