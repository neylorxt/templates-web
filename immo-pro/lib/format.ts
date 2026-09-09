import type { Property, PropertyType, TransactionType } from "@/data/properties";

/** Formate un prix à la française : « 649 000 € » ou « 1 490 € / mois ». */
export function formatPrice(price: number, transactionType: TransactionType): string {
  const formatted = new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 0,
  }).format(price);
  return transactionType === "location" ? `${formatted} € / mois` : `${formatted} €`;
}

/** Libellé d'un type de bien. */
export function propertyTypeLabel(type: PropertyType): string {
  const labels: Record<PropertyType, string> = {
    appartement: "Appartement",
    maison: "Maison",
    villa: "Villa",
    terrain: "Terrain",
    bureau: "Bureau",
    commerce: "Commerce",
  };
  return labels[type];
}

/** Libellé d'un type de transaction. */
export function transactionLabel(type: TransactionType): string {
  return type === "vente" ? "À vendre" : "À louer";
}

/** URL d'une fiche bien. */
export function propertyUrl(property: Property): string {
  return `/biens/${property.slug}`;
}

/** Message WhatsApp personnalisé pour un bien. */
export function propertyWhatsappMessage(property: Property): string {
  return `Bonjour, je souhaiterais avoir plus d'informations sur le bien : ${property.title} (${property.city}).`;
}