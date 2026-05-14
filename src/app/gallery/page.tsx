import type { Metadata } from "next";
import { BeforeAfterGallery } from "@/components/before-after-gallery";
import { PageHero } from "@/components/page-hero";
import { SafetyNotes } from "@/components/safety-notes";

export const metadata: Metadata = {
  title: "معرض قبل وبعد",
  description: "معرض نماذج توضيحية فاخرة قبل وبعد دون استخدام صور مرضى حقيقية أو الإيحاء بنتائج طبية.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="قبل وبعد"
        title="معرض احترافي يحترم الخصوصية أولًا."
        description="لا نستخدم صور مرضى حقيقية هنا. المعروض نماذج mockups فاخرة لفئات العناية، وليست نتائج طبية أو وعودًا بتحول محدد."
      />
      <section className="luxury-container py-20 md:py-28">
        <BeforeAfterGallery />
      </section>
      <SafetyNotes />
    </>
  );
}
