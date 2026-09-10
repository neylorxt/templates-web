import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import { practitioners } from "@/data/practitioners";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileActionBar from "@/components/MobileActionBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.profession} à ${siteConfig.contact.city}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "cabinet médical",
    "professionnel de santé",
    "dentiste",
    "kinésithérapeute",
    "psychologue",
    "nutritionniste",
    "ostéopathe",
    siteConfig.contact.city,
  ],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.profession}`,
    description: siteConfig.description,
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "website",
    images: [{ url: siteConfig.images.hero }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.profession}`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
};

const DAY_SCHEMA: Record<number, string> = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": siteConfig.schemaType,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.baseUrl,
  telephone: `+${siteConfig.contact.phone}`,
  email: siteConfig.contact.email,
  image: siteConfig.images.hero,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address,
    postalCode: siteConfig.contact.postalCode,
    addressLocality: siteConfig.contact.city,
    addressRegion: siteConfig.contact.region,
    addressCountry: siteConfig.contact.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.coordinates.lat,
    longitude: siteConfig.coordinates.lng,
  },
  openingHoursSpecification: siteConfig.hours
    .filter((day) => day.slots.length > 0)
    .flatMap((day) =>
      day.slots.map((slot) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${DAY_SCHEMA[day.weekday]}`,
        opens: slot.open,
        closes: slot.close,
      }))
    ),
  employee: practitioners.map((practitioner) => ({
    "@type": "Person",
    name: practitioner.name,
    jobTitle: practitioner.profession,
    image: practitioner.image,
  })),
  sameAs: Object.values(siteConfig.socials).map((social) => social.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-700 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileActionBar />
        <div className="h-[68px] lg:hidden" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}