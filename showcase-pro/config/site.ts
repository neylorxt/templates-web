export type SocialLink = {
  label: string;
  href: string;
};

export type TrustItem = {
  value: string;
  label: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export const siteConfig = {
  /** Identité de la marque ou de la personne */
  name: "Julien Moreau",
  profession: "Photographe portrait & mariage",
  tagline: "Photographe indépendant à Lyon",
  headline: "Des images qui racontent votre histoire",
  description:
    "J'accompagne mes clients avec une approche personnalisée, créative et orientée résultat. Portraits, mariages et événements : chaque séance est pensée pour révéler le meilleur de vous.",
  shortDescription:
    "Photographe portrait, mariage et événementiel à Lyon. Une approche sur mesure, créative et orientée résultat.",

  /** Coordonnées */
  contact: {
    phone: "33612345678",
    phoneDisplay: "06 12 34 56 78",
    whatsapp: "33612345678",
    email: "bonjour@julienmoreau.fr",
    city: "Lyon",
    address: "Lyon et ses environs, Rhône-Alpes",
  },

  /** Réseaux sociaux */
  socials: {
    instagram: { label: "Instagram", href: "https://instagram.com/julienmoreau.photo" },
    facebook: { label: "Facebook", href: "https://facebook.com/julienmoreau.photo" },
    linkedin: { label: "LinkedIn", href: "https://linkedin.com/in/julienmoreau" },
  },

  /** Réservation externe (Calendly, Planity, Booksy, Doctolib…) */
  booking: {
    label: "Réserver maintenant",
    url: "",
  },

  /** URL de base utilisée pour les métadonnées Open Graph */
  baseUrl: "https://showcase-pro-demo.vercel.app",

  /** Éléments de confiance affichés sous le hero */
  trust: [
    { value: "150+", label: "clients accompagnés" },
    { value: "7 ans", label: "d'expérience" },
    { value: "4,9/5", label: "de satisfaction" },
  ] as TrustItem[],

  /** Statistiques de la section À propos */
  stats: [
    { value: "7", label: "ans d'expérience" },
    { value: "150+", label: "clients" },
    { value: "300+", label: "shootings réalisés" },
    { value: "4,9/5", label: "satisfaction" },
  ] as StatItem[],

  /** Note globale de la section Avis */
  globalRating: "4,9/5",
  globalRatingLabel: "sur plus de 100 clients accompagnés",

  /** Navigation principale */
  nav: [
    { label: "Accueil", href: "#accueil" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Services", href: "#services" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Avis", href: "#avis" },
    { label: "Contact", href: "#contact" },
  ],

  /** Message WhatsApp pré-rempli */
  whatsappMessage:
    "Bonjour, je souhaiterais avoir plus d'informations sur vos prestations.",
};

/** Lien WhatsApp avec message pré-rempli. */
export function whatsappLink(message: string = siteConfig.whatsappMessage): string {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Lien d'appel téléphonique. */
export function telLink(): string {
  return `tel:+${siteConfig.contact.phone}`;
}