import { properties } from "@/data/properties";
import type { PropertyType, TransactionType } from "@/data/properties";
import { propertyTypeLabel } from "@/lib/format";

export type { PropertyType, TransactionType };
export { propertyTypeLabel };

/** Types de biens proposés dans la recherche et les filtres. */
export const propertyTypes: PropertyType[] = [
  "appartement",
  "maison",
  "villa",
  "terrain",
  "bureau",
  "commerce",
];

/** Paliers de budget selon le type de transaction. */
export const budgetPresets: Record<TransactionType, number[]> = {
  vente: [300000, 500000, 750000, 1000000, 1500000],
  location: [800, 1200, 1500, 2000, 3000],
};

/** Villes du catalogue, triées par ordre alphabétique. */
export const cities = Array.from(
  new Set(properties.map((property) => property.city))
).sort((a, b) => a.localeCompare(b, "fr"));

/** Libellé d'un palier de budget. */
export function budgetLabel(transaction: TransactionType, value: number): string {
  const formatted = new Intl.NumberFormat("fr-FR").format(value);
  return transaction === "vente"
    ? `≤ ${formatted} €`
    : `≤ ${formatted} € / mois`;
}

/** Options de « pièces minimum » pour les filtres. */
export const roomsOptions = [2, 3, 4, 5];

/** Options de « surface minimum » pour les filtres (en m²). */
export const surfaceOptions = [40, 60, 80, 100, 120, 150];