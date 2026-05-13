import type { Metadata } from "next";
import { InteractiveFace } from "@/components/interactive-face/interactive-face";
import { PageHero } from "@/components/page-hero";
import { SafetyNotes } from "@/components/safety-notes";

export const metadata: Metadata = {
  title: "استشارة الوجه التفاعلية",
  description: "اختاري مناطق الوجه لاكتشاف خدمات الفيلر والبوتوكس والنضارة المناسبة في لوميرا كلينك.",
};

export default function FaceConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="استشارة تفاعلية"
        title="خريطة وجه فاخرة تساعدك على فهم خياراتك."
        description="اضغطي على مناطق الوجه المختلفة لعرض الخدمة المناسبة، النتيجة المتوقعة، والسعر التقريبي بالدينار الأردني."
      />
      <section className="luxury-container py-20 md:py-28">
        <InteractiveFace />
      </section>
      <SafetyNotes />
    </>
  );
}
