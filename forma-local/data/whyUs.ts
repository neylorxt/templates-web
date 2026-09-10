export type Advantage = {
  /** Nom d'une icône Lucide, résolue dans `components/WhyUs.tsx`. */
  icon: string;
  title: string;
  description: string;
};

/**
 * Avantages de la section « Pourquoi nous choisir ».
 * Adaptez la liste à l'établissement : formateurs, pédagogie, suivi, flexibilité…
 */
export const advantages: Advantage[] = [
  {
    icon: "UserCheck",
    title: "Formateurs qualifiés",
    description:
      "Des formateurs expérimentés, pédagogues et régulièrement formés à l'enseignement aux adultes.",
  },
  {
    icon: "Target",
    title: "Programmes pratiques",
    description:
      "Des contenus concrets et directement applicables, construits autour de cas réels et de projets.",
  },
  {
    icon: "HeartHandshake",
    title: "Suivi personnalisé",
    description:
      "Un point de situation régulier et des évaluations pour mesurer votre progression tout au long de la formation.",
  },
  {
    icon: "CalendarClock",
    title: "Horaires flexibles",
    description:
      "Cours en journée, en soirée ou en ligne selon les formations, pour s'adapter à votre emploi du temps.",
  },
  {
    icon: "Users",
    title: "Groupes à taille humaine",
    description:
      "Des petits groupes pour garantir l'interactivité, les échanges et un accompagnement de chacun.",
  },
  {
    icon: "FileText",
    title: "Supports pédagogiques inclus",
    description:
      "Des supports complets et actualisés, inclus dans le tarif et accessibles pendant toute la formation.",
  },
];