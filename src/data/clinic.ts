export const clinic = {
  brandName: "لوميرا كلينك",
  brandDescriptor: "عيادة تجميل الوجه والبشرة",
  city: "عمّان، الأردن",
  phone: "+962 7 9000 0000",
  email: "contact@aestheticclinic.jo",
  workingHours: "٢٤ ساعة / ٧ أيام في الأسبوع",
  timezone: "توقيت الأردن",
  siteUrl: "https://lumera-clinic.vercel.app",
  keywords: [
    "عيادة تجميل في عمان",
    "فيلر وبوتوكس الأردن",
    "تجميل الوجه غير الجراحي",
    "عيادة بشرة وليزر عمان",
    "لوميرا كلينك",
  ],
};

export const navigation = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "/about" },
  { label: "الخدمات", href: "/services" },
  { label: "تجربة الوجه", href: "/face-consultation" },
  { label: "الأطباء", href: "/doctors" },
  { label: "المعرض", href: "/gallery" },
  { label: "الأسئلة", href: "/faq" },
  { label: "تواصل", href: "/contact" },
] satisfies { label: string; href: string }[];

export const legalNotes = [
  "النتائج تختلف من شخص لآخر بحسب طبيعة البشرة والخطة العلاجية.",
  "الأسعار تقريبية وتحدد بعد الاستشارة وتقييم الحالة ونوع المادة المستخدمة.",
  "بعض الإجراءات تحتاج تقييمًا طبيًا قبل البدء.",
  "في الحالات الطارئة يجب مراجعة مركز طبي مختص فورًا.",
];
