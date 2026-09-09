import type { Metadata } from "next";
import { properties } from "@/data/properties";
import PropertyFilters, {
  emptyFilters,
  type FiltersState,
} from "@/components/PropertyFilters";
import {
  propertyTypes,
  roomsOptions,
  surfaceOptions,
} from "@/lib/search";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Nos biens à vendre et à louer",
  description:
    "Découvrez nos annonces immobilières à Lyon et dans sa métropole : appartements, maisons, villas, terrains, bureaux et commerces à la vente et à la location.",
  alternates: {
    canonical: "/biens",
  },
  openGraph: {
    title: "Nos biens immobiliers | ImmoPro",
    description:
      "Appartements, maisons, villas, terrains et locaux à la vente et à la location à Lyon et dans sa métropole.",
  },
};

type BiensPageProps = {
  searchParams: Promise<{
    transaction?: string;
    type?: string;
    city?: string;
    budgetMin?: string;
    budgetMax?: string;
    surfaceMin?: string;
    rooms?: string;
  }>;
};

function buildInitialFilters(params: Awaited<BiensPageProps["searchParams"]>): FiltersState {
  const transaction =
    params.transaction === "vente" || params.transaction === "location"
      ? params.transaction
      : emptyFilters.transaction;

  const type = propertyTypes.includes(params.type as never)
    ? (params.type as FiltersState["type"])
    : emptyFilters.type;

  const validCities = Array.from(
    new Set(properties.map((property) => property.city))
  );
  const city =
    params.city && validCities.includes(params.city) ? params.city : "";

  const budgetMin =
    params.budgetMin && !Number.isNaN(Number(params.budgetMin))
      ? params.budgetMin
      : "";
  const budgetMax =
    params.budgetMax && !Number.isNaN(Number(params.budgetMax))
      ? params.budgetMax
      : "";

  const surfaceMin = surfaceOptions.includes(Number(params.surfaceMin))
    ? String(params.surfaceMin)
    : "";
  const rooms = roomsOptions.includes(Number(params.rooms)) ? String(params.rooms) : "";

  return { transaction, type, city, budgetMin, budgetMax, surfaceMin, rooms };
}

export default async function BiensPage({ searchParams }: BiensPageProps) {
  const params = await searchParams;
  const initial = buildInitialFilters(params);

  return (
    <>
      <section className="border-b border-zinc-100 bg-gradient-to-b from-brand-50/70 to-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
            Catalogue
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Nos biens disponibles
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Appartements, maisons, villas, terrains, bureaux et commerces à la
            vente et à la location à Lyon et dans sa métropole.
          </p>
        </div>
      </section>

      <Section className="pt-10">
        <PropertyFilters properties={properties} initial={initial} />
      </Section>
    </>
  );
}