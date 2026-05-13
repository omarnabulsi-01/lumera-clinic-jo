export type Doctor = {
  name: string;
  specialty: string;
  experience: string;
  bio: string;
  treatments: string[];
  availability: string;
  tone: "rose" | "sage" | "pearl" | "gold";
};

export const doctors: Doctor[] = [
  {
    name: "د. ليان الحوراني",
    specialty: "طبيبة جلدية وتجميل",
    experience: "١٢ سنة خبرة",
    bio: "تجمع بين التقييم الطبي الدقيق واللمسة الجمالية الهادئة لبناء نتائج متوازنة وغير مبالغ بها.",
    treatments: ["الفيلر", "البوتوكس", "خطة الوجه الكاملة"],
    availability: "متاحة للاستشارات اليومية",
    tone: "rose",
  },
  {
    name: "أ. ميرا الخطيب",
    specialty: "أخصائية حقن تجميلي",
    experience: "٨ سنوات خبرة",
    bio: "تركز على تناسق الملامح وتصميم الشفاه والخدود والفك بأسلوب يحافظ على شخصية الوجه.",
    treatments: ["فيلر الشفاه", "تحديد الفك", "تحسين الذقن"],
    availability: "متاحة صباحًا ومساءً",
    tone: "gold",
  },
  {
    name: "أ. سارة النجار",
    specialty: "أخصائية بشرة وليزر",
    experience: "٩ سنوات خبرة",
    bio: "تصمم برامج علاجية للبشرة الحساسة والتصبغات وآثار حب الشباب مع متابعة دقيقة للنتائج.",
    treatments: ["ليزر البشرة", "التقشير", "الهيدرافيشل"],
    availability: "متاحة طوال الأسبوع",
    tone: "sage",
  },
  {
    name: "رنا منصور",
    specialty: "مستشارة تجميل الوجه",
    experience: "٦ سنوات خبرة",
    bio: "تساعد العميلات على فهم الخيارات المناسبة، الأولويات، والتكلفة المتوقعة قبل أي إجراء.",
    treatments: ["استشارة الوجه", "تخطيط الجلسات", "متابعة ما بعد العلاج"],
    availability: "متاحة للحجز المسبق",
    tone: "pearl",
  },
];
