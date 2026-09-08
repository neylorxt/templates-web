import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
    default: `${siteConfig.name} — ${siteConfig.profession} | ${siteConfig.contact.city}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.shortDescription,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.profession}`,
    description: siteConfig.shortDescription,
    images: [
      {
        url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

function structuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.baseUrl}/#person`,
        name: siteConfig.name,
        jobTitle: siteConfig.profession,
        telephone: `+${siteConfig.contact.phone}`,
        email: siteConfig.contact.email,
        url: siteConfig.baseUrl,
        sameAs: Object.values(siteConfig.socials).map((s) => s.href),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.baseUrl}/#organisation`,
        name: siteConfig.name,
        description: siteConfig.shortDescription,
        url: siteConfig.baseUrl,
        telephone: `+${siteConfig.contact.phone}`,
        email: siteConfig.contact.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.contact.city,
          addressCountry: "FR",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "100",
        },
        founder: { "@id": `${siteConfig.baseUrl}/#person` },
      },
    ],
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">
        <a
          href="#accueil"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Aller au contenu
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}