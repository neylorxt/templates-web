export type Testimonial = {
  name: string;
  /** Formation suivie par la personne. */
  course: string;
  /** Note sur 5 (une décimale autorisée). */
  rating: number;
  text: string;
};

/**
 * Témoignages de démonstration.
 *
 * IMPORTANT : ces témoignages sont fictifs et servent uniquement à illustrer
 * le template. Avant toute mise en ligne, remplacez-les par de vrais avis
 * autorisés par les apprenants, ou désactivez la section avec
 * `showTestimonials = false`.
 */
export const showTestimonials = true;

export const testimonials: Testimonial[] = [
  {
    name: "Sophie L.",
    course: "Anglais professionnel",
    rating: 5,
    text: "Grâce à cette formation, j'anime désormais mes réunions en anglais sans stress. Les mises en situation sont très proches du réel et le formateur a su adapter les contenus à mon métier.",
  },
  {
    name: "Karim B.",
    course: "Initiation au développement web",
    rating: 5,
    text: "Parti de zéro, j'ai réussi à créer et mettre en ligne mon premier site en deux mois. Les projets guidés rendent l'apprentissage concret et motivant.",
  },
  {
    name: "Élodie M.",
    course: "Préparation TOEIC",
    rating: 5,
    text: "Objectif atteint : 810 points au TOEIC, au-dessus de ce que j'espérais. Le suivi individualisé et les tests blancs m'ont permis de gagner en confiance.",
  },
  {
    name: "Nadia R.",
    course: "Excel et bureautique",
    rating: 4.5,
    text: "Une formation très pratique, avec des cas concrets directement réutilisables. J'ai automatisé en quelques semaines des tâches qui me prenaient des heures.",
  },
  {
    name: "Thomas G.",
    course: "Management d'équipe",
    rating: 5,
    text: "J'ai pris une équipe en cours d'année et cette formation m'a donné les outils pour structurer mes entretiens et déléguer avec plus de sérénité.",
  },
];

export const averageRating = 4.9;

export const reviewCount = 128;