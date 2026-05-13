import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description: "سياسة الخصوصية لموقع لوميرا كلينك.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="سياسة الخصوصية"
        title="خصوصيتك جزء أساسي من التجربة."
        description="هذه الصفحة توضح طريقة التعامل مع بيانات الموقع في النسخة الحالية."
      />
      <LegalContent
        sections={[
          ["البيانات الحالية", "نموذج الحجز ونموذج التواصل يعملان في الواجهة الأمامية فقط ولا يرسلان أو يخزنان بيانات على خادم في هذه النسخة."],
          ["البيانات الطبية", "لا ينبغي إرسال معلومات طبية حساسة عبر النماذج العامة. عند إضافة نظام خلفي لاحقًا يجب تطبيق موافقة صريحة وحماية مناسبة للبيانات."],
          ["التحليلات والكوكيز", "لا يحتوي المشروع الحالي على أدوات تتبع خارجية. يمكن إضافة التحليلات لاحقًا مع تحديث هذه السياسة."],
          ["الصور والنتائج", "لا يتم نشر صور قبل وبعد حقيقية دون موافقة واضحة ومكتوبة من صاحبة الصورة."],
          ["التواصل", "لأي سؤال حول الخصوصية يمكن التواصل عبر البريد contact@aestheticclinic.jo."],
        ]}
      />
    </>
  );
}

function LegalContent({ sections }: { sections: [string, string][] }) {
  return (
    <section className="luxury-container py-20 md:py-28">
      <Reveal className="mx-auto max-w-4xl rounded-[34px] border border-line bg-warm-white p-6 shadow-luxury md:p-9">
        <div className="grid gap-8">
          {sections.map(([title, body]) => (
            <section key={title}>
              <h2 className="text-2xl font-black text-charcoal">{title}</h2>
              <p className="mt-3 text-base leading-8 text-mocha">{body}</p>
            </section>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
