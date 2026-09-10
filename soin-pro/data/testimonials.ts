export type Testimonial = {
  name: string;
  rating: number;
  text: string;
  /** Motif de la consultation, facultatif. */
  consultation?: string;
};

/**
 * Avis de démonstration.
 *
 * IMPORTANT : ces témoignages sont fictifs et servent uniquement à illustrer
 * le template. Avant toute mise en ligne, remplacez-les par de vrais avis
 * autorisés par les patients, ou désactivez la section avec
 * `showTestimonials = false`.
 */
export const showTestimonials = true;

export const testimonials: Testimonial[] = [
  {
    name: "Sophie L.",
    rating: 5,
    text: "Accueil très chaleureux et rendez-vous facile à obtenir. Le praticien a pris le temps de m'expliquer chaque étape, je suis repartie rassurée.",
    consultation: "Consultation dentaire",
  },
  {
    name: "Karim B.",
    rating: 5,
    text: "Une prise en charge claire et bienveillante pour mes douleurs de dos. Les exercices proposés m'ont vraiment aidé à reprendre le sport.",
    consultation: "Kinésithérapie",
  },
  {
    name: "Élodie M.",
    rating: 5,
    text: "Je me suis sentie écoutée sans être jugée. Le suivi m'a permis de mieux gérer mon stress au quotidien.",
    consultation: "Psychologie",
  },
  {
    name: "Nadia R.",
    rating: 4.5,
    text: "Des conseils alimentaires réalistes, adaptés à mon rythme de vie. Rien de culpabilisant, uniquement des habitudes que je peux tenir.",
    consultation: "Nutrition",
  },
];

export const averageRating = 4.9;

export const reviewCount = 48;
