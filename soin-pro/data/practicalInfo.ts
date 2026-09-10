export type PracticalInfoItem = {
  icon: string;
  label: string;
  text: string;
};

/**
 * Informations pratiques du cabinet.
 *
 * Pour personnaliser : modifiez ou supprimez les entrées. La clé `icon`
 * correspond au nom d'une icône Lucide (voir `components/PracticalInfo.tsx`).
 * N'inventez pas d'informations administratives : ne renseignez que ce que
 * le professionnel vous confirme.
 */
export const practicalInfo: PracticalInfoItem[] = [
  {
    icon: "CreditCard",
    label: "Moyens de paiement",
    text: "Carte bancaire, espèces et chèque. La carte Vitale est acceptée au cabinet.",
  },
  {
    icon: "FileText",
    label: "Documents à apporter",
    text: "Votre carte Vitale, votre attestation de mutuelle et votre ordonnance si vous en avez une.",
  },
  {
    icon: "CalendarCheck",
    label: "Consultations sur rendez-vous",
    text: "Les consultations ont lieu uniquement sur rendez-vous afin de limiter le temps d'attente.",
  },
  {
    icon: "Video",
    label: "Téléconsultation",
    text: "Certaines consultations peuvent se tenir en visioconférence, sur demande auprès du secrétariat.",
  },
  {
    icon: "Languages",
    label: "Langues parlées",
    text: "Français, anglais, arabe et espagnol selon les praticiens du cabinet.",
  },
  {
    icon: "HandHeart",
    label: "Conventions et remboursements",
    text: "Les modalités de prise en charge dépendent de votre situation. Le cabinet vous renseigne sur simple demande.",
  },
];
