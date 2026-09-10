export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

/**
 * Configuration globale du site ImmoPro.
 *
 * Toute l'identité et les coordonnées du site se personnalisent ici :
 * nom, coordonnées, réseaux sociaux, navigation, statistiques et zone
 * d'intervention. Changez ces valeurs pour adapter le template à un client.
 */
export const siteConfig = {
  /** Identité de l'agence */
  name: "ImmoPro",
  tagline: "Votre partenaire immobilier",
  description:
    "Agence immobilière à Lyon : vente, achat, location et estimation de biens d'exception. Un accompagnement sur mesure, une expertise locale reconnue.",
  baseUrl: "https://immopro.fr",

  /** Agent de référence présenté dans la section « À propos » */
  agent: {
    name: "Claire Fontaine",
    role: "Directrice de l'agence",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },

  /** Coordonnées de contact (à remplacer par les vraies informations) */
  contact: {
    phone: "33612345678",
    phoneDisplay: "06 12 34 56 78",
    whatsapp: "33612345678",
    email: "contact@immopro.fr",
    address: "14 rue de la République",
    city: "69002 Lyon",
    hours: "Lundi au vendredi : 9 h à 19 h, samedi : 10 h à 13 h",
  },

  /** Message WhatsApp pré-rempli (message par défaut du bouton flottant) */
  whatsappMessage:
    "Bonjour, je souhaiterais obtenir plus d'informations sur vos biens immobiliers.",

  /** Zone d'intervention */
  area: "Lyon et sa métropole",
  areaCities: [
    "Lyon",
    "Villeurbanne",
    "Caluire-et-Cuire",
    "Écully",
    "Sainte-Foy-lès-Lyon",
    "Oullins",
    "Vénissieux",
    "Bron",
  ],

  /** Coordonnées GPS de l'agence, utilisées pour la carte intégrée */
  coordinates: { lat: 45.764, lng: 4.8357 },

  /** Statistiques présentées dans la section « À propos » */
  stats: [
    { value: "10+", label: "ans d'expérience" },
    { value: "250+", label: "biens vendus" },
    { value: "400+", label: "clients accompagnés" },
    { value: "4,9/5", label: "de satisfaction" },
  ],

  /** Réseaux sociaux */
  socials: {
    instagram: {
      label: "Instagram",
      href: "https://instagram.com/immopro",
    },
    facebook: {
      label: "Facebook",
      href: "https://facebook.com/immopro",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://linkedin.com/company/immopro",
    },
  } satisfies Record<string, SocialLink>,

  /** Navigation principale (le Header et le Footer s'appuient dessus) */
  nav: [
    { label: "Accueil", href: "/" },
    { label: "Nos biens", href: "/biens" },
    { label: "À propos", href: "/#a-propos" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
};

/** Lien WhatsApp avec message pré-rempli. */
export function whatsappLink(message: string = siteConfig.whatsappMessage): string {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
}

/** Lien d'appel téléphonique. */
export function telLink(): string {
  return `tel:+${siteConfig.contact.phone}`;
}

/** Lien email pré-rempli. */
export function mailLink(subject: string, body: string): string {
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

/** Lien Google Maps vers l'agence (itinéraire). */
export function directionsLink(): string {
  const query = `${siteConfig.contact.address}, ${siteConfig.contact.city}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;
}

/** URL de la carte OpenStreetMap intégrée, centrée sur l'agence. */
export function mapEmbedUrl(): string {
  const { lat, lng } = siteConfig.coordinates;
  const delta = 0.008;
  const bbox = `${lng - delta}%2C${lat - delta}%2C${lng + delta}%2C${lat + delta}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
}