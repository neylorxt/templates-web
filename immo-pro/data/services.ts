export type Service = {
  icon: string;
  title: string;
  description: string;
};

/**
 * Services présentés sur la page d'accueil.
 *
 * Pour personnaliser : modifiez ce tableau (titre et description). La clé
 * `icon` correspond au nom d'une icône Lucide (voir `components/Services.tsx`).
 */
export const services: Service[] = [
  {
    icon: "KeyRound",
    title: "Achat",
    description:
      "Sélection personnalisée, visites accompagnées et négociation : nous vous guidons jusqu'à la signature.",
  },
  {
    icon: "Handshake",
    title: "Vente",
    description:
      "Estimation précise, photos professionnelles et diffusion large pour vendre rapidement au meilleur prix.",
  },
  {
    icon: "FileText",
    title: "Location",
    description:
      "Recherche de locataires fiables, gestion des dossiers et mise en location dans les meilleures conditions.",
  },
  {
    icon: "Calculator",
    title: "Estimation",
    description:
      "Une estimation gratuite et sans engagement, fondée sur une connaissance fine du marché local.",
  },
  {
    icon: "Building2",
    title: "Gestion locative",
    description:
      "Loyers, charges, entretien et relations locataires : nous pilotons votre patrimoine au quotidien.",
  },
  {
    icon: "Compass",
    title: "Conseil immobilier",
    description:
      "Un accompagnement sur mesure pour vos projets : investissement, résidence principale, arbitrages.",
  },
];