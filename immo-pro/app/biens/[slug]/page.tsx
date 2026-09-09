import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Bath,
  BedDouble,
  CalendarCheck,
  Check,
  DoorOpen,
  KeyRound,
  MapPin,
  Phone,
  Ruler,
  Tag,
} from "lucide-react";
import { properties, getPropertyBySlug } from "@/data/properties";
import { siteConfig, mailLink, telLink, whatsappLink } from "@/config/site";
import {
  formatPrice,
  propertyTypeLabel,
  propertyWhatsappMessage,
  transactionLabel,
} from "@/lib/format";
import PropertyGallery from "@/components/PropertyGallery";
import PropertyGrid from "@/components/PropertyGrid";
import ShareButton from "@/components/ShareButton";
import { Section } from "@/components/Section";
import { WhatsAppIcon } from "@/components/icons";

type PropertyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return { title: "Bien introuvable" };
  }

  const title = `${property.title} | ImmoPro`;
  const description = `${propertyTypeLabel(
    property.propertyType
  )} ${transactionLabel(property.transactionType).toLowerCase()} à ${
    property.city
  } — ${formatPrice(property.price, property.transactionType)}. ${
    property.title
  }.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/biens/${property.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: property.images[0] }],
    },
  };
}

export default async function PropertyDetailPage({
  params,
}: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const location = property.district
    ? `${property.city}, ${property.district}`
    : property.city;
  const pageUrl = `${siteConfig.baseUrl}/biens/${property.slug}`;

  const offerJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: property.title,
    description: property.description,
    image: property.images,
    category: `${transactionLabel(property.transactionType)} · ${propertyTypeLabel(
      property.propertyType
    )}`,
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "EUR",
      url: pageUrl,
      availability: "https://schema.org/InStock",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: property.city,
      addressCountry: "FR",
    },
    brand: { "@type": "Organization", name: siteConfig.name },
  };

  const characteristics = [
    { icon: Ruler, label: "Surface", value: `${property.surface} m²` },
    ...(property.rooms > 0
      ? [
          {
            icon: DoorOpen,
            label: "Pièces",
            value: `${property.rooms} pièce${property.rooms > 1 ? "s" : ""}`,
          },
        ]
      : []),
    ...(property.bedrooms > 0
      ? [
          {
            icon: BedDouble,
            label: "Chambres",
            value: `${property.bedrooms} chambre${property.bedrooms > 1 ? "s" : ""}`,
          },
        ]
      : []),
    ...(property.bathrooms
      ? [
          {
            icon: Bath,
            label: "Salles de bain",
            value: `${property.bathrooms}`,
          },
        ]
      : []),
    {
      icon: KeyRound,
      label: "Type de bien",
      value: propertyTypeLabel(property.propertyType),
    },
    {
      icon: Tag,
      label: "Transaction",
      value: transactionLabel(property.transactionType),
    },
  ];

  const relatedProperties = properties
    .filter((item) => item.id !== property.id)
    .slice(0, 3);

  return (
    <>
      <Section className="pb-0 pt-8">
        <Link
          href="/biens"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Tous les biens
        </Link>

        <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  property.transactionType === "vente"
                    ? "bg-brand-700 text-white"
                    : "bg-gold-500 text-white"
                }`}
              >
                {transactionLabel(property.transactionType)}
              </span>
              {property.badges?.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-600"
                >
                  {badge}
                </span>
              ))}
            </div>
            <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {property.title}
            </h1>
            <p className="mt-3 inline-flex items-center gap-1.5 text-zinc-500">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {location}
            </p>
          </div>
          <div className="shrink-0">
            <p className="font-display text-4xl font-semibold tracking-tight text-brand-800">
              {formatPrice(property.price, property.transactionType)}
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <PropertyGallery images={property.images} title={property.title} />

            <div className="mt-10">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Description
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-600">
                {property.description}
              </p>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Caractéristiques du bien
              </h2>
              <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {characteristics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-zinc-200 bg-white p-4"
                  >
                    <item.icon className="h-5 w-5 text-brand-700" aria-hidden="true" />
                    <dt className="mt-3 text-xs font-medium text-zinc-500">
                      {item.label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold text-zinc-900">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {property.amenities?.length ? (
              <div className="mt-10">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  Équipements
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {property.amenities.map((amenity) => (
                    <li
                      key={amenity}
                      className="inline-flex items-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-800"
                    >
                      <Check className="h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {property.complementaryInfo?.length ? (
              <div className="mt-10">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  Informations complémentaires
                </h2>
                <dl className="mt-5 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
                  {property.complementaryInfo.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-4 px-5 py-3.5"
                    >
                      <dt className="text-sm text-zinc-500">{item.label}</dt>
                      <dd className="text-sm font-semibold text-zinc-900">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-5">
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <h2 className="font-display text-xl font-semibold text-ink">
                  Intéressé par ce bien ?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Contactez-nous pour organiser une visite ou obtenir plus
                  d&apos;informations. Réponse sous 24 h ouvrées.
                </p>
                <div className="mt-6 space-y-3">
                  <a
                    href={mailLink(
                      `Demande de visite — ${property.title}`,
                      `Bonjour,\n\nJe souhaiterais organiser une visite pour le bien : ${property.title} (${location}).\n\nMerci d'avance.`
                    )}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
                  >
                    <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                    Demander une visite
                  </a>
                  <a
                    href={whatsappLink(propertyWhatsappMessage(property))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25d366] px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Contacter sur WhatsApp
                  </a>
                  <a
                    href={telLink()}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 transition-colors hover:border-zinc-300"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Appeler l&apos;agence
                  </a>
                </div>
                <div className="mt-6 border-t border-zinc-100 pt-5">
                  <ShareButton title={property.title} />
                </div>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-cream p-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={siteConfig.agent.photo}
                    alt={siteConfig.agent.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      {siteConfig.agent.name}
                    </p>
                    <p className="text-xs text-zinc-500">{siteConfig.agent.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                  Conseillère dédiée à votre secteur, elle vous accompagne de la
                  première visite à la signature.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {relatedProperties.length > 0 ? (
        <Section className="bg-cream">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              D&apos;autres biens à découvrir
            </h2>
            <Link
              href="/biens"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
            >
              Tous les biens
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8">
            <PropertyGrid properties={relatedProperties} />
          </div>
        </Section>
      ) : null}

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white/95 p-3 backdrop-blur lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
          <a
            href={telLink()}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-3 text-xs font-semibold text-zinc-900"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Appeler
          </a>
          <a
            href={whatsappLink(propertyWhatsappMessage(property))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#25d366] px-3 py-3 text-xs font-semibold text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={mailLink(
              `Demande de visite — ${property.title}`,
              `Bonjour,\n\nJe souhaiterais organiser une visite pour le bien : ${property.title} (${location}).`
            )}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-700 px-3 py-3 text-xs font-semibold text-white"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Visite
          </a>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerJsonLd) }}
      />
    </>
  );
}