import {
  BadgeCheck,
  ClipboardCheck,
  Globe,
  Hammer,
  HeartHandshake,
  LifeBuoy,
  MessageSquare,
  SearchCheck,
  Send,
  Truck,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  service: string;
  rating: number;
  text: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  category: string;
};

/**
 * Toute la configuration du site.
 * Modifiez ce fichier pour personnaliser le template pour un nouveau client :
 * nom, coordonnées, services, avis, images, couleurs (voir globals.css)...
 */
export const company = {
  name: "ProService",
  legalName: "ProService SARL",
  slogan: "Votre expert local de services professionnels",

  heroTitle: "Des services professionnels sur lesquels vous pouvez compter",
  heroSubtitle:
    "Intervention rapide, travail soigné et accompagnement personnalisé pour tous vos besoins.",

  aboutTitle: "Une équipe locale, engagée à vos côtés",
  aboutIntro:
    "Depuis plus de 10 ans, ProService accompagne les particuliers et les professionnels de la région avec un objectif simple : un travail bien fait, dans les délais, et un client toujours satisfait.",
  aboutPoints: [
    "Des techniciens qualifiés, formés et assurés",
    "Un devis gratuit, clair et sans engagement",
    "Des délais d'intervention rapides et respectés",
    "Un accompagnement personnalisé du début à la fin",
  ],

  ctaTitle: "Besoin d'un professionnel ?",
  ctaSubtitle:
    "Contactez-nous aujourd'hui et recevez votre devis gratuitement.",

  phone: "01 23 45 67 89",
  phoneHref: "tel:+33123456789",
  email: "contact@proservice.fr",
  address: "12 rue des Artisans",
  postalCode: "75011",
  city: "Paris",
  region: "Île-de-France",
  country: "FR",
  geo: { lat: 48.8616, lng: 2.3785 },

  whatsappNumber: "33612345678",
  whatsappMessage:
    "Bonjour, je souhaiterais obtenir plus d'informations sur vos services.",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(
      this.whatsappMessage,
    )}`;
  },

  hours: [
    { day: "Lundi – Vendredi", time: "8h00 – 18h00" },
    { day: "Samedi", time: "9h00 – 13h00" },
    { day: "Dimanche", time: "Fermé" },
  ],

  nav: [
    { label: "Accueil", href: "#accueil" },
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#apropos" },
    { label: "Avis", href: "#avis" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Contact", href: "#contact" },
  ],

  trustPoints: [
    {
      icon: Zap,
      title: "Intervention rapide",
      description: "Un technicien mobilisé rapidement, où que vous soyez.",
    },
    {
      icon: BadgeCheck,
      title: "Devis gratuit",
      description: "Un chiffrage clair, précis et sans engagement.",
    },
    {
      icon: HeartHandshake,
      title: "Satisfaction client",
      description: "Des garanties et un suivi après chaque intervention.",
    },
  ],

  stats: [
    { value: "10+", label: "années d'expérience" },
    { value: "500+", label: "clients satisfaits" },
    { value: "1000+", label: "interventions réalisées" },
  ],

  services: [
    {
      icon: Wrench,
      title: "Installation",
      description:
        "Installation complète et soignée de vos équipements, réalisée par des professionnels qualifiés dans le respect des normes en vigueur.",
    },
    {
      icon: Hammer,
      title: "Réparation",
      description:
        "Diagnostic précis et réparation durable de tout type de panne, avec des pièces de qualité et une garantie sur nos interventions.",
    },
    {
      icon: ClipboardCheck,
      title: "Entretien",
      description:
        "Des programmes d'entretien réguliers pour prolonger la durée de vie de vos installations et prévenir les pannes.",
    },
    {
      icon: LifeBuoy,
      title: "Dépannage",
      description:
        "Un technicien disponible rapidement pour résoudre vos problèmes urgents, avec un matériel adapté à chaque situation.",
    },
    {
      icon: SearchCheck,
      title: "Diagnostic",
      description:
        "Une analyse complète de votre installation pour identifier l'origine du problème et vous proposer la meilleure solution.",
    },
    {
      icon: Truck,
      title: "Intervention urgente",
      description:
        "Disponibles 7j/7 pour les situations d'urgence, avec une prise en charge prioritaire et des délais d'intervention réduits.",
    },
  ],

  testimonials: [
    {
      name: "Sophie Martin",
      service: "Dépannage",
      rating: 5,
      text: "Technicien arrivé en moins d'une heure, très professionnel et sympathique. Le problème a été réglé du premier coup. Je recommande vivement !",
    },
    {
      name: "Jean-Pierre Dubois",
      service: "Entretien annuel",
      rating: 5,
      text: "Une équipe ponctuelle et efficace. Le travail est soigné et les conseils sont clairs. On sent de vraies compétences et un vrai respect du client.",
    },
    {
      name: "Karim Benali",
      service: "Installation complète",
      rating: 5,
      text: "De la prise de contact à la fin du chantier, tout a été parfait. Devis gratuit, tarif respecté et résultat impeccable. Un service de grande qualité.",
    },
  ],
  ratingAverage: "4,9",
  ratingCount: "120",

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e",
      alt: "Technicien ProService sécurisant un tableau électrique",
      title: "Mise en sécurité d'un tableau électrique",
      category: "Électricité",
    },
    {
      src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc",
      alt: "Mécanicien ProService réalisant l'entretien d'un véhicule",
      title: "Entretien complet d'un véhicule",
      category: "Automobile",
    },
    {
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
      alt: "Intervention de nettoyage professionnel dans des bureaux",
      title: "Nettoyage professionnel de bureaux",
      category: "Nettoyage",
    },
    {
      src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f",
      alt: "Réparation automobile en cours dans notre atelier",
      title: "Réparation automobile en atelier",
      category: "Automobile",
    },
    {
      src: "https://images.unsplash.com/photo-1555421689-491a97ff2040",
      alt: "Outillage professionnel préparé pour une intervention",
      title: "Préparation d'une intervention",
      category: "Équipement",
    },
    {
      src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4",
      alt: "Intervention électrique réalisée sur site chez un client",
      title: "Intervention électrique sur site",
      category: "Électricité",
    },
  ],

  heroImage: {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    alt: "Technicien ProService au travail sur un chantier",
  },

  aboutImage: {
    src: "https://images.unsplash.com/photo-1504222490345-c075b6008014",
    alt: "L'équipe ProService réunie, souriante et professionnelle",
  },

  ctaImage: {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    alt: "Poignée de main entre un client et un technicien ProService",
  },

  socialLinks: [
    { label: "Facebook", href: "https://facebook.com", icon: Globe },
    { label: "Instagram", href: "https://instagram.com", icon: Send },
    { label: "LinkedIn", href: "https://linkedin.com", icon: MessageSquare },
  ] as { label: string; href: string; icon: LucideIcon }[],

  serviceAreas: ["Paris", "Banlieue parisienne", "Toute l'Île-de-France"],

  legal: {
    mentionsLegalesLabel: "Mentions légales",
    confidentialiteLabel: "Politique de confidentialité",
    siren: "123 456 789",
  },
};