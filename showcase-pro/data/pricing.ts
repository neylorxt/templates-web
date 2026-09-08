export type PricingTier = {
  name: string;
  price: number;
  unit: string;
  description: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
};

export const pricing: PricingTier[] = [
  {
    name: "Essentiel",
    price: 80,
    unit: "€",
    description: "Une prestation courte et efficace pour un besoin ponctuel.",
    features: [
      "Séance d'une heure",
      "Préparation et conseils",
      "10 photos retouchées",
      "Livraison en ligne sous 48 h",
    ],
    ctaLabel: "Choisir Essentiel",
  },
  {
    name: "Standard",
    price: 150,
    unit: "€",
    description: "La formule la plus demandée, idéale pour un rendu complet.",
    features: [
      "Séance de deux heures",
      "Repérage et préparation",
      "25 photos retouchées HD",
      "Galerie privée partageable",
      "Suivi personnalisé",
    ],
    ctaLabel: "Choisir Standard",
    featured: true,
  },
  {
    name: "Premium",
    price: 300,
    unit: "€",
    description: "Un accompagnement sur-mesure pour un résultat d'exception.",
    features: [
      "Demi-journée de shooting",
      "Direction artistique complète",
      "50 photos retouchées HD",
      "Impression fine art offerte",
      "Priorité de planning et suivi avancé",
    ],
    ctaLabel: "Choisir Premium",
  },
];

export const pricingNote =
  "Les tarifs peuvent varier selon le projet. Contactez-moi pour un devis personnalisé.";