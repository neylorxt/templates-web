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
  /** Lien de démonstration, par exemple https://pro-service.eriencharmely.fr */
  demoUrl: string;
  /** Lien du code source sur GitHub, dossier du template dans templates-web */
  githubUrl: string;
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
    demoUrl: "https://pro-service.eriencharmely.fr",
    githubUrl:
      "https://github.com/neylorxt/templates-web/tree/main/pro-service",
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
    demoUrl: "https://menu-local.eriencharmely.fr",
    githubUrl:
      "https://github.com/neylorxt/templates-web/tree/main/menu-local",
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
    demoUrl: "https://showcase-pro.eriencharmely.fr",
    githubUrl:
      "https://github.com/neylorxt/templates-web/tree/main/showcase-pro",
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
  {
    slug: "immopro",
    name: "ImmoPro",
    category: "Immobilier / Agence",
    filters: ["Business", "Services"],
    tagline: "Le site qui met vos biens en avant",
    description:
      "Un site pour agences immobilières, agents indépendants et promoteurs : catalogue de biens, filtres, pages détail et formulaire d'estimation.",
    longDescription:
      "ImmoPro est conçu pour les professionnels de l'immobilier qui veulent présenter leurs biens et générer des contacts qualifiés. Catalogue filtrable, fiches détaillées, estimation en ligne et contact direct : chaque visite est mise au service de la transaction.",
    audience:
      "Agences immobilières, agents indépendants, promoteurs et petites structures immobilières.",
    image: "/templates/immopro/preview.png",
    demoUrl: "https://immo-pro.eriencharmely.fr",
    githubUrl: "https://github.com/neylorxt/templates-web/tree/main/immo-pro",
    tags: ["Catalogue", "Filtres", "Estimation", "WhatsApp"],
    target: [
      "Agence immobilière",
      "Agent indépendant",
      "Promoteur",
      "Gestion locative",
      "Estimation",
    ],
    structure: [
      "Hero",
      "Biens à la une",
      "Catalogue / Filtres",
      "À propos",
      "Services",
      "Avis",
      "Estimation",
      "Contact",
    ],
    features: [
      "Catalogue de biens",
      "Recherche et filtres",
      "Fiches détaillées",
      "Formulaire d'estimation",
      "Avis clients",
      "Localisation et plan d'accès",
      "Bouton WhatsApp",
      "Formulaire de contact",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    accent: "#0e7490",
    accentSoft: "#cffafe",
  },
  {
    slug: "soinpro",
    name: "SoinPro",
    category: "Santé / Bien-être",
    filters: ["Business", "Services"],
    tagline: "Le site qui inspire confiance avant la première visite",
    description:
      "Un site sobre et rassurant pour un professionnel de santé ou un petit cabinet : spécialités, praticiens, avis, horaires et prise de rendez-vous.",
    longDescription:
      "SoinPro est pensé pour les professionnels de santé et les petits cabinets qui veulent un site crédible et rassurant. Spécialités, praticiens, avis patients, horaires et urgences : tout est réuni pour convaincre le patient de prendre rendez-vous, en ligne ou par téléphone.",
    audience:
      "Dentistes, kinésithérapeutes, psychologues, nutritionnistes, ostéopathes et cabinets pluridisciplinaires.",
    image: "/templates/soinpro/preview.png",
    demoUrl: "https://soin-pro.eriencharmely.fr",
    githubUrl: "https://github.com/neylorxt/templates-web/tree/main/soin-pro",
    tags: ["Rendez-vous", "Spécialités", "Horaires", "Avis"],
    target: [
      "Dentiste",
      "Kinésithérapeute",
      "Psychologue",
      "Nutritionniste",
      "Ostéopathe",
      "Cabinet pluridisciplinaire",
    ],
    structure: [
      "Hero",
      "Spécialités",
      "Praticiens",
      "Avis",
      "Déroulement",
      "Infos pratiques",
      "Horaires",
      "Rendez-vous",
    ],
    features: [
      "Présentation des spécialités",
      "Fiches praticiens",
      "Avis patients",
      "Horaires d'ouverture",
      "Prise de rendez-vous en ligne",
      "Coordonnées et accès",
      "Bouton WhatsApp",
      "Formulaire de contact",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    accent: "#4d7c5f",
    accentSoft: "#e0f0e5",
  },
  {
    slug: "formalocal",
    name: "FormaLocal",
    category: "Formation / Éducation",
    filters: ["Business", "Services"],
    tagline: "Le site qui valorise votre offre de formation",
    description:
      "Un site pour écoles, centres de langues et organismes de formation : catalogue de formations, tarifs, préinscription et contact.",
    longDescription:
      "FormaLocal est conçu pour les établissements d'enseignement et les organismes de formation qui veulent présenter leur offre et attirer des inscriptions. Catalogue de formations, pages détail, tarifs, témoignages et préinscription : tout est pensé pour transformer un visiteur en apprenant.",
    audience:
      "Écoles privées, centres de langues, organismes de formation professionnelle, centres de soutien scolaire et auto-écoles.",
    image: "/templates/formalocal/preview.png",
    demoUrl: "https://forma-local.eriencharmely.fr",
    githubUrl:
      "https://github.com/neylorxt/templates-web/tree/main/forma-local",
    tags: ["Catalogue", "Tarifs", "Préinscription", "Avis"],
    target: [
      "École privée",
      "Centre de langues",
      "Formation professionnelle",
      "Soutien scolaire",
      "Auto-école",
    ],
    structure: [
      "Hero",
      "Formations",
      "Programme",
      "Tarifs",
      "Avis",
      "Comment ça marche",
      "Préinscription",
      "Contact",
    ],
    features: [
      "Catalogue de formations",
      "Pages détail par formation",
      "Grille tarifaire",
      "Témoignages",
      "Préinscription en ligne",
      "Bouton WhatsApp",
      "Formulaire de contact",
      "Design responsive",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    accent: "#1e3a8a",
    accentSoft: "#dbeafe",
  },
];

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((template) => template.slug === slug);
}

export const comparisonRows: ComparisonRow[] = [
  {
    label: "Services",
    values: {
      proservice: "Oui",
      menulocal: "Oui",
      showcasepro: "Oui",
      immopro: "Oui",
      soinpro: "Oui",
      formalocal: "Oui",
    },
  },
  {
    label: "Portfolio",
    values: {
      proservice: "Galerie",
      menulocal: "Galerie produits",
      showcasepro: "Oui",
      immopro: "Galerie biens",
      soinpro: "Non",
      formalocal: "Non",
    },
  },
  {
    label: "Tarifs",
    values: {
      proservice: "Optionnel",
      menulocal: "Prix produits",
      showcasepro: "Oui",
      immopro: "Prix des biens",
      soinpro: "Non",
      formalocal: "Oui",
    },
  },
  {
    label: "WhatsApp",
    values: {
      proservice: "Oui",
      menulocal: "Oui",
      showcasepro: "Oui",
      immopro: "Oui",
      soinpro: "Optionnel",
      formalocal: "Optionnel",
    },
  },
  {
    label: "Localisation",
    values: {
      proservice: "Oui",
      menulocal: "Oui",
      showcasepro: "Optionnel",
      immopro: "Oui",
      soinpro: "Oui",
      formalocal: "Oui",
    },
  },
  {
    label: "Catalogue / Filtres",
    values: {
      proservice: "Non",
      menulocal: "Non",
      showcasepro: "Non",
      immopro: "Oui",
      soinpro: "Non",
      formalocal: "Oui",
    },
  },
  {
    label: "Réservation / Inscription",
    values: {
      proservice: "Optionnel",
      menulocal: "Optionnel",
      showcasepro: "Réservation",
      immopro: "Non",
      soinpro: "Oui",
      formalocal: "Préinscription",
    },
  },
];