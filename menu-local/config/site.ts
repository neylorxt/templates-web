import { CalendarDays, ChefHat, CreditCard, Leaf, Salad, Sun } from "lucide-react";

export const whatsappNumber = "33612345678";
const defaultWhatsappMessage =
  "Bonjour, je souhaiterais passer une commande ou obtenir plus d'informations.";

export function whatsappLink(message: string = defaultWhatsappMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const siteConfig = {
  name: "Le Comptoir de Léa",
  slogan: "Des saveurs qui donnent envie de revenir",
  description:
    "Bistrot chaleureux au cœur de la Presqu'île de Lyon. Produits frais et de saison, plats mijotés maison, à découvrir sur place ou à commander directement.",
  type: "Restaurant",
  phone: "+33472123456",
  phoneDisplay: "04 72 12 34 56",
  whatsapp: whatsappNumber,
  email: "bonjour@lecomptoirdelea.fr",
  address: "18 rue des Marronniers",
  city: "69002 Lyon",
  district: "Presqu'île",
  gps: { lat: 45.7642, lng: 4.8346 },
  mapsEmbedUrl:
    "https://www.google.com/maps?q=18+Rue+des+Marronniers,+69002+Lyon&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=18+Rue+des+Marronniers,+69002+Lyon",
  access:
    "Métro A ou D, arrêt Bellecour à 5 minutes à pied. Parking Saint-Antoine à 3 minutes.",
  instagram: "https://www.instagram.com/lecomptoirdelea",
  facebook: "https://www.facebook.com/lecomptoirdelea",
  url: "https://lecomptoirdelea.fr",
  footerDescription:
    "Bistrot de quartier au cœur de la Presqu'île, nous cuisinons chaque jour des produits frais et de saison avec le sourire.",
  rating: { average: 4.8, count: 214 },
};

export const nav = [
  { label: "Accueil", href: "#accueil" },
  { label: "Menu", href: "#menu" },
  { label: "Galerie", href: "#galerie" },
  { label: "Avis", href: "#avis" },
  { label: "Horaires", href: "#horaires" },
  { label: "Localisation", href: "#localisation" },
  { label: "Contact", href: "#contact" },
];

export const trustBadges = [
  { icon: Salad, label: "Produits frais" },
  { icon: ChefHat, label: "Préparation maison" },
  { icon: CreditCard, label: "Paiement sur place" },
  { icon: Leaf, label: "Produits de saison" },
  { icon: CalendarDays, label: "Ouvert 6 jours sur 7" },
  { icon: Sun, label: "Terrasse ensoleillée" },
];

export const hero = {
  title: "Des saveurs qui donnent envie de revenir",
  subtitle:
    "Des produits préparés avec soin, à découvrir sur place ou à commander directement.",
  image:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80",
  imageAlt: "La salle chaleureuse du Comptoir de Léa, lumière tamisée",
};

export const featured = {
  eyebrow: "Notre spécialité",
  name: "Le bœuf bourguignon mijoté 12 h",
  description:
    "Paleron de bœuf français mariné dans un vin rouge de Bourgogne, mijoté douze heures avec carottes, oignons et lardons fumés. Servi avec une purée de pommes de terre au beurre demi-sel.",
  price: 18.5,
  badge: "La maison",
  note: "Disponible midi et soir, dans la limite des stocks",
  image:
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Pièce de bœuf rôtie servie sur une planche de bois",
};

export const categories = [
  { id: "entrees", label: "Entrées" },
  { id: "plats", label: "Plats" },
  { id: "desserts", label: "Desserts" },
  { id: "boissons", label: "Boissons" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export const menu = [
  {
    name: "Soupe à l'oignon gratinée",
    description: "Oignons confits, croûtons dorés et comté gratiné.",
    price: 9.5,
    category: "entrees",
    badge: "Maison",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Soupe à l'oignon gratinée au fromage",
  },
  {
    name: "Burrata crémeuse et tomates anciennes",
    description: "Burrata onctueuse, tomates anciennes, pesto de basilic.",
    price: 12,
    category: "entrees",
    badge: "Végétarien",
    image:
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Burrata fraîche servie avec des tomates",
  },
  {
    name: "Salade de chèvre chaud",
    description: "Crottin de chèvre rôti au miel, noix et jeunes pousses.",
    price: 11.5,
    category: "entrees",
    badge: "Végétarien",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Salade fraîche avec légumes croquants",
  },
  {
    name: "Terrine de campagne",
    description: "Terrine maison, cornichons, oignons confits et toasts.",
    price: 9,
    category: "entrees",
    badge: "Maison",
    image:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Assiette de terrine de campagne accompagnée",
  },
  {
    name: "Gambas rôties, beurre d'agrumes",
    description: "Gambas sautées, beurre monté à l'orange et citron vert.",
    price: 15,
    category: "entrees",
    badge: "Nouveau",
    image:
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Gambas rôties sur une assiette",
  },
  {
    name: "Bœuf bourguignon mijoté 12 h",
    description: "Mijoté au vin de Bourgogne, carottes, oignons et lardons.",
    price: 18.5,
    category: "plats",
    badge: "Populaire",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Bœuf bourguignon mijoté servi avec sa garniture",
  },
  {
    name: "Saumon rôti, beurre blanc",
    description: "Filet de saumon, beurre blanc citronné, légumes de saison.",
    price: 21.5,
    category: "plats",
    badge: "Nouveau",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Filet de saumon rôti accompagné de légumes",
  },
  {
    name: "Risotto aux champignons des bois",
    description: "Riz carnaroli crémeux, cèpes et girolles, parmesan 24 mois.",
    price: 17,
    category: "plats",
    badge: "Végétarien",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Risotto crémeux aux champignons",
  },
  {
    name: "Burger du comptoir",
    description: "Bœuf fermier, cheddar affiné, oignons confits, frites maison.",
    price: 16.5,
    category: "plats",
    badge: "Populaire",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Burger garni avec frites maison",
  },
  {
    name: "Côte de bœuf maturée 28 jours",
    description: "Côte de bœuf française maturée, sauce au poivre, frites maison.",
    price: 27,
    category: "plats",
    badge: "Épicé",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Côte de bœuf grillée coupée en tranches",
  },
  {
    name: "Pâtes fraîches à la truffe noire",
    description: "Tagliatelles fraîches, crème de truffe, copeaux de parmesan.",
    price: 19,
    category: "plats",
    badge: "Maison",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Tagliatelles fraîches avec sauce crémeuse",
  },
  {
    name: "Fondant au chocolat",
    description: "Fondant au chocolat noir, glace vanille de Madagascar.",
    price: 9,
    category: "desserts",
    badge: "Populaire",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Dessert au chocolat fondant",
  },
  {
    name: "Tarte Tatin de saison",
    description: "Pommes caramélisées, crème fraîche d'Isigny.",
    price: 8.5,
    category: "desserts",
    badge: "Maison",
    image:
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Tarte aux fruits caramélisés",
  },
  {
    name: "Mousse au chocolat grand cru",
    description: "Chocolat grand cru 70 %, chantilly légère, éclats de cacao.",
    price: 7.5,
    category: "desserts",
    badge: "Végétarien",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Mousse au chocolat dans un verre",
  },
  {
    name: "Panna cotta à la vanille",
    description: "Vanille de Madagascar, coulis de fruits rouges.",
    price: 8,
    category: "desserts",
    badge: "Nouveau",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Dessert crémeux avec coulis de fruits",
  },
  {
    name: "Café gourmand",
    description: "Espresso accompagné de trois mignardises du chef.",
    price: 7,
    category: "desserts",
    badge: "Maison",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Café gourmand avec ses mignardises",
  },
  {
    name: "Café espresso",
    description: "Assemblage de grains arabica torréfiés à Lyon.",
    price: 2.5,
    category: "boissons",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Tasse de café espresso",
  },
  {
    name: "Verre de vin rouge",
    description: "Suggestion du moment, sélectionnée par notre sommelier.",
    price: 5.5,
    category: "boissons",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Verre de vin rouge sur une table",
  },
  {
    name: "Limonade artisanale",
    description: "Citrons pressés, sirop de sucre de canne, menthe fraîche.",
    price: 4,
    category: "boissons",
    badge: "Maison",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Verre de limonade artisanale glacée",
  },
  {
    name: "Thé glacé à la pêche",
    description: "Infusion de thé vert, pêche de saison, glaçons.",
    price: 4.5,
    category: "boissons",
    badge: "Nouveau",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Thé glacé servi dans une théière",
  },
];

export const openingHours = [
  { day: "Lundi", open: null, close: null },
  { day: "Mardi", open: "11:30", close: "22:00" },
  { day: "Mercredi", open: "11:30", close: "22:00" },
  { day: "Jeudi", open: "11:30", close: "22:00" },
  { day: "Vendredi", open: "11:30", close: "23:00" },
  { day: "Samedi", open: "11:30", close: "23:00" },
  { day: "Dimanche", open: "12:00", close: "21:00" },
];

export const testimonials = [
  {
    name: "Camille R.",
    rating: 5,
    comment:
      "Une adresse qui ne ressemble à aucune autre. Le bœuf bourguignon est fondant à souhait et l'équipe est adorable. On y retourne très vite.",
    mention: "Avis Google · il y a 2 semaines",
  },
  {
    name: "Thomas M.",
    rating: 5,
    comment:
      "Rapport qualité prix imbattable pour le quartier. Les frites maison et le burger sont excellents, service rapide même le samedi soir.",
    mention: "Avis Google · il y a 1 mois",
  },
  {
    name: "Nadia B.",
    rating: 4,
    comment:
      "Très belle découverte. Le risotto aux champignons était délicieux, seule la salle est un peu bruyante en soirée. Je recommande la terrasse.",
    mention: "Avis Google · il y a 1 mois",
  },
  {
    name: "Julien P.",
    rating: 5,
    comment:
      "Le meilleur fondant au chocolat de Lyon, sans hésiter. Le personnel a été aux petits soins pour notre anniversaire.",
    mention: "Avis Google · il y a 2 mois",
  },
  {
    name: "Sophie L.",
    rating: 5,
    comment:
      "On vient en famille tous les mois. Les enfants adorent et les plats sont toujours de saison. Mention spéciale pour le café gourmand.",
    mention: "Avis Google · il y a 3 mois",
  },
  {
    name: "Marc D.",
    rating: 4,
    comment:
      "Cadre chaleureux et produits frais. Une réservation est conseillée le week-end, la salle est vite pleine. On reviendra.",
    mention: "Avis Google · il y a 3 mois",
  },
];

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    alt: "La salle du restaurant dressée pour le service",
    caption: "La salle",
  },
  {
    src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
    alt: "Un chef dresse une assiette en cuisine",
    caption: "En cuisine",
  },
  {
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    alt: "Le burger du comptoir servi avec ses frites maison",
    caption: "Le burger du comptoir",
  },
  {
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
    alt: "Un gâteau au chocolat décadent",
    caption: "Le fondant au chocolat",
  },
  {
    src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
    alt: "Un filet de saumon rôti accompagné de légumes",
    caption: "Le saumon rôti",
  },
  {
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    alt: "Un verre de vin rouge posé sur une table",
    caption: "La carte des vins",
  },
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    alt: "Des baguettes de pain frais sorties du four",
    caption: "Le pain maison",
  },
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80",
    alt: "Un croissant doré sur une assiette",
    caption: "Viennoiseries du brunch",
  },
  {
    src: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&q=80",
    alt: "Une assiette de pâtisseries fines",
    caption: "Pâtisseries du jour",
  },
];

export const cta = {
  title: "Une envie ? Commandez simplement",
  subtitle:
    "Écrivez-nous sur WhatsApp et nous vous répondrons rapidement. Retrait sur place, paiement à l'arrivée.",
};

export const legal = {
  siret: "832 451 789 00017",
  owner: "Léa Morel",
  registeredAt: "RCS de Lyon",
};