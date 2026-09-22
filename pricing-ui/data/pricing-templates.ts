export type PricingTemplate = {
  slug: string;
  href: string;
  title: string;
  description: string;
  highlights: string[];
  /** Couleur unique du thème, utilisée pour l'illustration de la carte. */
  accent: string;
  accentSoft: string;
};

export const pricingTemplates: PricingTemplate[] = [
  {
    slug: "saas",
    href: "/saas",
    title: "SaaS",
    description:
      "Trois formules classiques, un basculement mensuel ou annuel et une carte mise en avant.",
    highlights: ["3 formules", "Mensuel ou annuel", "Le plus populaire"],
    accent: "#8b5cf6",
    accentSoft: "rgba(139, 92, 246, 0.12)",
  },
  {
    slug: "cloud",
    href: "/cloud",
    title: "Cloud",
    description:
      "Un configurateur CPU, RAM et stockage qui calcule le prix de l’instance en direct.",
    highlights: ["CPU, RAM, stockage", "Calculateur en direct", "À la seconde"],
    accent: "#34d399",
    accentSoft: "rgba(52, 211, 153, 0.12)",
  },
  {
    slug: "ai-api",
    href: "/ai-api",
    title: "AI API",
    description:
      "Facturation au token avec curseur de consommation et paliers dégressifs.",
    highlights: ["À l’usage", "Curseur de tokens", "Paliers dégressifs"],
    accent: "#e879f9",
    accentSoft: "rgba(232, 121, 249, 0.12)",
  },
  {
    slug: "agency",
    href: "/agency",
    title: "Agency",
    description:
      "Starter, Business et Custom : une grille d’offres éditoriale pour une agence.",
    highlights: ["Starter / Business", "Custom sur devis", "Forfait projet"],
    accent: "#c2703d",
    accentSoft: "rgba(194, 112, 61, 0.12)",
  },
  {
    slug: "ecommerce",
    href: "/ecommerce",
    title: "E-commerce",
    description:
      "Abonnement plus commission par transaction, avec simulateur de chiffre d’affaires.",
    highlights: ["Prix + commission", "Simulateur de CA", "3 paliers"],
    accent: "#10b981",
    accentSoft: "rgba(16, 185, 129, 0.12)",
  },
  {
    slug: "education",
    href: "/education",
    title: "Education",
    description:
      "Basic, Student et School : une grille lisible pour les écoles et les élèves.",
    highlights: ["Basic / Student", "Tarif par élève", "Établissements"],
    accent: "#3b82f6",
    accentSoft: "rgba(59, 130, 246, 0.12)",
  },
  {
    slug: "streaming",
    href: "/streaming",
    title: "Streaming",
    description:
      "Individuel, Duo ou Famille, avec écrans simultanés et qualité d’image.",
    highlights: ["Individuel / Duo / Famille", "Écrans simultanés", "Qualité 4K"],
    accent: "#f43f5e",
    accentSoft: "rgba(244, 63, 94, 0.12)",
  },
  {
    slug: "developer-tools",
    href: "/developer-tools",
    title: "Developer Tools",
    description:
      "Free, Pro, Team et Enterprise, avec options de calcul facturées à l’usage.",
    highlights: ["Free / Pro / Team", "Par utilisateur", "Options à l’usage"],
    accent: "#22d3ee",
    accentSoft: "rgba(34, 211, 238, 0.12)",
  },
  {
    slug: "enterprise",
    href: "/enterprise",
    title: "Enterprise",
    description:
      "Devis personnalisé, tableau comparatif détaillé et accompagnement dédié.",
    highlights: ["Devis personnalisé", "Tableau comparatif", "Support dédié"],
    accent: "#1d4ed8",
    accentSoft: "rgba(29, 78, 216, 0.12)",
  },
];
