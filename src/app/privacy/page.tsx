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
        description="هذه الصفحة توضح طريقة التعامل مع بيانات النماذج والتواصل في الموقع."
      />
      <LegalContent
        sections={[
          ["بيانات النماذج", "نموذج الحجز ونموذج التواصل يرسلان البيانات إلى فريق لوميرا عبر Formspree، ولا يستخدم الموقع قاعدة بيانات أو تخزينًا محليًا لبيانات المرضى."],
          ["البيانات الطبية", "لا ينبغي إرسال معلومات طبية حساسة أو طارئة عبر النماذج العامة. يتم استخدام البيانات المقدمة لغرض التواصل وتأكيد الموعد فقط."],
          ["التحليلات والكوكيز", "لا يحتوي المشروع الحالي على أدوات تتبع خارجية. يمكن إضافة التحليلات لاحقًا مع تحديث هذه السياسة."],
          ["الصور والنتائج", "لا يتم نشر صور قبل وبعد حقيقية دون موافقة واضحة ومكتوبة من صاحبة الصورة."],
          ["التواصل", "لأي سؤال حول الخصوصية يمكن التواصل عبر البريد lumeraclinic@outlook.com."],
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
