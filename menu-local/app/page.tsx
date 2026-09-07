import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { OpeningHours } from "@/components/OpeningHours";
import { Location } from "@/components/Location";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { openingHours, siteConfig } from "@/config/site";

const dayMap: Record<string, string> = {
  Lundi: "Monday",
  Mardi: "Tuesday",
  Mercredi: "Wednesday",
  Jeudi: "Thursday",
  Vendredi: "Friday",
  Samedi: "Saturday",
  Dimanche: "Sunday",
};

const openingHoursSpecification = openingHours
  .filter((day) => day.open && day.close)
  .map((day) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [dayMap[day.day]],
    opens: `${day.open}:00`,
    closes: `${day.close}:00`,
  }));

const jsonLd = {
  "@context": "https://schema.org",
  "@type": siteConfig.type,
  name: siteConfig.name,
  slogan: siteConfig.slogan,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "€€",
  servesCuisine: "Cuisine française de bistrot",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressLocality: "Lyon",
    postalCode: "69002",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.gps.lat,
    longitude: siteConfig.gps.lng,
  },
  openingHoursSpecification,
  sameAs: [siteConfig.instagram, siteConfig.facebook],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.rating.average,
    reviewCount: siteConfig.rating.count,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Menu />
        <FeaturedProduct />
        <Gallery />
        <Testimonials />
        <OpeningHours />
        <Location />
        <Cta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}