import Image from "next/image";
import { ArrowRight, BedDouble, Bath, DoorOpen, MapPin, Ruler } from "lucide-react";
import { getPropertyBySlug } from "@/data/properties";
import {
  formatPrice,
  propertyTypeLabel,
  propertyUrl,
  transactionLabel,
} from "@/lib/format";
import { buttonClassName } from "@/components/Button";
import { Section } from "@/components/Section";

/**
 * Section « Bien en vedette » : met en avant un bien d'exception avec un
 * traitement visuel premium (grande image, fond sombre, typographie large).
 */
export default function FeaturedProperty() {
  const property = getPropertyBySlug("villa-contemporaine-piscine-ecully");
  if (!property) return null;

  const location = property.district
    ? `${property.city}, ${property.district}`
    : property.city;

  return (
    <Section className="bg-coal">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative aspect-[4/3]">
            <Image
              src={property.images[0]}
              alt={`${propertyTypeLabel(property.propertyType)} ${property.title}`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute left-5 top-5 flex flex-wrap gap-2">
            {property.badges?.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-white shadow-md"
              >
                {badge}
              </span>
            ))}
          </div>
          <span className="absolute right-5 top-5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-800 shadow-md">
            {transactionLabel(property.transactionType)}
          </span>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            Bien en vedette
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {property.title}
          </h2>
          <p className="mt-3 inline-flex items-center gap-1.5 text-zinc-400">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {location}
          </p>

          <p className="mt-6 font-display text-4xl font-semibold tracking-tight text-gold-400">
            {formatPrice(property.price, property.transactionType)}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <dt className="text-sm text-zinc-500">Surface</dt>
              <dd className="mt-1 inline-flex items-center gap-1.5 text-lg font-semibold text-white">
                <Ruler className="h-4 w-4 text-gold-400" aria-hidden="true" />
                {property.surface} m²
              </dd>
            </div>
            <div>
              <dt className="text-sm text-zinc-500">Pièces</dt>
              <dd className="mt-1 inline-flex items-center gap-1.5 text-lg font-semibold text-white">
                <DoorOpen className="h-4 w-4 text-gold-400" aria-hidden="true" />
                {property.rooms}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-zinc-500">Chambres</dt>
              <dd className="mt-1 inline-flex items-center gap-1.5 text-lg font-semibold text-white">
                <BedDouble className="h-4 w-4 text-gold-400" aria-hidden="true" />
                {property.bedrooms}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-zinc-500">Salles de bain</dt>
              <dd className="mt-1 inline-flex items-center gap-1.5 text-lg font-semibold text-white">
                <Bath className="h-4 w-4 text-gold-400" aria-hidden="true" />
                {property.bathrooms ?? 1}
              </dd>
            </div>
          </dl>

          <p className="mt-8 leading-relaxed text-zinc-300">{property.description}</p>

          <a
            href={propertyUrl(property)}
            className={`${buttonClassName("light", "lg")} mt-8`}
          >
            Découvrir ce bien
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </Section>
  );
}