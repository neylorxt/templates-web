export type PricingPlan = {
  id: string;
  name: string;
  priceLabel: string;
  description: string;
  features: string[];
  /** Met en avant un plan (carte plus visible). */
  popular?: boolean;
};

/**
 * Tarifs de la section « Nos tarifs ».
 *
 * Les prix indiqués sont des points de départ indicatifs : ils varient selon
 * la formation, le nombre d'heures et le format choisi. Adaptez-les aux tarifs
 * réels de l'établissement.
 */
export const pricingPlans: PricingPlan[] = [
  {
    id: "essentielle",
    name: "Essentielle",
    priceLabel: "À partir de 199 €",
    description:
      "L'essentiel pour démarrer une formation dans les meilleures conditions.",
    features: [
      "Accès aux cours",
      "Supports pédagogiques inclus",
      "Suivi standard",
      "Attestation de fin de formation",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    priceLabel: "À partir de 349 €",
    description:
      "Le bon équilibre entre accompagnement et flexibilité pour progresser vite.",
    features: [
      "Tout ce que comprend la formule Essentielle",
      "Suivi renforcé",
      "Exercices complémentaires",
      "Accès aux ressources en ligne",
      "Évaluation de mi-parcours",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    priceLabel: "À partir de 599 €",
    description:
      "Un accompagnement complet et personnalisé pour atteindre un objectif exigeant.",
    features: [
      "Tout ce que comprend la formule Standard",
      "Séances individuelles",
      "Accompagnement personnalisé",
      "Priorité sur les sessions",
      "Préparation et passage de certification",
    ],
  },
];

/** Note affichée sous les tarifs. */
export const pricingNote =
  "Les tarifs varient selon la formation, sa durée et son format. Contactez-nous pour obtenir un devis précis, sans engagement.";