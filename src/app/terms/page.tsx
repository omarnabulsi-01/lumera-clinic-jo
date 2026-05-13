import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "شروط الاستخدام",
  description: "شروط استخدام موقع لوميرا كلينك.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="شروط الاستخدام"
        title="معلومات الموقع لا تغني عن الاستشارة الطبية."
        description="استخدام الموقع يعني فهم أن المحتوى تعريفي وأن القرار العلاجي يتم بعد تقييم مختص."
      />
      <section className="luxury-container py-20 md:py-28">
        <Reveal className="mx-auto max-w-4xl rounded-[34px] border border-line bg-warm-white p-6 shadow-luxury md:p-9">
          <div className="grid gap-8">
            {[
              ["طبيعة المحتوى", "المعلومات المنشورة للتوعية والتعريف بالخدمات، ولا تشكل تشخيصًا أو وصفة علاجية."],
              ["الأسعار", "جميع الأسعار تقريبية بالدينار الأردني وتختلف حسب الحالة والمواد وتوصية الطبيبة."],
              ["النتائج", "النتائج تختلف من شخص لآخر ولا يمكن ضمان نتيجة موحدة لأي إجراء."],
              ["الحالات الطارئة", "في أي حالة طارئة يجب مراجعة مركز طبي مختص فورًا وعدم الاعتماد على نماذج الموقع."],
              ["النماذج", "النماذج الحالية لا ترسل بيانات إلى خادم. عند ربط نظام حجز لاحقًا يجب تأمينه وتحديث الشروط."],
            ].map(([title, body]) => (
              <section key={title}>
                <h2 className="text-2xl font-black text-charcoal">{title}</h2>
                <p className="mt-3 text-base leading-8 text-mocha">{body}</p>
              </section>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
