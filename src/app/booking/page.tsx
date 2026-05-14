import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { BookingForm } from "@/components/forms/booking-form";
import { PageHero } from "@/components/page-hero";
import { SafetyNotes } from "@/components/safety-notes";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  title: "حجز موعد",
  description: "احجزي استشارة أو موعدًا لخدمات تجميل الوجه والبشرة في لوميرا كلينك.",
};

type BookingPageProps = {
  searchParams: Promise<{ service?: string }>;
};

export default async function BookingPage({ searchParams }: BookingPageProps) {
  const params = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="حجز موعد"
        title="ابدئي بخطوة هادئة نحو خطة وجه واضحة."
        description="املئي البيانات الأساسية، وسيصل طلبك إلى فريق لوميرا لتأكيد الموعد. لا تُخزّن بيانات المرضى محليًا في الموقع."
      />
      <section className="luxury-container grid gap-6 py-20 md:py-28">
        <BookingForm initialServiceSlug={params?.service} />
        <div className="flex flex-col gap-4 rounded-[30px] border border-line bg-warm-white/82 p-5 shadow-soft md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black text-rosegold">تواصل مباشر</p>
            <p className="mt-2 text-sm leading-7 text-mocha">
              للاستفسار السريع قبل تعبئة النموذج، يمكنك التواصل عبر واتساب أو الاتصال بالعيادة.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton label="استشارة سريعة عبر واتساب" />
            <a
              href={clinic.phoneHref}
              className="focus-visible-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-ivory px-6 py-3 text-sm font-black text-charcoal transition duration-300 hover:-translate-y-0.5 hover:border-rosegold/60 hover:text-rosegold"
            >
              <Phone className="size-4" aria-hidden="true" />
              <span dir="ltr">{clinic.phone}</span>
            </a>
          </div>
        </div>
      </section>
      <SafetyNotes />
    </>
  );
}
