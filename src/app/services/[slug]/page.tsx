import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SafetyNotes } from "@/components/safety-notes";
import { ServiceCard } from "@/components/service-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { getServiceBySlug, services } from "@/data/services";
import { formatPriceRange } from "@/lib/utils";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "الخدمة غير موجودة",
    };
  }

  return {
    title: service.title,
    description: `${service.description} السعر التقريبي: ${formatPriceRange(service.priceRange)}.`,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter((item) => item.category === service.category && item.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero eyebrow={service.eyebrow} title={service.title} description={service.description}>
        <div className="rounded-[34px] border border-line bg-warm-white/76 p-6 shadow-luxury">
          <p className="text-sm font-black text-rosegold">السعر التقريبي</p>
          <p className="mt-2 text-3xl font-black text-charcoal">{formatPriceRange(service.priceRange)}</p>
          <p className="mt-3 text-sm leading-7 text-mocha">يحدد السعر النهائي بعد الاستشارة وتقييم الحالة.</p>
        </div>
      </PageHero>

      <section className="luxury-container py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-start">
          <Reveal className="rounded-[34px] border border-line bg-warm-white p-6 shadow-luxury md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <InfoBlock title="مناسب لمن؟" body={service.suitableFor} />
              <InfoBlock title="النتيجة المتوقعة" body={service.expectedResult} />
              <InfoBlock title="مدة الجلسة" body={service.duration} icon={<Clock className="size-5" aria-hidden="true" />} />
              <InfoBlock title="فترة التعافي" body={service.recovery} icon={<ShieldCheck className="size-5" aria-hidden="true" />} />
            </div>
            <div className="mt-8 rounded-[28px] bg-blush-soft p-6">
              <h2 className="text-2xl font-black text-charcoal">كيف تتم مناقشة الخطة؟</h2>
              <p className="mt-4 text-base leading-8 text-mocha">
                تبدأ الجلسة بتقييم الملامح، فهم الهدف، مراجعة أي موانع طبية، ثم اقتراح كمية أو تقنية مناسبة. لا يتم اعتماد أي إجراء قبل توضيح البدائل والتكلفة المتوقعة.
              </p>
            </div>
          </Reveal>

          <Reveal className="rounded-[34px] border border-line bg-charcoal p-6 text-warm-white shadow-luxury md:p-8">
            <Sparkles className="size-8 text-blush" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-black">ابدئي باستشارة آمنة.</h2>
            <p className="mt-3 text-sm leading-7 text-pearl">
              نموذج الحجز واجهة أمامية فقط في هذه النسخة، ولا يخزن بيانات طبية.
            </p>
            <PremiumButton href={`/booking?service=${service.slug}`} className="mt-7 w-full" icon={<CalendarDays className="size-4" aria-hidden="true" />}>
              حجز هذه الخدمة
            </PremiumButton>
            <PremiumButton href="/services" variant="ghost" className="mt-3 w-full" icon={<ArrowLeft className="size-4" aria-hidden="true" />}>
              العودة للخدمات
            </PremiumButton>
          </Reveal>
        </div>
      </section>

      {relatedServices.length > 0 ? (
        <section className="border-y border-line bg-ivory/70 py-20 md:py-24">
          <div className="luxury-container">
            <h2 className="text-3xl font-black text-charcoal">خدمات قريبة</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {relatedServices.map((item) => (
                <Reveal key={item.slug}>
                  <ServiceCard service={item} compact />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <SafetyNotes />
    </>
  );
}

function InfoBlock({ title, body, icon }: { title: string; body: string; icon?: ReactNode }) {
  return (
    <article className="rounded-[28px] border border-line bg-ivory p-5">
      <div className="mb-3 flex items-center gap-2 text-rosegold">
        {icon}
        <h2 className="text-sm font-black">{title}</h2>
      </div>
      <p className="text-sm leading-7 text-mocha">{body}</p>
    </article>
  );
}
