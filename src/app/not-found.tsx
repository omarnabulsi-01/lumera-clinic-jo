import { Sparkles } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";

export default function NotFound() {
  return (
    <section className="luxury-container flex min-h-[70vh] items-center justify-center py-20 text-center">
      <div className="max-w-2xl rounded-[36px] border border-line bg-warm-white p-8 shadow-luxury md:p-12">
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-blush-soft text-rosegold">
          <Sparkles className="size-7" aria-hidden="true" />
        </div>
        <h1 className="mt-6 text-4xl font-black text-charcoal">الصفحة غير موجودة</h1>
        <p className="mt-4 text-base leading-8 text-mocha">
          يبدو أن الرابط غير صحيح أو تم نقله. يمكنك العودة للرئيسية أو استعراض الخدمات.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <PremiumButton href="/">العودة للرئيسية</PremiumButton>
          <PremiumButton href="/services" variant="secondary">عرض الخدمات</PremiumButton>
        </div>
      </div>
    </section>
  );
}
