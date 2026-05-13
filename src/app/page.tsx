import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Gem,
  HeartPulse,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";
import { DoctorCard } from "@/components/doctor-card";
import { InteractiveFace } from "@/components/interactive-face/interactive-face";
import { Reveal } from "@/components/reveal";
import { SafetyNotes } from "@/components/safety-notes";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { clinic } from "@/data/clinic";
import { doctors } from "@/data/doctors";
import { faqs } from "@/data/faqs";
import { services, serviceCategories } from "@/data/services";
import { testimonials } from "@/data/testimonials";

const featuredServices = services.filter((service) => service.featured).slice(0, 6);

const whyItems: { title: string; description: string; Icon: LucideIcon }[] = [
  {
    title: "تقييم طبي أولًا",
    description: "قبل أي حقن أو ليزر، نفهم التاريخ الصحي ونوع البشرة والأهداف الواقعية.",
    Icon: ShieldCheck,
  },
  {
    title: "نتائج طبيعية",
    description: "التركيز على التناسق والنعومة بدل التغيير المبالغ به.",
    Icon: Sparkles,
  },
  {
    title: "خصوصية عالية",
    description: "لا تُستخدم صور حقيقية دون موافقة صريحة، ونموذج الحجز لا يخزن بيانات طبية.",
    Icon: HeartPulse,
  },
  {
    title: "خطة واضحة",
    description: "أسعار تقريبية، بدائل مناسبة، وتعليمات عناية قبل وبعد الجلسة.",
    Icon: CheckCircle2,
  },
];

function HeroFaceVisual() {
  return (
    <div className="pointer-events-none absolute inset-y-8 left-[-10%] hidden w-[54%] opacity-80 lg:block">
      <svg viewBox="0 0 520 640" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="heroSkin" x1="130" x2="390" y1="80" y2="540">
            <stop stopColor="#fff7f2" />
            <stop offset="0.55" stopColor="#f4c8bc" />
            <stop offset="1" stopColor="#c77f72" />
          </linearGradient>
          <linearGradient id="heroHair" x1="105" x2="420" y1="60" y2="590">
            <stop stopColor="#614741" />
            <stop offset="1" stopColor="#241a18" />
          </linearGradient>
        </defs>
        <path d="M128 335 C92 148 169 52 260 52 C351 52 428 148 392 335 C374 493 327 591 260 601 C193 591 146 493 128 335Z" fill="url(#heroHair)" opacity="0.92" />
        <path d="M150 306 C154 150 198 92 260 92 C322 92 366 150 370 306 C374 452 329 540 260 540 C191 540 146 452 150 306Z" fill="url(#heroSkin)" opacity="0.92" />
        <path d="M171 250 C206 226 238 230 252 250" fill="none" stroke="#3b2a27" strokeWidth="7" strokeLinecap="round" opacity="0.55" />
        <path d="M269 250 C287 230 321 226 349 250" fill="none" stroke="#3b2a27" strokeWidth="7" strokeLinecap="round" opacity="0.55" />
        <path d="M244 281 C229 328 230 364 262 385 C288 361 286 327 274 281" fill="none" stroke="#9f665d" strokeWidth="6" strokeLinecap="round" opacity="0.45" />
        <path d="M201 426 C228 399 250 417 260 426 C271 417 294 399 320 426 C296 459 225 459 201 426Z" fill="#b65f68" opacity="0.62" />
        <path d="M174 342 C205 373 222 392 260 392 C298 392 315 373 346 342" fill="none" stroke="#b6786d" strokeWidth="54" strokeLinecap="round" opacity="0.1" />
      </svg>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="medical-gradient noise-layer relative isolate overflow-hidden border-b border-line">
        <HeroFaceVisual />
        <div className="luxury-container relative z-10 flex min-h-[calc(88svh-80px)] items-center py-16 md:py-20">
          <Reveal className="max-w-4xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-rosegold/25 bg-warm-white/70 px-4 py-2 text-sm font-black text-rosegold shadow-soft">
              <Sparkles className="size-4" aria-hidden="true" />
              {clinic.brandDescriptor} في {clinic.city}
            </p>
            <h1 className="text-balance text-5xl font-black leading-tight text-charcoal md:text-7xl lg:text-8xl">
              {clinic.brandName}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-10 text-mocha md:text-2xl">
              عيادة فاخرة لتجميل الوجه غير الجراحي، الفيلر، البوتوكس، الليزر، ونضارة البشرة بلمسة أنثوية هادئة ونتائج واقعية.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PremiumButton href="/booking" icon={<CalendarDays className="size-5" aria-hidden="true" />}>
                احجزي استشارتك
              </PremiumButton>
              <PremiumButton href="/face-consultation" variant="secondary" icon={<Sparkles className="size-5" aria-hidden="true" />}>
                جرّبي استشارة الوجه
              </PremiumButton>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ["٢٤/٧", "حجز واستقبال"],
                ["١٨+", "خدمة وجه وبشرة"],
                ["عمّان", "توقيت الأردن"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[24px] border border-line bg-warm-white/68 p-5 shadow-soft backdrop-blur">
                  <p className="arabic-number text-3xl font-black text-charcoal">{value}</p>
                  <p className="mt-1 text-sm font-bold text-mocha">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="luxury-container py-20 md:py-28" id="interactive-face">
        <SectionHeader
          eyebrow="تجربة لوميرا التفاعلية"
          title="استكشفي ملامحك عبر وجه تفاعلي مصمم لخدمات التجميل."
          description="اختاري الأنف، الشفاه، الخدود، الفك، الذقن، الجبهة، تحت العين، الحواجب أو نضارة الوجه لعرض الخدمة المناسبة وسعرها التقريبي."
        />
        <div className="mt-12">
          <InteractiveFace />
        </div>
      </section>

      <section className="border-y border-line bg-warm-white/54 py-20 md:py-24">
        <div className="luxury-container">
          <SectionHeader
            eyebrow="خدمات الوجه والبشرة"
            title="كتالوج علاجات متكامل، مرتب حول احتياجك الحقيقي."
            description="كل خدمة لها نطاق سعر واضح، مع تأكيد أن القرار النهائي يكون بعد الاستشارة الطبية."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {serviceCategories.map((category) => (
              <Reveal key={category} className="rounded-[28px] border border-line bg-ivory p-6 text-center shadow-soft">
                <div className="mx-auto grid size-12 place-items-center rounded-full bg-rosegold text-warm-white">
                  <Gem className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-black text-charcoal">{category}</h3>
                <p className="mt-3 text-sm leading-7 text-mocha">
                  {services.filter((service) => service.category === category).length} خدمات قابلة للتخصيص
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-container py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeader
            align="start"
            eyebrow="لماذا لوميرا؟"
            title="فخامة هادئة، وقرارات علاجية لا تتجاوز حاجتك."
            description="نوازن بين الحس الجمالي والخبرة الطبية، ونبني كل خطة حول ملامحك بدل نسخ قالب واحد على الجميع."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {whyItems.map(({ title, description, Icon }) => (
              <Reveal key={title} className="rounded-[30px] border border-line bg-warm-white/82 p-6 shadow-soft">
                <div className="grid size-12 place-items-center rounded-full bg-sage-soft text-sage">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-black text-charcoal">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-mocha">{description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ivory/70 py-20 md:py-24">
        <div className="luxury-container">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              align="start"
              eyebrow="خدمات مميزة"
              title="أسعار تقريبية بالدينار الأردني قبل الاستشارة."
              description="اختاري الخدمة المناسبة وابدئي بنموذج حجز آمن للواجهة الأمامية فقط."
              className="max-w-2xl"
            />
            <PremiumButton href="/services" variant="secondary" icon={<ArrowLeft className="size-4" aria-hidden="true" />}>
              عرض كل الخدمات
            </PremiumButton>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <Reveal key={service.slug}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-container py-20 md:py-28">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            align="start"
            eyebrow="الفريق المتخصص"
            title="وجوه خبيرة خلف كل قرار جمالي."
            description="ملفات واقعية لفريق عناية وتجميل يركز على الأمان، التناسق، والمتابعة."
            className="max-w-2xl"
          />
          <PremiumButton href="/doctors" variant="secondary">
            تعرّفي على الفريق
          </PremiumButton>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <Reveal key={doctor.name}>
              <DoctorCard doctor={doctor} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-warm-white/58 py-20 md:py-24">
        <div className="luxury-container">
          <SectionHeader
            eyebrow="قبل وبعد"
            title="مساحة جاهزة لنتائج حقيقية بعد الموافقة."
            description="نعرض حاليًا بطاقات توضيحية فقط، لأن خصوصية العميلات جزء من فخامة التجربة."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {["توازن الشفاه", "نضارة البشرة", "تحديد الفك"].map((item, index) => (
              <Reveal key={item} delay={index * 0.08} className="rounded-[30px] border border-line bg-ivory p-5 shadow-soft">
                <div className="grid h-64 grid-cols-2 gap-3">
                  <div className="rounded-[24px] bg-gradient-to-br from-pearl to-warm-white p-4">
                    <span className="rounded-full bg-warm-white px-3 py-1 text-xs font-black text-mocha">قبل</span>
                  </div>
                  <div className="rounded-[24px] bg-gradient-to-br from-blush-soft to-sage-soft p-4">
                    <span className="rounded-full bg-warm-white px-3 py-1 text-xs font-black text-mocha">بعد</span>
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-black text-charcoal">{item}</h3>
                <p className="mt-2 text-sm leading-7 text-mocha">بطاقة مكانية قابلة للاستبدال بصورة حقيقية بعد موافقة مكتوبة.</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-container py-20 md:py-28">
        <SectionHeader
          eyebrow="آراء العميلات"
          title="انطباعات هادئة عن تجربة مصممة بعناية."
          description="نماذج نصية توضيحية لأسلوب التواصل المتوقع، وليست وعودًا بنتائج موحدة."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Reveal key={testimonial.quote} className="rounded-[30px] border border-line bg-warm-white/82 p-6 shadow-soft">
              <div className="mb-5 flex gap-1 text-rosegold" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-base leading-8 text-charcoal">“{testimonial.quote}”</p>
              <p className="mt-5 text-sm font-black text-rosegold">{testimonial.name}</p>
              <p className="mt-1 text-xs font-bold text-mocha">{testimonial.service}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <SafetyNotes />

      <section className="luxury-container py-20 md:py-28">
        <SectionHeader
          eyebrow="خطوات الحجز"
          title="من الفضول إلى الخطة، تجربة واضحة منذ اللحظة الأولى."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {[
            ["١", "اختيار الخدمة", "ابدئي من كتالوج الخدمات أو الوجه التفاعلي."],
            ["٢", "إرسال الطلب", "أدخلي بيانات التواصل والوقت المفضل."],
            ["٣", "تأكيد الاستشارة", "يتواصل الفريق لاحقًا عند ربط نظام الحجز."],
            ["٤", "خطة آمنة", "تتم مناقشة الخيارات والسعر النهائي قبل أي إجراء."],
          ].map(([number, title, description]) => (
            <Reveal key={number} className="rounded-[30px] border border-line bg-warm-white/82 p-6 shadow-soft">
              <p className="arabic-number text-4xl font-black text-rosegold">{number}</p>
              <h3 className="mt-4 text-xl font-black text-charcoal">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-mocha">{description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ivory/70 py-20 md:py-24">
        <div className="luxury-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            align="start"
            eyebrow="أسئلة متكررة"
            title="إجابات مختصرة قبل الاستشارة."
            description="نوضح حدود الأسعار، النتائج، والخصوصية حتى يكون القرار أكثر هدوءًا."
          />
          <div className="grid gap-4">
            {faqs.slice(0, 4).map((faq) => (
              <Reveal key={faq.question} className="rounded-[24px] border border-line bg-warm-white p-5 shadow-soft">
                <h3 className="text-lg font-black text-charcoal">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-mocha">{faq.answer}</p>
              </Reveal>
            ))}
            <PremiumButton href="/faq" variant="secondary" className="w-fit">
              كل الأسئلة
            </PremiumButton>
          </div>
        </div>
      </section>

      <section className="luxury-container py-20 md:py-28">
        <div className="grid gap-8 rounded-[36px] border border-line bg-charcoal p-6 text-warm-white shadow-luxury md:p-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-black text-blush">تواصل وموقع العيادة</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">عمّان، الأردن · متاحون طوال الأسبوع.</h2>
            <div className="mt-8 grid gap-4 text-sm text-pearl">
              <p className="arabic-number" dir="ltr">{clinic.phone}</p>
              <p>{clinic.email}</p>
              <p>{clinic.workingHours} · {clinic.timezone}</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PremiumButton href="/booking" icon={<CalendarDays className="size-4" aria-hidden="true" />}>
                احجزي الآن
              </PremiumButton>
              <PremiumButton href="/contact" variant="ghost">
                صفحة التواصل
              </PremiumButton>
            </div>
          </div>
          <div className="min-h-72 rounded-[30px] border border-warm-white/12 bg-warm-white/8 p-5">
            <div className="flex h-full min-h-64 flex-col items-center justify-center rounded-[24px] border border-dashed border-blush/35 bg-warm-white/6 text-center">
              <MapPin className="mb-4 size-10 text-blush" aria-hidden="true" />
              <p className="text-xl font-black">خريطة عمّان</p>
              <p className="mt-2 max-w-sm text-sm leading-7 text-pearl">
                مساحة جاهزة لربط Google Maps عند إضافة رابط الموقع الدقيق.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
