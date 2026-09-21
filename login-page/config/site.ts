/**
 * Configuration du template login-page.
 *
 * Toute l'identité du site se personnalise ici : nom, accroche, points forts
 * et liens légaux. Les valeurs fournies sont des exemples de démonstration,
 * à remplacer avant toute mise en ligne.
 */
export const siteConfig = {
  /** Nom de la marque, affiché dans l'en-tête et le panneau latéral. */
  name: "Your Login",
  /** Accroche courte affichée sur le panneau latéral. */
  tagline: "Votre espace, en toute simplicité.",
  /** Texte d'accompagnement du panneau latéral. */
  description:
    "Retrouvez vos projets, vos préférences et tout ce qui compte, réunis au même endroit.",
  /** Points forts listés sur le panneau latéral. */
  highlights: [
    "Connexion sécurisée et chiffrée",
    "Vos données restent confidentielles",
    "Une équipe disponible pour vous accompagner",
  ],
  /** Adresse de contact affichée en pied de page. */
  supportEmail: "support@yourlogin.example",
  /** Liens légaux, à remplacer par vos propres pages. */
  legal: {
    termsUrl: "#",
    privacyUrl: "#",
  },
} as const;
