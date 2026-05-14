import Image from "next/image";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Gem,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";
import { BeforeAfterGallery } from "@/components/before-after-gallery";
import { DoctorCard } from "@/components/doctor-card";
import { GoogleMapCard } from "@/components/google-map-card";
import { InteractiveFace } from "@/components/interactive-face/interactive-face";
import { Reveal } from "@/components/reveal";
import { SafetyNotes } from "@/components/safety-notes";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { clinic } from "@/data/clinic";
import { doctors } from "@/data/doctors";
import { faqs } from "@/data/faqs";
import { services, serviceCategories } from "@/data/services";
import { testimonials } from "@/data/testimonials";

const featuredServices = services.filter((service) => service.featured).slice(0, 6);

const heroStats = [
  ["24/7", "حجز واستقبال"],
  ["١٨+", "خدمة وجه وبشرة"],
  ["Abdoun", "Jordan Time"],
];

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
    description: "لا تُستخدم صور حقيقية دون موافقة صريحة، ونموذج الحجز لا يخزن بيانات المرضى محليًا.",
    Icon: HeartPulse,
  },
  {
    title: "خطة واضحة",
    description: "أسعار تقريبية، بدائل مناسبة، وتعليمات عناية قبل وبعد الجلسة.",
    Icon: CheckCircle2,
  },
];

function CinematicVideoHero() {
  return (
    <section className="relative isolate min-h-[88svh] overflow-hidden bg-charcoal text-warm-white md:min-h-[calc(100svh-80px)]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/luxury-hero-clinic-blonde.jpg"
        aria-hidden="true"
      >
        <source src="/videos/lumera-cinematic-hero-loop-4k.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(35,28,27,0.78)_0%,rgba(48,37,35,0.46)_42%,rgba(35,28,27,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_18%,rgba(215,160,144,0.28),transparent_32%),linear-gradient(180deg,rgba(255,253,249,0.12)_0%,transparent_42%,rgba(255,250,242,0.88)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-ivory/70 to-ivory" />

      <div className="luxury-container relative z-10 flex min-h-[88svh] items-center py-24 md:min-h-[calc(100svh-80px)] md:py-28">
        <Reveal className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-warm-white/24 bg-warm-white/12 px-4 py-2 text-xs font-black text-blush shadow-soft backdrop-blur-2xl sm:text-sm">
            <Sparkles className="size-4" aria-hidden="true" />
            عيادة تجميل الوجه والبشرة في عمّان
          </p>
          <h1 className="text-balance text-5xl font-black leading-tight text-warm-white drop-shadow-[0_18px_45px_rgba(0,0,0,0.35)] md:text-7xl lg:text-8xl">
            جمال هادئ يبدأ من ملامحك
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-pearl drop-shadow-[0_12px_30px_rgba(0,0,0,0.3)] md:text-2xl md:leading-10">
            تجربة فاخرة لتجميل الوجه غير الجراحي، بخطط مدروسة توازن بين النعومة، الأمان، والنتائج الطبيعية.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PremiumButton href="/booking" icon={<CalendarDays className="size-5" aria-hidden="true" />}>
              احجزي استشارتك
            </PremiumButton>
            <PremiumButton
              href="#interactive-face"
              variant="ghost"
              icon={<Sparkles className="size-5" aria-hidden="true" />}
              className="border border-warm-white/24 bg-warm-white/12 text-warm-white ring-warm-white/20 hover:bg-warm-white hover:text-charcoal"
            >
              استكشفي تجربة الوجه
            </PremiumButton>
          </div>
          <p className="mt-6 text-sm font-bold text-pearl/88">
            خصوصية عالية · أسعار واضحة · تقييم طبي قبل أي إجراء
          </p>
        </Reveal>
      </div>

      <a
        href="#brand-intro"
        aria-label="الانتقال إلى محتوى الصفحة"
        className="focus-visible-ring absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 rounded-full border border-warm-white/20 bg-warm-white/12 p-3 text-warm-white shadow-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-warm-white hover:text-charcoal md:grid"
      >
        <ChevronDown className="size-5 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}

function HeroFaceVisual() {
  return (
    <Reveal delay={0.12} className="relative">
      <div className="absolute -inset-4 rounded-[46px] bg-[radial-gradient(circle_at_50%_20%,rgba(255,253,249,0.92),rgba(246,215,215,0.36)_38%,rgba(182,120,109,0.16)_72%,transparent_100%)] blur-2xl" />
      <div className="relative mx-auto aspect-[4/5] max-h-[720px] max-w-[620px] overflow-hidden rounded-[42px] border border-warm-white/70 bg-charcoal shadow-[0_36px_100px_rgba(73,52,45,0.24)]">
        <Image
          src="/images/luxury-clinic-hero-face.jpg"
          alt="امرأة بإطلالة راقية داخل عيادة تجميل فاخرة"
          fill
          sizes="(min-width: 1024px) 48vw, 100vw"
          className="object-cover object-[50%_42%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(48,41,39,0.34),rgba(48,41,39,0.04)_38%,rgba(255,253,249,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_54%_29%,transparent_0,rgba(255,253,249,0.05)_32%,rgba(48,41,39,0.34)_100%)]" />
        <div className="absolute inset-x-6 top-6 flex items-center justify-between gap-3">
          <span className="rounded-full border border-warm-white/35 bg-warm-white/18 px-4 py-2 text-xs font-black text-warm-white shadow-soft backdrop-blur-xl">
            تقييم وجه متكامل
          </span>
          <span className="rounded-full border border-warm-white/35 bg-charcoal/35 px-4 py-2 text-xs font-black text-warm-white shadow-soft backdrop-blur-xl">
            عمّان
          </span>
        </div>
        <div className="absolute inset-x-5 bottom-5 rounded-[28px] border border-warm-white/28 bg-warm-white/20 p-5 text-warm-white shadow-luxury backdrop-blur-2xl">
          <p className="text-xs font-black text-blush">توازن · نضارة · خصوصية</p>
          <p className="mt-2 text-2xl font-black">تجربة عناية تبدأ من ملامحك.</p>
        </div>
      </div>
    </Reveal>
  );
}

function HeroStats({ className = "" }: { className?: string }) {
  return (
    <div className={`mt-10 grid gap-3 sm:grid-cols-3 ${className}`}>
      {heroStats.map(([value, label]) => (
        <div key={label} className="rounded-[24px] border border-line bg-warm-white/68 p-5 shadow-soft backdrop-blur">
          <p className="arabic-number text-3xl font-black text-charcoal">{value}</p>
          <p className="mt-1 text-sm font-bold text-mocha">{label}</p>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <CinematicVideoHero />

      <section className="medical-gradient noise-layer relative isolate overflow-hidden border-b border-line" id="brand-intro">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(245,215,215,0.72),transparent_34%),radial-gradient(circle_at_18%_72%,rgba(237,243,239,0.8),transparent_34%)]" />
        <div className="luxury-container relative z-10 grid items-center gap-10 py-20 md:py-28 lg:grid-cols-[0.95fr_1.05fr]">
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
            <HeroStats className="hidden sm:grid" />
          </Reveal>
          <HeroFaceVisual />
          <HeroStats className="sm:hidden" />
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
              description="اختاري الخدمة المناسبة وابدئي بنموذج حجز متصل بفريق لوميرا مع الحفاظ على الخصوصية."
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
            title="نماذج فاخرة توضح اتجاهات العناية دون صور مرضى."
            description="هذه البطاقات mockups جمالية فقط، مصممة للحفاظ على الخصوصية وعدم الإيحاء بنتائج طبية حقيقية."
          />
          <div className="mt-12">
            <BeforeAfterGallery />
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
            ["٣", "تأكيد الاستشارة", "يتواصل فريق لوميرا قريبًا لتأكيد الموعد."],
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
              <a className="arabic-number transition hover:text-blush" href={clinic.phoneHref} dir="ltr">{clinic.phone}</a>
              <a className="transition hover:text-blush" href={clinic.emailHref}>{clinic.email}</a>
              <p dir="ltr">{clinic.address}</p>
              <p dir="ltr">{clinic.workingHours} · {clinic.timezone}</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PremiumButton href="/booking" icon={<CalendarDays className="size-4" aria-hidden="true" />}>
                احجزي الآن
              </PremiumButton>
              <WhatsAppButton label="استشارة سريعة عبر واتساب" variant="dark" />
              <PremiumButton href="/contact" variant="ghost">
                صفحة التواصل
              </PremiumButton>
            </div>
          </div>
          <GoogleMapCard tone="dark" />
        </div>
      </section>
    </>
  );
}
