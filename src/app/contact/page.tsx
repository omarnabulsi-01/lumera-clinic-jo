import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { PremiumButton } from "@/components/ui/premium-button";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "تواصل مع لوميرا كلينك في عمّان، الأردن للحجز والاستفسارات العامة.",
};

const contactItems: { Icon: LucideIcon; title: string; value: string }[] = [
  { Icon: Phone, title: "الهاتف", value: clinic.phone },
  { Icon: Mail, title: "البريد الإلكتروني", value: clinic.email },
  { Icon: MapPin, title: "الموقع", value: clinic.city },
  { Icon: Clock, title: "ساعات العمل", value: `${clinic.workingHours} · ${clinic.timezone}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="تواصل معنا"
        title="نحن في عمّان، ومستعدون للإجابة بهدوء."
        description="للحجز، الاستفسارات، أو معرفة الخدمة المناسبة قبل الزيارة."
      />
      <section className="luxury-container grid gap-8 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="grid gap-5">
          {contactItems.map(({ Icon, title, value }) => (
            <article key={title} className="rounded-[28px] border border-line bg-warm-white/82 p-6 shadow-soft">
              <div className="flex items-center gap-3 text-rosegold">
                <Icon className="size-5" aria-hidden="true" />
                <h2 className="text-sm font-black">{title}</h2>
              </div>
              <p className="mt-3 text-lg font-black text-charcoal" dir={title === "الهاتف" ? "ltr" : "rtl"}>{value}</p>
            </article>
          ))}
          <div className="rounded-[30px] border border-line bg-charcoal p-6 text-warm-white shadow-luxury">
            <MapPin className="size-8 text-blush" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-black">Google Maps</h2>
            <p className="mt-3 text-sm leading-7 text-pearl">
              مساحة جاهزة لإضافة رابط الخريطة الدقيق عند توفره.
            </p>
            <PremiumButton href="/booking" className="mt-6">
              حجز موعد
            </PremiumButton>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
