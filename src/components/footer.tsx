import Link from "next/link";
import { Clock, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { clinic, legalNotes, navigation } from "@/data/clinic";
import { services } from "@/data/services";

const footerServices = services.slice(0, 6);

export function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal text-warm-white">
      <div className="luxury-container grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-full bg-warm-white text-rosegold">
              <Sparkles className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xl font-black">{clinic.brandName}</p>
              <p className="text-sm text-pearl">{clinic.brandDescriptor}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-pearl">
            تجربة فاخرة وهادئة لتجميل الوجه غير الجراحي، مع خطط واقعية تراعي الأمان، التوازن، وخصوصية كل عميلة.
          </p>
          <div className="mt-6 rounded-3xl border border-warm-white/10 bg-warm-white/6 p-5 text-xs leading-6 text-pearl">
            {legalNotes[0]} {legalNotes[1]}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black text-blush">روابط سريعة</h2>
          <ul className="mt-4 grid gap-3 text-sm text-pearl">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-blush" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="transition hover:text-blush" href="/privacy">
                سياسة الخصوصية
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-blush" href="/terms">
                شروط الاستخدام
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black text-blush">خدمات مختارة</h2>
          <ul className="mt-4 grid gap-3 text-sm text-pearl">
            {footerServices.map((service) => (
              <li key={service.slug}>
                <Link className="transition hover:text-blush" href={`/services/${service.slug}`}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black text-blush">تواصل معنا</h2>
          <ul className="mt-4 grid gap-4 text-sm text-pearl">
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-blush" aria-hidden="true" />
              <a className="arabic-number transition hover:text-blush" href={`tel:${clinic.phone.replaceAll(" ", "")}`} dir="ltr">
                {clinic.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-blush" aria-hidden="true" />
              <a className="transition hover:text-blush" href={`mailto:${clinic.email}`}>
                {clinic.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-blush" aria-hidden="true" />
              <span>{clinic.city}</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="size-4 text-blush" aria-hidden="true" />
              <span>{clinic.workingHours} · {clinic.timezone}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-warm-white/10 py-5">
        <div className="luxury-container flex flex-col gap-2 text-xs text-pearl sm:flex-row sm:items-center sm:justify-between">
          <p>© ٢٠٢٦ {clinic.brandName}. جميع الحقوق محفوظة.</p>
          <p>الموقع لا يجمع بيانات طبية حقيقية في النسخة الحالية.</p>
        </div>
      </div>
    </footer>
  );
}
