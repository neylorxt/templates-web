import {
  Award,
  PiggyBank,
  SlidersHorizontal,
  Smartphone,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";

const benefits = [
  {
    icon: Zap,
    title: "Plus rapide",
    description: "Le design et la structure sont déjà prêts.",
  },
  {
    icon: PiggyBank,
    title: "Plus économique",
    description:
      "Moins de temps de développement qu'un site entièrement créé de zéro.",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    description: "Tous les modèles sont optimisés pour smartphone.",
  },
  {
    icon: SlidersHorizontal,
    title: "Personnalisable",
    description: "Le design peut être adapté à chaque entreprise.",
  },
  {
    icon: Award,
    title: "Professionnel",
    description: "Les templates sont conçus pour donner une image sérieuse.",
  },
  {
    icon: TrendingUp,
    title: "Évolutif",
    description: "Le site peut être enrichi avec de nouvelles fonctionnalités.",
  },
];

export function Benefits() {
  return (
    <Section id="avantages">
      <SectionHeader
        eyebrow="Pourquoi TemplateHub"
        title="Pourquoi partir d'un template ?"
        description="Un site professionnel sans les délais et les coûts d'un développement sur mesure."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <benefit.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-zinc-950">
              {benefit.title}
            </h3>
            <p className="mt-2 leading-relaxed text-zinc-600">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}