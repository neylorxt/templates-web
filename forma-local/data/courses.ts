import type { Course } from "@/types/course";

/**
 * Catalogue des formations.
 *
 * Chaque formation alimente les cartes de la section « Nos formations », la
 * page /formations et sa page détaillée /formations/[slug].
 *
 * Exemples de démonstration : adaptez le catalogue à l'offre réelle de
 * l'établissement (langues, bureautique, digital, management, conduite,
 * soutien scolaire…).
 */
export const courses: Course[] = [
  {
    id: "anglais-debutant",
    slug: "anglais-debutant",
    title: "Anglais débutant",
    shortDescription:
      "Acquérez les bases de l'anglais pour communiquer avec aisance dans la vie courante.",
    description:
      "Cette formation s'adresse aux personnes qui souhaitent repartir des fondamentaux de l'anglais : prononciation, vocabulaire essentiel et structures grammaticales de base. Elle privilégie la pratique orale et la mise en situation du quotidien pour lever rapidement le frein de la prise de parole.\n\nEn petit groupe, vous progressez à votre rythme avec des formateurs pédagogues et des supports adaptés à votre niveau. Des exercices ciblés et des mises en situation régulières vous permettent de mesurer vos progrès tout au long de la formation.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    category: "Langues",
    level: "Débutant",
    duration: "24 heures",
    format: "présentiel",
    price: 299,
    startDate: "début de chaque mois",
    availablePlaces: 12,
    prerequisites: ["Aucun prérequis, même avec des bases très fragiles."],
    objectives: [
      "Comprendre et se faire comprendre dans des situations simples du quotidien",
      "Maîtriser le vocabulaire essentiel de la vie courante",
      "Construire des phrases correctes à l'oral comme à l'écrit",
      "Gagner en confiance à l'oral dans les échanges simples",
    ],
    audience:
      "Débutants complets ou personnes ayant des bases fragiles, adultes en reconversion ou en mobilité professionnelle.",
    modules: [
      {
        title: "Module 1 — Découverte et prononciation",
        description:
          "Les fondamentaux de l'anglais : prononciation, alphabet, salutations et premières bases.",
        topics: [
          "Alphabet et prononciation",
          "Salutations et présentations",
          "Nombres, dates et heure",
          "Le verbe to be et les présentatifs",
        ],
      },
      {
        title: "Module 2 — Vie quotidienne",
        description:
          "Le vocabulaire et les expressions utiles pour se débrouiller au quotidien.",
        topics: [
          "Se présenter et parler de soi",
          "Commerces et restaurants",
          "Directions et transports",
          "Le présent simple",
        ],
      },
      {
        title: "Module 3 — Mise en pratique",
        description:
          "Des mises en situation concrètes pour parler anglais en conditions réelles.",
        topics: [
          "Jeux de rôle en situation",
          "Écoute de documents audio",
          "Production de courts dialogues",
          "Le prétérit et le futur proche",
        ],
      },
      {
        title: "Module 4 — Validation",
        description:
          "Bilan des acquis et évaluation finale pour valider votre progression.",
        topics: [
          "Projet final : scène de vie quotidienne",
          "Test de niveau écrit et oral",
          "Bilan personnalisé",
          "Remise d'une attestation de fin de formation",
        ],
      },
    ],
  },
  {
    id: "anglais-professionnel",
    slug: "anglais-professionnel",
    title: "Anglais professionnel",
    shortDescription:
      "Communiquez en anglais avec aisance dans votre environnement professionnel.",
    description:
      "Cette formation prépare les professionnels à utiliser l'anglais dans un contexte de travail : réunions, e-mails, téléphone, négociations et présentations. Elle combine cours en présentiel et séances à distance pour s'adapter à votre emploi du temps.\n\nLes contenus s'appuient sur des situations réelles de votre secteur d'activité. Des mises en situation régulières et un suivi personnalisé garantissent une progression mesurable, quel que soit votre niveau de départ.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    category: "Langues",
    level: "Intermédiaire",
    duration: "30 heures",
    format: "hybride",
    price: 449,
    startDate: "sessions toutes les 2 semaines",
    availablePlaces: 8,
    prerequisites: [
      "Niveau A2 minimum (utilisateur élémentaire)",
      "Un entretien de positionnement est proposé avant l'inscription",
    ],
    objectives: [
      "Mener une réunion ou une visioconférence en anglais",
      "Rédiger des e-mails et comptes rendus professionnels",
      "Conduire un appel téléphonique ou une négociation",
      "Présenter son entreprise et ses projets avec aisance",
      "Développer le vocabulaire de son secteur d'activité",
    ],
    audience:
      "Salariés, managers, indépendants et porteurs de projet devant utiliser l'anglais dans leur travail.",
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
  },
  {
    id: "francais-langue-etrangere",
    slug: "francais-langue-etrangere",
    title: "Français langue étrangère (FLE)",
    shortDescription:
      "Apprenez le français et intégrez-vous durablement : du niveau A1 au niveau B2.",
    description:
      "La formation Français langue étrangère accompagne les personnes non francophones dans l'apprentissage du français, de la découverte de la langue jusqu'à l'autonomie. Elle combine cours collectifs et ateliers de pratique orale pour progresser sur les quatre compétences : compréhension, expression, lecture et écriture.\n\nEn plus de la langue, cette formation vous prépare aux démarches du quotidien et au monde professionnel en France : logement, travail, santé, administration. Un positionnement initial permet de constituer des groupes de niveau homogènes.",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
    category: "Langues",
    level: "Tous niveaux",
    duration: "60 heures",
    format: "présentiel",
    price: 349,
    startDate: "rentrées chaque mois",
    availablePlaces: 15,
    prerequisites: [
      "Aucun prérequis : positionnement initial offert",
      "Présentation d'un justificatif d'identité lors de l'inscription",
    ],
    objectives: [
      "Comprendre et se faire comprendre dans les situations du quotidien",
      "Lire et rédiger des documents simples en français",
      "Préparer les démarches administratives en France",
      "Progresser vers le niveau B1 ou B2 selon votre objectif",
      "Gagner en autonomie à l'oral comme à l'écrit",
    ],
    audience:
      "Adultes non francophones, primo-arrivants ou personnes en mobilité, souhaitant apprendre le français pour vivre, étudier ou travailler en France.",
    modules: [
      {
        title: "Module 1 — Découverte de la langue",
        description:
          "Les bases du français pour communiquer dès les premières séances.",
        topics: [
          "Alphabet, sonorités et prononciation",
          "Se présenter et parler de soi",
          "Le présent de l'indicatif",
          "Le vocabulaire du quotidien",
        ],
      },
      {
        title: "Module 2 — La vie en France",
        description:
          "Le français appliqué aux situations de la vie courante et administrative.",
        topics: [
          "Logement et démarches administratives",
          "Santé et rendez-vous",
          "Commerces, banque et administrations",
          "Les temps du passé",
        ],
      },
      {
        title: "Module 3 — Le monde professionnel",
        description:
          "Préparer l'insertion professionnelle en français.",
        topics: [
          "Rédiger un CV et une lettre de motivation",
          "Préparer un entretien d'embauche",
          "Le français au travail",
          "Communication orale en situation",
        ],
      },
      {
        title: "Module 4 — Validation",
        description:
          "Évaluation des acquis et préparation aux certifications.",
        topics: [
          "Projet final : parcours d'intégration",
          "Présentation orale",
          "Test de niveau",
          "Préparation au DELF si souhaité",
        ],
      },
    ],
  },
  {
    id: "preparation-toeic",
    slug: "preparation-toeic",
    title: "Préparation TOEIC",
    shortDescription:
      "Atteignez le score visé et valorisez votre niveau d'anglais sur le marché de l'emploi.",
    description:
      "Cette formation intensive prépare au test TOEIC Listening and Reading, référence des employeurs et des écoles. Elle repose sur des exercices types, des tests blancs chronométrés et un suivi individualisé pour atteindre l'objectif de score annoncé.\n\nEntièrement en ligne, elle s'adapte à votre rythme : vous étudiez où vous voulez, quand vous voulez, avec des sessions de coaching à distance et un accès aux ressources pendant toute la durée de la formation.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    category: "Langues",
    level: "Intermédiaire",
    duration: "20 heures",
    format: "en ligne",
    price: 259,
    startDate: "inscription en continu",
    availablePlaces: 25,
    prerequisites: [
      "Niveau A2/B1 en anglais recommandé",
      "Test de positionnement en ligne avant l'inscription",
    ],
    objectives: [
      "Comprendre la structure et le déroulement du test TOEIC",
      "Gagner en vitesse de lecture et de compréhension",
      "Maîtriser le vocabulaire et les expressions du test",
      "Atteindre un score de 750 points et plus selon votre objectif",
    ],
    audience:
      "Étudiants, demandeurs d'emploi et salariés souhaitant certifier leur niveau d'anglais pour leurs études ou leur carrière.",
    modules: [
      {
        title: "Module 1 — Découverte du test",
        description:
          "Comprendre l'épreuve et son déroulement pour aborder le test sereinement.",
        topics: [
          "Présentation du TOEIC",
          "Grammaire et vocabulaire clés",
          "Stratégies de lecture",
          "Test blanc de positionnement",
        ],
      },
      {
        title: "Module 2 — Listening",
        description:
          "Travailler la compréhension orale, souvent la partie la plus décisive.",
        topics: [
          "Photos et questions courtes",
          "Conversations professionnelles",
          "Annonces et messages",
          "Stratégies pour gagner des points",
        ],
      },
      {
        title: "Module 3 — Reading",
        description:
          "Renforcer la compréhension écrite et la rapidité d'exécution.",
        topics: [
          "Phrases à compléter",
          "Textes à compléter",
          "Compréhension de documents",
          "Gestion du temps",
        ],
      },
      {
        title: "Module 4 — Tests blancs",
        description:
          "S'entraîner en conditions réelles avant le jour J.",
        topics: [
          "Tests blancs chronométrés",
          "Corrections détaillées",
          "Plan d'action personnalisé",
          "Conseils pour le jour de l'examen",
        ],
      },
    ],
  },
  {
    id: "excel-bureautique",
    slug: "excel-bureautique",
    title: "Excel et bureautique",
    shortDescription:
      "Maîtrisez Excel et les outils bureautiques pour gagner en efficacité au travail.",
    description:
      "Cette formation vous apprend à exploiter tout le potentiel d'Excel : tableaux de bord, formules avancées, graphiques et automatisation des tâches répétitives. Elle intègre également les bons réflexes Word et PowerPoint pour produire des documents professionnels soignés.\n\nChaque notion est immédiatement mise en pratique sur des cas concrets issus du monde professionnel. Vous repartez avec des fichiers modèles et des méthodes directement réutilisables dans votre poste.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    category: "Bureautique",
    level: "Intermédiaire",
    duration: "18 heures",
    format: "présentiel",
    price: 249,
    startDate: "sessions mensuelles",
    availablePlaces: 10,
    prerequisites: [
      "Bases de l'informatique et de l'utilisation d'Excel",
      "Un test de positionnement est proposé avant l'inscription",
    ],
    objectives: [
      "Construire des tableaux structurés et des formules fiables",
      "Créer des tableaux croisés dynamiques et des graphiques",
      "Automatiser les tâches répétitives avec les fonctions avancées",
      "Produire des documents Word et présentations PowerPoint professionnels",
    ],
    audience:
      "Assistantes et assistants, gestionnaires, comptables et tout professionnel utilisant régulièrement les outils bureautiques.",
    modules: [
      {
        title: "Module 1 — Excel : les fondamentaux",
        description:
          "Structurer ses données et fiabiliser ses formules.",
        topics: [
          "Bonnes pratiques de saisie",
          "Formules et fonctions essentielles",
          "Mise en forme conditionnelle",
          "Tri et filtres",
        ],
      },
      {
        title: "Module 2 — Excel : l'analyse",
        description:
          "Analyser ses données et les présenter de façon claire.",
        topics: [
          "Tableaux croisés dynamiques",
          "Graphiques professionnels",
          "Fonctions de recherche",
          "Gestion des erreurs",
        ],
      },
      {
        title: "Module 3 — Word et PowerPoint",
        description:
          "Produire des documents et des présentations à la hauteur de votre travail.",
        topics: [
          "Mise en page et styles",
          "Sommaires et en-têtes",
          "Présentations structurées",
          "Modèles réutilisables",
        ],
      },
      {
        title: "Module 4 — Projet et validation",
        description:
          "Un projet fil rouge pour mettre en pratique l'ensemble des acquis.",
        topics: [
          "Projet : tableau de bord complet",
          "Cas pratique transversal",
          "Évaluation finale",
          "Bilan individuel",
        ],
      },
    ],
  },
  {
    id: "initiation-developpement-web",
    slug: "initiation-developpement-web",
    title: "Initiation au développement web",
    shortDescription:
      "Créez vos premières pages web et découvrez les métiers du numérique.",
    description:
      "Cette formation d'initiation vous fait découvrir les fondamentaux du développement web : HTML, CSS et JavaScript. À travers des projets guidés, vous apprenez à construire des pages modernes et responsives, tout en comprenant le fonctionnement d'un site internet.\n\nElle est également l'occasion de découvrir les métiers du numérique (développeur, intégrateur, chef de projet) pour vous aider à choisir votre voie. Les séances mêlent cours en présentiel et exercices à distance.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    category: "Digital",
    level: "Débutant",
    duration: "60 heures",
    format: "hybride",
    price: 599,
    startDate: "prochaine session le 12 janvier",
    availablePlaces: 12,
    prerequisites: [
      "Aucun prérequis technique",
      "Une bonne aisance avec l'ordinateur et Internet",
    ],
    objectives: [
      "Construire une page web structurée en HTML",
      "Mettre en forme et animer avec CSS",
      "Ajouter de l'interactivité avec JavaScript",
      "Comprendre le fonctionnement du web et des hébergements",
      "Créer un site personnel de présentation en projet final",
    ],
    audience:
      "Débutants curieux du numérique, personnes en reconversion souhaitant découvrir le métier de développeur avant de s'y engager.",
    modules: [
      {
        title: "Module 1 — Les fondations du web",
        description:
          "Comprendre comment fonctionne un site web et prendre en main les outils.",
        topics: [
          "Comment fonctionne le web",
          "HTML : structure et sémantique",
          "CSS : couleurs, polices et mise en page",
          "Les outils du développeur",
        ],
      },
      {
        title: "Module 2 — Interfaces modernes",
        description:
          "Créer des interfaces responsives et attractives.",
        topics: [
          "Flexbox et grilles CSS",
          "Design responsive",
          "Animations et transitions",
          "Intégration d'images et de médias",
        ],
      },
      {
        title: "Module 3 — JavaScript",
        description:
          "Donner vie à vos pages avec JavaScript.",
        topics: [
          "Syntaxe et variables",
          "Manipulation du DOM",
          "Événements et formulaires",
          "Petits projets interactifs",
        ],
      },
      {
        title: "Module 4 — Projet final",
        description:
          "Concevoir et mettre en ligne votre premier site web.",
        topics: [
          "Projet : site de présentation personnel",
          "Déploiement en ligne",
          "Présentation du projet",
          "Bilan et pistes de poursuite",
        ],
      },
    ],
  },
  {
    id: "marketing-digital",
    slug: "marketing-digital",
    title: "Marketing digital",
    shortDescription:
      "Développez votre activité grâce au web : réseaux sociaux, référencement et contenus.",
    description:
      "Cette formation vous donne les clés pour construire une stratégie marketing digitale efficace : définition d'une cible, création de contenus, gestion des réseaux sociaux et référencement naturel. Elle mêle apports théoriques et mise en pratique sur des cas concrets d'entreprise.\n\nÀ l'issue de la formation, vous êtes capable de bâtir un plan d'action digital cohérent pour votre activité ou celle de votre employeur, et de mesurer ses résultats grâce aux outils d'analyse.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    category: "Digital",
    level: "Débutant",
    duration: "35 heures",
    format: "hybride",
    price: 449,
    startDate: "sessions trimestrielles",
    availablePlaces: 14,
    prerequisites: [
      "Aucun prérequis spécifique",
      "Une pratique régulière des réseaux sociaux recommandée",
    ],
    objectives: [
      "Construire une stratégie marketing digitale",
      "Créer des contenus adaptés à chaque réseau social",
      "Comprendre et améliorer le référencement naturel",
      "Mesurer ses actions avec les outils d'analyse",
    ],
    audience:
      "Indépendants, commerçants, salariés de PME et porteurs de projet souhaitant développer une activité en ligne.",
    modules: [
      {
        title: "Module 1 — Stratégie digitale",
        description:
          "Poser les bases d'une stratégie alignée avec vos objectifs.",
        topics: [
          "Définir sa cible et son offre",
          "Choisir ses canaux",
          "Construire un plan d'action",
          "Budgéter ses actions",
        ],
      },
      {
        title: "Module 2 — Réseaux sociaux",
        description:
          "Publier des contenus efficaces sur les bons réseaux.",
        topics: [
          "Présentation des réseaux principaux",
          "Création de contenus",
          "Calendrier éditorial",
          "Publicité sur les réseaux sociaux",
        ],
      },
      {
        title: "Module 3 — Référencement naturel",
        description:
          "Être visible sur Google grâce au SEO.",
        topics: [
          "Fonctionnement de Google",
          "Mots clés et contenu",
          "Technique et balises",
          "Google Search Console",
        ],
      },
      {
        title: "Module 4 — Projet et mesure",
        description:
          "Mettre en place et mesurer votre stratégie.",
        topics: [
          "Projet : plan d'action digital",
          "Outils de mesure",
          "Reporting et ajustements",
          "Présentation des projets",
        ],
      },
    ],
  },
  {
    id: "management-equipe",
    slug: "management-equipe",
    title: "Management d'équipe",
    shortDescription:
      "Développez vos compétences de manager : posture, communication et leadership.",
    description:
      "Cette formation s'adresse aux managers débutants ou confirmés qui souhaitent renforcer leur posture de leader. Elle aborde les fondamentaux du management : communication, motivation, délégation, gestion des situations difficiles et conduite du changement.\n\nAlternant apports théoriques, mises en situation et ateliers de groupe, elle privilégie la pratique et le partage d'expérience entre participants pour ancrer durablement les bons réflexes de manager.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    category: "Management",
    level: "Intermédiaire",
    duration: "28 heures",
    format: "présentiel",
    price: 549,
    startDate: "prochaine session le 3 février",
    availablePlaces: 10,
    prerequisites: [
      "Occuper ou s'apprêter à occuper un poste d'encadrement",
      "Un entretien préalable est proposé avant l'inscription",
    ],
    objectives: [
      "Définir sa posture de manager et gagner en légitimité",
      "Communiquer et faire adhérer son équipe",
      "Déléguer efficacement et développer l'autonomie",
      "Gérer les situations sensibles et les conflits",
    ],
    audience:
      "Managers de proximité, responsables d'équipe, chefs de service et futurs managers.",
    modules: [
      {
        title: "Module 1 — La posture du manager",
        description:
          "Construire sa légitimité et clarifier son rôle.",
        topics: [
          "Les rôles du manager",
          "Leadership et styles de management",
          "Écoute et feedback",
          "Gérer la distance hiérarchique",
        ],
      },
      {
        title: "Module 2 — Faire grandir son équipe",
        description:
          "Motiver, développer et faire monter en compétence.",
        topics: [
          "Fixer des objectifs clairs",
          "Déléguer et responsabiliser",
          "Entretiens et évaluations",
          "Favoriser l'autonomie",
        ],
      },
      {
        title: "Module 3 — Situations sensibles",
        description:
          "Réagir avec justesse dans les situations difficiles.",
        topics: [
          "Gérer les conflits",
          "Annoncer une mauvaise nouvelle",
          "Manager une équipe en difficulté",
          "Conduire le changement",
        ],
      },
      {
        title: "Module 4 — Mise en pratique",
        description:
          "Ancrer les acquis par la pratique et le partage d'expérience.",
        topics: [
          "Mises en situation filmées",
          "Étude de cas réels",
          "Plan d'action individuel",
          "Bilan de la formation",
        ],
      },
    ],
  },
];

/** Catégories disponibles, utilisées par les filtres. */
export const courseCategories = [
  "Langues",
  "Bureautique",
  "Digital",
  "Management",
];

/** Niveaux disponibles, utilisés par les filtres. */
export const courseLevels = [
  "Débutant",
  "Intermédiaire",
  "Avancé",
  "Tous niveaux",
];

/** Recherche une formation par son slug. */
export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}