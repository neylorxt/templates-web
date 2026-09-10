export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

/** Un créneau horaire, au format 24 h « HH:MM ». */
export type TimeSlot = {
  open: string;
  close: string;
};

/** Horaires d'une journée. `weekday` suit `Date.getDay()` (0 = dimanche). */
export type OpeningDay = {
  label: string;
  weekday: number;
  slots: TimeSlot[];
};

/** Type Schema.org de l'établissement. Choisir un type adapté au métier. */
export type SchemaType =
  | "MedicalClinic"
  | "Dentist"
  | "Physician"
  | "MedicalBusiness"
  | "LocalBusiness";

/**
 * Configuration globale du site SoinPro.
 *
 * Toute l'identité, les coordonnées, les horaires et les options du site se
 * personnalisent ici. Changez ces valeurs pour adapter le template à un
 * cabinet : dentiste, kinésithérapeute, psychologue, nutritionniste,
 * ostéopathe ou cabinet pluridisciplinaire.
 *
 * Les valeurs fournies sont des exemples de démonstration : remplacez-les
 * par les informations réelles du professionnel avant toute mise en ligne.
 */
export const siteConfig = {
  /** Identité du cabinet */
  name: "SoinPro",
  profession: "Cabinet de santé pluridisciplinaire",
  tagline: "Votre santé, accompagnée avec attention",
  description:
    "Cabinet de santé pluridisciplinaire à Lyon : soins dentaires, kinésithérapie, psychologie, nutrition et ostéopathie. Une équipe bienveillante, à votre écoute, sur rendez-vous.",
  baseUrl: "https://soinpro.fr",

  /** Type Schema.org (voir `SchemaType`). Adapter au métier du cabinet. */
  schemaType: "MedicalClinic" as SchemaType,

  /** Coordonnées de contact (à remplacer par les vraies informations) */
  contact: {
    phone: "33478000000",
    phoneDisplay: "04 78 00 00 00",
    email: "contact@soinpro.fr",
    address: "12 rue de la Charité",
    postalCode: "69002",
    city: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    country: "FR",
    whatsapp: "33612345678",
  },

  /** WhatsApp est facultatif : à activer seulement si le cabinet l'utilise. */
  useWhatsApp: false,
  whatsappMessage:
    "Bonjour, je souhaiterais prendre rendez-vous au cabinet. Pourriez-vous m'indiquer vos disponibilités ?",

  /** Prise de rendez-vous */
  booking: {
    /** Proposer un bouton vers une plateforme externe (Doctolib, Calendly…) */
    online: true,
    url: "https://www.doctolib.fr/",
    /** Proposer l'appel téléphonique comme moyen de rendez-vous */
    phone: true,
    /** Afficher le formulaire de contact dans la section rendez-vous */
    form: true,
  },

  /** Coordonnées GPS, utilisées pour la carte intégrée */
  coordinates: { lat: 45.7504, lng: 4.8273 },

  /** Horaires d'ouverture (du lundi au dimanche) */
  hours: [
    {
      label: "Lundi",
      weekday: 1,
      slots: [
        { open: "09:00", close: "12:30" },
        { open: "14:00", close: "18:30" },
      ],
    },
    {
      label: "Mardi",
      weekday: 2,
      slots: [
        { open: "09:00", close: "12:30" },
        { open: "14:00", close: "18:30" },
      ],
    },
    {
      label: "Mercredi",
      weekday: 3,
      slots: [
        { open: "09:00", close: "12:30" },
        { open: "14:00", close: "18:30" },
      ],
    },
    {
      label: "Jeudi",
      weekday: 4,
      slots: [
        { open: "09:00", close: "12:30" },
        { open: "14:00", close: "19:00" },
      ],
    },
    {
      label: "Vendredi",
      weekday: 5,
      slots: [
        { open: "09:00", close: "12:30" },
        { open: "14:00", close: "17:00" },
      ],
    },
    { label: "Samedi", weekday: 6, slots: [] },
    { label: "Dimanche", weekday: 0, slots: [] },
  ] as OpeningDay[],

  /** Horaires auxquels le secrétariat répond au téléphone */
  phoneHours: "Du lundi au vendredi, de 9 h à 17 h",

  /** Fermeture exceptionnelle affichée si renseignée (congés, jour férié…) */
  exceptionalClosure: "",

  /** Rappel « consultations uniquement sur rendez-vous » */
  appointmentOnly: true,

  /** Bloc d'information sur les urgences (adaptable au pays du client) */
  emergency: {
    show: true,
    title: "En cas d'urgence",
    text: "Ce site et son formulaire de contact ne remplacent pas les services d'urgence. En cas d'urgence médicale, contactez immédiatement le 15 (SAMU) ou le 112.",
    note: "N'utilisez jamais ce formulaire pour une situation d'urgence et ne transmettez pas de détails médicaux sensibles.",
  },

  /** Informations pratiques affichées dans la section dédiée */
  access: {
    transport: "Métro A, arrêt Ampère Victor Hugo, à 3 minutes à pied.",
    parking: "Parking Bellecour à 5 minutes, stationnement en voirie à proximité.",
    accessibility:
      "Cabinet de plain-pied, accessible aux personnes à mobilité réduite.",
  },

  /** Points rassurants affichés dans le hero. */
  heroHighlights: [
    "Sur rendez-vous",
    "Nouveaux patients acceptés",
    "Accès facile",
    "Consultation personnalisée",
  ],

  /** Photographies du site (Unsplash ou Pexels, à remplacer par les vôtres). */
  images: {
    hero: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
    about:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80",
    cta: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80",
  },

  /** Section « À propos du cabinet » */
  about: {
    title: "Un cabinet pensé pour votre confort",
    paragraphs: [
      "Notre cabinet réunit plusieurs professionnels de santé autour d'une même exigence : vous accueillir dans un cadre calme et lumineux, et vous consacrer le temps nécessaire.",
      "Nous croyons à une prise en charge humaine, où l'écoute compte autant que le soin. Chaque accompagnement est construit avec vous, dans le respect de votre rythme et de vos besoins.",
    ],
    advantages: [
      "Accompagnement personnalisé",
      "Écoute attentive",
      "Équipements modernes",
      "Cadre confortable",
    ],
  },

  /**
   * Statistiques de la section « À propos ».
   * Exemples de démonstration : remplacez-les ou videz le tableau pour
   * masquer complètement la zone.
   */
  stats: [
    { value: "6", label: "spécialités proposées" },
    { value: "5", label: "praticiens" },
    { value: "5", label: "jours par semaine" },
  ],

  /** Réseaux sociaux (facultatif : supprimez les entrées non utilisées) */
  socials: {
    instagram: {
      label: "Instagram",
      href: "https://instagram.com/soinpro",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://linkedin.com/company/soinpro",
    },
  } satisfies Record<string, SocialLink>,

  /** Navigation principale (le Header et le Footer s'appuient dessus) */
  nav: [
    { label: "Accueil", href: "/" },
    { label: "Spécialités", href: "/#specialites" },
    { label: "Praticiens", href: "/#praticiens" },
    { label: "Le cabinet", href: "/#cabinet" },
    { label: "Horaires", href: "/#horaires" },
    { label: "Contact", href: "/#contact" },
  ] as NavItem[],
};

/** Lien WhatsApp avec message pré-rempli. */
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

/** Indique si une prise de rendez-vous en ligne est configurée. */
export function hasOnlineBooking(): boolean {
  return siteConfig.booking.online && siteConfig.booking.url.length > 0;
}

/**
 * Cible du bouton « Prendre rendez-vous » : la plateforme externe si elle est
 * configurée, sinon l'ancre de la section rendez-vous.
 */
export function bookingHref(): string {
  return hasOnlineBooking() ? siteConfig.booking.url : "#rendez-vous";
}

/** Lien Google Maps vers le cabinet (itinéraire). */
export function directionsLink(): string {
  const query = `${siteConfig.contact.address}, ${siteConfig.contact.postalCode} ${siteConfig.contact.city}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;
}

/** URL de la carte OpenStreetMap intégrée, centrée sur le cabinet. */
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
