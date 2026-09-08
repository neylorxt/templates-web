export type Project = {
  title: string;
  category: "Mariage" | "Portrait" | "Événement" | "Mode";
  description: string;
  date: string;
  image: string;
  alt: string;
};

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const projects: Project[] = [
  {
    title: "Mariage de Camille & Antoine",
    category: "Mariage",
    description:
      "Reportage complet d'une journée de mariage au domaine de la Vallée, entre émotions et lumière du soir.",
    date: "Juin 2026",
    image: img("photo-1511285560929-80b456fea0bc"),
    alt: "Mariés se regardant tendrement pendant la séance de mariage",
  },
  {
    title: "Portrait corporate",
    category: "Portrait",
    description:
      "Série de portraits professionnels pour le lancement d'une agence de communication lyonnaise.",
    date: "Mai 2026",
    image: img("photo-1544005313-94ddf0286df2"),
    alt: "Portrait en studio d'une femme au regard assuré",
  },
  {
    title: "Soirée d'entreprise Tech&Co",
    category: "Événement",
    description:
      "Couverture d'une soirée de lancement produit : moments clés, ambiance et portraits spontanés.",
    date: "Avril 2026",
    image: img("photo-1492684223066-81342ee5ff30"),
    alt: "Invités fêtant un lancement lors d'une soirée d'entreprise",
  },
  {
    title: "Éditorial mode automne",
    category: "Mode",
    description:
      "Série éditoriale pour une marque de prêt-à-porter, en extérieur, entre quai de Saône et architecture brute.",
    date: "Mars 2026",
    image: img("photo-1469334031218-e382a71b716b"),
    alt: "Mannequin en tenue d'automne lors d'un shooting éditorial",
  },
  {
    title: "Mariage d'Élise & Mathieu",
    category: "Mariage",
    description:
      "Une célébration intimiste à la campagne, captée dans une lumière dorée et naturelle.",
    date: "Février 2026",
    image: img("photo-1583939003579-730e3918a45a"),
    alt: "Couple de mariés s'embrassant dans un champ à la lumière du soir",
  },
  {
    title: "Portrait de création",
    category: "Portrait",
    description:
      "Direction artistique et retouche complète pour le portfolio d'une comédienne.",
    date: "Janvier 2026",
    image: img("photo-1507003211169-0a1dd7228f2d"),
    alt: "Portrait masculin en noir et blanc au caractère affirmé",
  },
  {
    title: "Concert & culture",
    category: "Événement",
    description:
      "Reportage scène et public lors d'un concert au Transbordeur, en conditions de basse lumière.",
    date: "Décembre 2025",
    image: img("photo-1505373877841-8d25f7d46678"),
    alt: "Artiste sur scène sous les projecteurs devant un public",
  },
  {
    title: "Lookbook capsule hiver",
    category: "Mode",
    description:
      "Shooting lookbook pour une jeune marque lyonnaise : cohérence visuelle et direction artistique assumée.",
    date: "Novembre 2025",
    image: img("photo-1509631179647-0177331693ae"),
    alt: "Mannequin photographié dans un style mode minimaliste",
  },
];

export const categories = ["Tout", "Mariage", "Portrait", "Événement", "Mode"] as const;