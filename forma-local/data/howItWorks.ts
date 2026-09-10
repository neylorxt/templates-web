export type Step = {
  title: string;
  description: string;
};

/**
 * Étapes de la section « Comment ça se passe ».
 * Adaptez le parcours au fonctionnement réel de l'établissement.
 */
export const steps: Step[] = [
  {
    title: "Choisissez votre formation",
    description:
      "Sélectionnez le programme adapté à votre objectif, à votre niveau et à votre disponibilité.",
  },
  {
    title: "Contactez-nous",
    description:
      "Posez vos questions ou faites une demande d'inscription par téléphone, par mail ou en ligne.",
  },
  {
    title: "Commencez votre formation",
    description:
      "Suivez les cours selon le planning prévu, en petit groupe, avec des supports complets.",
  },
  {
    title: "Progressez",
    description:
      "Bénéficiez d'un suivi et d'évaluations régulières jusqu'à la validation finale.",
  },
];