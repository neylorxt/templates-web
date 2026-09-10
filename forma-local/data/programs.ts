import type { CourseModule } from "@/types/course";

export type Program = {
  /** Slug de la formation mise en avant, si elle figure aussi dans `data/courses.ts`. */
  courseSlug?: string;
  title: string;
  summary: string;
  intro: string;
  modules: CourseModule[];
};

/**
 * Programme détaillé présenté dans la section « Un programme structuré » de
 * la page d'accueil, sous forme d'accordéon.
 *
 * Cet exemple met en avant la formation « Anglais professionnel ». Remplacez
 * ce programme par celui d'une formation phare de l'établissement, ou
 * modifiez simplement les modules ci-dessous.
 */
export const featuredProgram: Program = {
  courseSlug: "anglais-professionnel",
  title: "Anglais professionnel",
  summary:
    "Un parcours en quatre modules pour utiliser l'anglais avec aisance au travail.",
  intro:
    "Chaque formation suit une pédagogie progressive : on pose les fondamentaux, on les met en pratique, puis on les approfondit jusqu'à la validation finale. Voici à titre d'exemple le déroulé de notre formation Anglais professionnel.",
  modules: [
    {
      title: "Module 1 — Les bases du professionnel",
      description:
        "Réactiver et consolider les fondamentaux de l'anglais professionnel.",
      topics: [
        "Se présenter : entreprise, poste, missions",
        "Le vocabulaire de la réunion",
        "Les formules de politesse",
        "Les temps utiles en milieu professionnel",
      ],
    },
    {
      title: "Module 2 — Communication écrite",
      description:
        "Maîtriser les codes de la communication écrite professionnelle.",
      topics: [
        "E-mails professionnels",
        "Comptes rendus de réunion",
        "Notes de synthèse",
        "Expression écrite claire et concise",
      ],
    },
    {
      title: "Module 3 — Communication orale",
      description:
        "Gagner en fluidité à l'oral dans les situations professionnelles.",
      topics: [
        "Appels téléphoniques et visioconférences",
        "Réunions et échanges d'équipe",
        "Négociation et arguments",
        "Présentation orale d'un projet",
      ],
    },
    {
      title: "Module 4 — Validation",
      description:
        "Mise en situation complète et évaluation des acquis.",
      topics: [
        "Projet final : présentation professionnelle",
        "Simulation de réunion",
        "Test de niveau écrit et oral",
        "Bilan individuel et conseils de progression",
      ],
    },
  ],
};