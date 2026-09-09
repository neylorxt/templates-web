export type Testimonial = {
  name: string;
  rating: number;
  text: string;
  service: "Achat" | "Vente" | "Location";
};

/**
 * Avis clients de démonstration.
 *
 * Pour personnaliser : remplacez les avis par ceux de l'agence. La note
 * globale (4,9/5) est affichée dans la section « Avis clients ».
 */
export const testimonials: Testimonial[] = [
  {
    name: "Marion et Julien Roux",
    rating: 5,
    text: "Accompagnés de la première visite jusqu'à la signature, nous avons été rassurés à chaque étape. L'équipe a trouvé notre maison idéale en moins de trois semaines, dans notre budget et notre quartier préféré. Un grand merci pour votre disponibilité et vos conseils avisés.",
    service: "Achat",
  },
  {
    name: "Sophie Marchand",
    rating: 5,
    text: "Vendre mon appartement était un choix difficile, mais tout s'est passé très vite : estimation réaliste, photos magnifiques et visiteurs qualifiés. Le bien est parti en deux semaines au prix espéré. Je recommande les yeux fermés.",
    service: "Vente",
  },
  {
    name: "Karim Benali",
    rating: 4.5,
    text: "En tant qu'expatrié, je cherchais un locataire sérieux pour mon appartement à Lyon. ImmoPro a géré la mise en location de A à Z, avec un dossier solide et une communication claire. Un vrai confort d'esprit.",
    service: "Location",
  },
  {
    name: "Isabelle et Paul Garnier",
    rating: 5,
    text: "Nous cherchions un bien rare : une maison avec jardin proche des écoles. L'agence a su nous écouter et dénicher la perle, sans jamais nous pousser. Un professionnalisme rare dans la métropole.",
    service: "Achat",
  },
];

export const averageRating = 4.9;

export const reviewCount = 100;