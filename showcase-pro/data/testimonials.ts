export type Testimonial = {
  name: string;
  avatar: string;
  rating: number;
  service: string;
  text: string;
};

const avatar = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=200&h=200&q=80&crop=faces`;

export const testimonials: Testimonial[] = [
  {
    name: "Camille R.",
    avatar: avatar("photo-1494790108377-be9c29b29330"),
    rating: 5,
    service: "Mariage",
    text: "Julien a su capturer chaque émotion de notre journée sans jamais se rendre envahissant. Les photos sont magnifiques, naturelles, et nos familles les adorent.",
  },
  {
    name: "Antoine L.",
    avatar: avatar("photo-1507003211169-0a1dd7228f2d"),
    rating: 5,
    service: "Portrait corporate",
    text: "Un vrai professionnel : à l'écoute, précis, et très rassurant. Les portraits qu'il a réalisés pour mon entreprise sont utilisés partout, sur le site comme en communication.",
  },
  {
    name: "Sophie M.",
    avatar: avatar("photo-1438761681033-6461ffad8d80"),
    rating: 5,
    service: "Événement d'entreprise",
    text: "Rigueur et créativité. Les photos de notre soirée de lancement sont élégantes et traduisent exactement l'image que nous voulions donner.",
  },
  {
    name: "Nicolas D.",
    avatar: avatar("photo-1472099645785-5658abf4ff4e"),
    rating: 4,
    service: "Shooting mode",
    text: "Direction artistique soignée, retouches au cordeau et un rendu final très premium. Je recommande sans hésiter.",
  },
];