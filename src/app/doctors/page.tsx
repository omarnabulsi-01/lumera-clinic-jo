import type { Metadata } from "next";
import { DoctorCard } from "@/components/doctor-card";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { doctors } from "@/data/doctors";

export const metadata: Metadata = {
  title: "الأطباء والمتخصصون",
  description: "تعرفي على فريق لوميرا كلينك لخدمات الجلدية، الحقن التجميلي، البشرة والليزر.",
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="الفريق المتخصص"
        title="خبرات متعددة لرؤية واحدة: نتيجة طبيعية وآمنة."
        description="ملفات الفريق توضح التخصص، الخبرة، العلاجات الأساسية، وأوقات التوفر للحجز."
      />
      <section className="luxury-container py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <Reveal key={doctor.name}>
              <DoctorCard doctor={doctor} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
