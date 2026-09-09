import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, DoorOpen, MapPin, Ruler } from "lucide-react";
import type { Property } from "@/data/properties";
import {
  formatPrice,
  propertyTypeLabel,
  propertyUrl,
  transactionLabel,
} from "@/lib/format";

const badgeStyles: Record<string, string> = {
  Nouveau: "bg-brand-700 text-white",
  Exclusivité: "bg-gold-500 text-white",
  "Coup de cœur": "bg-gold-500 text-white",
  Rare: "bg-gold-500 text-white",
  Investissement: "bg-brand-700 text-white",
};

function badgeClass(badge: string): string {
  return (
    badgeStyles[badge] ??
    "bg-zinc-900/80 text-white backdrop-blur-sm"
  );
}

type PropertyCardProps = {
  property: Property;
};

export default function PropertyCard({ property }: PropertyCardProps) {
  const location = property.district
    ? `${property.city}, ${property.district}`
    : property.city;

  return (
    <Link
      href={propertyUrl(property)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.images[0]}
          alt={`${propertyTypeLabel(property.propertyType)} ${property.title}`}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {property.badges?.map((badge) => (
            <span
              key={badge}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeClass(badge)}`}
            >
              {badge}
            </span>
          ))}
        </div>
        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${
            property.transactionType === "vente"
              ? "bg-white/95 text-brand-800"
              : "bg-white/95 text-gold-600"
          }`}
        >
          {transactionLabel(property.transactionType)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-display text-2xl font-semibold tracking-tight text-ink">
          {formatPrice(property.price, property.transactionType)}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-zinc-900">
          {property.title}
        </h3>
        <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-zinc-500">
          <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
          {location}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-600">
          <span className="inline-flex items-center gap-1.5">
            <Ruler className="h-4 w-4 text-brand-600" aria-hidden="true" />
            {property.surface} m²
          </span>
          {property.rooms > 0 ? (
            <span className="inline-flex items-center gap-1.5">
              <DoorOpen className="h-4 w-4 text-brand-600" aria-hidden="true" />
              {property.rooms} pièce{property.rooms > 1 ? "s" : ""}
            </span>
          ) : null}
          {property.bedrooms > 0 ? (
            <span className="inline-flex items-center gap-1.5">
              <BedDouble className="h-4 w-4 text-brand-600" aria-hidden="true" />
              {property.bedrooms} chambre{property.bedrooms > 1 ? "s" : ""}
            </span>
          ) : null}
        </div>

        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-zinc-500">
          {property.description}
        </p>

        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-800">
          Voir le bien
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}