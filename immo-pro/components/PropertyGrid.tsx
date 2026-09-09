import type { Property } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

type PropertyGridProps = {
  properties: Property[];
};

/**
 * Grille responsive de cartes de biens.
 */
export default function PropertyGrid({ properties }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 px-6 py-16 text-center">
        <p className="text-lg font-semibold text-zinc-800">
          Aucun bien ne correspond à vos critères
        </p>
        <p className="mt-2 text-sm text-zinc-500">
          Essayez de modifier ou de réinitialiser vos filtres.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}