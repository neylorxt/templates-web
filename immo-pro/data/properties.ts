export type TransactionType = "vente" | "location";

export type PropertyType =
  | "appartement"
  | "maison"
  | "villa"
  | "terrain"
  | "bureau"
  | "commerce";

export type Property = {
  id: string;
  slug: string;
  title: string;
  description: string;
  transactionType: TransactionType;
  propertyType: PropertyType;
  price: number;
  city: string;
  district?: string;
  surface: number;
  rooms: number;
  bedrooms: number;
  bathrooms?: number;
  images: string[];
  featured?: boolean;
  badges?: string[];
  amenities?: string[];
  /** Informations complémentaires affichées sur la page du bien */
  complementaryInfo?: { label: string; value: string }[];
};

/**
 * Catalogue des biens de démonstration.
 *
 * Pour personnaliser : modifiez ou remplacez les entrées de ce tableau.
 * Le site (accueil, page « Nos biens », filtres, pages de détail) se met à
 * jour automatiquement. Les images proviennent d'Unsplash ; remplacez les URL
 * par les photos du client.
 */
export const properties: Property[] = [
  {
    id: "1",
    slug: "appartement-terrasse-lyon-3e",
    title: "Appartement lumineux avec terrasse au cœur du 3e",
    description:
      "Au dernier étage d'un immeuble récent et sécurisé, cet appartement traversant de 118 m² bénéficie d'une terrasse plein sud de 25 m² sans vis-à-vis. Les volumes généreux, la cuisine ouverte équipée et les trois chambres en font un bien rare, idéal pour une famille. Le quartier Montchat offre commerces, écoles et espaces verts à quelques pas.",
    transactionType: "vente",
    propertyType: "appartement",
    price: 649000,
    city: "Lyon",
    district: "Montchat",
    surface: 118,
    rooms: 4,
    bedrooms: 3,
    bathrooms: 2,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: true,
    badges: ["Coup de cœur"],
    amenities: ["Terrasse", "Parking", "Cave", "Double vitrage", "Ascenseur"],
    complementaryInfo: [
      { label: "Étage", value: "4e étage sur 6" },
      { label: "Année de construction", value: "1975, rénové en 2020" },
      { label: "DPE", value: "D" },
      { label: "Charges de copropriété", value: "180 € par mois" },
      { label: "Honoraires", value: "À la charge du vendeur" },
    ],
  },
  {
    id: "2",
    slug: "villa-contemporaine-piscine-ecully",
    title: "Villa contemporaine avec piscine et vue dégagée",
    description:
      "Architecture d'exception pour cette villa contemporaine de 210 m² édifiée sur un terrain arboré de 800 m². Séjour cathédrale ouvrant sur la piscine, cuisine haut de gamme, quatre chambres dont une suite parentale avec dressing, bureaux et vaste terrasse plein sud. Domotique intégrée et prestations haut de gamme dans un secteur très prisé d'Écully.",
    transactionType: "vente",
    propertyType: "villa",
    price: 1250000,
    city: "Écully",
    district: "Centre-ville",
    surface: 210,
    rooms: 6,
    bedrooms: 4,
    bathrooms: 3,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80",
    ],
    featured: true,
    badges: ["Exclusivité", "Rare"],
    amenities: ["Piscine", "Jardin 800 m²", "Garage double", "Domotique", "Vue dégagée"],
    complementaryInfo: [
      { label: "Terrain", value: "800 m² arboré" },
      { label: "Année de construction", value: "2021" },
      { label: "DPE", value: "B" },
      { label: "Honoraires", value: "À la charge du vendeur" },
    ],
  },
  {
    id: "3",
    slug: "appartement-t3-brotteaux",
    title: "Appartement T3 haussmannien au quartier des Brotteaux",
    description:
      "Dans un immeuble haussmannien de caractère, charmant appartement de 68 m² avec moulures, parquet d'origine et cheminée en marbre. Deux chambres, séjour traversant et cuisine indépendante. Un bien plein de cachet, idéalement situé à deux pas du parc de la Tête d'Or, des commerces et des transports.",
    transactionType: "location",
    propertyType: "appartement",
    price: 1490,
    city: "Lyon",
    district: "Brotteaux",
    surface: 68,
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80",
    ],
    badges: ["Nouveau"],
    amenities: ["Haussmanien", "Moulures", "Cheminée", "Cave", "Parquet d'origine"],
    complementaryInfo: [
      { label: "Étage", value: "3e étage sur 5" },
      { label: "Année de construction", value: "1930" },
      { label: "DPE", value: "C" },
      { label: "Charges", value: "150 € par mois" },
      { label: "Meublé", value: "Non" },
    ],
  },
  {
    id: "4",
    slug: "maison-de-ville-gratte-ciel",
    title: "Maison de ville rénovée aux Gratte-Ciel",
    description:
      "Rénovée avec soin en 2023, cette maison de ville de 92 m² associe charme ancien et confort moderne. Séjour chaleureux, cuisine équipée, trois chambres et cour privative de 40 m². Quartier vivant des Gratte-Ciel, commerces et métro à proximité immédiate. Sans aucun travaux à prévoir.",
    transactionType: "vente",
    propertyType: "maison",
    price: 475000,
    city: "Villeurbanne",
    district: "Gratte-Ciel",
    surface: 92,
    rooms: 5,
    bedrooms: 3,
    bathrooms: 1,
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80",
    ],
    badges: ["Nouveau"],
    amenities: ["Cour privative", "Cave", "Double vitrage", "Sans travaux"],
    complementaryInfo: [
      { label: "Année de construction", value: "1948, rénovée en 2023" },
      { label: "DPE", value: "D" },
      { label: "Honoraires", value: "À la charge du vendeur" },
    ],
  },
  {
    id: "5",
    slug: "bureau-angle-gerland",
    title: "Bureau d'angle lumineux au cœur de Gerland",
    description:
      "Au sein d'un immeuble moderne, bel espace de bureaux de 80 m² en open space avec baies vitrées donnant sur un angle d'immeuble. Climatisation, double accès et parking visiteurs. Secteur Gerland en plein essor, desservi par le métro B, idéal pour une PME ou des professions libérales.",
    transactionType: "location",
    propertyType: "bureau",
    price: 2400,
    city: "Lyon",
    district: "Gerland",
    surface: 80,
    rooms: 1,
    bedrooms: 0,
    bathrooms: 1,
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    ],
    badges: ["Investissement"],
    amenities: ["Open space", "Climatisation", "Baies vitrées", "Accès PMR", "Parking visiteurs"],
    complementaryInfo: [
      { label: "Bail", value: "3-6-9" },
      { label: "Charges", value: "220 € par mois" },
      { label: "Disponibilité", value: "Immédiate" },
    ],
  },
  {
    id: "6",
    slug: "terrain-a-batir-ecully",
    title: "Terrain à bâtir de 612 m² dans un écrin de verdure",
    description:
      "Rare terrain constructible de 612 m², plat et bien exposé, dans un secteur calme et arboré d'Écully. Certificat d'urbanisme favorable pour un projet de maison d'environ 180 m². Proximité immédiate des écoles, commerces et axes rapides. Une opportunité pour les amoureux de projets.",
    transactionType: "vente",
    propertyType: "terrain",
    price: 385000,
    city: "Écully",
    district: "La Charbonnière",
    surface: 612,
    rooms: 0,
    bedrooms: 0,
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80",
    ],
    badges: ["Rare"],
    amenities: ["Constructible", "Certificat d'urbanisme favorable", "Zone calme", "Belle exposition"],
    complementaryInfo: [
      { label: "PLU", value: "Constructible" },
      { label: "Surface constructible", value: "Environ 180 m²" },
    ],
  },
  {
    id: "7",
    slug: "local-commercial-presquile",
    title: "Local commercial en plein cœur de la Presqu'île",
    description:
      "Emplacement exceptionnel pour ce local commercial de 55 m² situé dans une rue très passante de la Presqu'île lyonnaise. Vitrine de 6 mètres, réserves et arrière-boutique. Bail commercial en place avec un rendement locatif attractif. Parfait pour une enseigne, un commerce de proximité ou un cabinet.",
    transactionType: "vente",
    propertyType: "commerce",
    price: 420000,
    city: "Lyon",
    district: "Presqu'île",
    surface: 55,
    rooms: 1,
    bedrooms: 0,
    bathrooms: 1,
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1600&q=80",
    ],
    badges: ["Investissement"],
    amenities: ["Vitrine 6 m", "Rue très passante", "Arrière-boutique", "Réserves", "Climatisation"],
    complementaryInfo: [
      { label: "Bail commercial", value: "En place" },
      { label: "Rendement locatif", value: "5,8 %" },
      { label: "Charges", value: "90 € par mois" },
    ],
  },
  {
    id: "8",
    slug: "duplex-t5-jardin-cuire",
    title: "Duplex T5 avec jardin clos à Cuire",
    description:
      "Superbe duplex de 145 m² sur les hauteurs de Cuire, avec jardin clos de 60 m² et terrasse exposée plein sud. Cinq pièces dont quatre chambres, deux salles d'eau et un garage en sous-sol. Proche des écoles et des transports, dans un quartier résidentiel recherché et paisible.",
    transactionType: "vente",
    propertyType: "appartement",
    price: 720000,
    city: "Caluire-et-Cuire",
    district: "Cuire",
    surface: 145,
    rooms: 5,
    bedrooms: 4,
    bathrooms: 2,
    images: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80",
    ],
    badges: ["Exclusivité"],
    amenities: ["Jardin clos", "Terrasse", "Cave", "Garage", "Proche écoles"],
    complementaryInfo: [
      { label: "Étage", value: "R+2 avec accès au jardin" },
      { label: "Année de construction", value: "2015" },
      { label: "DPE", value: "C" },
      { label: "Honoraires", value: "À la charge du vendeur" },
    ],
  },
  {
    id: "9",
    slug: "t2-croix-rousse",
    title: "Appartement T2 refait à neuf sur les pentes de la Croix-Rousse",
    description:
      "Dans une maison de quartier pleine de charme, charmant T2 de 41 m² entièrement rénové en 2025. Séjour lumineux, cuisine équipée neuve, chambre calme et balcon filant avec vue sur les toits. Meublé et disponible immédiatement, à deux pas des traboules et de l'effervescence de la Croix-Rousse.",
    transactionType: "location",
    propertyType: "appartement",
    price: 890,
    city: "Lyon",
    district: "Pentes de la Croix-Rousse",
    surface: 41,
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=1600&q=80",
    ],
    badges: ["Nouveau", "Coup de cœur"],
    amenities: ["Refait à neuf", "Meublé", "Balcon", "Chauffage individuel"],
    complementaryInfo: [
      { label: "Étage", value: "2e étage" },
      { label: "Année de construction", value: "1960, rénové en 2025" },
      { label: "DPE", value: "B" },
      { label: "Charges", value: "80 € par mois" },
      { label: "Meublé", value: "Oui" },
    ],
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((property) => property.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((property) => property.featured);
}

/** Villes présentes dans le catalogue, triées par ordre alphabétique. */
export function getPropertyCities(): string[] {
  return Array.from(new Set(properties.map((property) => property.city))).sort(
    (a, b) => a.localeCompare(b, "fr")
  );
}