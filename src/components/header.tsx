"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Menu, Phone, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { clinic, navigation } from "@/data/clinic";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-warm-white/82 backdrop-blur-2xl">
      <div className="luxury-container flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="focus-visible-ring flex items-center gap-3 rounded-full" onClick={() => setOpen(false)}>
          <span className="grid size-12 place-items-center rounded-full bg-charcoal text-warm-white shadow-soft">
            <Sparkles className="size-5 text-blush" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-black tracking-normal text-charcoal">{clinic.brandName}</span>
            <span className="block text-xs font-semibold text-rosegold">{clinic.brandDescriptor}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="التنقل الرئيسي">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-visible-ring whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold text-mocha transition hover:bg-blush-soft hover:text-charcoal",
                  active && "bg-charcoal !text-warm-white hover:bg-charcoal hover:!text-warm-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${clinic.phone.replaceAll(" ", "")}`}
            className="focus-visible-ring inline-flex items-center gap-2 rounded-full border border-line bg-warm-white px-4 py-3 text-sm font-bold text-charcoal transition hover:border-rosegold/60 hover:text-rosegold"
          >
            <Phone className="size-4" aria-hidden="true" />
            <span className="arabic-number whitespace-nowrap" dir="ltr">{clinic.phone}</span>
          </a>
          <Link
            href="/booking"
            className="focus-visible-ring inline-flex items-center gap-2 rounded-full bg-rosegold px-5 py-3 text-sm font-black text-warm-white shadow-soft transition hover:-translate-y-0.5 hover:bg-rosegold-dark"
          >
            <CalendarDays className="size-4" aria-hidden="true" />
            احجزي موعدًا
          </Link>
        </div>

        <button
          type="button"
          className="focus-visible-ring grid size-11 place-items-center rounded-full border border-line bg-warm-white text-charcoal shadow-soft lg:hidden"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-warm-white/96 shadow-luxury lg:hidden">
          <nav className="luxury-container grid gap-2 py-5" aria-label="قائمة الهاتف">
            {navigation.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "focus-visible-ring rounded-2xl px-4 py-3 text-sm font-bold text-mocha transition",
                    active ? "bg-charcoal !text-warm-white" : "bg-ivory hover:bg-blush-soft",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="focus-visible-ring mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-rosegold px-5 py-3 text-sm font-black text-warm-white"
            >
              <CalendarDays className="size-4" aria-hidden="true" />
              احجزي موعدًا
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
