export type Practitioner = {
  id: string;
  name: string;
  profession: string;
  specialties: string[];
  bio: string;
  image: string;
  languages?: string[];
  bookingUrl?: string;
};

/**
 * Praticiens du cabinet.
 *
 * Pour personnaliser : modifiez ce tableau. Un professionnel seul fonctionne
 * aussi : ne gardez qu'une entrée et étoffez sa présentation. Si `bookingUrl`
 * est absent, le bouton renvoie vers la plateforme de la configuration.
 */
export const practitioners: Practitioner[] = [
  {
    id: "camille-perrin",
    name: "Dr Camille Perrin",
    profession: "Chirurgienne-dentiste",
    specialties: ["Soins dentaires", "Esthétique dentaire"],
    bio: "Diplômée en chirurgie dentaire, le Dr Perrin privilégie une dentisterie douce et préventive. Elle prend le temps d'expliquer chaque étape et d'adapter les soins à votre rythme.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
    languages: ["Français", "Anglais"],
  },
  {
    id: "thomas-lefevre",
    name: "Thomas Lefèvre",
    profession: "Masseur-kinésithérapeute",
    specialties: ["Kinésithérapie", "Rééducation du sport"],
    bio: "Passionné de mouvement, Thomas accompagne la reprise d'activité après une blessure ou une opération. Son approche associe exercices progressifs, écoute et pédagogie.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    languages: ["Français", "Anglais"],
  },
  {
    id: "ines-benali",
    name: "Dr Inès Benali",
    profession: "Psychologue clinicienne",
    specialties: ["Psychologie", "Gestion du stress"],
    bio: "Le Dr Benali reçoit les adultes et les adolescents dans un cadre confidentiel et sans jugement. Elle accompagne les périodes de transition, l'anxiété et les difficultés émotionnelles.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    languages: ["Français", "Anglais", "Arabe"],
  },
  {
    id: "chloe-marchand",
    name: "Chloé Marchand",
    profession: "Diététicienne-nutritionniste",
    specialties: ["Nutrition", "Équilibre alimentaire"],
    bio: "Chloé propose un accompagnement alimentaire concret et bienveillant, éloigné des régimes restrictifs. Elle construit avec vous des habitudes durables, adaptées à votre quotidien.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    languages: ["Français", "Espagnol"],
  },
  {
    id: "julien-moreau",
    name: "Julien Moreau",
    profession: "Ostéopathe D.O.",
    specialties: ["Ostéopathie", "Douleurs du dos"],
    bio: "Julien aborde le corps dans sa globalité. Par des techniques manuelles douces, il cherche la cause des tensions pour soulager durablement et prévenir leur retour.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    languages: ["Français", "Anglais"],
  },
];
