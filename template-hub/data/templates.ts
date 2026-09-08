export type TemplateFilter =
  | "Business"
  | "Restaurant"
  | "Commerce"
  | "Portfolio"
  | "Services"
  | "Créatif";

export type Template = {
  /** Identifiant de l'URL, par exemple "proservice" pour /templates/proservice */
  slug: string;
  name: string;
  /** Catégorie affichée sur la carte, par exemple "Business / Services" */
  category: string;
  /** Filtres auxquels le template répond (voir templateCategories) */
  filters: TemplateFilter[];
  tagline: string;
  description: string;
  longDescription: string;
  /** Public cible, affiché sur la page dédiée */
  audience: string;
  /** Chemin de l'aperçu, par exemple /templates/proservice/preview.png */
  image: string;
  /** Captures d'écran supplémentaires, optionnel */
  screenshots?: string[];
  /** Lien de démonstration, à remplacer par l'URL du site déployé */
  demoUrl: string;
  /** Badges affichés sur la carte */
  tags: string[];
  /** Activités compatibles */
  target: string[];
  /** Liste des sections du template */
  structure: string[];
  /** Fonctionnalités principales, affichées sur la page dédiée */
  features: string[];
  /** Technologies utilisées */
  technologies: string[];
  /** Couleur d'accent (hex) utilisée pour les éléments propres au template */
  accent: string;
  accentSoft: string;
};

export type ComparisonRow = {
  label: string;
  /** Valeur par slug de template, par exemple { proservice: "Oui" } */
  values: Record<string, string>;
};

/** Catégories disponibles pour la barre de filtres. "Tous" affiche tout. */
export const templateCategories = [
  "Tous",
  "Business",
  "Restaurant",
  "Commerce",
  "Portfolio",
  "Services",
  "Créatif",
] as const;

export const templates: Template[] = [
  {
    slug: "proservice",
    name: "ProService",
    category: "Business / Services",
    filters: ["Business", "Services"],
    tagline: "Le site qui génère des demandes de devis",
    description:
      "Un site professionnel pour les entreprises de services qui veulent présenter leurs prestations et recevoir davantage de demandes de devis.",
    longDescription:
      "ProService est pensé pour les métiers de service qui ont besoin d'un site crédible et orienté résultat. Chaque section est conçue pour rassurer le visiteur, mettre en avant les prestations et le pousser à demander un devis ou à contacter l'entreprise directement via WhatsApp.",
    audience:
      "Garages, plombiers, électriciens, sociétés de nettoyage, artisans et entreprises de services locales.",
    image: "/templates/proservice/preview.png",
    demoUrl: "https://github.com/neylorxt/templates-web/tree/main/pro-service",
    tags: ["Services", "Devis", "WhatsApp", "Avis clients"],
    target: [
      "Garage",
      "Plombier",
      "Électricien",
      "Nettoyage",
      "Artisan",
      "Services locaux",
    ],
    structure: [
      "Hero",
      "Services",
      "À propos",
      "Avis",
      "Galerie",
      "Contact",
      "WhatsApp",
    ],
    features: [
      "Présentation des services",
      "Section à propos",
      "Avis clients",
      "Galerie de réalisations",
      "Formulaire de devis",
      "Bouton WhatsApp",
      "Localisation et horaires",
      "Design responsive",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    accent: "#1d61f1",
    accentSoft: "#dbeafe",
  },
  {
    slug: "menulocal",
    name: "MenuLocal",
    category: "Restaurant / Commerce",
    filters: ["Restaurant", "Commerce"],
    tagline: "Le site qui donne envie de pousser la porte",
    description:
      "Un site visuel pour présenter un menu, des produits, des horaires et permettre aux clients de contacter facilement le commerce.",
    longDescription:
      "MenuLocal met le menu et les produits au centre de l'expérience. Photos appétissantes, galerie, horaires et localisation : tout est réuni pour convertir une visite en client, avec un accès direct à WhatsApp pour la commande ou la réservation.",
    audience:
      "Restaurants, pâtisseries, cafés, boulangeries, snacks et commerces alimentaires.",
    image: "/templates/menulocal/preview.png",
    demoUrl: "https://github.com/neylorxt/templates-web/tree/main/menu-local",
    tags: ["Menu", "Galerie", "Localisation", "WhatsApp"],
    target: [
      "Restaurant",
      "Pâtisserie",
      "Café",
      "Boulangerie",
      "Snack",
      "Commerce alimentaire",
    ],
    structure: [
      "Hero",
      "Produits / Menu",
      "Galerie",
      "Avis",
      "Horaires",
      "Localisation",
      "WhatsApp",
    ],
    features: [
      "Menu et produits mis en avant",
      "Galerie photos",
      "Avis clients",
      "Horaires d'ouverture",
      "Localisation et plan d'accès",
      "Bouton WhatsApp",
      "Formulaire de contact",
      "Lien de réservation optionnel",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    accent: "#b5452c",
    accentSoft: "#f6e0da",
  },
  {
    slug: "showcasepro",
    name: "ShowcasePro",
    category: "Portfolio / Prestations",
    filters: ["Portfolio", "Services", "Créatif"],
    tagline: "Le site premium qui met votre travail en valeur",
    description:
      "Un site premium conçu pour mettre en avant les réalisations, services et tarifs d'un professionnel.",
    longDescription:
      "ShowcasePro est un écrin pour les professions visuelles et les indépendants. Portfolio, services, grille tarifaire et réservation : une vitrine élégante qui inspire confiance et transforme les visiteurs en clients.",
    audience:
      "Photographes, barbers, coachs, freelances, consultants et petites agences.",
    image: "/templates/showcasepro/preview.png",
    demoUrl: "https://github.com/neylorxt/templates-web/tree/main/showcase-pro",
    tags: ["Portfolio", "Tarifs", "Réservation", "Avis"],
    target: [
      "Photographe",
      "Barber",
      "Coach",
      "Freelance",
      "Consultant",
      "Petite agence",
    ],
    structure: [
      "Hero",
      "Réalisations",
      "Services",
      "Tarifs",
      "Avis",
      "Contact",
    ],
    features: [
      "Portfolio et réalisations",
      "Présentation des services",
      "Grille tarifaire",
      "Avis clients",
      "Réservation en ligne",
      "Formulaire de contact",
      "Bouton WhatsApp",
      "Design premium",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    accent: "#c65a2a",
    accentSoft: "#fbe6db",
  },
];

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((template) => template.slug === slug);
}

export const comparisonRows: ComparisonRow[] = [
  { label: "Services", values: { proservice: "Oui", menulocal: "Oui", showcasepro: "Oui" } },
  { label: "Portfolio", values: { proservice: "Galerie", menulocal: "Galerie produits", showcasepro: "Oui" } },
  { label: "Tarifs", values: { proservice: "Optionnel", menulocal: "Prix produits", showcasepro: "Oui" } },
  { label: "WhatsApp", values: { proservice: "Oui", menulocal: "Oui", showcasepro: "Oui" } },
  { label: "Localisation", values: { proservice: "Oui", menulocal: "Oui", showcasepro: "Optionnel" } },
  { label: "Menu", values: { proservice: "Non", menulocal: "Oui", showcasepro: "Non" } },
  { label: "Réservation", values: { proservice: "Optionnel", menulocal: "Optionnel", showcasepro: "Oui" } },
];