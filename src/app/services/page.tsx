import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SafetyNotes } from "@/components/safety-notes";
import { ServiceCard } from "@/components/service-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { services, serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "الخدمات",
  description: "كتالوج خدمات لوميرا كلينك للفيلر، البوتوكس، نضارة البشرة، الليزر والاستشارات في عمّان.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="كتالوج الخدمات"
        title="خدمات تجميل وجه وبشرة بأسعار واضحة قبل الاستشارة."
        description="استعرضي كامل الخدمات مع نطاقات سعر تقريبية بالدينار الأردني، ثم احجزي الاستشارة المناسبة لك."
      >
        <div className="rounded-[34px] border border-line bg-warm-white/76 p-6 shadow-luxury">
          <p className="text-sm font-black text-rosegold">ملاحظة الأسعار</p>
          <p className="mt-3 text-base leading-8 text-mocha">
            السعر النهائي يعتمد على الحالة، المادة، عدد المناطق، وتوصية الطبيبة بعد التقييم.
          </p>
        </div>
      </PageHero>

      <section className="luxury-container py-20 md:py-28">
        <div className="grid gap-12">
          {serviceCategories.map((category) => (
            <div key={category}>
              <Reveal className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-black text-rosegold">فئة الخدمة</p>
                  <h2 className="mt-2 text-3xl font-black text-charcoal">{category}</h2>
                </div>
                <PremiumButton href="/booking" variant="secondary">
                  حجز استشارة
                </PremiumButton>
              </Reveal>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((service) => service.category === category)
                  .map((service) => (
                    <Reveal key={service.slug}>
                      <ServiceCard service={service} />
                    </Reveal>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <SafetyNotes />
    </>
  );
}
