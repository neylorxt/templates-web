export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "1",
    title: "Prise de contact",
    description: "Vous me racontez votre projet et vos envies, par téléphone ou via le formulaire.",
  },
  {
    step: "2",
    title: "Proposition",
    description: "Ensemble, nous choisissons la prestation ou le forfait adapté à votre besoin.",
  },
  {
    step: "3",
    title: "Réalisation",
    description: "La séance ou le reportage se déroule dans les meilleures conditions, en toute confiance.",
  },
  {
    step: "4",
    title: "Livraison & suivi",
    description: "Vous recevez vos images retouchées, accompagnées de conseils et d'un vrai suivi.",
  },
];