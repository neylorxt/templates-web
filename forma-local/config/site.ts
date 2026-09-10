export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type OpeningDay = {
  label: string;
  slots: string[];
};

/**
 * Configuration globale du site FormaLocal.
 *
 * Toute l'identité, les coordonnées, les options et les textes du site se
 * personnalisent ici. Changez ces valeurs pour adapter le template à un
 * établissement : école privée, centre de langues, organisme de formation
 * professionnelle, centre de soutien scolaire ou auto-école.
 *
 * Les valeurs fournies sont des exemples de démonstration : remplacez-les
 * par les informations réelles de l'établissement avant toute mise en ligne.
 */
export const siteConfig = {
  /** Identité de l'établissement */
  name: "FormaLocal",
  tagline: "Apprendre. Progresser. Réussir.",
  description:
    "Centre de formation à Lyon : langues, bureautique, digital et management. Des programmes pratiques, un accompagnement personnalisé et des formateurs expérimentés pour progresser efficacement.",
  baseUrl: "https://formaLocal.fr",

  /** Coordonnées de l'établissement (à remplacer par les vraies informations) */
  contact: {
    phone: "33478000000",
    phoneDisplay: "04 78 00 00 00",
    email: "contact@formaLocal.fr",
    registrationEmail: "inscription@formaLocal.fr",
    address: "18 rue de la République",
    postalCode: "69002",
    city: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    country: "FR",
    whatsapp: "33612345678",
  },

  /** WhatsApp est facultatif : à activer seulement si l'établissement l'utilise. */
  useWhatsApp: true,
  whatsappMessage:
    "Bonjour, je souhaiterais avoir plus d'informations sur vos formations.",

  /** Horaires d'ouverture de l'établissement */
  hours: [
    { label: "Lundi", slots: ["9 h à 12 h", "14 h à 19 h"] },
    { label: "Mardi", slots: ["9 h à 12 h", "14 h à 19 h"] },
    { label: "Mercredi", slots: ["9 h à 12 h", "14 h à 18 h"] },
    { label: "Jeudi", slots: ["9 h à 12 h", "14 h à 19 h"] },
    { label: "Vendredi", slots: ["9 h à 12 h", "14 h à 17 h"] },
    { label: "Samedi", slots: ["9 h à 13 h"] },
    { label: "Dimanche", slots: ["Fermé"] },
  ] as OpeningDay[],

  /** Horaires auxquels le secrétariat répond au téléphone */
  phoneHours: "Du lundi au samedi, de 9 h à 19 h",

  /** Coordonnées GPS, utilisées pour la carte intégrée */
  coordinates: { lat: 45.7629, lng: 4.8356 },

  /** Accès à l'établissement (transports, parking, accessibilité) */
  access: {
    transport:
      "Métro A et B, arrêt Bellecour, à 5 minutes à pied. Bus C12 et C14 à proximité.",
    parking: "Parking Bellecour à 6 minutes, stationnement en voirie à proximité.",
    accessibility:
      "Locaux de plain-pied, accessibles aux personnes à mobilité réduite.",
  },

  /**
   * Points rassurants affichés dans le hero.
   */
  heroHighlights: [
    "Formateurs expérimentés",
    "Petits groupes",
    "Horaires flexibles",
    "Suivi personnalisé",
  ],

  /**
   * Statistiques de la section « Pourquoi nous choisir ».
   * Exemples de démonstration : remplacez-les par des chiffres réels avant
   * toute mise en ligne, ou videz le tableau pour masquer la zone.
   */
  stats: [
    { value: "500+", label: "apprenants formés" },
    { value: "10+", label: "formateurs certifiés" },
    { value: "95 %", label: "de satisfaction" },
    { value: "8 ans", label: "d'expérience" },
  ],

  /**
   * Facilités de paiement et de financement.
   * IMPORTANT : n'affichez que les dispositifs réellement disponibles chez
   * l'établissement. Ne jamais inventer d'éligibilité à un financement.
   */
  financing: {
    show: true,
    title: "Financement et facilités",
    subtitle:
      "Plusieurs solutions existent pour financer votre formation. Les conditions d'éligibilité dépendent de votre situation : parlez-en avec notre équipe.",
    options: [
      {
        icon: "CreditCard",
        title: "Paiement en plusieurs fois",
        description:
          "Réglez votre formation en plusieurs mensualités, sans frais, selon un échéancier adapté.",
      },
      {
        icon: "Wallet",
        title: "Financement par l'employeur",
        description:
          "Votre formation peut être prise en charge dans le cadre du plan de développement des compétences de votre entreprise.",
      },
      {
        icon: "HandCoins",
        title: "Prise en charge selon votre situation",
        description:
          "Selon votre statut, des prises en charge peuvent exister. Nous vous indiquons les démarches possibles lors d'un échange.",
      },
      {
        icon: "HelpCircle",
        title: "Devis gratuit sur demande",
        description:
          "Recevez un devis détaillé, sans engagement, pour une formation individuelle ou pour votre équipe.",
      },
    ],
  },

  /** Photographies du site (Unsplash ou Pexels, à remplacer par les vôtres). */
  images: {
    hero: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80",
    about:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    cta: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2000&q=80",
  },

  /** Réseaux sociaux (facultatif : supprimez les entrées non utilisées) */
  socials: {
    instagram: {
      label: "Instagram",
      href: "https://instagram.com/formalocal",
    },
    facebook: {
      label: "Facebook",
      href: "https://facebook.com/formalocal",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://linkedin.com/company/formalocal",
    },
  } satisfies Record<string, SocialLink>,

  /** Navigation principale (le Header et le Footer s'appuient dessus) */
  nav: [
    { label: "Accueil", href: "/" },
    { label: "Formations", href: "/formations" },
    { label: "Programmes", href: "/#programme" },
    { label: "Tarifs", href: "/#tarifs" },
    { label: "Témoignages", href: "/#temoignages" },
    { label: "Contact", href: "/#contact" },
  ] as NavItem[],
};

/** Lien WhatsApp avec message pré-rempli (personnalisable par formation). */
export function whatsappLink(
  message: string = siteConfig.whatsappMessage
): string {
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

/** Lien Google Maps vers l'établissement (itinéraire). */
export function directionsLink(): string {
  const query = `${siteConfig.contact.address}, ${siteConfig.contact.postalCode} ${siteConfig.contact.city}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;
}

/** URL de la carte OpenStreetMap intégrée, centrée sur l'établissement. */
export function mapEmbedUrl(): string {
  const { lat, lng } = siteConfig.coordinates;
  const delta = 0.008;
  const bbox = `${lng - delta}%2C${lat - delta}%2C${lng + delta}%2C${lat + delta}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
}

/** Adresse complète sur une seule ligne. */
export function fullAddress(): string {
  const { address, postalCode, city } = siteConfig.contact;
  return `${address}, ${postalCode} ${city}`;
}