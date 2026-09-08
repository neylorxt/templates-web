import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { templates } from "@/data/templates";
import { Section, SectionHeader } from "@/components/Section";

const customizationItems = [
  "Couleurs",
  "Logo",
  "Typographies",
  "Images",
  "Services",
  "Tarifs",
  "Produits",
  "Coordonnées",
  "Réseaux sociaux",
  "WhatsApp",
  "Domaine personnalisé",
];

export function Customization() {
  const template = templates[0];

  return (
    <Section id="personnalisation" className="bg-zinc-50">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Personnalisation"
            title="Chaque template devient votre site"
            description="Les templates sont une base solide, pas un résultat figé. Ils se personnalisent entièrement pour refléter votre activité."
          />

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {customizationItems.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700"
              >
                <Check className="h-4 w-4 text-brand-600" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-xl">
            <div className="relative overflow-hidden rounded-xl">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={template.image}
                  alt={`Modèle de base ${template.name} avant personnalisation`}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover object-top grayscale"
                />
                <span className="absolute left-3 top-3 rounded-full bg-zinc-900/80 px-3 py-1 text-xs font-medium text-white">
                  Modèle de base
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 -top-3 flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 text-white shadow-lg">
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-3 shadow-xl">
            <div className="relative overflow-hidden rounded-xl">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={template.image}
                  alt={`Site personnalisé à partir du template ${template.name}`}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-700/50 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-brand-600 px-3 py-1 text-xs font-medium text-white">
                  Personnalisé pour votre activité
                </span>
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-zinc-900 shadow">
                    Votre logo
                  </span>
                  <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-zinc-900 shadow">
                    Vos couleurs
                  </span>
                  <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-zinc-900 shadow">
                    WhatsApp
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}