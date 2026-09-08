import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site TemplateHub.",
  alternates: {
    canonical: "/mentions-legales",
  },
};

const paragraphs = [
  {
    title: "Éditeur du site",
    content: [
      `Le site ${siteConfig.name} est édité par TemplateHub, une structure spécialisée dans la création de sites internet professionnels pour les petites entreprises, commerces et prestataires de services.`,
      `Contact : ${siteConfig.contact.email} ou ${siteConfig.contact.phoneDisplay}.`,
    ],
  },
  {
    title: "Hébergement",
    content: [
      "Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.",
    ],
  },
  {
    title: "Propriété intellectuelle",
    content: [
      "L'ensemble des contenus présents sur ce site (textes, images, visuels, logos, noms des templates) est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable est interdite.",
    ],
  },
  {
    title: "Données personnelles",
    content: [
      "Les informations transmises via le formulaire de contact sont utilisées uniquement pour traiter votre demande. Elles ne sont ni revendues ni transmises à des tiers. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données en nous contactant à l'adresse indiquée ci-dessus.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "Ce site n'utilise pas de cookies publicitaires ou de suivi. Seuls des cookies techniques nécessaires au bon fonctionnement du site peuvent être déposés.",
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <Section className="py-20 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        Informations légales
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
        Mentions légales
      </h1>

      <div className="mt-12 max-w-3xl space-y-10">
        {paragraphs.map((paragraph) => (
          <div key={paragraph.title}>
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
              {paragraph.title}
            </h2>
            {paragraph.content.map((text) => (
              <p key={text} className="mt-3 leading-relaxed text-zinc-600">
                {text}
              </p>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}