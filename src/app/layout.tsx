import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { LoadingScreen } from "@/components/LoadingScreen";
import { FloatingContact } from "@/components/FloatingContact";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Premium Electric & Gasoline Mobility`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "VLT Motors",
    "Voltrop",
    "electric motorcycle Tunisia",
    "electric scooter Tunisia",
    "motorcycle dealership Tunisia",
    "cargo tricycle",
    "e-bike Tunisia",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_TN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Ride the Future. Drive with Confidence.`,
    description: site.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "VLT Motors premium mobility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Ride the Future`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = {
  themeColor: "#05070b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: site.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressCountry: "TN",
    },
    sameAs: Object.values(site.social),
  };

  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <LoadingScreen />
        <SmoothScroll>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
        <FloatingContact />
      </body>
    </html>
  );
}
