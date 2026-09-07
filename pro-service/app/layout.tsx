import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company } from "@/data/company";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} | ${company.slogan}`,
    template: `%s | ${company.name}`,
  },
  description: company.heroSubtitle,
  applicationName: company.name,
  metadataBase: new URL("https://www.proservice.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: company.name,
    title: `${company.name} | ${company.slogan}`,
    description: company.heroSubtitle,
    url: "https://www.proservice.fr",
    images: [
      {
        url: company.heroImage.src,
        width: 960,
        height: 1080,
        alt: company.heroImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | ${company.slogan}`,
    description: company.heroSubtitle,
    images: [company.heroImage.src],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.legalName,
  description: company.heroSubtitle,
  url: "https://www.proservice.fr",
  telephone: `+33 ${company.phone.replace(/\s/g, "")}`,
  email: company.email,
  priceRange: "€€",
  image: company.heroImage.src,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address,
    postalCode: company.postalCode,
    addressLocality: company.city,
    addressRegion: company.region,
    addressCountry: company.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: company.geo.lat,
    longitude: company.geo.lng,
  },
  openingHours: "Mo-Fr 08:00-18:00",
  areaServed: company.serviceAreas,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: company.ratingAverage,
    reviewCount: company.ratingCount,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}