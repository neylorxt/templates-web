export type SocialLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  /** Identité du hub */
  name: "TemplateHub",
  tagline: "Templates de sites professionnels",
  description:
    "Découvrez une collection de sites professionnels prêts à personnaliser pour les petites entreprises, commerces et prestataires de services.",

  /** URL de base du site, utilisée pour le SEO (Open Graph, sitemap, robots) */
  baseUrl: "https://template-hub.fr",

  /** Coordonnées de contact (à remplacer par les vraies informations) */
  contact: {
    phone: "33612345678",
    phoneDisplay: "06 12 34 56 78",
    whatsapp: "33612345678",
    email: "contact@template-hub.fr",
  },

  /** Message WhatsApp pré-rempli */
  whatsappMessage:
    "Bonjour, je suis intéressé par l'un de vos templates de site internet.",

  /** Réseaux sociaux */
  socials: {
    instagram: {
      label: "Instagram",
      href: "https://instagram.com/templatehub",
    },
    facebook: { label: "Facebook", href: "https://facebook.com/templatehub" },
    linkedin: {
      label: "LinkedIn",
      href: "https://linkedin.com/company/templatehub",
    },
  } satisfies Record<string, SocialLink>,

  /** Navigation principale */
  nav: [
    { label: "Accueil", href: "/#accueil" },
    { label: "Templates", href: "/templates" },
    { label: "Comment ça marche", href: "/comment-ca-marche" },
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