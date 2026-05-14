import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { GoogleMapCard } from "@/components/google-map-card";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "تواصل مع لوميرا كلينك في Abdoun, Amman, Jordan للحجز والاستفسارات العامة طوال أيام الأسبوع.",
};

const contactItems: { Icon: LucideIcon; title: string; value: string; href?: string; external?: boolean; dir?: "ltr" | "rtl" }[] = [
  { Icon: Phone, title: "الهاتف", value: clinic.phone, href: clinic.phoneHref, dir: "ltr" },
  { Icon: Mail, title: "البريد الإلكتروني", value: clinic.email, href: clinic.emailHref, dir: "ltr" },
  { Icon: MapPin, title: "الموقع", value: clinic.address, href: clinic.mapsSearchUrl, external: true, dir: "ltr" },
  { Icon: Clock, title: "ساعات العمل", value: `${clinic.workingHours} · ${clinic.timezone}`, dir: "ltr" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="تواصل معنا"
        title="نحن في عمّان، ومستعدون للإجابة بهدوء."
        description="للحجز، الاستفسارات، أو معرفة الخدمة المناسبة قبل الزيارة. الموقع الحالي تقريبي في عبدون إلى حين اعتماد العنوان الرسمي."
      />
      <section className="luxury-container grid gap-8 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="grid gap-5">
          {contactItems.map(({ Icon, title, value, href, external, dir }) => (
            <article key={title} className="rounded-[28px] border border-line bg-warm-white/82 p-6 shadow-soft">
              <div className="flex items-center gap-3 text-rosegold">
                <Icon className="size-5" aria-hidden="true" />
                <h2 className="text-sm font-black">{title}</h2>
              </div>
              {href ? (
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="mt-3 block text-lg font-black text-charcoal transition hover:text-rosegold"
                  dir={dir}
                >
                  {value}
                </a>
              ) : (
                <p className="mt-3 text-lg font-black text-charcoal" dir={dir}>
                  {value}
                </p>
              )}
            </article>
          ))}
          <div className="rounded-[30px] border border-line bg-charcoal p-6 text-warm-white shadow-luxury">
            <MessageCircle className="size-8 text-blush" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-black">استشارة سريعة عبر واتساب</h2>
            <p className="mt-3 text-sm leading-7 text-pearl">للاستفسارات المختصرة أو تنسيق وقت مناسب، يفتح واتساب في تبويب جديد وآمن.</p>
            <WhatsAppButton label="تواصل عبر واتساب" variant="dark" className="mt-6 w-full" />
          </div>
          <GoogleMapCard />
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
