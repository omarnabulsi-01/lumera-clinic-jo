"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, CheckCircle2, MousePointer2, Sparkles, X } from "lucide-react";
import { useMemo, useState } from "react";
import { PremiumButton } from "@/components/ui/premium-button";
import { faceAreas, getFaceService, type FaceAreaId } from "@/data/services";
import { formatPriceRange } from "@/lib/utils";

const hotspotLayers: Record<FaceAreaId, number> = {
  skin: 3,
  cheeks: 7,
  jawline: 8,
  forehead: 9,
  underEyes: 10,
  eyebrows: 11,
  chin: 12,
  lips: 13,
  nose: 14,
};

const highlightStyles: Record<FaceAreaId, string> = {
  nose: "left-[45.5%] top-[35%] h-[26%] w-[9%] rounded-[44%]",
  lips: "left-[39.5%] top-[60%] h-[10%] w-[21%] rounded-[999px]",
  cheeks: "left-[26%] top-[42%] h-[24%] w-[48%] rounded-[999px]",
  jawline: "left-[29%] top-[64%] h-[22%] w-[42%] rounded-b-[999px]",
  chin: "left-[42%] top-[71%] h-[12%] w-[16%] rounded-[999px]",
  forehead: "left-[35%] top-[9%] h-[18%] w-[30%] rounded-[999px]",
  underEyes: "left-[31%] top-[33%] h-[10%] w-[38%] rounded-[999px]",
  eyebrows: "left-[29%] top-[22%] h-[10%] w-[42%] rounded-[999px]",
  skin: "left-[25%] top-[8%] h-[80%] w-[50%] rounded-[45%]",
};

export function InteractiveFace() {
  const [selected, setSelected] = useState<FaceAreaId | null>(null);
  const [hovered, setHovered] = useState<FaceAreaId | null>(null);
  const currentArea = useMemo(
    () => faceAreas.find((area) => area.id === selected) ?? null,
    [selected],
  );
  const hoverArea = useMemo(
    () => faceAreas.find((area) => area.id === hovered) ?? null,
    [hovered],
  );
  const activeArea = currentArea ?? hoverArea;
  const selectedService = currentArea ? getFaceService(currentArea) : null;
  const orderedAreas = useMemo(
    () => [...faceAreas].sort((area) => (area.id === "skin" ? -1 : 1)),
    [],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
      <div className="relative overflow-hidden rounded-[38px] border border-rosegold/20 bg-[linear-gradient(135deg,rgba(255,253,249,0.92),rgba(244,226,216,0.66))] p-3 shadow-luxury md:p-5">
        <div className="absolute inset-x-8 top-5 z-10 h-px bg-gradient-to-l from-transparent via-rosegold/55 to-transparent" />
        <div className="absolute -left-16 top-10 size-44 rounded-full bg-blush/35 blur-3xl" />
        <div className="absolute -right-16 bottom-10 size-52 rounded-full bg-sage-soft/70 blur-3xl" />

        <motion.div
          className="relative mx-auto aspect-video max-w-[760px] overflow-hidden rounded-[32px] bg-charcoal shadow-[0_28px_80px_rgba(70,48,42,0.22)]"
          animate={{
            scale: currentArea ? 1.085 : 1,
            x: currentArea ? (50 - currentArea.focus.x) * 1.35 : 0,
            y: currentArea ? (50 - currentArea.focus.y) * 1.35 : 0,
          }}
          transition={{ type: "spring", stiffness: 105, damping: 22 }}
          style={{
            transformOrigin: activeArea ? `${activeArea.focus.x}% ${activeArea.focus.y}%` : "50% 50%",
          }}
        >
          <Image
            src="/images/interactive-facial-map.jpg"
            alt="خريطة وجه تفاعلية لخدمات تجميل الوجه في لوميرا كلينك"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,transparent_0,rgba(48,41,39,0.02)_45%,rgba(48,41,39,0.32)_100%)]" />
          <div className="absolute inset-0 ring-1 ring-inset ring-warm-white/35" />

          <AnimatePresence>
            {activeArea ? (
              <motion.div
                key={activeArea.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                className={`pointer-events-none absolute ${highlightStyles[activeArea.id]} border border-warm-white/70 bg-rosegold/18 shadow-[0_0_45px_rgba(246,215,215,0.74),inset_0_0_28px_rgba(255,253,249,0.34)] backdrop-blur-[1px]`}
              />
            ) : null}
          </AnimatePresence>

          {orderedAreas.map((area) => (
            <button
              key={area.id}
              type="button"
              aria-label={`اختيار منطقة ${area.label}`}
              className="focus-visible-ring group absolute rounded-full"
              style={{
                left: `${area.hotspot.left}%`,
                top: `${area.hotspot.top}%`,
                width: `${area.hotspot.width}%`,
                height: `${area.hotspot.height}%`,
                zIndex: hotspotLayers[area.id],
              }}
              onMouseEnter={() => setHovered(area.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(area.id)}
              onBlur={() => setHovered(null)}
              onClick={() => setSelected(area.id)}
            >
              <span
                className={`absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-warm-white/80 bg-rosegold/85 shadow-[0_0_0_7px_rgba(255,253,249,0.22),0_0_24px_rgba(182,120,109,0.5)] transition duration-300 group-hover:scale-125 group-hover:opacity-100 group-focus-visible:scale-125 group-focus-visible:opacity-100 ${
                  selected === area.id || hovered === area.id ? "scale-125 opacity-100" : "opacity-0"
                } ${area.id === "skin" ? "top-[28%]" : ""}`}
              />
              <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-warm-white/20 bg-charcoal/90 px-3 py-1.5 text-xs font-black text-warm-white opacity-0 shadow-soft backdrop-blur transition group-hover:opacity-100 group-focus-visible:opacity-100">
                {area.label}
              </span>
            </button>
          ))}
        </motion.div>

        <div className="relative z-10 mt-4 flex flex-wrap justify-center gap-2">
          {faceAreas.map((area) => (
            <button
              key={area.id}
              type="button"
              onClick={() => setSelected(area.id)}
              className={`focus-visible-ring rounded-full border px-3 py-2 text-xs font-black transition duration-300 ${
                selected === area.id
                  ? "border-charcoal bg-charcoal text-warm-white shadow-soft"
                  : "border-line bg-warm-white/76 text-mocha backdrop-blur hover:border-rosegold/45 hover:bg-blush-soft hover:text-charcoal"
              }`}
            >
              {area.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative min-h-[520px]">
        <AnimatePresence mode="wait">
          {selectedService && currentArea ? (
            <motion.article
              key={selectedService.slug}
              initial={{ opacity: 0, x: -28, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 22, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[34px] border border-rosegold/25 bg-warm-white p-6 shadow-luxury md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black text-rosegold">{currentArea.label}</p>
                  <h3 className="mt-2 text-3xl font-black leading-tight text-charcoal">{selectedService.title}</h3>
                </div>
                <button
                  type="button"
                  aria-label="إغلاق البطاقة"
                  onClick={() => setSelected(null)}
                  className="focus-visible-ring grid size-11 shrink-0 place-items-center rounded-full border border-line bg-ivory text-charcoal transition hover:bg-blush-soft"
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>

              <p className="mt-5 text-base leading-8 text-mocha">{selectedService.description}</p>

              <div className="mt-6 grid gap-4">
                <div className="rounded-[24px] bg-ivory p-5">
                  <p className="text-xs font-black text-rosegold">مناسب لمن؟</p>
                  <p className="mt-2 text-sm leading-7 text-charcoal">{selectedService.suitableFor}</p>
                </div>
                <div className="rounded-[24px] bg-sage-soft p-5">
                  <p className="text-xs font-black text-sage">النتيجة المتوقعة</p>
                  <p className="mt-2 text-sm leading-7 text-charcoal">{selectedService.expectedResult}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-line bg-warm-white p-5">
                    <p className="text-xs font-black text-rosegold">السعر التقريبي</p>
                    <p className="mt-2 text-lg font-black text-charcoal">{formatPriceRange(selectedService.priceRange)}</p>
                  </div>
                  <div className="rounded-[24px] border border-line bg-warm-white p-5">
                    <p className="text-xs font-black text-rosegold">مدة الجلسة</p>
                    <p className="mt-2 text-lg font-black text-charcoal">{selectedService.duration}</p>
                  </div>
                </div>
              </div>

              <p className="mt-5 rounded-2xl bg-blush-soft px-4 py-3 text-xs leading-6 text-mocha">
                السعر النهائي يعتمد على الاستشارة، الحالة، نوع المادة، وتوصية الطبيبة.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <PremiumButton href={`/booking?service=${selectedService.slug}`} icon={<CalendarDays className="size-4" aria-hidden="true" />}>
                  احجزي هذه الخدمة
                </PremiumButton>
                <PremiumButton type="button" variant="secondary" onClick={() => setSelected(null)}>
                  إلغاء التحديد
                </PremiumButton>
              </div>
            </motion.article>
          ) : (
            <motion.article
              key="intro"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="rounded-[34px] border border-line bg-warm-white/78 p-6 shadow-soft md:p-8"
            >
              <div className="mb-6 grid size-14 place-items-center rounded-full bg-charcoal text-blush">
                <MousePointer2 className="size-6" aria-hidden="true" />
              </div>
              <p className="text-sm font-black text-rosegold">استشارة وجه تفاعلية</p>
              <h3 className="mt-3 text-3xl font-black leading-tight text-charcoal">
                اختاري منطقة من الوجه لاكتشاف الإجراء الأنسب لها.
              </h3>
              <p className="mt-5 text-base leading-8 text-mocha">
                صُممت هذه التجربة كأداة استكشاف أولية تساعدك على فهم الخيارات، الأسعار التقريبية، وما يمكن توقعه قبل الاستشارة الطبية.
              </p>
              <div className="mt-7 grid gap-3">
                {["تفاعل فوري مع مناطق الوجه", "أسعار تقريبية بالدينار الأردني", "توجيه واضح نحو الحجز الآمن"].map((item) => (
                  <p key={item} className="flex items-center gap-3 rounded-2xl bg-ivory px-4 py-3 text-sm font-bold text-charcoal">
                    <CheckCircle2 className="size-5 text-sage" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
              <div className="mt-7 rounded-[26px] border border-rosegold/20 bg-blush-soft p-5">
                <div className="flex items-center gap-2 text-rosegold">
                  <Sparkles className="size-5" aria-hidden="true" />
                  <p className="text-sm font-black">الخطة النهائية بعد الاستشارة</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-mocha">
                  لا يتم اعتماد أي إجراء قبل تقييم طبي وفهم تاريخ البشرة والأهداف الشخصية.
                </p>
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
