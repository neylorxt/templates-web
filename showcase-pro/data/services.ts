import {
  Camera,
  Heart,
  CalendarDays,
  Award,
  Wand2,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  name: string;
  description: string;
  benefits: string[];
  cta?: { label: string; href: string };
};

export const services: Service[] = [
  {
    icon: Camera,
    name: "Séance portrait",
    description:
      "Une séance individuelle, en extérieur ou en studio, pour révéler votre personnalité avec naturel.",
    benefits: ["Séance d'une heure", "10 photos retouchées", "Direction de pose"],
    cta: { label: "Réserver une séance", href: "#tarifs" },
  },
  {
    icon: Heart,
    name: "Reportage mariage",
    description:
      "Une couverture complète de votre journée, de la préparation à la soirée, sans jamais vous voler la vedette.",
    benefits: ["Couverture 8 h minimum", "2 photographes disponibles", "Galerie en ligne"],
    cta: { label: "Demander un devis", href: "#contact" },
  },
  {
    icon: CalendarDays,
    name: "Événement & entreprise",
    description:
      "Soirées, séminaires, lancements : des images qui valorisent votre marque et vos équipes.",
    benefits: ["Livraison express sous 72 h", "Photos utilisables en communication", "Forfaits demi-journée ou journée"],
  },
  {
    icon: Award,
    name: "Pack premium",
    description:
      "La formule complète : séance, retouche soignée et tirages fine art pour des souvenirs durables.",
    benefits: ["Impression fine art offerte", "Album photo sur mesure", "Priorité de planning"],
    cta: { label: "Découvrir le pack", href: "#tarifs" },
  },
  {
    icon: Wand2,
    name: "Retouche & direction artistique",
    description:
      "Un travail de post-production haut de gamme : couleur, netteté et cohérence visuelle.",
    benefits: ["Retouche beauté naturelle", "Correction colorimétrique", "Format web & print"],
  },
];