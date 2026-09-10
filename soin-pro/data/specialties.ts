export type Specialty = {
  id: string;
  title: string;
  description: string;
  icon: string;
  /** Points détaillés affichés derrière le bouton « En savoir plus ». */
  details: string[];
};

/**
 * Spécialités présentées sur la page d'accueil.
 *
 * Pour personnaliser : modifiez ce tableau. La clé `icon` correspond au nom
 * d'une icône Lucide (voir `components/Specialties.tsx`). Un cabinet
 * spécialisé peut ne conserver qu'une seule entrée.
 */
export const specialties: Specialty[] = [
  {
    id: "soins-dentaires",
    title: "Soins dentaires",
    description:
      "Consultations, détartrage, soins conservateurs et suivi de la santé bucco-dentaire.",
    icon: "Smile",
    details: [
      "Consultation et bilan bucco-dentaire",
      "Détartrage et prévention",
      "Soins conservateurs (caries, dévitalisation)",
      "Prothèses et esthétique dentaire",
    ],
  },
  {
    id: "kinesitherapie",
    title: "Kinésithérapie",
    description:
      "Rééducation, prise en charge de la douleur et accompagnement au retour au mouvement.",
    icon: "PersonStanding",
    details: [
      "Rééducation orthopédique et post-opératoire",
      "Kinésithérapie du sport",
      "Douleurs articulaires et du dos",
      "Prévention des blessures",
    ],
  },
  {
    id: "psychologie",
    title: "Psychologie",
    description:
      "Un espace d'écoute bienveillant pour traverser les périodes difficiles et mieux vivre ses émotions.",
    icon: "Brain",
    details: [
      "Consultation individuelle",
      "Gestion du stress et de l'anxiété",
      "Accompagnement émotionnel",
      "Consultation en ligne sur demande",
    ],
  },
  {
    id: "nutrition",
    title: "Nutrition",
    description:
      "Des conseils alimentaires personnalisés, sans régime strict ni culpabilité.",
    icon: "Salad",
    details: [
      "Bilan alimentaire personnalisé",
      "Accompagnement des troubles digestifs",
      "Équilibre alimentaire et énergie",
      "Suivi régulier et bienveillant",
    ],
  },
  {
    id: "osteopathie",
    title: "Ostéopathie",
    description:
      "Une approche manuelle globale pour soulager les tensions et retrouver le confort du corps.",
    icon: "Bone",
    details: [
      "Douleurs du dos et de la nuque",
      "Tensions articulaires et musculaires",
      "Accompagnement des femmes enceintes",
      "Nourrissons et enfants, sur indication",
    ],
  },
  {
    id: "prevention",
    title: "Prévention et bien-être",
    description:
      "Des rendez-vous de suivi pour préserver votre santé et adopter des habitudes durables.",
    icon: "ShieldCheck",
    details: [
      "Bilans de suivi",
      "Conseils d'hygiène de vie",
      "Dépistage et orientation",
      "Coordination avec votre médecin traitant",
    ],
  },
];
