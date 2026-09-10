export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

/**
 * Déroulement d'une consultation, présenté en quatre étapes.
 * Le texte reste volontairement générique pour convenir à tout le cabinet.
 */
export const consultationSteps: ProcessStep[] = [
  {
    step: "1",
    title: "Prenez rendez-vous",
    description:
      "Choisissez un créneau adapté, en ligne ou par téléphone. Le cabinet vous confirme votre rendez-vous.",
  },
  {
    step: "2",
    title: "Première consultation",
    description:
      "Le praticien échange avec vous afin de comprendre votre situation, vos attentes et vos antécédents utiles.",
  },
  {
    step: "3",
    title: "Accompagnement",
    description:
      "Une prise en charge adaptée à vos besoins vous est proposée, en toute transparence et à votre rythme.",
  },
  {
    step: "4",
    title: "Suivi",
    description:
      "Le suivi est ajusté selon l'évolution de votre situation, aussi longtemps que cela vous est utile.",
  },
];
