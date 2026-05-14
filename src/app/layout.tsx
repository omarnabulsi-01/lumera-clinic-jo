import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileBookingCta } from "@/components/mobile-booking-cta";
import { FloatingWhatsAppButton } from "@/components/whatsapp-button";
import { clinic } from "@/data/clinic";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(clinic.siteUrl),
  title: {
    default: `${clinic.brandName} | عيادة تجميل في عبدون`,
    template: `%s | ${clinic.brandName}`,
  },
  description:
    "عيادة تجميل وجه وبشرة فاخرة في Abdoun, Amman, Jordan تقدم الفيلر، البوتوكس، الليزر، الهيدرافيشل، واستشارات تجميل الوجه غير الجراحي.",
  keywords: clinic.keywords,
  applicationName: clinic.brandName,
  authors: [{ name: clinic.brandName }],
  creator: clinic.brandName,
  publisher: clinic.brandName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_JO",
    url: clinic.siteUrl,
    siteName: clinic.brandName,
    title: `${clinic.brandName} | عيادة تجميل في عبدون`,
    description:
      "تجربة عربية فاخرة لحجز واستكشاف خدمات تجميل الوجه غير الجراحي في Abdoun, Amman, Jordan.",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#b6786d",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar-JO" dir="rtl">
      <body>
        <a
          href="#main-content"
          className="focus-visible-ring fixed right-4 top-4 z-[100] -translate-y-24 rounded-full bg-charcoal px-5 py-3 text-sm font-bold text-warm-white transition focus:translate-y-0"
        >
          الانتقال إلى المحتوى
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
        <MobileBookingCta />
      </body>
    </html>
  );
}
