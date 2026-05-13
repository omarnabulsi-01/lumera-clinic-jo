export type ServiceCategory =
  | "حقن تجميلي"
  | "نحت الوجه"
  | "نضارة البشرة"
  | "ليزر وعلاجات جلدية"
  | "استشارات";

export type FaceAreaId =
  | "nose"
  | "lips"
  | "cheeks"
  | "jawline"
  | "chin"
  | "forehead"
  | "underEyes"
  | "eyebrows"
  | "skin";

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  category: ServiceCategory;
  description: string;
  suitableFor: string;
  expectedResult: string;
  priceRange: readonly [number, number];
  duration: string;
  recovery: string;
  featured?: boolean;
  faceArea?: FaceAreaId;
};

export type FaceArea = {
  id: FaceAreaId;
  label: string;
  serviceSlug: string;
  focus: { x: number; y: number };
  hotspot: { left: number; top: number; width: number; height: number };
};

export const services: Service[] = [
  {
    slug: "non-surgical-nose-contouring",
    title: "تجميل الأنف غير الجراحي",
    eyebrow: "نحت دقيق دون جراحة",
    category: "حقن تجميلي",
    description:
      "إعادة توازن شكل الأنف بالفيلر بطريقة ناعمة ومدروسة لتحسين الجسر أو رفع الطرف أو تخفيف الانحناءات البسيطة.",
    suitableFor: "مناسب لمن ترغب بتحسينات بسيطة في شكل الأنف دون تدخل جراحي، بعد تقييم الطبيب.",
    expectedResult: "ملامح أكثر اتزانًا مع مظهر طبيعي، وتظهر النتيجة غالبًا مباشرة بعد الجلسة.",
    priceRange: [120, 280],
    duration: "٣٠ - ٤٥ دقيقة",
    recovery: "احمرار أو تورم بسيط ومؤقت",
    featured: true,
    faceArea: "nose",
  },
  {
    slug: "lip-filler",
    title: "فيلر الشفاه",
    eyebrow: "امتلاء أنيق",
    category: "حقن تجميلي",
    description:
      "تصميم شفاه متناغم مع ملامح الوجه، مع التركيز على الترطيب، الحدود الناعمة، والتوازن بدل المبالغة.",
    suitableFor: "مناسب لمن تبحث عن تحديد أو ترطيب أو زيادة حجم الشفاه بدرجة طبيعية.",
    expectedResult: "شفاه أكثر نعومة وتناسقًا مع احتفاظها بحركتها الطبيعية.",
    priceRange: [90, 220],
    duration: "٣٠ دقيقة",
    recovery: "تورم خفيف خلال الأيام الأولى",
    featured: true,
    faceArea: "lips",
  },
  {
    slug: "cheek-filler-face-contouring",
    title: "فيلر الخدود ونحت الوجه",
    eyebrow: "رفع وامتلاء",
    category: "نحت الوجه",
    description:
      "تعويض الحجم المفقود في الخدود ودعم منتصف الوجه لإبراز ملامح أكثر شبابًا وهدوءًا.",
    suitableFor: "مناسب لضعف امتلاء الخدود أو الهبوط الخفيف في منتصف الوجه.",
    expectedResult: "خدود أكثر تحديدًا ورفع بصري لطيف مع نتيجة متدرجة وطبيعية.",
    priceRange: [150, 350],
    duration: "٤٥ دقيقة",
    recovery: "كدمات بسيطة محتملة",
    featured: true,
    faceArea: "cheeks",
  },
  {
    slug: "jawline-contouring",
    title: "تحديد الفك",
    eyebrow: "خط وجه واضح",
    category: "نحت الوجه",
    description:
      "تعزيز خط الفك بالفيلر أو الخطة المناسبة للحالة لإضافة تعريف أنيق للوجه من دون قسوة.",
    suitableFor: "مناسب لمن ترغب بإبراز حدود الفك أو تحسين التناسق بين الوجه والرقبة.",
    expectedResult: "مظهر أكثر تحديدًا للجزء السفلي من الوجه مع توازن جانبي أفضل.",
    priceRange: [180, 420],
    duration: "٤٥ - ٦٠ دقيقة",
    recovery: "تورم خفيف خلال ٢٤ - ٧٢ ساعة",
    featured: true,
    faceArea: "jawline",
  },
  {
    slug: "chin-enhancement",
    title: "تحسين الذقن",
    eyebrow: "توازن البروفايل",
    category: "نحت الوجه",
    description:
      "تحسين بروز الذقن أو شكله بالفيلر لدعم تناسق الملامح الأمامية والجانبية.",
    suitableFor: "مناسب للذقن القصير أو التراجع الخفيف في البروفايل بعد الاستشارة.",
    expectedResult: "ملامح أكثر انسجامًا مع تحسين واضح في توازن الثلث السفلي من الوجه.",
    priceRange: [120, 280],
    duration: "٣٠ - ٤٥ دقيقة",
    recovery: "انزعاج بسيط أو تورم مؤقت",
    faceArea: "chin",
  },
  {
    slug: "forehead-botox",
    title: "بوتوكس الجبهة",
    eyebrow: "نعومة التعبيرات",
    category: "حقن تجميلي",
    description:
      "تخفيف خطوط الجبهة الحركية بجرعات مدروسة تحافظ على تعبيرات الوجه الطبيعية.",
    suitableFor: "مناسب لخطوط الجبهة التي تظهر مع رفع الحاجبين أو التعب.",
    expectedResult: "جبهة أكثر نعومة تدريجيًا خلال أيام مع مظهر هادئ وغير جامد.",
    priceRange: [80, 180],
    duration: "٢٠ - ٣٠ دقيقة",
    recovery: "لا يحتاج عادة إلى توقف",
    faceArea: "forehead",
  },
  {
    slug: "frown-lines-botox",
    title: "بوتوكس خطوط العبوس",
    eyebrow: "نظرة أكثر ارتياحًا",
    category: "حقن تجميلي",
    description:
      "تقليل خطوط العبوس بين الحاجبين لإعطاء انطباع أهدأ وأكثر راحة دون تغيير ملامحك.",
    suitableFor: "مناسب لمن تظهر لديها خطوط بين الحاجبين عند التركيز أو الانزعاج.",
    expectedResult: "تخفيف تدريجي للانقباضات مع تعابير أكثر نعومة.",
    priceRange: [80, 180],
    duration: "٢٠ - ٣٠ دقيقة",
    recovery: "عودة سريعة للروتين اليومي",
  },
  {
    slug: "under-eye-treatment",
    title: "علاج الهالات وتحت العين",
    eyebrow: "إشراقة رقيقة",
    category: "نضارة البشرة",
    description:
      "خطة مخصصة لمنطقة تحت العين قد تشمل ترطيبًا عميقًا أو علاجات نضارة حسب سبب الهالات والتجويف.",
    suitableFor: "مناسب للهالات الخفيفة، الجفاف، أو مظهر التعب حول العين بعد تقييم دقيق.",
    expectedResult: "مظهر أكثر انتعاشًا ونعومة مع تحسن تدريجي حسب العلاج المختار.",
    priceRange: [120, 300],
    duration: "٣٠ - ٤٥ دقيقة",
    recovery: "تورم بسيط محتمل في المنطقة الحساسة",
    featured: true,
    faceArea: "underEyes",
  },
  {
    slug: "eyebrow-lifting",
    title: "رفع الحواجب",
    eyebrow: "عين مفتوحة بهدوء",
    category: "حقن تجميلي",
    description:
      "رفع لطيف للحاجب باستخدام تقنيات حقن دقيقة لإبراز العين دون مظهر مصطنع.",
    suitableFor: "مناسب لهبوط بسيط في الحاجب أو الرغبة بإطلالة أكثر انتعاشًا.",
    expectedResult: "فتح ناعم لمنطقة العين مع تحسن تدريجي خلال أيام.",
    priceRange: [90, 220],
    duration: "٢٠ - ٣٠ دقيقة",
    recovery: "لا يحتاج عادة إلى توقف",
    faceArea: "eyebrows",
  },
  {
    slug: "skin-booster-glow",
    title: "سكين بوستر ونضارة البشرة",
    eyebrow: "ترطيب مضيء",
    category: "نضارة البشرة",
    description:
      "حقن ترطيب عميق لتحسين ملمس البشرة ومرونتها وإشراقتها من الداخل.",
    suitableFor: "مناسب للبشرة الباهتة أو الجافة أو التي تحتاج نضارة قبل مناسبة.",
    expectedResult: "تحسن تدريجي في اللمعان الصحي والملمس مع مظهر أكثر امتلاء.",
    priceRange: [100, 260],
    duration: "٣٠ - ٤٥ دقيقة",
    recovery: "نقاط احمرار صغيرة قد تختفي سريعًا",
    featured: true,
    faceArea: "skin",
  },
  {
    slug: "facial-mesotherapy",
    title: "ميزوثيرابي للوجه",
    eyebrow: "فيتامينات للبشرة",
    category: "نضارة البشرة",
    description:
      "مزيج من العناصر الداعمة للبشرة يحقن سطحيًا للمساعدة في تحسين الحيوية والملمس.",
    suitableFor: "مناسب للبشرة المرهقة أو الباهتة ضمن خطة جلسات متدرجة.",
    expectedResult: "نضارة أخف وملمس ألطف مع الالتزام بالخطة المقترحة.",
    priceRange: [60, 160],
    duration: "٣٠ دقيقة",
    recovery: "احمرار خفيف مؤقت",
  },
  {
    slug: "prp-facial",
    title: "بلازما الوجه PRP",
    eyebrow: "تجديد ذاتي",
    category: "نضارة البشرة",
    description:
      "استخدام البلازما الغنية بالصفائح من دم العميلة لدعم تجدد البشرة وتحسين إشراقتها.",
    suitableFor: "مناسب لتحسين النضارة والملمس ضمن تقييم طبي مناسب.",
    expectedResult: "تحسن تدريجي وطبيعي في الحيوية والنعومة خلال الأسابيع التالية.",
    priceRange: [80, 180],
    duration: "٤٥ - ٦٠ دقيقة",
    recovery: "احمرار بسيط في يوم الجلسة",
  },
  {
    slug: "chemical-peeling",
    title: "التقشير الكيميائي",
    eyebrow: "ملمس متجدد",
    category: "ليزر وعلاجات جلدية",
    description:
      "تقشير طبي بدرجات مختلفة لتحسين البهتان، المسام، وآثار التصبغ السطحية بحسب نوع البشرة.",
    suitableFor: "مناسب لبعض حالات التصبغ والملمس غير المنتظم بعد تقييم الحساسية ونوع البشرة.",
    expectedResult: "بشرة أكثر صفاءً تدريجيًا مع الالتزام بتعليمات الحماية من الشمس.",
    priceRange: [50, 150],
    duration: "٣٠ دقيقة",
    recovery: "تقشر أو جفاف مؤقت حسب نوع التقشير",
  },
  {
    slug: "hydrafacial-deep-cleaning",
    title: "تنظيف البشرة العميق والهيدرافيشل",
    eyebrow: "نقاء فوري",
    category: "نضارة البشرة",
    description:
      "جلسة تنظيف وترطيب عميق تساعد على إزالة الشوائب وتحسين إشراقة البشرة دون قسوة.",
    suitableFor: "مناسب لمعظم أنواع البشرة، خاصة قبل المناسبات أو كروتين شهري.",
    expectedResult: "إحساس بالنظافة والانتعاش مع لمعان صحي واضح بعد الجلسة.",
    priceRange: [40, 120],
    duration: "٤٥ - ٦٠ دقيقة",
    recovery: "لا يحتاج إلى توقف غالبًا",
    featured: true,
  },
  {
    slug: "laser-facial-rejuvenation",
    title: "تجديد البشرة بالليزر",
    eyebrow: "تقنيات متقدمة",
    category: "ليزر وعلاجات جلدية",
    description:
      "جلسات ليزر مختارة بعناية لتحسين مظهر البشرة والملمس وعلامات الإرهاق وفق نوع البشرة.",
    suitableFor: "مناسب لمن تحتاج خطة تقنية لتحسين الملمس أو النضارة بعد فحص طبي.",
    expectedResult: "تحسن تدريجي في صفاء البشرة وملمسها عبر جلسات متتابعة.",
    priceRange: [150, 450],
    duration: "٤٥ - ٧٥ دقيقة",
    recovery: "احمرار أو حساسية مؤقتة بحسب الجهاز",
  },
  {
    slug: "acne-scar-treatment",
    title: "علاج آثار حب الشباب",
    eyebrow: "خطة ترميم",
    category: "ليزر وعلاجات جلدية",
    description:
      "خطة علاجية تجمع بين التقنيات المناسبة لتحسين الندبات والملمس على مراحل واقعية.",
    suitableFor: "مناسب لآثار حب الشباب والندبات السطحية إلى المتوسطة بعد التشخيص.",
    expectedResult: "تحسن تدريجي في الملمس والمظهر العام، وتختلف الاستجابة حسب عمق الندبات.",
    priceRange: [120, 400],
    duration: "٤٥ - ٩٠ دقيقة",
    recovery: "تعليمات عناية خاصة بعد الجلسة",
  },
  {
    slug: "pigmentation-treatment",
    title: "علاج التصبغات والكلف",
    eyebrow: "توازن اللون",
    category: "ليزر وعلاجات جلدية",
    description:
      "برنامج مخصص للتصبغات والكلف يعتمد على التشخيص، العناية المنزلية، والتقنيات المناسبة بأمان.",
    suitableFor: "مناسب للتصبغات غير المتساوية أو الكلف بعد تحديد السبب ونوع البشرة.",
    expectedResult: "تحسن تدريجي في توحيد اللون مع ضرورة الالتزام بالواقي والعناية.",
    priceRange: [90, 300],
    duration: "٣٠ - ٦٠ دقيقة",
    recovery: "حسب العلاج المختار",
  },
  {
    slug: "full-face-consultation",
    title: "استشارة تجميل الوجه الكاملة",
    eyebrow: "خطة شخصية",
    category: "استشارات",
    description:
      "جلسة تحليل ملامح وبشرة لبناء خطة آمنة ومتدرجة تناسب أهدافك وميزانيتك دون مبالغة.",
    suitableFor: "مناسبة قبل أي إجراء أو لمن ترغب بفهم الخيارات المناسبة لوجهها.",
    expectedResult: "خطة علاج واضحة، أولويات واقعية، وتقدير تكلفة مبدئي قبل اتخاذ القرار.",
    priceRange: [20, 50],
    duration: "٣٠ - ٤٥ دقيقة",
    recovery: "لا يوجد",
    featured: true,
  },
];

export const faceAreas: FaceArea[] = [
  {
    id: "nose",
    label: "الأنف",
    serviceSlug: "non-surgical-nose-contouring",
    focus: { x: 50, y: 47 },
    hotspot: { left: 44, top: 36, width: 12, height: 19 },
  },
  {
    id: "lips",
    label: "الشفاه",
    serviceSlug: "lip-filler",
    focus: { x: 50, y: 65 },
    hotspot: { left: 39, top: 59, width: 22, height: 10 },
  },
  {
    id: "cheeks",
    label: "الخدود",
    serviceSlug: "cheek-filler-face-contouring",
    focus: { x: 50, y: 53 },
    hotspot: { left: 24, top: 47, width: 52, height: 13 },
  },
  {
    id: "jawline",
    label: "الفك",
    serviceSlug: "jawline-contouring",
    focus: { x: 50, y: 77 },
    hotspot: { left: 24, top: 70, width: 52, height: 13 },
  },
  {
    id: "chin",
    label: "الذقن",
    serviceSlug: "chin-enhancement",
    focus: { x: 50, y: 77 },
    hotspot: { left: 42, top: 72, width: 16, height: 12 },
  },
  {
    id: "forehead",
    label: "الجبهة",
    serviceSlug: "forehead-botox",
    focus: { x: 50, y: 25 },
    hotspot: { left: 34, top: 18, width: 32, height: 15 },
  },
  {
    id: "underEyes",
    label: "تحت العين",
    serviceSlug: "under-eye-treatment",
    focus: { x: 50, y: 42 },
    hotspot: { left: 29, top: 39, width: 42, height: 9 },
  },
  {
    id: "eyebrows",
    label: "الحواجب",
    serviceSlug: "eyebrow-lifting",
    focus: { x: 50, y: 35 },
    hotspot: { left: 28, top: 31, width: 44, height: 8 },
  },
  {
    id: "skin",
    label: "نضارة الوجه",
    serviceSlug: "skin-booster-glow",
    focus: { x: 50, y: 50 },
    hotspot: { left: 30, top: 24, width: 40, height: 51 },
  },
];

export const serviceCategories = Array.from(new Set(services.map((service) => service.category)));

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getFaceService(area: FaceArea) {
  const service = getServiceBySlug(area.serviceSlug);

  if (!service) {
    throw new Error(`Missing service for face area: ${area.id}`);
  }

  return service;
}
