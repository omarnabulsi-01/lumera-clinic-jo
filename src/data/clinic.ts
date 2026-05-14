export const clinic = {
  brandName: "لوميرا كلينك",
  brandDescriptor: "عيادة تجميل الوجه والبشرة",
  city: "Abdoun, Amman, Jordan",
  address: "Abdoun, Amman, Jordan",
  phone: "+962 7 9101 0766",
  phoneHref: "tel:+962791010766",
  email: "lumeraclinic@outlook.com",
  emailHref: "mailto:lumeraclinic@outlook.com",
  whatsappNumber: "+962791010766",
  whatsappUrl: "https://wa.me/962791010766",
  mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Abdoun%2C%20Amman%2C%20Jordan",
  mapsEmbedUrl: "https://www.google.com/maps?q=Abdoun%2C%20Amman%2C%20Jordan&output=embed",
  mapNote: "الموقع تقريبي حاليًا وسيتم تحديثه عند اعتماد العنوان الرسمي للعيادة.",
  workingHours: "24 Hours / 7 Days a Week",
  timezone: "Jordan Time",
  siteUrl: "https://lumera-clinic.vercel.app",
  keywords: [
    "عيادة تجميل في عمان",
    "عيادة تجميل في عبدون",
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
