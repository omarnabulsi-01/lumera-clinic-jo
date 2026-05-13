import type { Metadata } from "next";
import { BookingForm } from "@/components/forms/booking-form";
import { PageHero } from "@/components/page-hero";
import { SafetyNotes } from "@/components/safety-notes";

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
        description="املئي البيانات الأساسية، وسيتم التحقق من الطلب محليًا في هذه النسخة دون تخزين بيانات طبية."
      />
      <section className="luxury-container py-20 md:py-28">
        <BookingForm initialServiceSlug={params?.service} />
      </section>
      <SafetyNotes />
    </>
  );
}
