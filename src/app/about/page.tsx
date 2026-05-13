import type { Metadata } from "next";
import { Award, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SafetyNotes } from "@/components/safety-notes";
import { SectionHeader } from "@/components/section-header";
import { PremiumButton } from "@/components/ui/premium-button";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  title: "من نحن",
  description: "تعرفي على لوميرا كلينك، عيادة تجميل الوجه والبشرة الفاخرة في عمّان، الأردن.",
};

const values = [
  {
    title: "رؤية جمالية هادئة",
    description: "نؤمن أن الإجراء الناجح يعزز الملامح ولا يمحوها.",
    Icon: Sparkles,
  },
  {
    title: "أمان طبي",
    description: "كل خطة تبدأ بفهم الحالة، التاريخ الصحي، ونوع البشرة.",
    Icon: ShieldCheck,
  },
  {
    title: "تجربة فاخرة",
    description: "مساحات رقمية وميدانية مصممة لتقليل التوتر وتوضيح القرار.",
    Icon: Award,
  },
  {
    title: "خصوصية واحترام",
    description: "لا مشاركة لصور أو تفاصيل شخصية دون موافقة واضحة.",
    Icon: HeartPulse,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="عن العيادة"
        title={`${clinic.brandName}، فخامة تجميلية بروح طبية.`}
        description="عيادة عربية في عمّان متخصصة في تجميل الوجه غير الجراحي، العناية بالبشرة، والليزر، بتجربة هادئة تراعي التفاصيل الصغيرة قبل الكبيرة."
      >
        <div className="rounded-[34px] border border-line bg-warm-white/76 p-6 shadow-luxury">
          <p className="text-sm font-black text-rosegold">رسالتنا</p>
          <p className="mt-3 text-lg leading-9 text-charcoal">
            أن تشعري بأنك مفهومة قبل أن تختاري أي إجراء، وأن تكون النتيجة امتدادًا طبيعيًا لجمالك.
          </p>
        </div>
      </PageHero>

      <section className="luxury-container py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            align="start"
            eyebrow="فلسفتنا"
            title="نصمم الخطة حول الوجه، وليس حول قائمة خدمات جاهزة."
            description="تبدأ الرحلة باستشارة تفهم بنية الوجه، جودة البشرة، توقعاتك، والوقت المناسب لكل خطوة. نفضل النتائج المتدرجة والطبيعية على القرارات السريعة."
          />
          <Reveal className="grid gap-4 sm:grid-cols-2">
            {values.map(({ title, description, Icon }) => (
              <article key={title} className="rounded-[30px] border border-line bg-warm-white/82 p-6 shadow-soft">
                <div className="grid size-12 place-items-center rounded-full bg-blush-soft text-rosegold">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-xl font-black text-charcoal">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-mocha">{description}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-ivory/70 py-20 md:py-24">
        <div className="luxury-container grid gap-6 md:grid-cols-3">
          {[
            ["تقييم", "تحليل الملامح والبشرة وأهدافك الجمالية قبل التوصية."],
            ["تخطيط", "تحديد الأولويات، التكلفة التقريبية، والجلسات المناسبة."],
            ["متابعة", "تعليمات عناية واضحة ومراجعة النتيجة عند الحاجة."],
          ].map(([title, description]) => (
            <Reveal key={title} className="rounded-[30px] border border-line bg-warm-white p-7 shadow-soft">
              <h2 className="text-2xl font-black text-charcoal">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-mocha">{description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <SafetyNotes />

      <section className="luxury-container pb-20 text-center md:pb-28">
        <Reveal className="rounded-[34px] border border-line bg-warm-white/78 p-8 shadow-luxury">
          <h2 className="text-3xl font-black text-charcoal">ابدئي باستشارة وجه كاملة.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-mocha">
            الاستشارة تساعدك على معرفة الخيارات المناسبة دون التزام بإجراء فوري.
          </p>
          <PremiumButton href="/booking" className="mt-7">
            حجز استشارة
          </PremiumButton>
        </Reveal>
      </section>
    </>
  );
}
