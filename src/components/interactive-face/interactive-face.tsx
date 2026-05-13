"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, CheckCircle2, MousePointer2, Sparkles, X } from "lucide-react";
import { useMemo, useState } from "react";
import { faceAreas, getFaceService, type FaceAreaId } from "@/data/services";
import { formatPriceRange } from "@/lib/utils";
import { PremiumButton } from "@/components/ui/premium-button";

const hotspotLayers: Record<FaceAreaId, number> = {
  skin: 3,
  cheeks: 7,
  jawline: 7,
  forehead: 9,
  underEyes: 10,
  eyebrows: 11,
  chin: 12,
  lips: 13,
  nose: 14,
};

function FaceHighlight({ area }: { area: FaceAreaId }) {
  const base = {
    initial: { opacity: 0, scale: 0.88 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.92 },
    transition: { duration: 0.35 },
  };

  switch (area) {
    case "nose":
      return <motion.path {...base} d="M209 212 C198 242 194 272 211 292 C226 270 223 239 214 212" fill="#f1a9a8" opacity="0.5" />;
    case "lips":
      return <motion.ellipse {...base} cx="210" cy="357" rx="50" ry="19" fill="#cf6d78" opacity="0.42" />;
    case "cheeks":
      return (
        <motion.g {...base}>
          <ellipse cx="139" cy="291" rx="48" ry="35" fill="#eaa7a1" opacity="0.38" />
          <ellipse cx="281" cy="291" rx="48" ry="35" fill="#eaa7a1" opacity="0.38" />
        </motion.g>
      );
    case "jawline":
      return <motion.path {...base} d="M112 337 C134 442 286 442 308 337" fill="none" stroke="#b6786d" strokeWidth="18" strokeLinecap="round" opacity="0.45" />;
    case "chin":
      return <motion.ellipse {...base} cx="210" cy="416" rx="43" ry="29" fill="#d58d83" opacity="0.36" />;
    case "forehead":
      return <motion.ellipse {...base} cx="210" cy="146" rx="86" ry="42" fill="#f0b8ae" opacity="0.33" />;
    case "underEyes":
      return (
        <motion.g {...base}>
          <ellipse cx="157" cy="239" rx="39" ry="14" fill="#b6786d" opacity="0.28" />
          <ellipse cx="263" cy="239" rx="39" ry="14" fill="#b6786d" opacity="0.28" />
        </motion.g>
      );
    case "eyebrows":
      return (
        <motion.g {...base} fill="none" stroke="#b6786d" strokeLinecap="round" strokeWidth="12" opacity="0.42">
          <path d="M125 197 C150 180 176 181 193 193" />
          <path d="M227 193 C246 181 275 181 297 197" />
        </motion.g>
      );
    case "skin":
      return <motion.ellipse {...base} cx="210" cy="278" rx="128" ry="206" fill="#f6d7d7" opacity="0.2" />;
  }
}

function FaceSvg({ activeArea }: { activeArea: FaceAreaId | null }) {
  return (
    <svg viewBox="0 0 420 560" role="img" aria-label="رسم تفاعلي أنيق للوجه" className="h-full w-full">
      <defs>
        <linearGradient id="skin" x1="115" x2="306" y1="70" y2="475" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff4ee" />
          <stop offset="0.48" stopColor="#f5c9bc" />
          <stop offset="1" stopColor="#df9d90" />
        </linearGradient>
        <linearGradient id="hair" x1="90" x2="333" y1="50" y2="498" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4c3834" />
          <stop offset="1" stopColor="#251b19" />
        </linearGradient>
        <linearGradient id="lip" x1="165" x2="255" y1="337" y2="379" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e69aa1" />
          <stop offset="1" stopColor="#a94f59" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="24" stdDeviation="22" floodColor="#6c4339" floodOpacity="0.18" />
        </filter>
      </defs>

      <path
        d="M94 273 C74 123 133 42 210 42 C287 42 346 123 326 273 C315 383 282 493 210 502 C138 493 105 383 94 273Z"
        fill="url(#hair)"
        opacity="0.96"
      />
      <path
        d="M107 252 C111 121 153 72 210 72 C267 72 309 121 313 252 C317 382 271 458 210 458 C149 458 103 382 107 252Z"
        fill="url(#skin)"
        filter="url(#softShadow)"
      />
      <path d="M120 245 C109 218 101 177 126 119 C146 74 187 61 210 62 C167 86 140 133 133 214 C128 271 129 347 151 403 C124 372 111 315 120 245Z" fill="#3b2b29" opacity="0.22" />
      <path d="M300 245 C311 218 319 177 294 119 C274 74 233 61 210 62 C253 86 280 133 287 214 C292 271 291 347 269 403 C296 372 309 315 300 245Z" fill="#3b2b29" opacity="0.22" />

      <AnimatePresence>{activeArea ? <FaceHighlight key={activeArea} area={activeArea} /> : null}</AnimatePresence>

      <ellipse cx="148" cy="285" rx="34" ry="22" fill="#df8b86" opacity="0.2" />
      <ellipse cx="272" cy="285" rx="34" ry="22" fill="#df8b86" opacity="0.2" />

      <path d="M124 197 C148 178 176 180 194 193" fill="none" stroke="#4c3834" strokeWidth="8" strokeLinecap="round" />
      <path d="M226 193 C245 180 274 178 298 197" fill="none" stroke="#4c3834" strokeWidth="8" strokeLinecap="round" />
      <path d="M135 229 C151 217 173 217 188 229" fill="none" stroke="#332423" strokeWidth="5" strokeLinecap="round" />
      <path d="M232 229 C249 217 271 217 286 229" fill="none" stroke="#332423" strokeWidth="5" strokeLinecap="round" />
      <circle cx="164" cy="227" r="5" fill="#2d201f" opacity="0.88" />
      <circle cx="256" cy="227" r="5" fill="#2d201f" opacity="0.88" />

      <path d="M209 213 C200 245 194 273 211 293 C226 272 221 244 214 213" fill="none" stroke="#b9786c" strokeWidth="5" strokeLinecap="round" opacity="0.58" />
      <path d="M192 304 C201 310 219 310 228 304" fill="none" stroke="#ad6b62" strokeWidth="4" strokeLinecap="round" opacity="0.45" />

      <path d="M164 352 C180 333 198 342 210 352 C222 342 241 333 256 352 C241 375 181 375 164 352Z" fill="url(#lip)" />
      <path d="M172 354 C191 363 229 363 248 354" fill="none" stroke="#7d333b" strokeWidth="3" strokeLinecap="round" opacity="0.45" />

      <path d="M139 381 C165 440 255 440 281 381" fill="none" stroke="#8d564d" strokeWidth="4" strokeLinecap="round" opacity="0.24" />
      <path d="M174 430 C195 446 226 446 246 430" fill="none" stroke="#8d564d" strokeWidth="4" strokeLinecap="round" opacity="0.2" />

      <path d="M117 111 C150 58 260 47 302 122 C283 93 248 83 210 85 C170 86 139 94 117 111Z" fill="#fffdf9" opacity="0.13" />
    </svg>
  );
}

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
      <div className="relative overflow-hidden rounded-[36px] border border-line bg-warm-white/72 p-4 shadow-luxury md:p-7">
        <div className="absolute inset-x-8 top-7 h-px bg-gradient-to-l from-transparent via-rosegold/45 to-transparent" />
        <motion.div
          className="relative mx-auto aspect-[3/4] max-h-[680px] max-w-[520px]"
          animate={{
            scale: currentArea ? 1.045 : 1,
            x: currentArea ? (50 - currentArea.focus.x) * 2.1 : 0,
            y: currentArea ? (50 - currentArea.focus.y) * 2.1 : 0,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          style={{
            transformOrigin: activeArea ? `${activeArea.focus.x}% ${activeArea.focus.y}%` : "50% 50%",
          }}
        >
          <FaceSvg activeArea={(selected ?? hovered) as FaceAreaId | null} />

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
                className={`absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-warm-white shadow-[0_0_0_6px_rgba(182,120,109,0.15)] ring-2 ring-rosegold/60 transition ${
                  selected === area.id || hovered === area.id ? "scale-125 opacity-100" : "opacity-75"
                } ${area.id === "skin" ? "top-[28%]" : ""}`}
              />
              <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-charcoal px-3 py-1.5 text-xs font-black text-warm-white opacity-0 shadow-soft transition group-hover:opacity-100 group-focus-visible:opacity-100">
                {area.label}
              </span>
            </button>
          ))}
        </motion.div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {faceAreas.map((area) => (
            <button
              key={area.id}
              type="button"
              onClick={() => setSelected(area.id)}
              className={`focus-visible-ring rounded-full px-3 py-2 text-xs font-black transition ${
                selected === area.id
                  ? "bg-charcoal text-warm-white"
                  : "bg-ivory text-mocha hover:bg-blush-soft hover:text-charcoal"
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
